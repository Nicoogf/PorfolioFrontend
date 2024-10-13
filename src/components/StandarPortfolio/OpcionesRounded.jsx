import React, { useState } from 'react'
import { MdOutlineDarkMode } from "react-icons/md";
import { LiaLanguageSolid } from "react-icons/lia";
import { GiHamburgerMenu } from "react-icons/gi";
import { useMenu } from '../../Context/HeaderContext';
import { useNightMode } from '../../Context/NightmodeContext';
import { useLanguage } from '../../Context/LanguageProvider';

const OpcionesRounded = () => {
  const {  viewMenuMobiles,toggleMenuMobile} = useMenu()
  const {  nightMode , toggleNightMode } = useNightMode()
  const { english , setSpanish  } = useLanguage()
   return (
    <nav className="relative z-50 flex flex-row gap-x-3 w-full mt-3 justify-center md:justify-end md:pr-4 items-center xl:pr-6 xl:mt-4">
      <div className={` ${nightMode ? "bg-violet-400/30 " : "bg-violet-900/60" } cursor-pointer  p-3 rounded-full  group hover:bg-white transition-all duration-200 `}  onClick={ toggleNightMode }>
        <MdOutlineDarkMode className="text-violet-300 group-hover:text-violet-800"/>      
      </div> 
      <div className={` ${nightMode ? "bg-violet-400/30 " : "bg-violet-900/60" } cursor-pointer  p-3 rounded-full  group hover:bg-white transition-all duration-200 `} onClick={ setSpanish }>
        <LiaLanguageSolid className="text-violet-300 group-hover:text-violet-800"/>  
      </div> 
      <div className={` ${nightMode ? "bg-violet-400/30 " : "bg-violet-900/60" } cursor-pointer  p-3 rounded-full  group hover:bg-white transition-all duration-200 xl:hidden`} onClick={ toggleMenuMobile }>
        <GiHamburgerMenu className="text-violet-300 group-hover:text-violet-800"/>  
      </div> 
     
    </nav>
  )
}

export default OpcionesRounded