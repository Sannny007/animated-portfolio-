import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  FaGitAlt, FaGithub, FaDocker,
} from "react-icons/fa";
import {
  SiTailwindcss, SiExpress, SiMongodb, SiMysql,
  SiNextdotjs, SiTypescript, SiCplusplus, SiPython,
} from "react-icons/si";

const languages = [
  { icon: <SiCplusplus />, name: "C++" },
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <FaJs />, name: "JavaScript" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <SiMysql />, name: "MySQL" },
];

const fullstack = [
  { icon: <FaReact />, name: "React.js" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express.js" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
];

const tools = [
  { icon: <SiPython />, name: "Python" },
  { icon: <FaGitAlt />, name: "Git" },
  { icon: <FaGithub />, name: "GitHub" },
  { icon: <FaDocker />, name: "Docker" },
];

const SkillCard = ({ icon, name, theme }) => {
  const isDark = theme === "dark";
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -4 }}
      transition={{ duration: 0.2 }}
      className={`flex items-center gap-3 px-5 py-3 rounded-xl min-w-max border transition-all duration-300 ${
        isDark
          ? "bg-zinc-900/80 border-zinc-700/60 text-white hover:border-indigo-500/60 hover:shadow-[0_0_20px_rgba(99,102,241,.2)]"
          : "bg-white border-gray-200 text-gray-800 shadow-sm hover:border-indigo-400 hover:shadow-[0_0_20px_rgba(99,102,241,.12)]"
      }`}
    >
      <span
        className={`text-2xl ${isDark ? "text-indigo-400" : "text-indigo-600"}`}>
        {icon}
      </span>
      <span className="font-medium text-sm whitespace-nowrap">{name}</span>
    </motion.div>
  );
};

const Skills = ({ theme }) => {
  const isDark = theme === "dark";
  const groups = [
    { label: "Languages & Core", items: languages, dir: "left" },
    { label: "Full Stack", items: fullstack, dir: "right" },
    { label: "Tools & Cybersecurity", items: tools, dir: "left" },
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16">
          <span
            className={`text-sm font-semibold uppercase tracking-widest ${
              isDark ? "text-indigo-400" : "text-indigo-600"
            }`}
          >What I know</span>
          <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">My <span className="gradient-text">Skills</span>
          </h2>
          <p className={`mt-4 text-base max-w-xl mx-auto ${isDark ? "text-gray-400" : "text-gray-500"}`}>
            Technologies and tools I work with on a daily basis.
          </p>
        </motion.div>

        <div className="flex flex-col gap-12">
          {groups.map((group) => (
            <div key={group.label}>
              <p
                className={`mb-4 text-xs font-semibold uppercase tracking-[4px] ${
                  isDark ? "text-zinc-500" : "text-zinc-400"
                }`}
              >
                {group.label}
              </p>
              <div className="scroller">
                <div className={`scroller__inner ${group.dir === "left" ? "scroll-left" : "scroll-right"}`}>
                  {[...group.items, ...group.items].map((item, i) => (
                    <SkillCard key={i} icon={item.icon} name={item.name} theme={theme} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
