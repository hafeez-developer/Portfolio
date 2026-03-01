import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce application with user authentication, product management, shopping cart, and payment integration.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com",
    live: "https://example.com",
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task manager with real-time updates, drag-and-drop interface, and team workspace features.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
    github: "https://github.com",
    live: "https://example.com",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    title: "AI Chat Application",
    description:
      "An AI-powered chat application with natural language processing, conversation history, and multi-model support.",
    tags: ["React", "Python", "FastAPI", "OpenAI"],
    github: "https://github.com",
    live: "https://example.com",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with React and Tailwind CSS featuring dark mode and smooth animations.",
    tags: ["React", "Tailwind CSS", "Vite"],
    github: "https://github.com",
    live: "https://example.com",
    gradient: "from-teal-500 to-cyan-600",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-heading">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="section-subheading">
          Here are some of my recent projects that showcase my skills and
          experience.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group glass-card overflow-hidden hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300"
            >
              {/* Gradient header */}
              <div
                className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
              >
                <span className="text-white/80 text-5xl font-bold opacity-30 group-hover:opacity-50 transition-opacity">
                  {project.title.charAt(0)}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors"
                  >
                    <FaGithub className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-indigo-500 transition-colors"
                  >
                    <FaExternalLinkAlt className="w-3.5 h-3.5" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

