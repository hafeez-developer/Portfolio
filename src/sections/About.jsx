import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, staggerContainer } from "../motion/variants";

const skills = [
  "FastAPI",
  "Laravel",
  "Python",
  "PHP",
  "Docker",
  "MongoDB",
  "Github"
];

export default function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="section-shell border-t border-neutral-200/70 dark:border-neutral-800/70">
      <div className="content-wrap">
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? {} : "visible"}
          viewport={{ once: true, amount: 0.25 }}
          variants={reduceMotion ? {} : staggerContainer}
          className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-start"
        >
          <div>
            <motion.p variants={reduceMotion ? {} : fadeUp} className="section-kicker">
              About
            </motion.p>
            <motion.h2 variants={reduceMotion ? {} : fadeUp} className="section-title">
              I build dependable systems with a calm, detail-first process.
            </motion.h2>
            <motion.p
              variants={reduceMotion ? {} : fadeUp}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-300"
            >
              I focus on APIs and server-side applications that are clear to maintain and ready to scale. I value
              readable code, thoughtful architecture, and close collaboration across product and design.
            </motion.p>
          </div>

          <motion.div variants={reduceMotion ? {} : fadeUp} className="rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800">
            <h3 className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
              Key Skills
            </h3>
            <ul className="mt-5 flex flex-wrap gap-2" role="list">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-neutral-300 px-3 py-1.5 text-sm text-neutral-700 dark:border-neutral-700 dark:text-neutral-300"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
