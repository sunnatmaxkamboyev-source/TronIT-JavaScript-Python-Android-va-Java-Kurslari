import { Link } from "react-router-dom";
import { ArrowRight, Play, Code2 } from "lucide-react";

function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          
          <div>
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Zamonaviy IT ta'lim platformasi
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mt-7">
              Kelajagingni
              <span className="text-green-500"> kod bilan </span>
              yarat.
            </h1>

            <p className="text-gray-500 text-lg leading-8 mt-6 max-w-lg">
              Dasturlashni noldan o'rganing, yangi bilimlarni
              egallang va IT sohasida o'z kelajagingizni yarating.
            </p>

            <div className="flex flex-wrap gap-4 mt-9">
              <Link
                to="/courses"
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3.5 rounded-xl font-semibold transition"
              >
                Kurslarni ko'rish
                <ArrowRight size={19} />
              </Link>

              <Link
                to="/register"
                className="flex items-center gap-2 border border-gray-200 hover:border-green-500 text-gray-700 px-6 py-3.5 rounded-xl font-semibold transition"
              >
                <Play size={18} />
                Bepul boshlash
              </Link>
            </div>
          </div>

         
          <div className="relative">
            <div className="bg-green-50 rounded-3xl p-10 min-h-[380px] flex items-center justify-center">

              <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-sm">
                <div className="flex items-center gap-3 mb-7">
                  <div className="bg-green-100 p-3 rounded-xl">
                    <Code2 className="text-green-600" size={28} />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900">
                      Learn Programming
                    </h3>
                    <p className="text-sm text-gray-400">
                      Start your journey
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-gray-900 rounded-xl p-4 text-sm font-mono text-green-400">
                    <p>const future = "IT Developer";</p>
                    <p className="mt-3 text-white">
                      console.log(future);
                    </p>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">
                      Learning progress
                    </span>
                    <span className="text-green-600 font-semibold">
                      75%
                    </span>
                  </div>

                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-green-500 rounded-full"></div>
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
