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
import { motion } from "framer-motion";

const categories = [
  { id: 1, name: "JavaScript", description: "JavaScript dasturlash tili", icon: Code2, courses: 1 },
  { id: 2, name: "Python", description: "Python dasturlash tili", icon: Terminal, courses: 1 },
  { id: 3, name: "SQL", description: "Ma'lumotlar bazasi", icon: Database, courses: 1 },
  { id: 4, name: "Java", description: "Java Advanced dasturlash", icon: Coffee, courses: 1 },
  { id: 5, name: "Kotlin", description: "Zamonaviy Kotlin dasturlash", icon: Braces, courses: 1 },
  { id: 6, name: "Android", description: "Android ilovalar yaratish", icon: Smartphone, courses: 1 },
  { id: 7, name: "Flutter", description: "Cross-platform ilovalar", icon: Layers, courses: 1 },
  { id: 8, name: "Kiberxavfsizlik", description: "Kiberxavfsizlik asoslari", icon: ShieldCheck, courses: 1 },
  { id: 9, name: "MongoDB", description: "NoSQL ma'lumotlar bazasi", icon: Cpu, courses: 0 },
  { id: 10, name: "Node.js", description: "Backend dasturlash", icon: Server, courses: 1 },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 45, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function Categories() {
  return (
    <section className="overflow-hidden bg-gray-50 py-20 transition-colors duration-300 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-3 text-sm font-semibold tracking-widest text-green-600">
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
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.id}
                variants={cardVariants}
                whileHover={{
                  y: -9,
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.98 }}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 transition-colors dark:border-gray-800 dark:bg-gray-900"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-green-400/0 blur-3xl transition-all duration-500 group-hover:bg-green-400/20" />

                <div className="relative flex items-start justify-between">
                  <motion.div
                    whileHover={{ rotate: 12, scale: 1.12 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 dark:bg-green-950/40"
                  >
                    <Icon
                      size={25}
                      className="text-green-600 dark:text-green-400"
                    />
                  </motion.div>

                  <span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-medium text-green-600 dark:bg-green-950/40 dark:text-green-400">
                    {category.courses} ta kurs
                  </span>
                </div>

                <h3 className="relative mt-5 text-xl font-bold text-gray-900 transition-colors group-hover:text-green-600 dark:text-white dark:group-hover:text-green-400">
                  {category.name}
                </h3>

                <p className="relative mt-2 text-sm text-gray-500 dark:text-gray-400">
                  {category.description}
                </p>

                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="absolute bottom-0 left-0 h-1 w-full origin-left bg-green-500"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Categories;
