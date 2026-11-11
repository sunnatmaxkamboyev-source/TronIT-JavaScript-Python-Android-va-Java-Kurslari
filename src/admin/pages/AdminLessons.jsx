
import { useState } from "react";
import {
  Plus,
  Search,
  Pencil,
  Trash2,
  X,
  PlayCircle,
  Video,
  BookOpen,
  Clock,
  ExternalLink,
} from "lucide-react";

const initialLessons = [
  {
    id: 1,
    title: "JavaScript nima?",
    course: "JavaScript",
    duration: "12:30",
    videoUrl: "https://example.com/video-1",
    status: "Faol",
  },
  {
    id: 2,
    title: "O'zgaruvchilar va ma'lumot turlari",
    course: "JavaScript",
    duration: "18:45",
    videoUrl: "https://example.com/video-2",
    status: "Faol",
  },
  {
    id: 3,
    title: "Node.js bilan tanishuv",
    course: "Node.js",
    duration: "15:20",
    videoUrl: "https://example.com/video-3",
    status: "Faol",
  },
  {
    id: 4,
    title: "Python asoslari",
    course: "Python",
    duration: "20:10",
    videoUrl: "https://example.com/video-4",
    status: "Faol",
  },
  {
    id: 5,
    title: "SQL SELECT operatori",
    course: "SQL",
    duration: "10:15",
    videoUrl: "https://example.com/video-5",
    status: "Faol",
  },
];

const emptyForm = {
  title: "",
  course: "JavaScript",
  duration: "",
  videoUrl: "",
};

const courseOptions = [
  "Kiberxavfsizlik",
  "JavaScript",
  "Node.js",
  "Python",
  "SQL",
  "Java Advanced",
  "Kotlin",
  "Android",
  "Flutter",
];

