import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = ({ theme }) => {
  const isDark = theme === "dark";
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setStatus("success");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus(null), 4000);
  };

  const inputClass = `w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 border ${isDark
      ? "bg-zinc-800/60 border-zinc-700 text-white placeholder-zinc-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
      : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
    }`;

  const contactInfo = [
    { icon: <Mail size={18} />, label: "Email", value: "sanny433sharma@gmail.com", href: "mailto:sanny433sharma@gmail.com" },
    { icon: <MapPin size={18} />, label: "Location", value: "Bhopal, Madhya Pradesh, India", href: null },
    { icon: <FaGithub size={18} />, label: "GitHub", value: "github.com/Sannny007", href: "https://github.com/Sannny007" },
    { icon: <FaLinkedin size={18} />, label: "LinkedIn", value: "linkedin.com/in/sanny", href: "https://www.linkedin.com/in/sanny-kumar-sharma-2a8b7540a/" },
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className={`text-sm font-semibold uppercase tracking-widest ${isDark ? "text-indigo-400" : "text-indigo-600"}`}>Get in touch</span>
          <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <p className={`mt-4 text-base max-w-xl mx-auto ${isDark ? "text-gray-400" : "text-gray-500"}`}>Have a project in mind or just want to say hello? I'd love to hear from you.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-2">Let's work together</h3>
            <p className={`text-sm mb-8 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
              I'm currently open to freelance projects and full-time roles. Feel free
              to reach out through any of the channels below.
            </p>

            <div className="flex flex-col gap-4">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 ${isDark
                      ? "bg-zinc-900/50 border-zinc-700/60 hover:border-indigo-500/40"
                      : "bg-white border-gray-200 hover:border-indigo-300 shadow-sm"
                    }`}
                >
                  <div
                    className={`p-2.5 rounded-lg shrink-0 ${isDark ? "bg-indigo-500/10 text-indigo-400" : "bg-indigo-50 text-indigo-600"
                      }`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className={`text-xs font-medium mb-0.5 ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className={`text-sm font-medium hover:underline transition-colors ${isDark ? "text-gray-200 hover:text-indigo-400" : "text-gray-700 hover:text-indigo-600"
                          }`}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className={`text-sm font-medium ${isDark ? "text-gray-200" : "text-gray-700"}`}>
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className={`rounded-2xl p-6 sm:p-8 border ${isDark ? "bg-zinc-900/60 border-zinc-700/60" : "bg-white border-gray-200 shadow-sm"
                }`}
            >
              <div className="flex flex-col gap-5">
                <div>
                  <label className={`block text-sm font-medium mb-1.5 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-1.5 ${isDark ? "text-gray-300" : "text-gray-700"}`}>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@email.com"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-1.5 ${isDark ? "text-gray-300" : "text-gray-700"}`}>Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Hey, I'd love to work with you on..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

          
                {status === "success" && (
                  <div className="flex items-center gap-2 text-green-400 text-sm">
                    <CheckCircle size={16} /> Message sent successfully!
                  </div>
                )}
                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-400 text-sm">
                    <AlertCircle size={16} /> Something went wrong. Please try again.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className={`flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed`}
                >
                  {loading ? (
                    <span className="animate-spin h-4 w-4 rounded-full border-2 border-white border-t-transparent" />
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
