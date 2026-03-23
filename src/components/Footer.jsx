import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const socials = [
  { icon: <FaGithub />, href: "https://github.com/hafeez-developer", label: "GitHub" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/muhammad-hafeez-966252241/", label: "LinkedIn" },
  { icon: <FaXTwitter />, href: "https://x.com/Hafeez793902", label: "X" },
];

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 py-8 dark:border-neutral-800">
      <div className="content-wrap flex flex-col items-start justify-between gap-4 text-sm text-neutral-500 dark:text-neutral-400 md:flex-row md:items-center">
        <p>Hafeez - {new Date().getFullYear()}</p>

        <div className="flex items-center gap-4 text-base">
          {socials.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="transition-colors hover:text-neutral-900 dark:hover:text-white"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
