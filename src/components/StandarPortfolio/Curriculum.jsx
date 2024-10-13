import React from 'react'
import { IoDownloadOutline } from "react-icons/io5";
import { useNightMode } from '../../Context/NightmodeContext';
import { useLanguage } from '../../Context/LanguageProvider';

const Curriculum = () => {
  const {  nightMode , toggleNightMode } = useNightMode()
  const { english } = useLanguage(); 

  return (
    <section className="py-7 md:py-4 mt-2">
    <h5 className={` ${ nightMode ? "text-white" : "text-gray-800" } text-base font-semibold text-center mb-2
             md:text-lg `}> Curriculum</h5>
    <p className= {` ${ nightMode ? "text-white" : "text-gray-600" } text-xs text-gray-400 text-center
           md:text-bases w-[60%] md:w-[70%] mx-auto `}> 
           { english ? "Below, I will provide the download button to obtain the updated resume in PDF format." :
           "A continuacion dejare el boton de descarga para obtener el curriculum actualizado en formato PDF"} </p>
    <a  href="/Curriculum.pdf" download="Curriculum.pdf" className={` ${nightMode ? "border-violet-400/30 bg-violet-400/30" : "border-violet-400/30 bg-violet-900/60 hover:border-violet-950"} max-w-[160px] mt-4 md:mt-3 mx-auto flex flex-row gap-x-2 items-center justify-center border  rounded-md  font-semibold px-3 py-1 hover:bg-white hover:border-white/30 transition-all duration-200  group `}> 
      <IoDownloadOutline className='text-violet-200 group-hover:text-violet-900' /> 
      <span className={` text-sm text-violet-200 group-hover:text-violet-900 `}> { english ? "Download" : "Descargar" } </span> 
    </a>
  </section>
  )
}

export default Curriculum