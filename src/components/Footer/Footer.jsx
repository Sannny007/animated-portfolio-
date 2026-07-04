import { Mail, Heart, Code2, ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = ({ theme }) => {
  const isDark = theme === "dark";
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <footer
      className={`border-t ${
        isDark ? "border-zinc-800 bg-zinc-900/40" : "border-gray-200 bg-gray-50"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Code2 size={20} className="text-indigo-500" />
            <span className="font-bold text-lg">Sanny Kumar Sharma</span>
          </div>

          <div className="flex items-center gap-4">
            {[
              { href: "https://github.com/Sannny007", icon: <FaGithub size={18} />, label: "GitHub" },
              { href: "https://www.linkedin.com/in/sanny-kumar-sharma-2a8b7540a/", icon: <FaLinkedin size={18} />, label: "LinkedIn" },
              { href: "mailto:sanny433sharma@gmail.com", icon: <Mail size={18} />, label: "Email" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className={`p-2 rounded-full border transition-all duration-200 hover:scale-110 ${
                  isDark
                    ? "border-zinc-700 text-gray-400 hover:text-indigo-400 hover:border-indigo-500"
                    : "border-gray-300 text-gray-500 hover:text-indigo-600 hover:border-indigo-400"
                }`}
              >
                {s.icon}
              </a>
            ))}
          </div>

          
          <button
            onClick={scrollTop}
            className={`flex items-center gap-1.5 text-sm transition-colors duration-200 ${
              isDark ? "text-gray-500 hover:text-indigo-400" : "text-gray-400 hover:text-indigo-600"
            }`}
          >
            <ArrowUp size={14} />
            Back to top
          </button>
        </div>

        <div className={`mt-8 pt-6 border-t text-center text-sm ${isDark ? "border-zinc-800 text-gray-600" : "border-gray-200 text-gray-400"}`}>
          Made with ❤️
          <p className="inline text-pink-500" />
          by Sanny Kumar Sharma · {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
