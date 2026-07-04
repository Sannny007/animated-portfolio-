import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { MapPin, Mail, ArrowDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "../../assets/images/profile.png";

const Hero = ({ theme }) => {
  const isDark = theme === "dark";
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-6 pb-16">
      <div className="mx-auto max-w-7xl w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4">
              <span
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium border ${
                  isDark
                    ? "border-indigo-500/30 bg-indigo-500/10 text-indigo-300"
                    : "border-indigo-300 bg-indigo-50 text-indigo-700"
                }`}
              >
                <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />Available for work</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight">
              Hi, I'm{" "}
              <motion.span
                animate={{ rotate: [0, 20, -20, 20, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                className="inline-block">👋</motion.span>
              <br />
              <span className="gradient-text">Sanny Kumar </span>
              <span className={isDark ? "text-white" : "text-gray-900"}>Sharma</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="mt-4"
            >
              <span className={`text-xl sm:text-2xl font-semibold ${isDark ? "text-indigo-400" : "text-indigo-600"}`}>
                <TypeAnimation
                  sequence={[
                    "Full Stack Developer",
                    2000,
                    "React.js Enthusiast",
                    2000,
                    "Cybersecurity Learner",
                    2000,
                    "Problem Solver",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className={`mt-6 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Passionate about building modern, responsive web applications. I combine
              strong development skills with a cybersecurity mindset to create secure,
              scalable, and user-friendly digital experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm">
              <span className={`flex items-center gap-1.5 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                <MapPin size={15} />
                Bhopal, India
              </span>
              <a
                href="mailto:sanny433sharma@gmail.com"
                className={`flex items-center gap-1.5 transition-colors duration-200 ${
                  isDark ? "text-gray-400 hover:text-indigo-400" : "text-gray-500 hover:text-indigo-600"
                }`}
              >
                <Mail size={15} />
                sanny433sharma@gmail.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg shadow-indigo-500/30"
              >View Projects<ArrowDown size={16} /></a>

              <a
                href="#contact"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border-2 transition-all duration-300 hover:scale-105 ${
                  isDark
                    ? "border-indigo-500/50 text-indigo-300 hover:bg-indigo-500/10"
                    : "border-indigo-500 text-indigo-700 hover:bg-indigo-50"
                }`}
              >Contact Me</a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-8 flex items-center justify-center lg:justify-start gap-4"
            >
              {[
                { href: "https://github.com/Sannny007", icon: <FaGithub size={20} />, label: "GitHub" },
                { href: "https://www.linkedin.com/in/sanny-kumar-sharma-2a8b7540a/", icon: <FaLinkedin size={20} />, label: "LinkedIn" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className={`p-2.5 rounded-full border transition-all duration-300 hover:scale-110 ${
                    isDark
                      ? "border-zinc-700 text-gray-400 hover:border-indigo-500 hover:text-indigo-400"
                      : "border-gray-300 text-gray-600 hover:border-indigo-500 hover:text-indigo-600"
                  }`}
                >
                  {s.icon}
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="shrink-0">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-linear-to-br from-indigo-500 to-purple-600 blur-2xl opacity-30 scale-110" />
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="relative">
                <div className="p-1.5 rounded-full bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500">
                  <img
                    src={profile}
                    alt="Sanny Kumar Sharma"
                    className="h-56 w-56 sm:h-72 sm:w-72 lg:h-80 lg:w-80 rounded-full object-cover"/>
                </div>
              </motion.div>

      
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className={`absolute -bottom-4 -left-6 sm:-left-10 px-4 py-2 rounded-xl text-xs font-semibold shadow-lg ${
                  isDark ? "bg-zinc-800 border border-zinc-700 text-white" : "bg-white border border-gray-200 text-gray-800"
                }`}
              >
                🚀 Full Stack Dev</motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className={`absolute -top-4 -right-4 sm:-right-8 px-4 py-2 rounded-xl text-xs font-semibold shadow-lg ${
                  isDark ? "bg-zinc-800 border border-zinc-700 text-white" : "bg-white border border-gray-200 text-gray-800"
                }`}
              >🔐 Cybersecurity
              </motion.div>
            </div>
          </motion.div>
        </div>


        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
          <span className={`text-xs ${isDark ? "text-gray-600" : "text-gray-400"}`}>Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={16} className={isDark ? "text-gray-600" : "text-gray-400"} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
