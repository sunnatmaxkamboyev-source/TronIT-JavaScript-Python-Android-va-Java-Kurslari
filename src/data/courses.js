
const createLessons = (count) =>
  Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    title: `${index + 1}-dars`,
    duration: "Video dars",
    videoUrl: null,
  }));

export const courses = [
  {
    id: 1,
    title: "Kiberxavfsizlik",
    author: "Saud Abdulwahed",
    lessons: 28,
    category: "Kiberxavfsizlik",
    description: "Axborot xavfsizligi va kiberxavfsizlik asoslarini o'rganing.",
  },
  {
    id: 2,
    title: "JavaScript",
    author: "Farkhod Dadajanov",
    lessons: 27,
    category: "JavaScript",
    description: "JavaScript yordamida zamonaviy dasturlashni o'rganing.",
  },
  {
    id: 3,
    title: "Node.js",
    author: "Muallif ko'rsatilmagan",
    lessons: 26,
    category: "Node.js",
    description: "Node.js orqali backend dasturlash asoslarini o'rganing.",
  },
  {
    id: 4,
    title: "Python",
    author: "Muallif ko'rsatilmagan",
    lessons: 23,
    category: "Python",
    description: "Python dasturlash tilini bosqichma-bosqich o'rganing.",
  },
  {
    id: 5,
    title: "SQL",
    author: "Muallif ko'rsatilmagan",
    lessons: 5,
    category: "SQL",
    description: "Ma'lumotlar bazasi bilan ishlashni o'rganing.",
  },
  {
    id: 6,
    title: "Java Advanced",
    author: "Muallif ko'rsatilmagan",
    lessons: 27,
    category: "Java",
    description: "Java dasturlash tilining ilg'or imkoniyatlarini o'rganing.",
  },
  {
    id: 7,
    title: "Kotlin",
    author: "Muallif ko'rsatilmagan",
    lessons: 16,
    category: "Kotlin",
    description: "Kotlin dasturlash tilida kod yozishni o'rganing.",
  },
  {
    id: 8,
    title: "Android",
    author: "Muallif ko'rsatilmagan",
    lessons: 12,
    category: "Android",
    description: "Android mobil ilovalarini yaratish asoslarini o'rganing.",
  },
  {
    id: 9,
    title: "Flutter",
    author: "Zayniddin Mamarasulov",
    lessons: 16,
    category: "Flutter",
    description: "Flutter yordamida mobil ilovalar yaratishni o'rganing.",
  },
].map((course) => ({
  ...course,
  lessonList: createLessons(course.lessons),
}));

export const courseCategories = [
  "Barcha kurslar",
  "JavaScript",
  "Python",
  "SQL",
  "Java",
  "Kotlin",
  "Android",
  "Flutter",
  "Kiberxavfsizlik",
  "Node.js",
];
