import { useState } from "react";
import {
  Search,
  Users,
  UserCheck,
  UserX,
  Eye,
  Trash2,
  X,
  ShieldCheck,
  Mail,
  CalendarDays,
} from "lucide-react";

const initialStudents = [
  {
    id: 1,
    name: "Ali Valiyev",
    email: "ali@gmail.com",
    courses: 4,
    joined: "2026-10-12",
    status: "Faol",
  },
  {
    id: 2,
    name: "Sardor Karimov",
    email: "sardor@gmail.com",
    courses: 3,
    joined: "2026-10-15",
    status: "Faol",
  },
  {
    id: 3,
    name: "Azizbek Xasanov",
    email: "aziz@gmail.com",
    courses: 2,
    joined: "2026-10-20",
    status: "Bloklangan",
  },
  {
    id: 4,
    name: "Madina Sobirova",
    email: "madina@gmail.com",
    courses: 5,
    joined: "2026-10-22",
    status: "Faol",
  },
  {
    id: 5,
    name: "Javohir Ergashev",
    email: "javohir@gmail.com",
    courses: 1,
    joined: "2026-10-25",
    status: "Faol",
  },
  {
    id: 6,
    name: "Shahzoda Aliyeva",
    email: "shahzoda@gmail.com",
    courses: 3,
    joined: "2026-11-01",
    status: "Bloklangan",
  },
];

function AdminStudents() {
  const [students, setStudents] = useState(initialStudents);
  const [search, setSearch] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);

  const filteredStudents = students.filter((student) =>
    `${student.name} ${student.email}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const activeCount = students.filter(
    (student) => student.status === "Faol"
  ).length;

  const blockedCount = students.filter(
    (student) => student.status === "Bloklangan"
  ).length;

  const toggleStatus = (id) => {
    setStudents((previous) =>
      previous.map((student) =>
        student.id === id
          ? {
              ...student,
              status:
                student.status === "Faol"
                  ? "Bloklangan"
                  : "Faol",
            }
          : student
      )
    );

    if (selectedStudent?.id === id) {
      setSelectedStudent((previous) => ({
        ...previous,
        status:
          previous.status === "Faol"
            ? "Bloklangan"
            : "Faol",
      }));
    }
  };

  const deleteStudent = (id) => {
    const confirmed = window.confirm(
      "Ushbu o'quvchini o'chirishni xohlaysizmi?"
    );

    if (!confirmed) return;

    setStudents((previous) =>
      previous.filter((student) => student.id !== id)
    );

    if (selectedStudent?.id === id) {
      setSelectedStudent(null);
    }
  };

  return (
    <div className="space-y-7 text-gray-900 dark:text-white">

      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">
          O'quvchilar
        </h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Platformadagi o'quvchilarni boshqaring.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <Users size={25} className="mb-3 text-blue-500" />
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Jami o'quvchilar
          </p>
          <h2 className="mt-1 text-3xl font-bold">
            {students.length}
          </h2>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <UserCheck size={25} className="mb-3 text-green-500" />
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Faol o'quvchilar
          </p>
          <h2 className="mt-1 text-3xl font-bold">
            {activeCount}
          </h2>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <UserX size={25} className="mb-3 text-red-500" />
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Bloklanganlar
          </p>
          <h2 className="mt-1 text-3xl font-bold">
            {blockedCount}
          </h2>
        </div>
      </div>

      {/* Search */}
      <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 dark:border-gray-800 dark:bg-gray-900">
        <Search size={19} className="text-gray-400" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Ism yoki email orqali qidirish..."
          className="w-full bg-transparent py-4 text-sm outline-none placeholder:text-gray-400"
        />
      </div>

      {/* Students table */}
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px] text-left">
            <thead className="bg-gray-50 text-xs uppercase text-gray-500 dark:bg-gray-800 dark:text-gray-400">
              <tr>
                <th className="px-6 py-4">O'quvchi</th>
                <th className="px-6 py-4">Kurslar</th>
                <th className="px-6 py-4">Ro'yxatdan o'tgan</th>
                <th className="px-6 py-4">Holati</th>
                <th className="px-6 py-4 text-right">Amallar</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {filteredStudents.map((student) => (
                <tr
                  key={student.id}
                  className="transition hover:bg-gray-50 dark:hover:bg-gray-800/50"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 font-bold text-green-700 dark:bg-green-500/10 dark:text-green-400">
                        {student.name.charAt(0)}
                      </div>

                      <div>
                        <p className="font-semibold">
                          {student.name}
                        </p>
                        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                          {student.email}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4 text-sm">
                    {student.courses} ta
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                    {student.joined}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`rounded-lg px-3 py-1.5 text-xs font-medium ${
                        student.status === "Faol"
                          ? "bg-green-50 text-green-600 dark:bg-green-500/10 dark:text-green-400"
                          : "bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400"
                      }`}
                    >
                      {student.status}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => setSelectedStudent(student)}
                        title="Batafsil"
                        className="rounded-lg p-2 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-500/10"
                      >
                        <Eye size={17} />
                      </button>

                      <button
                        onClick={() => toggleStatus(student.id)}
                        title="Holatini o'zgartirish"
                        className="rounded-lg p-2 text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-500/10"
                      >
                        <ShieldCheck size={17} />
                      </button>

                      <button
                        onClick={() => deleteStudent(student.id)}
                        title="O'chirish"
                        className="rounded-lg p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10"
                      >
                        <Trash2 size={17} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filteredStudents.length === 0 && (
                <tr>
                  <td
                    colSpan="5"
                    className="px-6 py-12 text-center text-gray-500"
                  >
                    O'quvchi topilmadi.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Student details modal */}
      {selectedStudent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl dark:bg-gray-900">

            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-bold">
                O'quvchi ma'lumotlari
              </h2>

              <button
                onClick={() => setSelectedStudent(null)}
                className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex flex-col items-center border-b border-gray-100 pb-6 dark:border-gray-800">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-3xl font-bold text-green-700 dark:bg-green-500/10 dark:text-green-400">
                {selectedStudent.name.charAt(0)}
              </div>

              <h3 className="mt-4 text-xl font-bold">
                {selectedStudent.name}
              </h3>

              <span className="mt-2 rounded-lg bg-green-50 px-3 py-1 text-xs font-medium text-green-600 dark:bg-green-500/10 dark:text-green-400">
                {selectedStudent.status}
              </span>
            </div>

            <div className="space-y-4 pt-5">
              <div className="flex items-center gap-3">
                <Mail className="text-gray-400" size={19} />
                <div>
                  <p className="text-xs text-gray-500">Email</p>
                  <p className="text-sm font-medium">
                    {selectedStudent.email}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <BookOpenIcon />
                <div>
                  <p className="text-xs text-gray-500">Kurslar</p>
                  <p className="text-sm font-medium">
                    {selectedStudent.courses} ta
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <CalendarDays className="text-gray-400" size={19} />
                <div>
                  <p className="text-xs text-gray-500">
                    Ro'yxatdan o'tgan sana
                  </p>
                  <p className="text-sm font-medium">
                    {selectedStudent.joined}
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setSelectedStudent(null)}
              className="mt-7 w-full rounded-xl bg-green-500 py-3 font-semibold text-white hover:bg-green-600"
            >
              Yopish
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function BookOpenIcon() {
  return <Users size={19} className="text-gray-400" />;
}

export default AdminStudents;
