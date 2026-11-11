
import { Link } from "react-router-dom";
import { PlayCircle, BookOpen, ArrowRight } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Kiberxavfsizlik",
    author: "Saud Abdulwahed",
    lessons: 28,
    category: "Cybersecurity",
  },
  {
    id: 2,
    title: "JavaScript",
    author: "Farkhod Dadajanov",
    lessons: 27,
    category: "Frontend Development",
  },
  {
    id: 3,
    title: "Node.js",
    author: "Noma'lum",
    lessons: 26,
    category: "Backend Development",
  },
  {
    id: 4,
    title: "Python",
    author: "Noma'lum",
    lessons: 23,
    category: "Programming",
  },
  {
    id: 5,
    title: "SQL",
    author: "Noma'lum",
    lessons: 5,
    category: "Database",
  },
  {
    id: 6,
    title: "Java Advanced",
    author: "Noma'lum",
    lessons: 27,
    category: "Programming",
  },
  {
    id: 7,
    title: "Kotlin",
    author: "Noma'lum",
    lessons: 16,
    category: "Mobile Development",
  },
  {
    id: 8,
    title: "Android",
    author: "Noma'lum",
    lessons: 12,
    category: "Mobile Development",
  },
  {
    id: 9,
    title: "Flutter",
    author: "Zayniddin Mamarasulov",
    lessons: 16,
    category: "Mobile Development",
  },
];

function FeaturedCourses() {
  return (
    <section className="bg-white py-20 transition-colors duration-300 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section heading */}
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold text-green-600">
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
        </div>

        {/* Course cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group rounded-2xl border border-gray-100 bg-white p-6 transition duration-300 hover:border-green-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-green-700"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-green-50 dark:bg-green-950/40">
                <BookOpen
                  size={27}
                  className="text-green-600 dark:text-green-400"
                />
              </div>

              <span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-medium text-green-600 dark:bg-green-950/40 dark:text-green-400">
                {course.category}
              </span>

              <h3 className="mt-5 text-xl font-bold text-gray-900 dark:text-white">
                {course.title}
              </h3>

              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Muallif: {course.author}
              </p>

              <div className="mt-5 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <PlayCircle
                  size={18}
                  className="text-green-600 dark:text-green-400"
                />
                {course.lessons} ta video dars
              </div>

              <Link
                to={`/courses/${course.id}`}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-green-500 py-3 font-semibold text-green-600 transition hover:bg-green-500 hover:text-white dark:text-green-400"
              >
                Kursni ko'rish
                <ArrowRight size={18} />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FeaturedCourses;
