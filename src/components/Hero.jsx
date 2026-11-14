import { Link } from "react-router-dom";
import { ArrowRight, Play, Code2 } from "lucide-react";
import { motion } from "framer-motion";

import AnimatedCode from "./AnimatedCode";
import AnimatedCodeBackground from "./AnimatedCodeBackground";

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">

      {/* 3D animated background */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-30 dark:opacity-100">
        <AnimatedCodeBackground />
      </div>

      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-10 z-0 h-96 w-96 rounded-full bg-green-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 z-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />

      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.04] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(100,100,100,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(100,100,100,0.5) 1px, transparent 1px)",
          backgroundSize: "55px 55px",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:py-24">

        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-600 backdrop-blur-xl dark:text-green-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
              Zamonaviy IT ta'lim platformasi
            </div>

            <h1 className="mt-7 text-5xl font-bold leading-tight text-slate-900 dark:text-white md:text-6xl">
              Kelajagingni
              <span className="block bg-gradient-to-r from-green-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent dark:from-green-400 dark:via-cyan-400 dark:to-blue-500">
                kod bilan
              </span>
              yarat.
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600 dark:text-slate-400">
              Dasturlashni noldan o'rganing, yangi bilimlarni
              egallang va IT sohasida o'z kelajagingizni yarating.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/courses"
                className="group flex items-center gap-2 rounded-xl bg-green-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-green-500/20 transition duration-300 hover:-translate-y-1 hover:bg-green-400"
              >
                Kurslarni ko'rish
                <ArrowRight
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/register"
                className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white/70 px-6 py-3.5 font-semibold text-slate-800 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-green-400/60 dark:border-white/15 dark:bg-white/5 dark:text-white"
              >
                <Play size={18} />
                Bepul boshlash
              </Link>
            </div>
          </motion.div>

          {/* Right side: animated coding card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 35 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative"
          >
            {/* Neon glow */}
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-r from-green-500/20 to-blue-500/20 opacity-70 blur-2xl" />

            <div className="relative rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-2xl shadow-slate-300/30 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/90 dark:shadow-black/30">

              {/* Card header */}
              <div className="mb-7 flex items-center gap-3">
                <div className="rounded-xl border border-green-500/20 bg-green-500/10 p-3">
                  <Code2 className="text-green-600 dark:text-green-400" size={28} />
                </div>

                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">
                    Learn Programming
                  </h3>
                  <p className="text-sm text-slate-500">
                    Start your journey
                  </p>
                </div>

                <div className="ml-auto flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                </div>
              </div>

              <AnimatedCode />

              {/* Learning progress */}
              <div className="mt-7 flex justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">
                  Learning progress
                </span>
                <span className="font-semibold text-green-600 dark:text-green-400">
                  75%
                </span>
              </div>

              <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "75%" }}
                  transition={{ duration: 1.5, delay: 0.8 }}
                  className="h-full rounded-full bg-gradient-to-r from-green-400 to-cyan-400"
                />
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
