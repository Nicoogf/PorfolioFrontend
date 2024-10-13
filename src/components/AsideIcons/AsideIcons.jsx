import React from 'react'
import { FaRegCopy } from "react-icons/fa";
import { VscSearch } from "react-icons/vsc";
import { VscGitMerge } from "react-icons/vsc";
import { VscDebugAlt } from "react-icons/vsc";
import { VscExtensions } from "react-icons/vsc";


const AsideIcons = () => {
    return (
        <aside className='bg-[#030D22] w-[47px] h-[100%] flex-col items-center gap-y-6 hidden lg:flex'>
            <div className='w-full flex items-center justify-center border-l border-[#D72180]'>
                <FaRegCopy className='text-[#D72180] text-2xl mt-2 ' />
            </div>

            <VscSearch className='text-[#68174E] text-2xl hover:text-[#D72180] transition-all duration-150 cursor-pointer' />
            <VscGitMerge className='text-[#68174E] text-2xl hover:text-[#D72180] transition-all duration-150 cursor-pointer' />
            <VscDebugAlt className='text-[#68174E] text-2xl hover:text-[#D72180] transition-all duration-150 cursor-pointer' />
            <VscExtensions className='text-[#68174E] text-2xl hover:text-[#D72180] transition-all duration-150 cursor-pointer' />
        </aside>
    )
}

export default AsideIcons