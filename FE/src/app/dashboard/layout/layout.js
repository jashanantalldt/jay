"use client"
import { useState } from "react";
import Navbar from "../components/layout/Navbar/NavBar";
import Sidebar from "../components/layout/Sidebar/Sidebar";
import ResponsiveSidebar from "../components/layout/Sidebar/ResponsiveSidebar";
import useAuth from "@/app/hooks/useAuth";

const AdminLayout = ({ children }) => {
  const loading = useAuth();
  const [isOpenResponsiveMenu, setIsOpenResponsiveMenu] = useState(false);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-300">
        <div className="text-center">
          <div className="spinner-border animate-spin  border-4 border-t-blue-600 inline-block w-16 h-16  rounded-full" role="status">
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={"md:ml-64"}>
      <Navbar
        setIsOpenResponsiveMenu={setIsOpenResponsiveMenu}
        isOpenResponsiveMenu={isOpenResponsiveMenu}
      />
      <Sidebar />
      <ResponsiveSidebar isOpenResponsiveMenu={isOpenResponsiveMenu} setIsOpenResponsiveMenu={setIsOpenResponsiveMenu}/>
      <main
        className={
          "flex min-h-screen flex-col p-10  md:p-14 md:py-24 lg:p-24 dark:bg-black bg-gray-300"
        }
      >
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
