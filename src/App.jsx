import { BrowserRouter, Routes, Route } from "react-router-dom";


import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FeaturedCourses from "./components/FeaturedCourses";
import Footer from "./components/Footer";

// Pages
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";

// Home Page
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedCourses />
      <Footer />
    </>
  );
}

// Not Found Page
function NotFound() {
  return (
    <>
      <Navbar />

      <main className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-8xl font-bold text-green-500">
          404
        </h1>

        <h2 className="text-2xl font-bold text-gray-900 mt-5">
          Sahifa topilmadi
        </h2>

        <p className="text-gray-500 mt-3">
          Siz izlayotgan sahifa mavjud emas.
        </p>

        <a
          href="/"
          className="mt-7 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition"
        >
          Bosh sahifaga qaytish
        </a>
      </main>

      <Footer />
    </>
  );
}

// Main App
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* All Courses */}
        <Route path="/courses" element={<Courses />} />

        {/* Single Course */}
        <Route
          path="/courses/:id"
          element={<CourseDetail />}
        />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
