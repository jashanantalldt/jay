
"use client"
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { successMessage } from '@/app/utils/common.util';

const Navbar = ({setIsOpenResponsiveMenu,isOpenResponsiveMenu}) => {
    const router = useRouter();
    const [isModalOpen, setModalOpen] = useState(false)


    return (
        <nav className="fixed w-full bg-gray-900 z-[9999]  border-b-[1px] border-white">
            <div className="w-full mx-auto px-4 py-3">
                <div className="flex justify-between items-center">
                    <div className='flex gap-2'>
                        <div className="md:hidden flex items-center">
                            <button
                                className="text-white focus:outline-none"
                                onClick={() => {
                                    setIsOpenResponsiveMenu(!isOpenResponsiveMenu);
                                }}
                            >
                                <HamburgerMenuIcon/>
                            </button>
                        </div>
                        <div
                            className="flex-shrink-0 text-white md:invisible font-bold text-lg cursor-pointer"
                            onClick={() => {
                                router.push("/");
                            }}
                        >
                            Admin Panel
                        </div>
                    </div>
                    <div className="ml-4 flex gap-3 items-center md:ml-6">
                        {/* <Profile options={navbarOptions} onClickOption={handleClickOption} /> */}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
