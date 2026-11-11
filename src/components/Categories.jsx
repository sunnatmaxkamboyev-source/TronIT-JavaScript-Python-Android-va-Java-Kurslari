
import {
  Code2,
  Database,
  Coffee,
  Smartphone,
  ShieldCheck,
  Braces,
  Terminal,
  Cpu,
  Layers,
  Server,
} from "lucide-react";

const categories = [
  {
    id: 1,
    name: "JavaScript",
    description: "JavaScript dasturlash tili",
    icon: Code2,
    courses: 1,
  },
  {
    id: 2,
    name: "Python",
    description: "Python dasturlash tili",
    icon: Terminal,
    courses: 1,
  },
  {
    id: 3,
    name: "SQL",
    description: "Ma'lumotlar bazasi",
    icon: Database,
    courses: 1,
  },
  {
    id: 4,
    name: "Java",
    description: "Java Advanced dasturlash",
    icon: Coffee,
    courses: 1,
  },
  {
    id: 5,
    name: "Kotlin",
    description: "Zamonaviy Kotlin dasturlash",
    icon: Braces,
    courses: 1,
  },
  {
    id: 6,
    name: "Android",
    description: "Android ilovalar yaratish",
    icon: Smartphone,
    courses: 1,
  },
  {
    id: 7,
    name: "Flutter",
    description: "Cross-platform ilovalar",
    icon: Layers,
    courses: 1,
  },
  {
    id: 8,
    name: "Kiberxavfsizlik",
    description: "Kiberxavfsizlik asoslari",
    icon: ShieldCheck,
    courses: 1,
  },
  {
    id: 9,
    name: "MongoDB",
    description: "NoSQL ma'lumotlar bazasi",
    icon: Cpu,
    courses: 0,
  },
  {
    id: 10,
    name: "Node.js",
    description: "Backend dasturlash",
    icon: Server,
    courses: 1,
  },
];

function Categories() {
  return (
    <section className="bg-gray-50 py-20 transition-colors duration-300 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold text-green-600">
              BIZNING YO'NALISHLAR
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              O'zingizga mos yo'nalishni tanlang
            </h2>

            <p className="mt-3 text-gray-500 dark:text-gray-400">
              IT olamidagi bilimlaringizni bugundan boshlang.
            </p>
          </div>

          <p className="font-medium text-gray-500 dark:text-gray-400">
            {categories.length} ta yo'nalish
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.id}
                className="cursor-pointer rounded-2xl border border-gray-100 bg-white p-6 transition duration-300 hover:border-green-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-green-700"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 dark:bg-green-950/40">
                    <Icon
                      size={25}
                      className="text-green-600 dark:text-green-400"
                    />
                  </div>

                  <span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-medium text-green-600 dark:bg-green-950/40 dark:text-green-400">
                    {category.courses} ta kurs
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold text-gray-900 dark:text-white">
                  {category.name}
                </h3>

                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  {category.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Categories;
