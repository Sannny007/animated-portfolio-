import { useEffect, useRef } from "react";

const Cursor = ({ theme }) => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const handleMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMove);

    const animate = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouse.current.x - 4}px, ${mouse.current.y - 4}px)`;
      }
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x - 20}px, ${ring.current.y - 20}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    const grow = () => ringRef.current?.classList.add("scale-150");
    const shrink = () => ringRef.current?.classList.remove("scale-150");

    const interactives = document.querySelectorAll("a, button, [data-cursor]");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);


  return (
    <div className="pointer-events-none fixed inset-0 z-9999 hidden md:block">
      
      <div
        ref={dotRef}
        className={`absolute top-0 left-0 h-2 w-2 rounded-full transition-colors duration-300 ${
          theme === "dark" ? "bg-indigo-400" : "bg-indigo-600"
        }`}
        style={{ willChange: "transform" }}
      />
      
      <div
        ref={ringRef}
        className={`absolute top-0 left-0 h-10 w-10 rounded-full border-2 transition-all duration-200 ${
          theme === "dark" ? "border-indigo-400/60" : "border-indigo-500/60"
        }`}
        style={{ willChange: "transform" }}
      />
    </div>
  );
};

export default Cursor;
