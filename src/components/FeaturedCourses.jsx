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
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10">
          <div>
            <p className="text-green-600 font-semibold text-sm mb-3">
              BIZNING KURSLAR
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Mashhur IT kurslar
            </h2>

            <p className="text-gray-500 mt-3">
              O'zingizga mos kursni tanlang va o'rganishni boshlang.
            </p>
          </div>

          <div className="text-sm text-gray-500">
            Jami {courses.length} ta kurs
          </div>
        </div>

        {/* Courses */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {courses.map((course) => (
            <div
              key={course.id}
              className="group border border-gray-100 rounded-2xl p-6 hover:border-green-300 hover:shadow-lg transition duration-300"
            >
              {/* Course icon */}
              <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-5">
                <BookOpen size={27} className="text-green-600" />
              </div>

              {/* Category */}
              <span className="text-xs font-medium text-green-600 bg-green-50 px-3 py-1.5 rounded-full">
                {course.category}
              </span>

              {/* Course title */}
              <h3 className="text-xl font-bold text-gray-900 mt-5">
                {course.title}
              </h3>

              {/* Author */}
              <p className="text-sm text-gray-500 mt-2">
                Muallif: {course.author}
              </p>

              {/* Lessons */}
              <div className="flex items-center gap-2 text-gray-500 text-sm mt-5">
                <PlayCircle size={18} className="text-green-600" />
                {course.lessons} ta video dars
              </div>

              {/* Button */}
              <Link
                to={`/courses/${course.id}`}
                className="mt-6 flex items-center justify-center gap-2 w-full border border-green-500 text-green-600 hover:bg-green-500 hover:text-white py-3 rounded-xl font-semibold transition"
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
