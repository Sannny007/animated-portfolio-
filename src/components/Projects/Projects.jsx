import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import portfolio from "../../assets/images/projects/portfolio.png";
import ecommerce from "../../assets/images/projects/e-commerce.png";
import padosiAlert from "../../assets/images/projects/padosiAlert.png";

const projects = [
  {
    title: "Portfolio Website",
    image: portfolio,
    description:
      "A modern responsive portfolio built with React, Tailwind CSS, and Framer Motion with dark/light mode.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Sannny007/animated-portfolio",
    live: null,
    badge: "Personal",
  },
  {
    title: "Padosi Alert",
    image: padosiAlert,
    description:
      "A real-time neighborhood alert app using React, Node.js, Express, and Socket.io for instant notifications.",
    tech: ["React", "Node.js", "Socket.io", "Express"],
    github: "https://github.com/Sannny007/Padosi-Alert",
    live: null,
    badge: "Real-time",
  },
  {
    title: "E-Commerce Website",
    image: ecommerce,
    description:
      "A full-stack MERN shopping website with JWT authentication, cart management, and order tracking.",
    tech: ["React", "MongoDB", "Express", "Node.js"],
    github: "https://github.com/Sannny007/MERN-PROJECT",
    live: null,
    badge: "Full Stack",
  },
];

const ProjectCard = ({ project, theme, index }) => {
  const isDark = theme === "dark";
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group rounded-2xl overflow-hidden border transition-all duration-300 glow-card ${
        isDark
          ? "bg-zinc-900/60 border-zinc-700/60 hover:border-indigo-500/40"
          : "bg-white border-gray-200 hover:border-indigo-400 shadow-sm hover:shadow-lg"
      }`}
    >

      <div className="relative overflow-hidden h-48 sm:h-52">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold ${
            isDark ? "bg-indigo-600/80 text-white" : "bg-indigo-600 text-white"
          }`}
        >
          {project.badge}
        </span>
      </div>


      <div className="p-5 sm:p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className={`text-sm leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
          {project.description}</p>


        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                isDark
                  ? "bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                  : "bg-indigo-50 text-indigo-700 border border-indigo-200"
              }`}
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-3 mt-6">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 hover:scale-105 ${
              isDark
                ? "border-zinc-600 text-gray-300 hover:border-indigo-500 hover:text-indigo-300"
                : "border-gray-300 text-gray-700 hover:border-indigo-500 hover:text-indigo-700"
            }`}
          >
            <FaGithub size={15} />
            GitHub</a>
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white bg-linear-to-r from-indigo-600 to-purple-600 hover:scale-105 transition-all duration-200"
            >
              <ExternalLink size={15} />
              Live Demo
            </a>
          ) : (
            <span
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium cursor-not-allowed ${
                isDark ? "bg-zinc-800 text-zinc-500" : "bg-gray-100 text-gray-400"
              }`}
            >
              <Code2 size={15} />
              Coming Soon
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
};

const Projects = ({ theme }) => {
  const isDark = theme === "dark";
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16">
          <span className={`text-sm font-semibold uppercase tracking-widest ${
              isDark ? "text-indigo-400" : "text-indigo-600"
            }`}
          >What I've built</span>
          <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">My <span className="gradient-text">Projects</span></h2>
          <p className={`mt-4 text-base max-w-xl mx-auto ${isDark ? "text-gray-400" : "text-gray-500"}`}>A selection of personal and academic projects I've worked on.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} theme={theme} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
