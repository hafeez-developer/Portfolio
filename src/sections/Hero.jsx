import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, staggerContainer } from "../motion/variants";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-shell pt-32 md:pt-44" aria-label="Intro">
      <div className="content-wrap">
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          animate={reduceMotion ? {} : "visible"}
          variants={reduceMotion ? {} : staggerContainer}
          className="max-w-4xl"
        >
          <motion.p variants={reduceMotion ? {} : fadeUp} className="section-kicker">
            Backend Developer - Lahore
          </motion.p>

          <motion.h1
            variants={reduceMotion ? {} : fadeUp}
            className="text-balance text-5xl font-semibold leading-tight tracking-tight text-neutral-900 dark:text-white sm:text-6xl md:text-7xl"
          >
            Muhammad Hafeez crafts reliable digital products with clean, modern execution.
          </motion.h1>

          <motion.p
            variants={reduceMotion ? {} : fadeUp}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-300"
          >
            I design and build scalable backend systems, then pair them with thoughtfully built frontend experiences.
          </motion.p>

          <motion.div variants={reduceMotion ? {} : fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn-secondary">
              Let&apos;s Talk
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
