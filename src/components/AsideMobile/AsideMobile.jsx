import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaFolder } from "react-icons/fa";
import { RiNodejsLine } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";
import { FaRegFolderOpen } from "react-icons/fa6";
import FilesComponent from '../FilesComponent/page';
import logoJava from "../../assets/java.svg"
import logoHtml from "../../assets/html.svg"
import logoPDF from "../../assets/pdf.svg"
import logoCss from "../../assets/css.svg"
import logoTs from "../../assets/ts.svg"
import logoJs from "../../assets/js.svg"
import { useMenu } from '../../Context/HeaderContext';
import { MdClose } from "react-icons/md";


const AsideMobile = () => {
  const { viewExplorer, toggleExplorer, viewSrc, toggleSrc ,toggleAsideMovile,viewAsideMobile } = useMenu()
  const FileList = [
    { fileName: "Contact.java", iconUrl: logoJava, link: "/code/contact" },
    { fileName: "Curriculum.pdf", iconUrl: logoPDF, link: "/code/curriculum" },
    { fileName: "Experience.html", iconUrl: logoHtml, link: "/code/experience" },
    { fileName: "Networks.css", iconUrl: logoCss, link: "/code/network" },
    { fileName: "Projects.ts", iconUrl: logoTs, link: "/code/projects" },
    { fileName: "Technologies.js", iconUrl: logoJs, link: "/code/technologies" }
]
  return (
    <aside className={`absolute h-[100%] w-[100%] ${ viewAsideMobile ? "bg-black/70 " : "bg-transparent hidden"} z-[40] md:hidden transition-all duration-200`}>
      <aside className={`${ viewAsideMobile ? "translate-x-0" : "-translate-x-80"} bg-[#030D22] h-[100%] w-[70%] unselectable  md:hidden`}>

        <div className='flex flex-row justify-between items-center py-2 relative z-20 bg-[#030D22]'>
          <h6 className='text-[#FFFFFF] text-[14px] ] pl-2'> EXPLORER </h6>
          <MdClose className='text-[#FFFFDB] mr-2 cursor-pointer' onClick={toggleAsideMovile}/>
        </div>

        <section className='h-[100%] bg-[#030D22] relative'>

          <article className='bg-[#04112E] flex flex-row items-center py-1 cursor-pointer relative z-20 w-full' onClick={toggleExplorer}>
            <MdKeyboardArrowRight className='text-[#E0D3AF] text-lg' />
            <h6 className='text-[#0E89FF] font-semibold text-[14px] w-full flex flex-row items-center'> VISUAL PORTFOLIO <span className='flex ml-1'> CODE </span></h6>
          </article>

          <section className={`${viewExplorer ? "flex flex-col gap-y-[2px]" : "hidden "} relative z-10 bg-[#030D22] ml-4`}>

            <article className='flex flex-row items-center gap-x-2 ml-2 md:ml-5'>
              <span className='relative '>
                <FaFolder className='text-[#4A616C]' />
                <RiNodejsLine className='text-[#2ECC71] absolute top-1 left-2 text-[12px]' />
              </span>

              <p className='text-[14px] text-[#EFFFDB]'> node_modules</p>
            </article>

            <article className='flex flex-row items-center gap-x-2 ml-2 md:ml-5 '>
              <span className='relative '>
                <FaFolder className='text-[#4A616C]' />
                <TbWorld className='text-[#00B6C2] absolute top-1 left-2 text-[12px]' />
              </span>

              <p className='text-[14px] text-[#EFFFDB]'> public</p>
            </article>

            <article className='flex flex-row items-center gap-x-2 ml-2 md:ml-5 cursor-pointer group' onClick={toggleSrc}>
              <span className='relative '>
                {viewSrc ? (
                  <FaRegFolderOpen className='text-[#80CBC4]' />
                ) : (
                  <FaFolder className='text-[#4A616C] group-hover:text-[#80CBC4] transition-all duration-200' />
                )}

              </span>

              <p className='ext-[14px] text-[#EFFFDB]'>src</p>
            </article>



          </section>

          <section className={`relative ${viewSrc ? "translate-y-0 flex flex-col " : "-translate-y-48 hidden "}   transition-all duration-200 ml-4`}>

            {
              FileList.map((file) => (
                <FilesComponent key={file.link} link={file.link} fileName={file.fileName} iconUrl={file.iconUrl} />
              ))
            }


          </section>


          <section className={` ${viewExplorer ? "translate-y-[calc(100vh-450px)]" : "translate-y-0"} transition-all duration-300`}>

            <article className='bg-[#04112E] flex flex-row items-center py-1 cursor-pointer'>
              <MdKeyboardArrowRight className='text-[#E0D3AF] text-lg' />
              <h6 className='text-[#0E89FF] font-semibold text-[14px] w-full flex flex-row items-center'> OUTLINE </h6>
            </article>
            <article className='bg-[#04112E] flex flex-row items-center py-1 cursor-pointer'>
              <MdKeyboardArrowRight className='text-[#E0D3AF] text-lg' />
              <h6 className='text-[#0E89FF] font-semibold text-[14px] w-full flex flex-row items-center'> TIMELINE </h6>
            </article>

          </section>

        </section>







      </aside>

    </aside>
  )
}

export default AsideMobile