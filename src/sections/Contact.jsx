import { useState } from "react";
import { HiMail, HiLocationMarker, HiPhone } from "react-icons/hi";

const contactInfo = [
  {
    icon: <HiMail className="w-5 h-5 text-indigo-500" />,
    label: "Email",
    value: "hello@hafeez.dev",
    href: "mailto:hello@hafeez.dev",
  },
  {
    icon: <HiLocationMarker className="w-5 h-5 text-purple-500" />,
    label: "Location",
    value: "Your City, Country",
    href: null,
  },
  {
    icon: <HiPhone className="w-5 h-5 text-pink-500" />,
    label: "Phone",
    value: "+1 (234) 567-890",
    href: "tel:+1234567890",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: integrate with EmailJS or a backend
    console.log("Form submitted:", form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 bg-gray-50/50 dark:bg-gray-900/30">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-heading">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="section-subheading">
          Have a project in mind or just want to say hello? I&apos;d love to hear
          from you.
        </p>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-xl font-bold mb-4">Let&apos;s talk</h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            <div className="space-y-4">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-sm font-medium hover:text-indigo-500 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="md:col-span-3 glass-card p-8 space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 focus:border-indigo-500 dark:focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 focus:border-indigo-500 dark:focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 focus:border-indigo-500 dark:focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all text-sm resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-medium transition-all hover:shadow-lg hover:shadow-indigo-500/25"
            >
              Send Message
            </button>

            {submitted && (
              <p className="text-green-500 text-sm font-medium animate-pulse">
                ✓ Message sent successfully! I&apos;ll get back to you soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

