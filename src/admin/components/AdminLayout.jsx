import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";

function AdminLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const pageTitles = {
    "/admin": "Dashboard",
    "/admin/courses": "Kurslarni boshqarish",
    "/admin/categories": "Kategoriyalar",
    "/admin/students": "O'quvchilar",
    "/admin/lessons": "Video darslar",
    "/admin/profile": "Admin profili",
    "/admin/settings": "Sozlamalar",
  };

  const title = pageTitles[location.pathname] || "Admin Panel";

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">

     
      <AdminSidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

    
      <main className="min-h-screen w-full min-w-0 lg:ml-72 lg:w-[calc(100%-18rem)]">

        
        <AdminHeader
          setIsOpen={setIsOpen}
          title={title}
        />

        
        <div className="w-full p-5 md:p-8">
          <Outlet />
        </div>

      </main>
    </div>
  );
}

export default AdminLayout;
