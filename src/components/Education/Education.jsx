import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Technology",
    field: "Computer Science & Engineering",
    institution: "IES UNIVERSITY, BHOPAL",
    location: "Bhopal, MP",
    duration: "2025 – 2029",
    grade: "Pursuing",
    description:
      "Studying core CS subjects including Data Structures, Algorithms, Computer Networks, and Cybersecurity. Actively building projects and participating in hackathons.",
  },
  {
    degree: "Senior Secondary (12th)",
    field: "Science — Physics, Chemistry, Maths",
    institution: "RAJA SINGH COLLEGE, SIWAN ( BIHAR ) 841245",
    location: "Siwan, Bihar",
    duration: "2023 - 2025",
    grade: "53%",
    description: "Completed class 12 with a focus on Physics, Chemistry, and Mathematics.",
  },
  {
    degree: "Secondary (10th)",
    field: "General Studies",
    institution: "ABC High School, Baghara Siwan ( 841245 )",
    location: "Siwan, Bihar",
    duration: "2022- 2023",
    grade: "67%",
    description: "Strong academic foundation with interests in science and mathematics.",
  },
];

const Education = ({ theme }) => {
  const isDark = theme === "dark";

  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span
            className={`text-sm font-semibold uppercase tracking-widest ${
              isDark ? "text-indigo-400" : "text-indigo-600"
            }`}
          >
            Background
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">My <span className="gradient-text">Education</span></h2>
        </motion.div>
        <div className="relative">

          <div
            className={`hidden sm:block absolute left-6 top-0 bottom-0 w-px ${
              isDark ? "bg-zinc-700" : "bg-gray-200"
            }`}
          />

          <div className="flex flex-col gap-10">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col sm:flex-row gap-6"
              >

                <div className="hidden sm:flex flex-col items-center">
                  <div
                    className={`h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0 z-10 ${
                      isDark ? "bg-indigo-600/20 border border-indigo-500/40" : "bg-indigo-50 border border-indigo-300"
                    }`}
                  >
                    <GraduationCap size={20} className={isDark ? "text-indigo-400" : "text-indigo-600"} />
                  </div>
                </div>

                <div
                  className={`flex-1 rounded-2xl p-5 sm:p-6 border transition-all duration-300 ${
                    isDark
                      ? "bg-zinc-900/60 border-zinc-700/60 hover:border-indigo-500/40"
                      : "bg-white border-gray-200 shadow-sm hover:shadow-md"
                  }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-lg font-bold">{edu.degree}</h3>
                      <p className={`text-sm font-medium ${isDark ? "text-indigo-400" : "text-indigo-600"}`}>
                        {edu.field}
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        isDark
                          ? "bg-green-500/10 text-green-400 border border-green-500/20"
                          : "bg-green-50 text-green-700 border border-green-200"
                      }`}
                    >
                      {edu.grade}
                    </span>
                  </div>

                  <p className={`font-medium mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                    {edu.institution}
                  </p>

                  <div className="flex flex-wrap gap-4 mb-3">
                    <span className={`flex items-center gap-1.5 text-sm ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                      <Calendar size={13} />
                      {edu.duration}
                    </span>
                    <span className={`flex items-center gap-1.5 text-sm ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                      <MapPin size={13} />
                      {edu.location}
                    </span>
                  </div>

                  <p className={`text-sm leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    {edu.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
