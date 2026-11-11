
import { Link } from "react-router-dom";
import { ArrowRight, Play, Code2 } from "lucide-react";

function Hero() {
  return (
    <section className="bg-white transition-colors duration-300 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

          {/* Chap taraf */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-600 dark:bg-green-950/40 dark:text-green-400">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              Zamonaviy IT ta'lim platformasi
            </div>

            <h1 className="mt-7 text-5xl font-bold leading-tight text-gray-900 dark:text-white md:text-6xl">
              Kelajagingni
              <span className="text-green-500"> kod bilan </span>
              yarat.
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-gray-500 dark:text-gray-400">
              Dasturlashni noldan o'rganing, yangi bilimlarni
              egallang va IT sohasida o'z kelajagingizni yarating.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/courses"
                className="flex items-center gap-2 rounded-xl bg-green-500 px-6 py-3.5 font-semibold text-white transition hover:bg-green-600"
              >
                Kurslarni ko'rish
                <ArrowRight size={19} />
              </Link>

              <Link
                to="/register"
                className="flex items-center gap-2 rounded-xl border border-gray-200 px-6 py-3.5 font-semibold text-gray-700 transition hover:border-green-500 dark:border-gray-700 dark:text-gray-200 dark:hover:border-green-500"
              >
                <Play size={18} />
                Bepul boshlash
              </Link>
            </div>
          </div>

          {/* O'ng taraf */}
          <div className="relative">
            <div className="flex min-h-[380px] items-center justify-center rounded-3xl bg-green-50 p-10 transition-colors dark:bg-green-950/20">

              <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-xl dark:bg-gray-900">
                <div className="mb-7 flex items-center gap-3">
                  <div className="rounded-xl bg-green-100 p-3 dark:bg-green-950">
                    <Code2 className="text-green-600 dark:text-green-400" size={28} />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">
                      Learn Programming
                    </h3>
                    <p className="text-sm text-gray-400 dark:text-gray-500">
                      Start your journey
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-xl bg-gray-900 p-4 font-mono text-sm text-green-400">
                    <p>const future = "IT Developer";</p>
                    <p className="mt-3 text-white">
                      console.log(future);
                    </p>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">
                      Learning progress
                    </span>
                    <span className="font-semibold text-green-600 dark:text-green-400">
                      75%
                    </span>
                  </div>

                  <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700">
                    <div className="h-full w-3/4 rounded-full bg-green-500"></div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
