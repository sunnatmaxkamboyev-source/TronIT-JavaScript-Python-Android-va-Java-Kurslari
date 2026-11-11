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

      <main className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <p className="text-green-600 text-sm font-semibold mb-3">
              TRONIT TA'LIM PLATFORMASI
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Barcha <span className="text-green-500">kurslar</span>
            </h1>

            <p className="text-gray-500 mt-5 max-w-xl leading-7">
              O'zingizga mos IT yo'nalishini tanlang va yangi
              bilimlarni egallashni boshlang.
            </p>

            <div className="flex flex-wrap gap-8 mt-8">
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  {courses.length}
                </p>
                <p className="text-sm text-gray-500">Ta kurs</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-gray-900">
                  {courses.reduce((sum, course) => sum + course.lessons, 0)}
                </p>
                <p className="text-sm text-gray-500">Video dars</p>
              </div>
            </div>
          </div>
        </section>

        {/* Courses */}
        <section className="max-w-7xl mx-auto px-6 py-14">
          {/* Search and filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-10">
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
                className="w-full bg-white border border-gray-200 rounded-xl py-3.5 pl-12 pr-4 outline-none focus:border-green-500 transition"
              />
            </div>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-white border border-gray-200 rounded-xl px-5 py-3.5 outline-none focus:border-green-500 text-gray-700"
            >
              {courseCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Results */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">
              Mavjud kurslar
            </h2>

            <p className="text-sm text-gray-500">
              {filteredCourses.length} ta natija
            </p>
          </div>

          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <article
                  key={course.id}
                  className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-green-300 hover:shadow-lg transition duration-300"
                >
                  <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-5">
                    <BookOpen size={27} className="text-green-600" />
                  </div>

                  <span className="text-xs font-semibold text-green-600 bg-green-50 px-3 py-1.5 rounded-full">
                    {course.category}
                  </span>

                  <h3 className="text-xl font-bold text-gray-900 mt-5">
                    {course.title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-2">
                    Muallif: {course.author}
                  </p>

                  <p className="text-sm text-gray-500 leading-6 mt-4 min-h-12">
                    {course.description}
                  </p>

                  <div className="flex items-center gap-2 text-sm text-gray-500 mt-5">
                    <PlayCircle size={18} className="text-green-600" />
                    {course.lessons} ta video dars
                  </div>

                  <Link
                    to={`/courses/${course.id}`}
                    className="mt-6 flex items-center justify-center gap-2 w-full border border-green-500 text-green-600 hover:bg-green-500 hover:text-white py-3 rounded-xl font-semibold transition"
                  >
                    Kursni ko'rish
                    <ArrowRight size={18} />
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-gray-100 py-16 text-center">
              <Search size={35} className="text-gray-300 mx-auto mb-4" />

              <h3 className="text-lg font-bold text-gray-800">
                Kurs topilmadi
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                Boshqa nom yoki kategoriyani sinab ko'ring.
              </p>

              <button
                onClick={() => {
                  setSearch("");
                  setSelectedCategory("Barcha kurslar");
                }}
                className="mt-5 text-green-600 font-semibold hover:text-green-700"
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