import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import ForgotPassword from "./pages/ForgotPassword";

import StudentDashboard from "./student/StudentDashboard";
import StudentCourses from "./student/StudentCourses";
import StudentProgress from "./student/StudentProgress";
import StudentProfile from "./student/StudentProfile";
import StudentSettings from "./student/StudentSettings";

import AdminLayout from "./admin/components/AdminLayout";
import AdminDashboard from "./admin/pages/AdminDashboard";
import AdminCourses from "./admin/pages/AdminCourses";
import AdminCategories from "./admin/pages/AdminCategories";
import AdminStudents from "./admin/pages/AdminStudents";
import AdminLessons from "./admin/pages/AdminLessons";
import AdminProfile from "./admin/pages/AdminProfile";
import AdminSettings from "./admin/pages/AdminSettings";

function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-8xl font-bold text-green-500">404</h1>

      <h2 className="mt-5 text-2xl font-bold text-gray-900 dark:text-white">
        Sahifa topilmadi
      </h2>

      <Link
        to="/"
        className="mt-7 rounded-xl bg-green-500 px-6 py-3 text-white transition hover:bg-green-600"
      >
        Bosh sahifaga qaytish
      </Link>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

  
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/student/courses" element={<StudentCourses />} />
        <Route path="/student/progress" element={<StudentProgress />} />
        <Route path="/student/profile" element={<StudentProfile />} />
        <Route path="/student/settings" element={<StudentSettings />} />

      
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
            <Route path="courses" element={<AdminCourses />} />
            <Route path="categories" element={<AdminCategories />} />
            <Route path="students" element={<AdminStudents />} />
            <Route path="lessons" element={<AdminLessons />} />
            <Route path="profile" element={<AdminProfile />} />
            <Route path="settings" element={<AdminSettings />} />
        </Route>

       
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
