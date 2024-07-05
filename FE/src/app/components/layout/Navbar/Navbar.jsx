'use client'
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useState } from "react";
import SignIn from "../../auth/SignIn";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const route = useRouter();

  const handelLoginForm = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  const toggleMenu = (e) => {
    e.stopPropagation()
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { href: "/", label: "Home" },
  ];

  return (
    <nav className="bg-gray-800 fixed w-full z-50">
      <div className="max-w-8xl mx-auto md:px-6 lg:px-14">
        <div className="flex items-center justify-between h-16 px-4">
          <div className="flex items-center">
            <div className="flex-shrink-0 text-white">
              <span
                className="font-semibold text-xl cursor-pointer"
                onClick={() => {
                  route.push("/");
                }}
              >
                Movie World
              </span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center gap-4">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.label}
                </Link>
              ))}
              {
                !localStorage.getItem("user") && 
                <span
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                onClick={handelLoginForm}
              >
                Log In
              </span>
              }
            </div>
            {isLoginOpen && <SignIn onClose={handelLoginForm} />}
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={(e) => toggleMenu(e)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <HamburgerMenuIcon />
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-gray-800 border-t-2">
            <div className="px-2 pt-2 pb-3 sm:px-3">
              <div className="flex flex-col items-center gap-4">
              {isLoginOpen && <SignIn onClose={handelLoginForm} />}
                {menuItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    onClick={(e)=>toggleMenu(e)}
                  >
                    {item.label}
                  </Link>
                ))}
            {!localStorage.getItem("user") && 
                <span
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                  onClick={(e) => {
                    handelLoginForm();
                  }}
                >
                  Log In
                </span>}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
