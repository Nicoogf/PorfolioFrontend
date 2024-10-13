import React from 'react'
import vscLogo from "../../assets/vsc.svg"
import { VscDebugStop } from "react-icons/vsc";
import { VscClose } from "react-icons/vsc";
import { VscChromeMinimize } from "react-icons/vsc";
import { useMenu } from '../../Context/HeaderContext';
import { Link } from 'react-router-dom';
import { useConsole } from '../../Context/ConsoleContext';

const HeaderComponent = () => {
    const { toggleFile, toggleTerminal, toggleHelp } = useMenu()
    const {toggleConsole} = useConsole()
    return (
        <header className='relative z-50 w-full h-[35px] bg-[#0B082E] flex flex-row items-center justify-between unselectable'>

            <section className='flex flex-row items-center ml-2'>
                <Link className="ml-2" to='/code'>
                    <img src={vscLogo} className='w-[18px]' alt="vscLogo" />
                </Link>

                <nav className='flex flex-row gap-x-[1px] text-[#CCCCCC] ml-2 text-[13px] unselectable '>
                    <p className='hover:bg-[#24233D] hover:text-white px-2 py-1 rounded-lg cursor-pointer transition-all duration-150 unselectable' onClick={toggleFile}> File </p>
                    <p className='hover:bg-[#24233D] hover:text-white px-2 py-1 rounded-lg cursor-pointer transition-all duration-150 unselectable' onClick={toggleTerminal}>  Terminal </p>
                    <p className='hover:bg-[#24233D] hover:text-white px-2 py-1 rounded-lg cursor-pointer transition-all duration-150 unselectable' onClick={toggleHelp}> Help</p>
                </nav>

            </section>

            <section className='w-[30%] max-w-[600px] rounded-md border border-[#53516A] bg-[#1E1B3E] h-[24px] items-center justify-center hidden lg:flex cursor-pointer' onClick={toggleConsole}>
                <p className='text-[#CCCCCC] text-[10px] text-center unselectable'> Visual Portfolio Code </p>
            </section>


            <section className='text-[#CCCCCC] flex-row h-[100%] items-center flex unselectable'>
                <Link to={"/"} className='w-[45px] hover:bg-[#2C294A] h-[100%] flex items-center justify-center transition-all duration-150 cursor-pointer'>
                    <VscChromeMinimize className='text-sm' />
                </Link>
                <span className='w-[45px] hover:bg-[#2C294A] h-[100%] flex items-center justify-center transition-all duration-150 cursor-pointer'>
                    <VscDebugStop className='text-sm' />
                </span>
                <Link to={"/"} className='w-[45px] hover:bg-[#E81123] h-[100%] flex items-center justify-center transition-all duration-150 cursor-pointer'>
                    <VscClose className='text-xl' />
                </Link>

            </section>

        </header>
    )
}

export default HeaderComponent