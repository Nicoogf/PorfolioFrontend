import React from 'react'
import { useMenu } from '../../Context/HeaderContext'
import { useConsole } from '../../Context/ConsoleContext'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../Context/LanguageProvider'


const HeaderOpctions = () => {
    const { viewFile, viewTerminal, viewHelp ,setViewFile ,setViewTerminal , setViewHelp} = useMenu()
    const { viewConsole, setViewConsole } = useConsole()
    const { setSpanish , english} =useLanguage()
    return (
        <nav className='relative flex flex-row items-center h-[1px] bg-[#030D22] z-[45]'>
            <div className='w-5 h-[0.1px] ml-2 ' />

            <nav className='flex flex-row gap-x-[1px] text-[#CCCCCC] ml-1 text-[13px] unselectable '>

                <div className='px-2 py-1 rounded-lg cursor-pointer transition-all duration-150 w-[35.45px] h-[1px] relative'>
                    <article className={`${viewFile ? "translate-y-5" : "-translate-y-24"} transition-all duration-200 bg-[#3C3C3C] text-[#E7E7E7] absolute -bottom-20 left-[1px]  flex flex-col w-[50vw] md:w-[40vw] lg:w-[30vw] max-w-[230px] py-2 px-2 rounded-md`}>
                        <Link className='px-3 h-[26px] hover:bg-[#073170] rounded-md flex items-center py-1' to="/code" onClick={() => setViewFile(false)}> Go HomeApp </Link>
                        <Link className='px-3 h-[26px] hover:bg-[#073170] rounded-md flex items-center py-1' to="/about" onClick={() => setViewFile(false)}> Go Portfolio Standar </Link>
                        <div className='border-b border-[#606060] my-1' />
                        <Link className='px-3 h-[26px] hover:bg-[#073170] rounded-md flex items-center  py-1' to="/" onClick={() => setViewFile(false)}> Go Home </Link>
                    </article>

                </div>

                <div className='px-2 py-1 rounded-lg cursor-pointer transition-all duration-150 w-[35.45px] h-[1px] relative'>

                    <article className={`${viewTerminal ? "translate-y-5" : "-translate-y-24"} transition-all duration-200 bg-[#3C3C3C] text-[#E7E7E7] absolute -bottom-14 left-[1px]  flex flex-col w-[50vw] md:w-[40vw] lg:w-[30vw] max-w-[230px] py-2 px-2 rounded-md`}>

                        <p className='px-3 h-[26px] hover:bg-[#073170] rounded-md flex items-center py-1' 
                        onClick={() => {
                            setViewTerminal(false)
                            setViewConsole(true)}}> New Terminal </p>

                        <div className='border-b border-[#606060] my-1' />

                        <a className='px-3 h-[26px] hover:bg-[#073170] rounded-md flex items-center  py-1' onClick={() => {
                          setViewTerminal(false)
                        setViewConsole(false)}}> Close Terminal </a>

                    </article>
                </div>

                <div className='px-2 py-1 rounded-lg cursor-pointer transition-all duration-150 w-[35.45px] h-[1px] relative'>
                    <article className={`${viewHelp ? "translate-y-4" : "-translate-y-52"} transition-all duration-200 bg-[#3C3C3C] text-[#E7E7E7] absolute -bottom-20 left-8  flex flex-col w-[50vw] md:w-[40vw] lg:w-[30vw] max-w-[230px] py-2 px-2 rounded-md`}>
                        <Link className='px-3 h-[26px] hover:bg-[#073170] rounded-md flex items-center  py-1' to="https://github.com/Nicoogf" target="_blank" y rel="noopener noreferrer" > Git Profile </Link>
                        <p className='px-3 h-[26px] hover:bg-[#073170] rounded-md flex items-center  py-1 cursor-pointer ' 
                        onClick={ ()=>{
                            setViewHelp(false)
                            setSpanish() 
                            }}> Change Languaje</p>
                        <div className='border-b border-[#606060] my-1' />
                        <Link className='px-3 h-[26px] hover:bg-[#073170] rounded-md flex items-center  py-1' to="/about"> About me </Link>
                    </article>
                </div>
            </nav>

        </nav>
    )
}

export default HeaderOpctions