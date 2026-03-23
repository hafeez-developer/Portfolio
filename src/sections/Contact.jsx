import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, staggerContainer } from "../motion/variants";

export default function Contact() {
  const reduceMotion = useReducedMotion();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    window.setTimeout(() => setSubmitted(false), 3200);
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
                onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                className="input-field"
              />

              <label className="block text-sm" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                className="input-field"
              />

              <label className="block text-sm" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={form.message}
                onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
                className="input-field resize-none"
              />
            </div>

            <button type="submit" className="btn-primary mt-6">
              Send Message
            </button>

            {submitted && (
              <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400" role="status">
                Thanks. Your message has been recorded locally for now.
              </p>
            )}
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
