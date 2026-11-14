
import { useEffect, useState } from "react";

const code = [
  { text: 'const future = "IT Developer";', color: "text-purple-400" },
  { text: "function createFuture() {", color: "text-blue-400" },
  { text: "  return future;", color: "text-green-400" },
  { text: "}", color: "text-blue-400" },
  { text: "console.log(createFuture());", color: "text-cyan-400" },
];

export default function AnimatedCode() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayed, setDisplayed] = useState([]);

  useEffect(() => {
    if (lineIndex >= code.length) {
      const timeout = setTimeout(() => {
        setLineIndex(0);
        setCharIndex(0);
        setDisplayed([]);
      }, 2500);

      return () => clearTimeout(timeout);
    }

    const currentLine = code[lineIndex].text;

    const timeout = setTimeout(() => {
      if (charIndex < currentLine.length) {
        setDisplayed((prev) => {
          const next = [...prev];
          next[lineIndex] = currentLine.slice(0, charIndex + 1);
          return next;
        });

        setCharIndex((prev) => prev + 1);
      } else {
        setLineIndex((prev) => prev + 1);
        setCharIndex(0);
      }
    }, 45);

    return () => clearTimeout(timeout);
  }, [lineIndex, charIndex]);

  return (
    <div className="min-h-[190px] rounded-xl border border-green-500/20 bg-[#080d18] p-5 font-mono text-sm leading-8 shadow-[0_0_30px_rgba(34,197,94,0.08)]">
      <p className="mb-3 text-xs text-slate-500">
        <span className="text-green-400">●</span> main.js
      </p>

      {code.map((line, index) => (
        <div key={index} className={line.color}>
          {displayed[index] || ""}
          {lineIndex === index && (
            <span className="ml-0.5 inline-block h-4 w-1 animate-pulse bg-green-400 align-middle" />
          )}
        </div>
      ))}
    </div>
  );
}
