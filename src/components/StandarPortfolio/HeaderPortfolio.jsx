import React from 'react'
import { IoCodeSlashOutline } from "react-icons/io5";
import { useNightMode } from '../../Context/NightmodeContext';
import { useLanguage } from '../../Context/LanguageProvider';

const HeaderPortfolio = () => {
  const { nightMode } = useNightMode()
  const { english , setSpanish  } = useLanguage()

    
  return (
    <header className="flex flex-row justify-center items-center p-2 py-4 md:-mt-6 xl:-mt-8">
          <div className="w-[20%] md:flex  md:ml-4 items-center justify-center hidden">
            <IoCodeSlashOutline className={` ${ nightMode ? "text-white" : "text-violet-800/30"} text-4xl text-gray-300" `}/>
          </div>
         
          <div className="w-[80%] mt-1 md:mt-0 flex flex-col justify-center">
            <h3 className={` ${ nightMode ? "text-white" : "text-gray-800"} text-base font-semibold text-center 
            md:text-start md:text-xl md:mb-2`}> 
            { english ? "Personal Portfolio" : "Portfolio Personal"} </h3>
            <h4 className={` ${ nightMode ? "text-white" : "text-gray-800"} text-sm text-center
            md:text-base md:text-start md:-mt-1 `}> 
            { english ? "You will find in this layout" : "En este layout encontraras" } 
            </h4>
            <h5 className={` ${ nightMode ? "text-white" : "text-gray-600"} text-xs text-gray-400 text-center
            md:text-start  w-[70%] mx-auto md:mx-0 md:w-[80%] `}> 
            {english ? "Some of the projects completed so far, categorized by the technology used or by their design type" :
            "Alguno de los proyectos realizados hsta el momento, clasificados por la tecnologia utilizada o por su tipo de diseño"}
            </h5>
          </div>  
          </header>
  )
}

export default HeaderPortfolio