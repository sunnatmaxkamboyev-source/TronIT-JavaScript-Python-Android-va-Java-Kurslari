import { useState } from "react";
import {
  Plus,
  Search,
  Pencil,
  Trash2,
  X,
  FolderOpen,
  Layers,
} from "lucide-react";

const initialCategories = [
  { id: 1, name: "JavaScript", description: "JavaScript dasturlash tili" },
  { id: 2, name: "Python", description: "Python dasturlash tili" },
  { id: 3, name: "SQL", description: "Ma'lumotlar bazasi va SQL" },
  { id: 4, name: "Java", description: "Java dasturlash tili" },
  { id: 5, name: "Kotlin", description: "Kotlin dasturlash tili" },
  { id: 6, name: "Android", description: "Android ilovalar yaratish" },
  { id: 7, name: "Flutter", description: "Flutter mobil dasturlash" },
  { id: 8, name: "Cybersecurity", description: "Kiberxavfsizlik" },
  { id: 9, name: "MongoDB", description: "NoSQL ma'lumotlar bazasi" },
  { id: 10, name: "Node.js", description: "Backend dasturlash" },
];

const initialCourses = [
  { category: "Cybersecurity", count: 1 },
  { category: "JavaScript", count: 1 },
  { category: "Node.js", count: 1 },
  { category: "Python", count: 1 },
  { category: "SQL", count: 1 },
  { category: "Java", count: 1 },
  { category: "Kotlin", count: 1 },
  { category: "Android", count: 1 },
  { category: "Flutter", count: 1 },
];

function AdminCategories() {
  const [categories, setCategories] = useState(initialCategories);
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    description: "",
  });

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(search.toLowerCase())
  );

  const getCourseCount = (name) => {
    return initialCourses.find((item) => item.category === name)?.count || 0;
  };

  const openAddModal = () => {
    setEditingId(null);
    setForm({ name: "", description: "" });
    setModalOpen(true);
  };

  const openEditModal = (category) => {
    setEditingId(category.id);
    setForm({
      name: category.name,
      description: category.description,
    });
    setModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = form.name.trim();

    if (!name) return;

    const duplicate = categories.some(
      (category) =>
        category.name.toLowerCase() === name.toLowerCase() &&
        category.id !== editingId
    );

    if (duplicate) {
      alert("Bu kategoriya allaqachon mavjud!");
      return;
    }

    if (editingId) {
      setCategories((previous) =>
        previous.map((category) =>
          category.id === editingId
            ? { ...category, ...form, name }
            : category
        )
      );
    } else {
      setCategories((previous) => [
        ...previous,
        {
          id: Date.now(),
          name,
          description: form.description.trim(),
        },
      ]);
    }

    setModalOpen(false);
    setEditingId(null);
    setForm({ name: "", description: "" });
  };

  const deleteCategory = (id) => {
    const confirmed = window.confirm(
      "Kategoriyani o'chirishni xohlaysizmi?"
    );

    if (confirmed) {
      setCategories((previous) =>
        previous.filter((category) => category.id !== id)
      );
    }
  };

  return (
    <div className="space-y-7 text-gray-900 dark:text-white">

      {/* Header */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold">Kategoriyalar</h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Kurs kategoriyalarini boshqaring.
          </p>
        </div>

        <button
          onClick={openAddModal}
          className="flex items-center justify-center gap-2 rounded-xl bg-green-500 px-5 py-3 font-semibold text-white hover:bg-green-600"
        >
          <Plus size={19} />
          Yangi kategoriya
        </button>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <FolderOpen size={25} className="mb-3 text-green-500" />
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Jami kategoriyalar
          </p>
          <h2 className="mt-1 text-3xl font-bold">
            {categories.length}
          </h2>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <Layers size={25} className="mb-3 text-blue-500" />
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Kurs mavjud kategoriyalar
          </p>
          <h2 className="mt-1 text-3xl font-bold">
            {categories.filter((category) => getCourseCount(category.name) > 0).length}
          </h2>
        </div>
      </div>

      {/* Search */}
      <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 dark:border-gray-800 dark:bg-gray-900">
        <Search size={19} className="text-gray-400" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Kategoriya qidirish..."
          className="w-full bg-transparent py-4 text-sm outline-none placeholder:text-gray-400"
        />
      </div>

      {/* Categories */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filteredCategories.map((category) => (
          <div
            key={category.id}
            className="rounded-2xl border border-gray-200 bg-white p-5 transition hover:border-green-300 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-green-700"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-600 dark:bg-green-500/10 dark:text-green-400">
                <FolderOpen size={23} />
              </div>

              <div className="flex gap-1">
                <button
                  onClick={() => openEditModal(category)}
                  className="rounded-lg p-2 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-500/10"
                  title="Tahrirlash"
                >
                  <Pencil size={17} />
                </button>

                <button
                  onClick={() => deleteCategory(category.id)}
                  className="rounded-lg p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10"
                  title="O'chirish"
                >
                  <Trash2 size={17} />
                </button>
              </div>
            </div>

            <h3 className="mt-5 text-lg font-bold">
              {category.name}
            </h3>

            <p className="mt-2 min-h-10 text-sm text-gray-500 dark:text-gray-400">
              {category.description || "Tavsif mavjud emas"}
            </p>

            <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4 text-sm dark:border-gray-800">
              <span className="text-gray-500 dark:text-gray-400">
                Kurslar soni
              </span>

              <span className="font-semibold text-green-600 dark:text-green-400">
                {getCourseCount(category.name)} ta
              </span>
            </div>
          </div>
        ))}

        {filteredCategories.length === 0 && (
          <p className="col-span-full py-10 text-center text-gray-500">
            Kategoriya topilmadi.
          </p>
        )}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl dark:bg-gray-900">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-bold">
                {editingId ? "Kategoriyani tahrirlash" : "Yangi kategoriya"}
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
                  Kategoriya nomi
                </label>

                <input
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  required
                  placeholder="Masalan: React.js"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-green-500 dark:border-gray-700 dark:bg-gray-800"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Tavsif
                </label>

                <textarea
                  value={form.description}
                  onChange={(e) =>
                    setForm({ ...form, description: e.target.value })
                  }
                  rows={3}
                  placeholder="Kategoriya haqida qisqacha..."
                  className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-green-500 dark:border-gray-700 dark:bg-gray-800"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-green-500 py-3 font-semibold text-white hover:bg-green-600"
              >
                {editingId ? "Saqlash" : "Kategoriya qo'shish"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminCategories;
