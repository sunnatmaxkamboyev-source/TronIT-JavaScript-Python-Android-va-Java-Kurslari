
import { useState } from "react";
import {
  Plus,
  Search,
  Pencil,
  Trash2,
  BookOpen,
  X,
} from "lucide-react";

const initialCourses = [
  {
    id: 1,
    title: "Kiberxavfsizlik",
    author: "Saud Abdulwahed",
    category: "Cybersecurity",
    lessons: 28,
    status: "Faol",
  },
  {
    id: 2,
    title: "JavaScript",
    author: "Farkhod Dadajanov",
    category: "JavaScript",
    lessons: 27,
    status: "Faol",
  },
  {
    id: 3,
    title: "Node.js",
    author: "Admin",
    category: "Node.js",
    lessons: 26,
    status: "Faol",
  },
  {
    id: 4,
    title: "Python",
    author: "Admin",
    category: "Python",
    lessons: 23,
    status: "Faol",
  },
  {
    id: 5,
    title: "SQL",
    author: "Admin",
    category: "SQL",
    lessons: 5,
    status: "Faol",
  },
  {
    id: 6,
    title: "Java Advanced",
    author: "Admin",
    category: "Java",
    lessons: 27,
    status: "Faol",
  },
  {
    id: 7,
    title: "Kotlin",
    author: "Admin",
    category: "Kotlin",
    lessons: 16,
    status: "Faol",
  },
  {
    id: 8,
    title: "Android",
    author: "Admin",
    category: "Android",
    lessons: 12,
    status: "Faol",
  },
  {
    id: 9,
    title: "Flutter",
    author: "Zayniddin Mamarasulov",
    category: "Flutter",
    lessons: 16,
    status: "Faol",
  },
];

const emptyForm = {
  title: "",
  author: "",
  category: "JavaScript",
  lessons: "",
};

function AdminCourses() {
  const [courses, setCourses] = useState(initialCourses);
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyForm);

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  const openAddModal = () => {
    setEditingId(null);
    setForm(emptyForm);
    setModalOpen(true);
  };

  const openEditModal = (course) => {
    setEditingId(course.id);
    setForm({
      title: course.title,
      author: course.author,
      category: course.category,
      lessons: String(course.lessons),
    });
    setModalOpen(true);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title.trim() || !form.author.trim() || !form.lessons) {
      return;
    }

    if (editingId) {
      setCourses((previous) =>
        previous.map((course) =>
          course.id === editingId
            ? {
                ...course,
                ...form,
                lessons: Number(form.lessons),
              }
            : course
        )
      );
    } else {
      setCourses((previous) => [
        ...previous,
        {
          id: Date.now(),
          ...form,
          lessons: Number(form.lessons),
          status: "Faol",
        },
      ]);
    }

    setModalOpen(false);
    setForm(emptyForm);
    setEditingId(null);
  };

  const deleteCourse = (id) => {
    const confirmed = window.confirm(
      "Ushbu kursni o'chirishni xohlaysizmi?"
    );

    if (confirmed) {
      setCourses((previous) =>
        previous.filter((course) => course.id !== id)
      );
    }
  };

  return (
    <div className="space-y-7 text-gray-900 dark:text-white">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold">Kurslarni boshqarish</h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Platformadagi barcha kurslarni boshqaring.
          </p>
        </div>

        <button
          onClick={openAddModal}
          className="flex items-center justify-center gap-2 rounded-xl bg-green-500 px-5 py-3 font-semibold text-white transition hover:bg-green-600"
        >
          <Plus size={19} />
          Yangi kurs
        </button>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <BookOpen className="mb-3 text-green-500" size={25} />
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Jami kurslar
          </p>
          <h2 className="mt-1 text-3xl font-bold">{courses.length}</h2>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <BookOpen className="mb-3 text-blue-500" size={25} />
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Jami video darslar
          </p>
          <h2 className="mt-1 text-3xl font-bold">
            {courses.reduce((sum, course) => sum + course.lessons, 0)}
          </h2>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <BookOpen className="mb-3 text-purple-500" size={25} />
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Faol kurslar
          </p>
          <h2 className="mt-1 text-3xl font-bold">
            {courses.filter((course) => course.status === "Faol").length}
          </h2>
        </div>
      </div>

      {/* Search */}
      <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 dark:border-gray-800 dark:bg-gray-900">
        <Search size={19} className="text-gray-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Kurs nomini qidirish..."
          className="w-full bg-transparent py-4 text-sm outline-none placeholder:text-gray-400"
        />
      </div>

      {/* Courses table */}
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[750px] text-left">
            <thead className="bg-gray-50 text-xs uppercase text-gray-500 dark:bg-gray-800 dark:text-gray-400">
              <tr>
                <th className="px-6 py-4">Kurs nomi</th>
                <th className="px-6 py-4">Muallif</th>
                <th className="px-6 py-4">Kategoriya</th>
                <th className="px-6 py-4">Darslar</th>
                <th className="px-6 py-4">Holati</th>
                <th className="px-6 py-4 text-right">Amallar</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {filteredCourses.map((course) => (
                <tr key={course.id} className="transition hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="px-6 py-4 font-semibold">
                    {course.title}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                    {course.author}
                  </td>
                  <td className="px-6 py-4">
                    <span className="rounded-lg bg-green-50 px-3 py-1.5 text-xs font-medium text-green-600 dark:bg-green-500/10 dark:text-green-400">
                      {course.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    {course.lessons} ta
                  </td>
                  <td className="px-6 py-4">
                    <span className="rounded-lg bg-green-50 px-3 py-1.5 text-xs font-medium text-green-600 dark:bg-green-500/10 dark:text-green-400">
                      {course.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => openEditModal(course)}
                        className="rounded-lg p-2 text-blue-500 transition hover:bg-blue-50 dark:hover:bg-blue-500/10"
                        title="Tahrirlash"
                      >
                        <Pencil size={17} />
                      </button>

                      <button
                        onClick={() => deleteCourse(course.id)}
                        className="rounded-lg p-2 text-red-500 transition hover:bg-red-50 dark:hover:bg-red-500/10"
                        title="O'chirish"
                      >
                        <Trash2 size={17} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filteredCourses.length === 0 && (
                <tr>
                  <td colSpan="6" className="px-6 py-12 text-center text-gray-500">
                    Kurs topilmadi.
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
                {editingId ? "Kursni tahrirlash" : "Yangi kurs qo'shish"}
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
                  Kurs nomi
                </label>
                <input
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  required
                  placeholder="Masalan: React.js"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-green-500 dark:border-gray-700 dark:bg-gray-800"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Muallif
                </label>
                <input
                  name="author"
                  value={form.author}
                  onChange={handleChange}
                  required
                  placeholder="Muallif ismi"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-green-500 dark:border-gray-700 dark:bg-gray-800"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Kategoriya
                </label>
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-green-500 dark:border-gray-700 dark:bg-gray-800"
                >
                  {[
                    "JavaScript",
                    "Python",
                    "SQL",
                    "Java",
                    "Kotlin",
                    "Android",
                    "Flutter",
                    "Cybersecurity",
                    "MongoDB",
                    "Node.js",
                  ].map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Video darslar soni
                </label>
                <input
                  name="lessons"
                  type="number"
                  min="1"
                  value={form.lessons}
                  onChange={handleChange}
                  required
                  placeholder="Masalan: 20"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-green-500 dark:border-gray-700 dark:bg-gray-800"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-green-500 py-3 font-semibold text-white transition hover:bg-green-600"
              >
                {editingId ? "O'zgarishlarni saqlash" : "Kurs qo'shish"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminCourses;
