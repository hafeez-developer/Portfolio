import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, staggerContainer } from "../motion/variants";

const timeline = [
  {
    title: "Backend Developer",
    org: "Freelance",
    date: "2024 - Present",
    summary:
      "Designing APIs and backend systems with a focus on reliability, scalability, and clean architecture.",
  },
  {
    title: "BS Computer Science",
    org: "Minhaj University Lahore",
    date: "2024 - Present",
    summary:
      "Building strong foundations in software engineering, algorithms, and database systems.",
  },
];

export default function Experience() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="experience" className="section-shell border-t border-neutral-200/70 dark:border-neutral-800/70">
      <div className="content-wrap">
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? {} : "visible"}
          viewport={{ once: true, amount: 0.25 }}
          variants={reduceMotion ? {} : staggerContainer}
          className="space-y-12"
        >
          <motion.div variants={reduceMotion ? {} : fadeUp}>
            <p className="section-kicker">Experience & Education</p>
            <h2 className="section-title">A concise timeline of my work and learning.</h2>
          </motion.div>

          <ol className="space-y-8">
            {timeline.map((item) => (
              <motion.li
                key={`${item.title}-${item.date}`}
                variants={reduceMotion ? {} : fadeUp}
                className="relative border-l border-neutral-300 pl-6 dark:border-neutral-700"
              >
                <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-neutral-900 dark:bg-neutral-100" />
                <p className="text-sm text-neutral-500 dark:text-neutral-400">{item.date}</p>
                <h3 className="mt-1 text-lg font-semibold tracking-tight">{item.title}</h3>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">{item.org}</p>
                <p className="mt-2 text-neutral-600 dark:text-neutral-400">{item.summary}</p>
              </motion.li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  );
}

