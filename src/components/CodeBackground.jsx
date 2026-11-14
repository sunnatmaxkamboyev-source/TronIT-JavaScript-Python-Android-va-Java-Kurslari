
import { useEffect, useState } from "react";

const codeStreams = [
  [
    "import React, { useState } from 'react';",
    "",
    "function TronIT() {",
    "  const [learn, setLearn] = useState(true);",
    "",
    "  return (",
    "    <main className='app'>",
    "      <h1>Build your future</h1>",
    "      <CourseList />",
    "    </main>",
    "  );",
    "}",
    "",
    "export default TronIT;",
  ],
  [
    "const express = require('express');",
    "const mongoose = require('mongoose');",
    "",
    "const app = express();",
    "app.use(express.json());",
    "",
    "app.get('/api/courses', async (req, res) => {",
    "  const courses = await Course.find();",
    "  res.status(200).json(courses);",
    "});",
    "",
    "mongoose.connect(process.env.MONGO_URI);",
    "app.listen(5000);",
  ],
  [
    "const createUser = async (data) => {",
    "  try {",
    "    const user = await User.create({",
    "      name: data.name,",
    "      email: data.email,",
    "    });",
    "",
    "    return { success: true, user };",
    "  } catch (error) {",
    "    throw new Error(error.message);",
    "  }",
    "};",
    "",
    "export default createUser;",
  ],
  [
    "interface Course {",
    "  id: number;",
    "  title: string;",
    "  lessons: number;",
    "  isPublished: boolean;",
    "}",
    "",
    "const courses: Course[] = [];",
    "",
    "function addCourse(course: Course) {",
    "  courses.push(course);",
    "  return courses;",
    "}",
    "",
    "console.log('Keep learning!');",
  ],
];

const positions = [
  { left: "2%", top: "4%", delay: 0, width: "24%" },
  { left: "27%", top: "12%", delay: 1800, width: "23%" },
  { left: "52%", top: "3%", delay: 900, width: "24%" },
  { left: "77%", top: "15%", delay: 2600, width: "22%" },
];

function CodeColumn({ lines, position, mobile = false }) {
  const [started, setStarted] = useState(false);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), position.delay);
    return () => clearTimeout(timer);
  }, [position.delay]);

  useEffect(() => {
    if (!started) return;

    let timer;

    if (lineIndex >= lines.length) {
      timer = setTimeout(() => {
        setLineIndex(0);
        setCharIndex(0);
      }, 2200);
    } else if (charIndex < lines[lineIndex].length) {
      timer = setTimeout(() => {
        setCharIndex((value) => value + 1);
      }, 35);
    } else {
      timer = setTimeout(() => {
        setLineIndex((value) => value + 1);
        setCharIndex(0);
      }, 430);
    }

    return () => clearTimeout(timer);
  }, [started, lineIndex, charIndex, lines]);

  return (
    <div
      className={`absolute overflow-hidden font-mono leading-7 ${
        mobile ? "left-[5%] top-[8%] w-[90%] text-[11px]" : "text-[12px] lg:text-[13px]"
      }`}
      style={
        mobile
          ? { height: "82%" }
          : {
              left: position.left,
              top: position.top,
              width: position.width,
              height: "85%",
            }
      }
      aria-hidden="true"
    >
      {lines.map((line, index) => {
        if (index > lineIndex) return null;

        const visibleText =
          index < lineIndex ? line : line.slice(0, charIndex);

        return (
          <div
            key={`${index}-${line}`}
            className="min-h-7 whitespace-pre"
          >
            <span>{visibleText || "\u00A0"}</span>

            {index === lineIndex && started && (
              <span className="ml-[2px] inline-block h-[14px] w-[2px] animate-pulse bg-emerald-400 align-middle shadow-[0_0_10px_#34d399]" />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function CodeBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Background glow */}
      <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-emerald-400/10 blur-[130px] dark:bg-emerald-500/20" />
      <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[130px] dark:bg-cyan-500/15" />

      {/* Desktop code */}
      <div className="hidden sm:block">
        {codeStreams.map((lines, index) => (
          <CodeColumn
            key={index}
            lines={lines}
            position={positions[index]}
          />
        ))}
      </div>

      {/* Mobile code */}
      <div className="sm:hidden">
        <CodeColumn
          lines={codeStreams[0]}
          position={{ delay: 300 }}
          mobile
        />
      </div>

      {/* Readability overlay */}
      <div className="absolute inset-0 bg-white/45 dark:bg-[#020806]/35" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.12] dark:opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(16,185,129,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.35) 1px, transparent 1px)",
          backgroundSize: "45px 45px",
        }}
      />
    </div>
  );
}
