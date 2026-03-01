import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-400/30 dark:bg-indigo-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-400/20 dark:bg-pink-600/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Greeting badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
            Available for work
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
          Hi, I&apos;m{" "}
          <span className="gradient-text">Hafeez</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          A passionate <span className="text-gray-800 dark:text-gray-200 font-medium">Full-Stack Developer</span> who
          crafts beautiful, performant web experiences with modern technologies.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-medium transition-all hover:shadow-lg hover:shadow-indigo-500/25"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-xl border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition-all"
          >
            Get In Touch
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl border border-gray-200 dark:border-gray-800 text-gray-500 hover:text-gray-800 dark:hover:text-white hover:border-gray-400 dark:hover:border-gray-600 transition-all"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl border border-gray-200 dark:border-gray-800 text-gray-500 hover:text-blue-600 hover:border-blue-300 dark:hover:border-blue-700 transition-all"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
        </div>

        {/* Scroll indicator */}
        <a
          href="#about"
          className="inline-flex flex-col items-center text-gray-400 hover:text-indigo-500 transition-colors"
        >
          <span className="text-xs font-medium mb-2">Scroll Down</span>
          <HiArrowDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}

