
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  BookOpen,
  PlayCircle,
  Clock,
  ChevronLeft,
  CheckCircle2,
  Lock,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { courses } from "../data/courses";

function CourseDetail() {
  const { id } = useParams();

  const course = courses.find((item) => item.id === Number(id));

  const [selectedLesson, setSelectedLesson] = useState(1);

  if (!course) {
    return (
      <>
        <Navbar />

        <main className="min-h-[60vh] flex flex-col items-center justify-center px-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Kurs topilmadi
          </h1>

          <p className="text-gray-500 mt-3">
            Bunday kurs mavjud emas.
          </p>

          <Link
            to="/courses"
            className="mt-6 bg-green-500 text-white px-6 py-3 rounded-xl hover:bg-green-600 transition"
          >
            Kurslarga qaytish
          </Link>
        </main>

        <Footer />
      </>
    );
  }

  const currentLesson = course.lessonList.find(
    (lesson) => lesson.id === selectedLesson
  );

  return (
    <>
      <Navbar />

      <main className="bg-gray-50 min-h-screen">
        {/* Course header */}
        <section className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 py-10">
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-green-600 transition"
            >
              <ChevronLeft size={18} />
              Barcha kurslar
            </Link>

            <div className="mt-8 max-w-3xl">
              <span className="inline-block bg-green-50 text-green-600 px-3 py-1.5 rounded-full text-xs font-semibold">
                {course.category}
              </span>

              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mt-5">
                {course.title}
              </h1>

              <p className="text-gray-500 leading-7 mt-4">
                {course.description}
              </p>

              <p className="text-sm text-gray-500 mt-5">
                Muallif:{" "}
                <span className="font-semibold text-gray-800">
                  {course.author}
                </span>
              </p>

              <div className="flex flex-wrap gap-6 mt-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <BookOpen size={18} className="text-green-600" />
                  {course.lessons} ta dars
                </div>

                <div className="flex items-center gap-2">
                  <PlayCircle size={18} className="text-green-600" />
                  Video kurs
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lesson area */}
        <section className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Video player */}
            <div className="lg:col-span-2">
              <div className="bg-gray-950 rounded-2xl overflow-hidden aspect-video flex flex-col items-center justify-center text-center p-8">
                {currentLesson?.videoUrl ? (
                  <video
                    key={currentLesson.videoUrl}
                    controls
                    className="w-full h-full"
                    src={currentLesson.videoUrl}
                  />
                ) : (
                  <>
                    <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mb-5">
                      <PlayCircle
                        size={42}
                        className="text-green-500"
                      />
                    </div>

                    <h2 className="text-white text-xl font-bold">
                      {currentLesson?.title}
                    </h2>

                    <p className="text-gray-400 text-sm mt-3 max-w-md">
                      Bu dars uchun video hali joylanmagan.
                      Video materiallar keyinchalik qo'shiladi.
                    </p>

                    <span className="mt-6 text-xs text-green-500 bg-green-500/10 px-4 py-2 rounded-full">
                      Demo video oynasi
                    </span>
                  </>
                )}
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 p-6 mt-6">
                <h2 className="text-xl font-bold text-gray-900">
                  {currentLesson?.title}
                </h2>

                <p className="text-gray-500 text-sm leading-7 mt-3">
                  Siz hozir {course.title} kursining{" "}
                  {selectedLesson}-darsini tanladingiz.
                  Dars materiallari shu yerda namoyish etiladi.
                </p>
              </div>
            </div>

            {/* Lesson list */}
            <aside className="bg-white rounded-2xl border border-gray-100 overflow-hidden h-fit">
              <div className="p-5 border-b border-gray-100">
                <h2 className="text-lg font-bold text-gray-900">
                  Kurs darslari
                </h2>

                <p className="text-sm text-gray-500 mt-2">
                  {course.lessons} ta video dars
                </p>

                <div className="w-full h-2 bg-gray-100 rounded-full mt-4 overflow-hidden">
                  <div
                    className="h-full bg-green-500 rounded-full"
                    style={{
                      width: `${
                        (selectedLesson / course.lessons) * 100
                      }%`,
                    }}
                  />
                </div>
              </div>

              <div className="max-h-[550px] overflow-y-auto p-3">
                {course.lessonList.map((lesson) => {
                  const isActive = selectedLesson === lesson.id;

                  return (
                    <button
                      key={lesson.id}
                      onClick={() => setSelectedLesson(lesson.id)}
                      className={`w-full flex items-center gap-3 p-4 rounded-xl text-left transition mb-1 ${
                        isActive
                          ? "bg-green-50 border border-green-200"
                          : "hover:bg-gray-50 border border-transparent"
                      }`}
                    >
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                          isActive
                            ? "bg-green-500 text-white"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        {isActive ? (
                          <PlayCircle size={19} />
                        ) : (
                          <Lock size={17} />
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <p
                          className={`text-sm font-semibold ${
                            isActive
                              ? "text-green-700"
                              : "text-gray-700"
                          }`}
                        >
                          {lesson.title}
                        </p>

                        <div className="flex items-center gap-1 mt-1 text-xs text-gray-400">
                          <Clock size={12} />
                          {lesson.duration}
                        </div>
                      </div>

                      {isActive && (
                        <CheckCircle2
                          size={18}
                          className="text-green-500 shrink-0"
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default CourseDetail;
