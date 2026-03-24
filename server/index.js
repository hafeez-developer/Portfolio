import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import nodemailer from "nodemailer";
import rateLimit from "express-rate-limit";
import validator from "validator";

dotenv.config({ quiet: true });

const app = express();
const PORT = Number(process.env.PORT || 3001);
const isProduction = process.env.NODE_ENV === "production";
const enableAutoReply = String(process.env.ENABLE_AUTO_REPLY ?? "true").toLowerCase() !== "false";

const requiredEnv = [
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASS",
  "CONTACT_RECEIVER_EMAIL",
  "SMTP_FROM_EMAIL",
];

const ensureEnv = () => {
  const missing = requiredEnv.filter((key) => !process.env[key]);
  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(", ")}`);
  }
};

const cleanText = (value) => validator.escape(validator.trim(String(value ?? "")));
const cleanMessage = (value) =>
  validator
    .escape(validator.trim(String(value ?? "")))
    .replace(/\r\n/g, "\n")
    .replace(/\n/g, "<br>");

const contactRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    ok: false,
    error: "Too many requests. Please try again in a few minutes.",
  },
});

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        upgradeInsecureRequests: null,
      },
    },
  }),
);
app.use(express.json({ limit: "20kb" }));

if (!isProduction) {
  app.use(
    cors({
      origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
    }),
  );
}

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.post("/api/contact", contactRateLimiter, async (req, res) => {
  try {
    ensureEnv();

    const rawName = String(req.body?.name ?? "");
    const rawEmail = String(req.body?.email ?? "");
    const rawSubject = String(req.body?.subject ?? "");
    const rawMessage = String(req.body?.message ?? "");

    const name = validator.trim(rawName);
    const email = validator.trim(rawEmail).toLowerCase();
    const subject = validator.trim(rawSubject);
    const message = validator.trim(rawMessage);

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ ok: false, error: "All fields are required." });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ ok: false, error: "Please provide a valid email address." });
    }
    if (!validator.isEmail(process.env.CONTACT_RECEIVER_EMAIL || "")) {
      return res
        .status(500)
        .json({ ok: false, error: "Server configuration error: invalid CONTACT_RECEIVER_EMAIL." });
    }
    if (!validator.isEmail(process.env.SMTP_FROM_EMAIL || "")) {
      return res
        .status(500)
        .json({ ok: false, error: "Server configuration error: invalid SMTP_FROM_EMAIL." });
    }

    if (name.length > 100 || subject.length > 150 || message.length > 5000) {
      return res.status(400).json({ ok: false, error: "Input exceeds allowed length." });
    }

    const safeName = cleanText(name);
    const safeEmail = cleanText(email);
    const safeSubject = cleanText(subject);
    const safeMessageHtml = cleanMessage(message);
    const safeMessageText = validator.escape(message);

    const smtpPort = Number(process.env.SMTP_PORT);
    const senderEmail = String(process.env.SMTP_FROM_EMAIL);
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${senderEmail}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL,
      replyTo: `"${safeName}" <${safeEmail}>`,
      subject: `New Contact Form Message: ${safeSubject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Subject:</strong> ${safeSubject}</p>
        <p><strong>Message:</strong><br>${safeMessageHtml}</p>
      `,
      text: `New Contact Form Submission\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${safeMessageText}`,
    });

    if (enableAutoReply) {
      try {
        await transporter.sendMail({
          from: `"Muhammad Hafeez" <${senderEmail}>`,
          to: email,
          subject: "Thanks for reaching out",
          html: `
            <p>Hi ${safeName},</p>
            <p>Thanks for your message. I received your inquiry and will get back to you soon.</p>
            <p><strong>Your subject:</strong> ${safeSubject}</p>
            <p>Best regards,<br>Muhammad Hafeez</p>
          `,
          text: `Hi ${name},\n\nThanks for your message. I received your inquiry and will get back to you soon.\n\nYour subject: ${subject}\n\nBest regards,\nMuhammad Hafeez`,
        });
      } catch (autoReplyError) {
        console.warn("Auto-reply failed:", autoReplyError?.message || autoReplyError);
      }
    }

    return res.status(200).json({ ok: true, message: "Message sent successfully." });
  } catch (error) {
    console.error("Contact form error:", error);
    return res.status(500).json({
      ok: false,
      error: "Unable to send message right now. Please try again later.",
    });
  }
});

if (isProduction) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const distPath = path.resolve(__dirname, "../dist");

  app.use(express.static(distPath));
  app.get(/^(?!\/api).*/, (_req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  });
}

app.listen(PORT, '0.0.0.0', () => {
  console.log("Server running on port 3001");
});
