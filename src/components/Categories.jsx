
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
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

    
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-green-600 font-semibold text-sm mb-3">
              BIZNING YO'NALISHLAR
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              O'zingizga mos yo'nalishni tanlang
            </h2>

            <p className="text-gray-500 mt-3">
              IT olamidagi bilimlaringizni bugundan boshlang.
            </p>
          </div>

          <p className="text-gray-500 font-medium">
            {categories.length} ta yo'nalish
          </p>
        </div>

        {/* Categories grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.id}
                className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-green-300 hover:shadow-lg transition duration-300 cursor-pointer"
              >
                <div className="flex items-start justify-between">

                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                    <Icon size={25} className="text-green-600" />
                  </div>

                  <span className="text-xs bg-green-50 text-green-600 px-3 py-1.5 rounded-full font-medium">
                    {category.courses} ta kurs
                  </span>

                </div>

                <h3 className="text-xl font-bold text-gray-900 mt-5">
                  {category.name}
                </h3>

                <p className="text-gray-500 text-sm mt-2">
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
