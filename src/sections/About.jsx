import { HiCode, HiSparkles, HiLightningBolt } from "react-icons/hi";

const highlights = [
  {
    icon: <HiCode className="w-6 h-6 text-indigo-500" />,
    title: "Clean Code",
    text: "Writing maintainable, well-documented code with best practices.",
  },
  {
    icon: <HiSparkles className="w-6 h-6 text-purple-500" />,
    title: "Modern Design",
    text: "Creating intuitive, accessible interfaces with attention to detail.",
  },
  {
    icon: <HiLightningBolt className="w-6 h-6 text-pink-500" />,
    title: "Performance",
    text: "Building fast, optimised applications that scale effectively.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-heading">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="section-subheading">
          Get to know who I am and what drives me as a developer.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo / illustration placeholder */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-1">
                <div className="w-full h-full rounded-3xl bg-gray-100 dark:bg-gray-900 flex items-center justify-center text-6xl">
                  👨‍💻
                </div>
              </div>
              {/* Decorative dots */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-indigo-500/10 rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-purple-500/10 rounded-2xl -z-10" />
            </div>
          </div>

          {/* Text */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Full-Stack Developer based in <span className="gradient-text">your city</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              I&apos;m a passionate developer with experience in building web applications
              using modern technologies. I love turning complex problems into simple,
              beautiful, and intuitive solutions. When I&apos;m not coding, you&apos;ll find me
              exploring new technologies, contributing to open source, or enjoying a good cup
              of coffee.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              I believe in continuous learning and staying up-to-date with the latest trends
              in web development. My goal is to create impactful digital experiences that
              make a difference.
            </p>

            {/* Highlight cards */}
            <div className="space-y-4">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800"
                >
                  <div className="p-2 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

