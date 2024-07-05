"use client"
import Link from 'next/link';

const 
SideBar = () => {
  return (
    <div className="flex h-screen">
      <div className="bg-gray-800 text-white w-16 sm:w-32 flex-shrink-0">
        <div className="flex items-center justify-center h-16 bg-gray-900">
          <span className="text-lg sm:text-xl font-bold">Menu</span>
        </div>
        <div className="flex flex-col flex-1">
          <Link href="/movies">
            <span className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-white">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
              <span className="ml-1 sm:hidden">Movies</span>
              <span className="hidden sm:inline">Movies</span>
            </span>
          </Link>
          <Link href="/comments">
            <span className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-white">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
              <span className="ml-1 sm:hidden">Comments</span>
              <span className="hidden sm:inline">Comments</span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