function AdminLessons() {
  const [lessons, setLessons] = useState(initialLessons);
  const [search, setSearch] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("Barchasi");
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyForm);

  const filteredLessons = lessons.filter((lesson) => {
    const matchesSearch = lesson.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCourse =
      selectedCourse === "Barchasi" ||
      lesson.course === selectedCourse;

    return matchesSearch && matchesCourse;
  });

  const openAddModal = () => {
    setEditingId(null);
    setForm(emptyForm);
    setModalOpen(true);
  };

  const openEditModal = (lesson) => {
    setEditingId(lesson.id);
    setForm({
      title: lesson.title,
      course: lesson.course,
      duration: lesson.duration,
      videoUrl: lesson.videoUrl,
    });
    setModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const lessonData = {
      ...form,
      title: form.title.trim(),
      videoUrl: form.videoUrl.trim(),
    };

    if (editingId) {
      setLessons((previous) =>
        previous.map((lesson) =>
          lesson.id === editingId
            ? { ...lesson, ...lessonData }
            : lesson
        )
      );
    } else {
      setLessons((previous) => [
        ...previous,
        {
          id: Date.now(),
          ...lessonData,
          status: "Faol",
        },
      ]);
    }

    setModalOpen(false);
    setEditingId(null);
    setForm(emptyForm);
  };

  const deleteLesson = (id) => {
    if (!window.confirm("Ushbu darsni o'chirmoqchimisiz?")) {
      return;
    }

    setLessons((previous) =>
      previous.filter((lesson) => lesson.id !== id)
    );
  };

  return (
    <div className="space-y-7 text-gray-900 dark:text-white">

      {/* Header */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold">Video darslar</h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Barcha kurslarning video darslarini boshqaring.
          </p>
        </div>

        <button
          onClick={openAddModal}
          className="flex items-center justify-center gap-2 rounded-xl bg-green-500 px-5 py-3 font-semibold text-white hover:bg-green-600"
        >
          <Plus size={19} />
          Yangi dars
        </button>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <Video size={25} className="mb-3 text-green-500" />
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Jami video darslar
          </p>
          <h2 className="mt-1 text-3xl font-bold">{lessons.length}</h2>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <BookOpen size={25} className="mb-3 text-blue-500" />
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Kurslar soni
          </p>
          <h2 className="mt-1 text-3xl font-bold">
            {new Set(lessons.map((lesson) => lesson.course)).size}
          </h2>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <Clock size={25} className="mb-3 text-purple-500" />
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Faol darslar
          </p>
          <h2 className="mt-1 text-3xl font-bold">
            {lessons.filter((lesson) => lesson.status === "Faol").length}
          </h2>
        </div>
      </div>

      {/* Search and filter */}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 dark:border-gray-800 dark:bg-gray-900">
          <Search size={19} className="text-gray-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Dars nomini qidirish..."
            className="w-full bg-transparent py-4 text-sm outline-none"
          />
        </div>

        <select
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
          className="rounded-xl border border-gray-200 bg-white px-4 py-4 text-sm outline-none dark:border-gray-800 dark:bg-gray-900"
        >
          <option value="Barchasi">Barcha kurslar</option>
          {courseOptions.map((course) => (
            <option key={course} value={course}>
              {course}
            </option>
          ))}
        </select>
      </div>

      {/* Lessons table */}
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px] text-left">
            <thead className="bg-gray-50 text-xs uppercase text-gray-500 dark:bg-gray-800 dark:text-gray-400">
              <tr>
                <th className="px-6 py-4">Dars nomi</th>
                <th className="px-6 py-4">Kurs</th>
                <th className="px-6 py-4">Davomiyligi</th>
                <th className="px-6 py-4">Holati</th>
                <th className="px-6 py-4 text-right">Amallar</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {filteredLessons.map((lesson) => (
                <tr key={lesson.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-600 dark:bg-green-500/10 dark:text-green-400">
                        <PlayCircle size={20} />
                      </div>
                      <span className="font-semibold">{lesson.title}</span>
                    </div>
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                    {lesson.course}
                  </td>

                  <td className="px-6 py-4 text-sm">
                    {lesson.duration}
                  </td>

                  <td className="px-6 py-4">
                    <span className="rounded-lg bg-green-50 px-3 py-1.5 text-xs font-medium text-green-600 dark:bg-green-500/10 dark:text-green-400">
                      {lesson.status}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex justify-end gap-2">
                      <a
                        href={lesson.videoUrl}
                        target="_blank"
                        rel="noreferrer"
                        title="Video havolasi"
                        className="rounded-lg p-2 text-green-500 hover:bg-green-50 dark:hover:bg-green-500/10"
                      >
                        <ExternalLink size={17} />
                      </a>

                      <button
                        onClick={() => openEditModal(lesson)}
                        title="Tahrirlash"
                        className="rounded-lg p-2 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-500/10"
                      >
                        <Pencil size={17} />
                      </button>

                      <button
                        onClick={() => deleteLesson(lesson.id)}
                        title="O'chirish"
                        className="rounded-lg p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10"
                      >
                        <Trash2 size={17} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filteredLessons.length === 0 && (
                <tr>
                  <td colSpan="5" className="px-6 py-12 text-center text-gray-500">
                    Dars topilmadi.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add/Edit modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl dark:bg-gray-900">

            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-bold">
                {editingId ? "Darsni tahrirlash" : "Yangi dars qo'shish"}
              </h2>

              <button
                onClick={() => setModalOpen(false)}
                className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Dars nomi
                </label>
                <input
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  required
                  placeholder="Masalan: React Hooks"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-green-500 dark:border-gray-700 dark:bg-gray-800"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Kurs
                </label>
                <select
                  value={form.course}
                  onChange={(e) => setForm({ ...form, course: e.target.value })}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-green-500 dark:border-gray-700 dark:bg-gray-800"
                >
                  {courseOptions.map((course) => (
                    <option key={course} value={course}>
                      {course}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Davomiyligi
                </label>
                <input
                  value={form.duration}
                  onChange={(e) => setForm({ ...form, duration: e.target.value })}
                  required
                  placeholder="Masalan: 15:30"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-green-500 dark:border-gray-700 dark:bg-gray-800"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Video URL
                </label>
                <input
                  type="url"
                  value={form.videoUrl}
                  onChange={(e) => setForm({ ...form, videoUrl: e.target.value })}
                  required
                  placeholder="https://..."
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-green-500 dark:border-gray-700 dark:bg-gray-800"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-green-500 py-3 font-semibold text-white hover:bg-green-600"
              >
                {editingId ? "O'zgarishlarni saqlash" : "Dars qo'shish"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminLessons;
