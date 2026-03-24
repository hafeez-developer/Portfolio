import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, staggerContainer } from "../motion/variants";

const initialForm = { name: "", email: "", subject: "", message: "" };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const reduceMotion = useReducedMotion();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const validate = () => {
    const nextErrors = {};

    if (!form.name.trim()) nextErrors.name = "Name is required.";
    if (!form.email.trim()) nextErrors.email = "Email is required.";
    if (form.email.trim() && !emailPattern.test(form.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!form.subject.trim()) nextErrors.subject = "Subject is required.";
    if (!form.message.trim()) nextErrors.message = "Message is required.";

    return nextErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);
    setStatus({ type: "", message: "" });

    if (Object.keys(validationErrors).length > 0) return;

    setIsSending(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          subject: form.subject.trim(),
          message: form.message.trim(),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.error || "Failed to send message.");
      }

      setForm(initialForm);
      setStatus({ type: "success", message: "Thanks! Your message has been sent successfully." });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Unable to send message right now. Please try again later.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="section-shell border-t border-neutral-200/70 dark:border-neutral-800/70">
      <div className="content-wrap">
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? {} : "visible"}
          viewport={{ once: true, amount: 0.25 }}
          variants={reduceMotion ? {} : staggerContainer}
          className="grid gap-10 md:grid-cols-[1fr_1.1fr]"
        >
          <motion.div variants={reduceMotion ? {} : fadeUp}>
            <p className="section-kicker">Contact</p>
            <h2 className="section-title">Let&apos;s build something simple and meaningful.</h2>
            <p className="mt-5 max-w-md text-neutral-600 dark:text-neutral-300">
              For collaborations, product work, or freelance opportunities, email me directly and I&apos;ll respond soon.
            </p>
            <a
              href="mailto:mhafeez.ullah@outlook.com"
              className="mt-7 inline-flex items-center text-base font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-neutral-900 dark:text-white dark:decoration-neutral-600 dark:hover:decoration-white"
            >
              mhafeez.ullah@outlook.com
            </a>
          </motion.div>

          <motion.form
            variants={reduceMotion ? {} : fadeUp}
            onSubmit={handleSubmit}
            className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900"
          >
            <div className="space-y-4">
              <label className="block text-sm" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                value={form.name}
                onChange={(event) => {
                  setForm((prev) => ({ ...prev, name: event.target.value }));
                  setErrors((prev) => ({ ...prev, name: "" }));
                }}
                className="input-field"
              />
              {errors.name && <p className="text-sm text-red-600 dark:text-red-400">{errors.name}</p>}

              <label className="block text-sm" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={(event) => {
                  setForm((prev) => ({ ...prev, email: event.target.value }));
                  setErrors((prev) => ({ ...prev, email: "" }));
                }}
                className="input-field"
              />
              {errors.email && <p className="text-sm text-red-600 dark:text-red-400">{errors.email}</p>}

              <label className="block text-sm" htmlFor="subject">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                required
                value={form.subject}
                onChange={(event) => {
                  setForm((prev) => ({ ...prev, subject: event.target.value }));
                  setErrors((prev) => ({ ...prev, subject: "" }));
                }}
                className="input-field"
              />
              {errors.subject && <p className="text-sm text-red-600 dark:text-red-400">{errors.subject}</p>}

              <label className="block text-sm" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={form.message}
                onChange={(event) => {
                  setForm((prev) => ({ ...prev, message: event.target.value }));
                  setErrors((prev) => ({ ...prev, message: "" }));
                }}
                className="input-field resize-none"
              />
              {errors.message && <p className="text-sm text-red-600 dark:text-red-400">{errors.message}</p>}
            </div>

            <button type="submit" className="btn-primary mt-6" disabled={isSending}>
              {isSending ? "Sending..." : "Send Message"}
            </button>

            {status.message && (
              <p
                className={`mt-4 text-sm ${
                  status.type === "error"
                    ? "text-red-600 dark:text-red-400"
                    : "text-green-600 dark:text-green-400"
                }`}
                role="status"
              >
                {status.message}
              </p>
            )}
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
