"use client";
import { sideBarOptions } from '@/app/utils/data';
import Link from 'next/link';
import { useEffect } from 'react';

const ResponsiveSidebar = ({ isOpenResponsiveMenu, setIsOpenResponsiveMenu }) => {
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest('.responsive-sidebar') && isOpenResponsiveMenu) {
        setIsOpenResponsiveMenu(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpenResponsiveMenu, setIsOpenResponsiveMenu]);

  return (
    <div className={`fixed md:hidden inset-y-0 left-0 z-50 w-64 bg-gray-800 transition duration-300 transform responsive-sidebar ${isOpenResponsiveMenu ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'}`}>
      <div className="mt-[74px]">
        {sideBarOptions?.map((option, index) => (
          option?.href ? (
            <Link key={index} onClick={() => {
              if (isOpenResponsiveMenu) {
                setIsOpenResponsiveMenu(false)
              }
            }} href={option?.href} className="block py-2.5 px-4 text-white hover:bg-gray-700">
              {option?.label}
            </Link>
          ) : null
        ))}
      </div>
    </div>
  );
};

export default ResponsiveSidebar;
