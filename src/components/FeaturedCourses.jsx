
import { Link } from "react-router-dom";
import { PlayCircle, BookOpen, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const courses = [
  { id: 1, title: "Kiberxavfsizlik", author: "Saud Abdulwahed", lessons: 28, category: "Cybersecurity" },
  { id: 2, title: "JavaScript", author: "Farkhod Dadajanov", lessons: 27, category: "Frontend Development" },
  { id: 3, title: "Node.js", author: "Noma'lum", lessons: 26, category: "Backend Development" },
  { id: 4, title: "Python", author: "Noma'lum", lessons: 23, category: "Programming" },
  { id: 5, title: "SQL", author: "Noma'lum", lessons: 5, category: "Database" },
  { id: 6, title: "Java Advanced", author: "Noma'lum", lessons: 27, category: "Programming" },
  { id: 7, title: "Kotlin", author: "Noma'lum", lessons: 16, category: "Mobile Development" },
  { id: 8, title: "Android", author: "Noma'lum", lessons: 12, category: "Mobile Development" },
  { id: 9, title: "Flutter", author: "Zayniddin Mamarasulasov", lessons: 16, category: "Mobile Development" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateX: 8 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

function FeaturedCourses() {
  return (
    <section className="overflow-hidden bg-white py-20 transition-colors duration-300 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-3 text-sm font-semibold tracking-widest text-green-600">
              BIZNING KURSLAR
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Mashhur IT kurslar
            </h2>

            <p className="mt-3 text-gray-500 dark:text-gray-400">
              O'zingizga mos kursni tanlang va o'rganishni boshlang.
            </p>
          </div>

          <div className="text-sm text-gray-500 dark:text-gray-400">
            Jami {courses.length} ta kurs
          </div>
        </motion.div>

        {/* Course cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {courses.map((course) => (
            <motion.div
              key={course.id}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.25 },
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-colors hover:border-green-300 hover:shadow-xl hover:shadow-green-500/10 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-green-700"
            >
              {/* Decorative background */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-green-500/0 blur-3xl transition-all duration-500 group-hover:bg-green-500/10" />

              <motion.div
                whileHover={{ rotate: -10, scale: 1.12 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-green-50 dark:bg-green-950/40"
              >
                <BookOpen
                  size={27}
                  className="text-green-600 dark:text-green-400"
                />
              </motion.div>

              <span className="relative rounded-full bg-green-50 px-3 py-1.5 text-xs font-medium text-green-600 dark:bg-green-950/40 dark:text-green-400">
                {course.category}
              </span>

              <h3 className="relative mt-5 text-xl font-bold text-gray-900 transition-colors group-hover:text-green-600 dark:text-white dark:group-hover:text-green-400">
                {course.title}
              </h3>

              <p className="relative mt-2 text-sm text-gray-500 dark:text-gray-400">
                Muallif: {course.author}
              </p>

              <div className="relative mt-5 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <PlayCircle
                  size={18}
                  className="text-green-600 dark:text-green-400"
                />
                {course.lessons} ta video dars
              </div>

              <Link
                to={`/courses/${course.id}`}
                className="relative mt-6 flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl border border-green-500 py-3 font-semibold text-green-600 transition-colors hover:bg-green-500 hover:text-white dark:text-green-400"
              >
                Kursni ko'rish

                <motion.span
                  className="inline-flex"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                >
                  <ArrowRight size={18} />
                </motion.span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default FeaturedCourses;
