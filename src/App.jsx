import { useState, useEffect } from "react";
import Cursor from "./components/Cursor/Cursor";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div
      className={`relative min-h-screen overflow-x-hidden transition-colors duration-500 ${
        theme === "dark" ? "bg-[#080810] text-white" : "bg-[#f8fafc] text-gray-900"
      }`}
    >
      <Cursor theme={theme} />
      <div className="pointer-events-none fixed inset-0 overflow-hidden -z-10">
        <div
          className={`absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full blur-[160px] transition-colors duration-700 ${
            theme === "dark" ? "bg-indigo-600/15" : "bg-blue-400/20"
          }`}
        />
        <div
          className={`absolute top-1/2 -right-40 h-[500px] w-[500px] rounded-full blur-[160px] transition-colors duration-700 ${
            theme === "dark" ? "bg-purple-600/15" : "bg-purple-300/20"
          }`}
        />
        <div
          className={`absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full blur-[160px] transition-colors duration-700 ${
            theme === "dark" ? "bg-pink-600/10" : "bg-pink-300/15"
          }`}
        />
        {theme === "dark" && (
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        )}
      </div>

      <Navbar theme={theme} setTheme={setTheme} />
      <main>
        <Hero theme={theme} />
        <Skills theme={theme} />
        <Projects theme={theme} />
        <Education theme={theme} />
        <Contact theme={theme} />
      </main>
      <Footer theme={theme} />
    </div>
  );
}

export default App;
