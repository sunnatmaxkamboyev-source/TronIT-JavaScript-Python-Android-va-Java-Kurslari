import {
  Users,
  BookOpen,
  PlayCircle,
  Wallet,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
  Clock,
  UserPlus,
} from "lucide-react";

function AdminDashboard() {
  const stats = [
    {
      title: "Jami o'quvchilar",
      value: "1,284",
      change: "+12.5%",
      positive: true,
      icon: Users,
      color: "blue",
    },
    {
      title: "Jami kurslar",
      value: "9",
      change: "+2 ta",
      positive: true,
      icon: BookOpen,
      color: "green",
    },
    {
      title: "Video darslar",
      value: "180",
      change: "+15 ta",
      positive: true,
      icon: PlayCircle,
      color: "purple",
    },
    {
      title: "Umumiy daromad",
      value: "$8,420",
      change: "-2.4%",
      positive: false,
      icon: Wallet,
      color: "orange",
    },
  ];

  const recentStudents = [
    {
      name: "Ali Valiyev",
      email: "ali@example.com",
      course: "JavaScript",
      date: "11.11.2026",
      status: "Faol",
      avatar: "A",
    },
    {
      name: "Madina Karimova",
      email: "madina@example.com",
      course: "Python",
      date: "10.11.2026",
      status: "Faol",
      avatar: "M",
    },
    {
      name: "Jasur Akbarov",
      email: "jasur@example.com",
      course: "Node.js",
      date: "09.11.2026",
      status: "Kutilmoqda",
      avatar: "J",
    },
    {
      name: "Sevara Rustamova",
      email: "sevara@example.com",
      course: "Flutter",
      date: "08.11.2026",
      status: "Faol",
      avatar: "S",
    },
  ];

  const recentCourses = [
    {
      name: "JavaScript",
      author: "Farkhod Dadajanov",
      lessons: 27,
      students: 320,
      progress: 85,
      color: "bg-yellow-400",
    },
    {
      name: "Kiberxavfsizlik",
      author: "Saud Abdulwahed",
      lessons: 28,
      students: 245,
      progress: 70,
      color: "bg-blue-500",
    },
    {
      name: "Flutter",
      author: "Zayniddin Mamarasulov",
      lessons: 16,
      students: 180,
      progress: 55,
      color: "bg-sky-500",
    },
  ];

  const colorClasses = {
    blue: "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
    green: "bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400",
    purple: "bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
    orange: "bg-orange-50 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400",
  };

  return (
    <div className="space-y-8">

    
      <section className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Xush kelibsiz, Administrator!
          </h2>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            TronIT platformasining umumiy holati bilan tanishing.
          </p>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <Clock size={17} />
          11-noyabr, 2026
        </div>
      </section>

     
      <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="rounded-2xl border border-gray-100 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="flex items-center justify-between">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${colorClasses[stat.color]}`}>
                  <Icon size={23} />
                </div>

                <span className={`flex items-center gap-1 text-xs font-semibold ${stat.positive ? "text-green-600 dark:text-green-400" : "text-red-500"}`}>
                  {stat.positive ? (
                    <ArrowUpRight size={15} />
                  ) : (
                    <ArrowDownRight size={15} />
                  )}
                  {stat.change}
                </span>
              </div>

              <p className="mt-5 text-sm text-gray-500 dark:text-gray-400">
                {stat.title}
              </p>

              <h3 className="mt-1 text-3xl font-bold text-gray-900 dark:text-white">
                {stat.value}
              </h3>
            </div>
          );
        })}
      </section>

      {/* Main content */}
      <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">

        {/* Students */}
        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white xl:col-span-2 dark:border-gray-800 dark:bg-gray-900">
          <div className="flex items-center justify-between border-b border-gray-100 p-6 dark:border-gray-800">
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white">
                So'nggi o'quvchilar
              </h3>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                Yaqinda ro'yxatdan o'tgan foydalanuvchilar
              </p>
            </div>

            <button
              type="button"
              className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
              aria-label="Qo'shimcha amallar"
            >
              <MoreHorizontal size={21} />
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] text-left">
              <thead>
                <tr className="bg-gray-50 text-xs text-gray-500 dark:bg-gray-800/70 dark:text-gray-400">
                  <th className="px-6 py-4 font-semibold">O'quvchi</th>
                  <th className="px-6 py-4 font-semibold">Kurs</th>
                  <th className="px-6 py-4 font-semibold">Sana</th>
                  <th className="px-6 py-4 font-semibold">Holat</th>
                </tr>
              </thead>

              <tbody>
                {recentStudents.map((student) => (
                  <tr
                    key={student.email}
                    className="border-t border-gray-100 dark:border-gray-800"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 font-bold text-green-700 dark:bg-green-900/40 dark:text-green-400">
                          {student.avatar}
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-gray-900 dark:text-white">
                            {student.name}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {student.email}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                      {student.course}
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                      {student.date}
                    </td>

                    <td className="px-6 py-4">
                      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        student.status === "Faol"
                          ? "bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400"
                          : "bg-yellow-50 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400"
                      }`}>
                        {student.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

  
        <div className="rounded-2xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <h3 className="font-bold text-gray-900 dark:text-white">
            Tezkor amallar
          </h3>

          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            Admin boshqaruv vositalari
          </p>

          <div className="mt-6 space-y-3">
            <a
              href="/admin/courses"
              className="flex items-center gap-3 rounded-xl bg-green-50 p-4 transition hover:bg-green-100 dark:bg-green-900/20 dark:hover:bg-green-900/40"
            >
              <BookOpen className="text-green-600 dark:text-green-400" size={21} />
              <span className="text-sm font-semibold text-green-700 dark:text-green-400">
                Kurslarni boshqarish
              </span>
            </a>

            <a
              href="/admin/students"
              className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 transition hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/40"
            >
              <UserPlus className="text-blue-600 dark:text-blue-400" size={21} />
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-400">
                O'quvchilarni ko'rish
              </span>
            </a>

            <a
              href="/admin/lessons"
              className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 transition hover:bg-purple-100 dark:bg-purple-900/20 dark:hover:bg-purple-900/40"
            >
              <PlayCircle className="text-purple-600 dark:text-purple-400" size={21} />
              <span className="text-sm font-semibold text-purple-700 dark:text-purple-400">
                Video darslar
              </span>
            </a>
          </div>
        </div>
      </section>


      <section className="rounded-2xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white">
              Mashhur kurslar
            </h3>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              O'quvchilar eng ko'p qatnashayotgan kurslar
            </p>
          </div>

          <BookOpen size={21} className="text-green-500" />
        </div>

        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
          {recentCourses.map((course) => (
            <div
              key={course.name}
              className="rounded-xl border border-gray-100 p-5 dark:border-gray-800"
            >
              <div className="flex items-start justify-between">
                <div className={`h-10 w-10 rounded-xl ${course.color}`} />

                <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                  {course.lessons} ta dars
                </span>
              </div>

              <h4 className="mt-4 font-bold text-gray-900 dark:text-white">
                {course.name}
              </h4>

              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                {course.author}
              </p>

              <div className="mt-5 flex items-center justify-between text-xs">
                <span className="text-gray-500 dark:text-gray-400">
                  {course.students} o'quvchi
                </span>

                <span className="font-bold text-green-600 dark:text-green-400">
                  {course.progress}%
                </span>
              </div>

              <div className="mt-2 h-2 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
                <div
                  className="h-full rounded-full bg-green-500"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default AdminDashboard;
