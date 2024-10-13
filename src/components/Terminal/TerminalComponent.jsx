import React from 'react'
import { useConsole } from '../../Context/ConsoleContext'
import { VscTerminal } from "react-icons/vsc";
import { RiMoreFill } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";
import { VscClose } from "react-icons/vsc";
import ConsoleComponent from './TerminalCode/TerminalCode';

const TerminalComponent = () => {
  const { viewConsole , setViewConsole} = useConsole()
  return (
    <aside className={`${viewConsole ? "translate-y-0" : "translate-y-96"} h-[350px] absolute bottom-0  w-full transition-all duration-300 unselectable`}>

            <section className='h-[35px] bg-[#0E0952] flex flex-row items-center justify-between  pl-4'>
              <div className='flex h-[100%] flex-row items-center gap-x-6'>
                <p className='text-[#D600DD] text-[11px] hidden md:flex'> PROBLEMS </p>
                <p className='text-[#D600DD] text-[11px]'> OUTPUT </p>
                <p className='text-[#F0186B] text-[11px] border-b border-[#FF2592]'> TERMINAL </p>
                <p className='text-[#D600DD] text-[11px] hidden md:flex'> DEBUG CONSOLE </p>
                <p className='text-[#D600DD] text-[11px]'> PORTS </p>
              </div>

              <div className='flex flex-row items-center gap-x-2'>

                <article className='flex flex-row items-center text-white gap-x-1 mr-2'>
                  <VscTerminal  className=''/>
                  <p className='text-[11px]'> bash </p>
                </article>

                <article className='flex flex-row items-center text-white'>
                  <RiMoreFill   className=''/>
                 
                </article>
                <article className='flex flex-row items-center text-white p-2 rounded-md hover:bg-[#262356] cursor-pointer transition-all duration-150' onClick={()=>setViewConsole(false)}>
                  <RiDeleteBin6Line   className=''/>                   
                </article>

                <article className='flex flex-row items-center text-white p-2 rounded-md hover:bg-[#262356] mr-2 cursor-pointer transition-all duration-150' onClick={()=>setViewConsole(false)}>
                  <VscClose   className=''/>                   
                </article>

              </div>

            </section>

           <ConsoleComponent />

          </aside>
  )
}

export default TerminalComponent