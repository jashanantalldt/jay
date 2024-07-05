"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "./components/layout/Sidebar/SideBar";
import { usePathname } from "next/navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import Navbar from "./components/layout/Navbar/Navbar";

const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  const pathName = usePathname();
  const hideNavbar = pathName.startsWith('/dashboard');

  return (
    <html lang="en">
      <body>
        <Toaster />
        <QueryClientProvider client={queryClient}>
          {!hideNavbar && <Navbar />}
            {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
