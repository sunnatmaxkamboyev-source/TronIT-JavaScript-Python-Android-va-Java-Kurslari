import { useMemo, useState } from "react";
import { Search, BookOpen, PlayCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { courses, courseCategories } from "../data/courses";

function Courses() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Barcha kurslar");

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(search.toLowerCase()) ||
        course.author.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        selectedCategory === "Barcha kurslar" ||
        course.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50 transition-colors duration-300 dark:bg-gray-950">

        {/* Header */}
        <section className="border-b border-gray-100 bg-white transition-colors dark:border-gray-800 dark:bg-gray-900">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <p className="mb-3 text-sm font-semibold text-green-600">
              TRONIT TA'LIM PLATFORMASI
            </p>

            <h1 className="text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
              Barcha <span className="text-green-500">kurslar</span>
            </h1>

            <p className="mt-5 max-w-xl leading-7 text-gray-500 dark:text-gray-400">
              O'zingizga mos IT yo'nalishini tanlang va yangi
              bilimlarni egallashni boshlang.
            </p>

            <div className="mt-8 flex flex-wrap gap-8">
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {courses.length}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Ta kurs
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {courses.reduce((sum, course) => sum + course.lessons, 0)}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Video dars
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Courses */}
        <section className="mx-auto max-w-7xl px-6 py-14">

          {/* Search and filter */}
          <div className="mb-10 flex flex-col gap-4 md:flex-row">
            <div className="relative flex-1">
              <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Kurs yoki muallifni qidiring..."
                className="w-full rounded-xl border border-gray-200 bg-white py-3.5 pl-12 pr-4 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-green-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              />
            </div>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="rounded-xl border border-gray-200 bg-white px-5 py-3.5 text-gray-700 outline-none focus:border-green-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200"
            >
              {courseCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Results */}
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Mavjud kurslar
            </h2>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              {filteredCourses.length} ta natija
            </p>
          </div>

          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredCourses.map((course) => (
                <article
                  key={course.id}
                  className="rounded-2xl border border-gray-100 bg-white p-6 transition duration-300 hover:border-green-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-green-700"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-green-50 dark:bg-green-950/40">
                    <BookOpen
                      size={27}
                      className="text-green-600 dark:text-green-400"
                    />
                  </div>

                  <span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-600 dark:bg-green-950/40 dark:text-green-400">
                    {course.category}
                  </span>

                  <h3 className="mt-5 text-xl font-bold text-gray-900 dark:text-white">
                    {course.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Muallif: {course.author}
                  </p>

                  <p className="mt-4 min-h-12 text-sm leading-6 text-gray-500 dark:text-gray-400">
                    {course.description}
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
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-gray-100 bg-white py-16 text-center dark:border-gray-800 dark:bg-gray-900">
              <Search
                size={35}
                className="mx-auto mb-4 text-gray-300"
              />

              <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                Kurs topilmadi
              </h3>

              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Boshqa nom yoki kategoriyani sinab ko'ring.
              </p>

              <button
                onClick={() => {
                  setSearch("");
                  setSelectedCategory("Barcha kurslar");
                }}
                className="mt-5 font-semibold text-green-600 hover:text-green-700"
              >
                Filtrlarni tozalash
              </button>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Courses;
