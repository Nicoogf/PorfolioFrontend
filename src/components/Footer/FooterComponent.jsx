import React from 'react'
import { CgRemote } from "react-icons/cg";
import { IoGitBranchOutline } from "react-icons/io5";
import { LuRefreshCcw } from "react-icons/lu";
import { MdOutlineSettingsInputAntenna } from "react-icons/md";
import { MdDataObject } from "react-icons/md";
import { TbLivePhoto } from "react-icons/tb";
import { IoIosNotificationsOutline } from "react-icons/io";

const FooterComponent = () => {
    return (
        <footer className="bg-[#0A0631] w-full h-[23px] flex flex-row justify-between z-[120]">
            <section className="flex flex-row items-center h-[100%] gap-x-2 ">

                <article className="h-[100%]">
                    <CgRemote className="bg-[#D31B77] text-[#F8DCEA] h-[100%] px-2 box-content" />
                </article>

                <article className="flex flex-row items-center text-[#4D8BEE] gap-x-1">
                    <IoGitBranchOutline className="text-sm" />
                    <p className="text-xs mr-1"> main*</p>
                    <LuRefreshCcw className="text-xs" />
                    <MdOutlineSettingsInputAntenna className="text-xs ml-3" />
                    <p className="text-xs mx-1"> 0 </p>
                </article>
            </section>

            <section className="flex flex-row text-[#4D8BEE] text-xs gap-x-4 items-center mr-5">
                <p className="hidden lg:flex "> Ln 27 , Col 28</p>
                <p className="hidden lg:flex "> Spaces 4</p>
                <p className='hidden md:flex'> UTF-8</p>
                <p> CRLF </p>
                <div className="flex flex-row items-center gap-x-1">
                    <MdDataObject />
                    <p className="hidden lg:flex"> Javascript JSX </p>
                </div>

                <div className="flex flex-row items-center gap-x-1">
                    <TbLivePhoto />
                    <p className="hidden lg:flex ">Go Live </p>
                </div>


                <p className="bg-[#D09B07] text-white h-[100%] px-6 flex items-center justify-center"> Codeium </p>
                <IoIosNotificationsOutline className="hidden md:flex text-lg mr-2 text-[#4D8BEE]" />
            </section>
        </footer>
    )
}

export default FooterComponent