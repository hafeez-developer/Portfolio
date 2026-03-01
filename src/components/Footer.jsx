import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiHeart } from "react-icons/hi";

const socials = [
  { icon: <FaGithub />, href: "https://github.com", label: "GitHub" },
  { icon: <FaLinkedin />, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: <FaTwitter />, href: "https://twitter.com", label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
          Built with <HiHeart className="text-red-500" /> by Hafeez &copy;{" "}
          {new Date().getFullYear()}
        </p>

        <div className="flex items-center gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="text-gray-500 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors text-xl"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

