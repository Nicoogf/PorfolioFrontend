// src/pages/Home.jsx
import { Link, useNavigate } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import argentina from "../assets/argentina.webp"
import vsc from "../assets/vsc.svg"
import { SiWindows11 } from "react-icons/si";
import { useEffect, useState } from 'react';
import { IoLogoWindows } from "react-icons/io5";
import { FaEdge } from "react-icons/fa";
import { FaImage } from "react-icons/fa6";
import { FaSpotify } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { FaRegClock } from "react-icons/fa";
import { FaFolder } from "react-icons/fa";
import { FaXbox } from "react-icons/fa";
import { SiGnubash } from "react-icons/si";
import { IoIosArrowUp } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import jsLogo from "../assets/js.svg"
import javaLogo from "../assets/java.svg"
import reactLogo from "../assets/react.svg"
import nextLogo from "../assets/next.js.png"
import tyLogo from "../assets/ts.svg"
import mongoLogo from "../assets/mongo.svg"
import post from "../assets/post.svg"
import { Background } from '../components/Background/Background';

function Home() {
  const navigate = useNavigate();
  const [explorer, setExplorer] = useState(false)
  const [viewWarning, setViewWarning] = useState(false)

  const logos = [
    { src: jsLogo, alt: 'JavaScript Logo' },
    { src: javaLogo, alt: 'Java Logo' },
    { src: reactLogo, alt: 'React Logo' },
    { src: nextLogo, alt: 'Next.js Logo' },
    { src: mongoLogo, alt: 'MongoDB Logo' },
    { src: tyLogo, alt: 'TypeScript Logo' },
    { src: post, alt: 'PostgreSQL Logo' },
  ];

  const toggleExplorer = () => {
    setExplorer(!explorer)
  }
  const [time, setTime] = useState(new Date());

  const handleDoubleClick = () => {
    navigate('/code'); // Redirige a la página deseada
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 60000); // Actualiza cada minuto

    // Limpia el intervalo cuando el componente se desmonte
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (viewWarning) {
        setViewWarning(false)
      }
    }, 3000)
    return () => clearInterval(timer);
  })

  return (
    <main className='w-full h-screen'>
      <nav className='h-[65px] bg-black/70 relative z-50'>
        <div className='max-w-[1440px] mx-auto '>

        </div>
      </nav>

      <main className='flex flex-row h-[calc(100%-65px)] w-full mx-auto unselectable relative z-50 bg-black/60'>

        <div className='flex flex-row max-w-[1440px] mx-auto w-full'>

        <article className={`bg-violet-200 border border-white text-violet-950 absolute top-4 left-1/2 transform -translate-x-1/2 px-4 py-3 rounded-md text-sm ${viewWarning ? "-translate-y-0" : "-translate-y-48"} transition-all duration-500`}>
          Recuerda que las aplicaciones en windows se ejecutan con doble Click
        </article>

        <section className='flex flex-col text-white items-center justify-center w-full xl:w-[50%] xl:pl-16'>

          <section className='-mt-28 w-[90%] max-w-[720px]'>


            <h2 className='text-4xl font-semibold text-center xl:text-start'> Nicolas Falabella </h2>
            <h1 className='text-2xl  text-center text-pink-600 xl:text-start'>Frontend Developer</h1>

            <p className='text-gray-300 text-sm text-center w-[95%] mx-auto my-2 xl:text-start xl:w-full'> Creando soluciones frontend escalables con Reactjs y Nextjs</p>

            <article className='flex flex-row justify-center items-center xl:justify-start gap-x-2 mt-3'>
              <img src={argentina} className='h-4 rounded-sm' />
              <h6 className='text-sm'>Mercedes , Buenos Aires , Argentina </h6>
            </article>

            <section className='flex flex-row justify-center xl:justify-start gap-x-3 mt-4'>
              <a href="https://www.linkedin.com/in/nicolas-falabella-02ab47251/" target="_blank" rel="noopener noreferrer" className='hover:text-pink-600 transition-all duration-200'>
              <FaLinkedin className='text-4xl' />
              </a>

              <a href="https://github.com/Nicoogf" target="_blank" rel="noopener noreferrer" className='hover:text-pink-600 transition-all duration-200'>
              <FaGithub className='text-4xl' />
              </a>

              <a href="https://discord.com/users/693586473894805535" target="_blank" rel="noopener noreferrer" className='hover:text-pink-600 transition-all duration-200'>
              <FaDiscord className='text-4xl' />
              </a>
            </section>

            <section className='flex flex-col mt-10'>
              <h6 className='text-center xl:hidden'>
                Choose theme</h6>

              <ul className='flex flex-col  md:flex-row gap-y-2 items-center justify-center xl:justify-start gap-x-4 w-full mt-2'>
                <li className='max-w-[280px] bg-transparent hover:bg-violet-200/80 w-[100%] flex items-center justify-center text-center rounded-xl group overflow-hidden border-2 border-white hover:border-violet-950 transition-all duration-300'>
                  <Link to="/about" className='text-sm  w-full  max-w-[300px] py-3 sm:py-4 font-semibold text-white group-hover:text-violet-900 flex flex-row items-center justify-center relative '>
                    <span className=''> Clasic Theme </span>
                  </Link>
                </li>

                <li className='max-w-[280px] border-2 border-transparent bg-blue-900 hover:bg-blue-300 w-[100%] flex items-center justify-center text-center rounded-xl group transition-all duration-300 overflow-hidden xl:hidden'>
                  <Link to="/code" className='text-center text-sm w-full  max-w-[300px] py-3 sm:py-4 font-semibold text-white group-hover:text-blue-800 flex flex-row items-center justify-center gap-x-3 relative'>

                    <span className='relative'>
                      <img src={vsc} className='-left-10 md:-left-12 absolute w-6 md:w-6 ml-2 -translate-y-24 group-hover:-translate-y-1 duration-150 transition-all relaitve' />
                      Visual Studio Theme
                    </span>
                  </Link>
                </li>

              </ul>
            </section>



          </section>




        </section>

        <section className='hidden xl:flex xl:flex-col xl:w-[50%] xl:justify-center xl:items-center '>


          <main className='-mt-20 w-[80%]  h-[300px] rounded-md overflow-hidden relative border-2 border-transparent hover:border-sky-500'>

            <section className='h-[calc(100%-35px)] bg-[#012E57]  relative'>
              <IoLogoWindows className='absolute text-blue-400/10 text-9xl right-6 top-20' />
              <article className='cursor-pointer rounded-sm absolute  bottom-4 right-4 flex flex-col justify-center items-center hover:bg-[#345363] py-3 px-1' onClick={() => setViewWarning(true)}
                onDoubleClick={handleDoubleClick}>
                <img src={vsc} className='w-9 mb-1' />
                <p className='text-xs text-white'> Visual Studio Code </p>
              </article>
            </section>

            <aside className={`absolute h-[80%] bg-[#29273C]/95 w-[50%] bottom-0 rounded-tr-lg ${explorer ? "translate-y-0" : "translate-y-96"} transition-all duration-200`}>
              <p className='w-[90%] mx-auto bg-[#212222] border border-[#36373A] text-xs mt-2 rounded-xl h-4' />

              <div className='flex flex-row justify-between mt-2 unselectable'>
                <p className='text-white font-semibold text-[10px] ml-4 px-4 py-[2px]'> Pinned </p>
                <p className='text-white text-[10px] mr-4 bg-[#373346] px-3 py-[2px] rounded-sm '> All apps </p>
              </div>

              <div className='w-[80%] mx-auto mt-4 flex flex-row  gap-x-4 gap-y-2 flex-wrap unselectable'>
                <article className='flex flex-col justify-between items-center px-2 gap-y-[2px]'>
                  <FaEdge className='text-gray-600' />
                  <p className='text-[8px] text-gray-400'>Edge </p>
                </article>
                <article className='flex flex-col justify-between items-center px-2 gap-y-[2px]'>
                  <FaImage className='text-gray-700' />
                  <p className='text-[8px] text-gray-400'>Image </p>
                </article>
                <article className='flex flex-col justify-between items-center px-2 gap-y-[2px]'>
                  <FaSpotify className='text-gray-700' />
                  <p className='text-[8px] text-gray-400'>Spotify </p>
                </article>
                <article className='flex flex-col justify-between items-center px-2 gap-y-[2px] '>
                  <CgNotes className='text-gray-700' />
                  <p className='text-[8px] text-gray-400'>Notes </p>
                </article>
                <article className='flex flex-col justify-between items-center px-2 gap-y-[2px]'>
                  <FaRegClock className='text-gray-700' />
                  <p className='text-[8px] text-gray-400'>Clock </p>
                </article>
                <article className='flex flex-col justify-between items-center px-2 gap-y-[2px]'>
                  <FaFolder className='text-gray-700' />
                  <p className='text-[8px] text-gray-400'>Folder </p>
                </article>
                <article className='flex flex-col justify-between items-center px-2 gap-y-[2px]'>
                  <FaXbox className='text-gray-700' />
                  <p className='text-[8px] text-gray-400'>Xbox </p>
                </article>
                <article className='flex flex-col justify-between items-center px-2 gap-y-[2px] ml-2'>
                  <SiGnubash className='text-gray-700' />
                  <p className='text-[8px] text-gray-400'>bash </p>
                </article>
              </div>

              <h6 className='text-white font-semibold text-[10px] ml-4 px-4 py-[1px] mt-2'> Recommendations </h6>

              <div className='w-[80%] mx-auto mt-1'>
                <Link to="/code" className=' flex flex-row gap-x-2 hover:bg-[#323548] p-1 rounded-sm w-[70%] cursor-pointer'>
                  <img src={vsc} className='w-5' />
                  <div>
                    <p className='text-[9px] text-white'> Visual Studio Code</p>
                    <p className='text-[9px] -mt-1 text-gray-400'> Recently added </p>
                  </div>

                </Link>

              </div>

            </aside>

            <nav className='h-[35px] bg-[#212123] w-full flex flex-row items-center justify-between border-t border-[#424244] relative z-50 '>

              <p className='cursor-pointer hover:bg-[#332D31] flex items-center justify-center ml-3 p-1 rounded-md' onClick={toggleExplorer}>
                <SiWindows11 className='text-lg windows' />
              </p>

              <div className='flex items-center gap-x-2'>
                <IoIosArrowUp className='text-white text-sm' />
                <p className='text-white text-xs mr-4'>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}</p>
              </div>

            </nav>

          </main>
        </section>


        <section className='absolute w-[80%] max-w-[550px] mx-auto bottom-12 left-1/2 transform -translate-x-1/2 shadow-xl p-4 flex flex-row items-center flex-nowrap gap-x-4 justify-center md:gap-x-7'>
          {logos.map((logo, index) => (
            <article key={index} className='hover:scale-105 transition-all duration-200 cursor-pointer'>
              <img src={logo.src} alt={logo.alt} className='w-10' />
            </article>
          ))}
        </section>


        </div>
       

      </main>



       <Background />
    </main>
  );
}

export default Home;