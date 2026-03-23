import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-white dark:bg-neutral-950">
      <div className="flex items-center gap-2" aria-label="Loading portfolio">
        <motion.span
          className="h-2.5 w-2.5 rounded-full bg-neutral-900 dark:bg-neutral-100"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, delay: 0 }}
        />
        <motion.span
          className="h-2.5 w-2.5 rounded-full bg-neutral-900 dark:bg-neutral-100"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, delay: 0.12 }}
        />
        <motion.span
          className="h-2.5 w-2.5 rounded-full bg-neutral-900 dark:bg-neutral-100"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, delay: 0.24 }}
        />
      </div>
    </div>
  );
}

