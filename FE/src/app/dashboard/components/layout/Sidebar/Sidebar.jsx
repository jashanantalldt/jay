

import { sideBarOptions } from '@/app/utils/data';
import Link from 'next/link';


const Sidebar = () => {

  return (
    <div className="fixed hidden md:block top-0 left-0 h-full w-64 bg-gray-900 border-white border-r-2 text-white  shadow-lg">
    <div className="p-4">
      <h1 className="text-2xl font-bold text-white">Admin Panel</h1>
    </div>
    <div className="divide-y divide-gray-700 flex flex-col">
      {sideBarOptions?.map((option, index) => (
        <Link href={option.href} key={index} className="px-4 py-3 hover:bg-gray-800">
          <span className="flex items-center text-gray-300">
            {option.icon}
            <span className="ml-3">{option.label}</span>
          </span>
        </Link>
      ))}
    </div>
  </div>
  );
};

export default Sidebar;