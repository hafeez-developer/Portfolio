import {
  SiReact,
  SiJavascript,
  SiPython,
  SiTailwindcss,
  SiMongodb,
  SiDocker,
  SiFigma,
  SiHtml5,
  SiCss3,
  SiFastapi,
  SiPhp,
  SiLaravel,
  SiGithub,
} from "react-icons/si";

const categories = [
  {
    title: "Backend & Database",
    skills: [
      { name: "FastAPI", icon: <SiFastapi />, color: "text-teal-500" },
      { name: "Python", icon: <SiPython />, color: "text-blue-400" },
      { name: "Laravel", icon: <SiLaravel />, color: "text-red-500" },
      { name: "PHP", icon: <SiPhp />, color: "text-indigo-400" },
      { name: "MongoDB", icon: <SiMongodb />, color: "text-green-600" },
    ]

  },
    {
    title: "Frontend",
    skills: [
      { name: "React", icon: <SiReact />, color: "text-cyan-500" },
      { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-500" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-teal-500" },
      { name: "HTML5", icon: <SiHtml5 />, color: "text-orange-500" },
      { name: "CSS3", icon: <SiCss3 />, color: "text-blue-600" },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "GitHub", icon: <SiGithub />, color: "text-gray-800 dark:text-white" },
      { name: "Docker", icon: <SiDocker />, color: "text-blue-500" },
      { name: "Figma", icon: <SiFigma />, color: "text-pink-500" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-50/50 dark:bg-gray-900/30">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-heading">
          My <span className="gradient-text">Skills</span>
        </h2>
        <p className="section-subheading">
          Primarily focused on backend technologies, with working knowledge of frontend tools.
        </p>

        <div className="space-y-12">
          {categories.map((cat) => (
            <div key={cat.title}>
              <h3 className="text-lg font-semibold mb-6 text-gray-700 dark:text-gray-300">
                {cat.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-md hover:shadow-indigo-500/5 transition-all duration-300"
                  >
                    <span
                      className={`text-2xl ${skill.color} group-hover:scale-110 transition-transform`}
                    >
                      {skill.icon}
                    </span>
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

