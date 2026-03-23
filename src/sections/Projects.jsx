import { motion, useReducedMotion } from "framer-motion";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import { fadeUp, staggerContainer } from "../motion/variants";

const projects = [
	{
		title: "Office Space Panel",
		description:
			"E-commerce administration platform with product operations, authentication, and payment workflows.",
		stack: ["Laravel", "PHP", "Stripe"],
		github: "https://github.com/Samee03/office-space",
		live: "https://example.com",
	},
	{
		title: "Vibrant Logics",
		description:
			"Business website and backend implementation focused on clean UX and lightweight performance.",
		stack: ["PHP", "CSS"],
		github: "https://github.com/hafeez-developer/vibrantLogics",
		live: "https://example.com",
	},
	{
		title: "Chat Application",
		description:
			"Realtime messaging product with room-based communication and clean interaction flow.",
		stack: ["JavaScript", "Socket.io", "HTML", "CSS"],
		github: "https://github.com/hafeez-developer/aspireconnection.com",
		live: "https://aspire-connection-5c78a81a7850.herokuapp.com/",
	},
];

export default function Projects() {
	const reduceMotion = useReducedMotion();

	return (
		<section
			id="projects"
			className="section-shell border-t border-neutral-200/70 dark:border-neutral-800/70"
		>
			<div className="content-wrap">
				<motion.div
					initial={reduceMotion ? false : "hidden"}
					whileInView={reduceMotion ? {} : "visible"}
					viewport={{ once: true, amount: 0.2 }}
					variants={reduceMotion ? {} : staggerContainer}
				>
					<motion.p variants={reduceMotion ? {} : fadeUp} className="section-kicker">
						Projects
					</motion.p>
					<motion.h2
						variants={reduceMotion ? {} : fadeUp}
						className="section-title max-w-3xl"
					>
						Selected work that balances clarity, performance, and maintainability.
					</motion.h2>

					<motion.div
						variants={reduceMotion ? {} : staggerContainer}
						className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
					>
						{projects.map((project) => (
							<motion.article
								key={project.title}
								variants={reduceMotion ? {} : fadeUp}
								className="group rounded-2xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900"
							>
								<h3 className="text-xl font-semibold tracking-tight">
									{project.title}
								</h3>
								<p className="mt-3 text-neutral-600 dark:text-neutral-300">
									{project.description}
								</p>

								<ul
									className="mt-5 flex flex-wrap gap-2"
									role="list"
								>
									{project.stack.map((item) => (
										<li
											key={item}
											className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium uppercase tracking-wide text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300"
										>
											{item}
										</li>
									))}
								</ul>

								<div className="mt-6 flex items-center gap-4 text-sm">
									<a
										href={project.github}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-2 text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
									>
										<FaGithub className="h-4 w-4" />
										Code
									</a>
									<a
										href={project.live}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-2 text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
									>
										<FaArrowUpRightFromSquare className="h-3.5 w-3.5" />
										Live
									</a>
								</div>
							</motion.article>
						))}
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
