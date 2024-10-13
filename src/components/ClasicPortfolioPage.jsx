import { Background } from "./Background/Background";
import profileImage from "../assets/profile.jpg"
import { IoExitOutline } from "react-icons/io5";
import { FaDiscord } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { PiMedalLight } from "react-icons/pi";


import OpcionesRounded from "./StandarPortfolio/OpcionesRounded";
import HeaderPortfolio from "./StandarPortfolio/HeaderPortfolio";
import Curriculum from "./StandarPortfolio/Curriculum";
import Formacion from "./StandarPortfolio/Formacion";
import { useMenu } from "../Context/HeaderContext";
import TechStack from "./StandarPortfolio/Stack";
import Proyect from "./StandarPortfolio/Proyect";
import VscComponent from "./StandarPortfolio/vsc";
import Experience from "./StandarPortfolio/Experiences";

import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import FormularioContacto from "./StandarPortfolio/FormularioContacto";
import FormularioContactoMovil from "./StandarPortfolio/FormularioMobile";
import { useNightMode } from "../Context/NightmodeContext";
import { useLanguage } from "../Context/LanguageProvider";
import { Link } from "react-router-dom";





function ClassicPortfolio() {
  const { nightMode, toggleNightMode } = useNightMode()
  const { english, setSpanish } = useLanguage()

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_kqpxvnf', 'template_lg3g9qs', form.current, "BjjMTn9xEt7p26HyT")
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const { viewMenuMobiles, toggleMenuMobile } = useMenu()
  return (
    <main className="w-full h-screen relative flex justify-center items-center text-white unselectable">

      <aside className={` ${viewMenuMobiles ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-[2000px] "} absolute top-0 left-0 w-full ${nightMode ? "bg-night" : "bg-light"}  h-[100%] z-[900] transition-all duration-500 xl:hidden`}>
        <nav className={`${viewMenuMobiles ? "translate-x-0" : "-translate-x-[500px]"} w-[80%] max-w-[400px] ${nightMode ? "bg-[#1E1930]" : "bg-[#624987]"} h-[100%] p-4 transition-all duration-500`}>
          <header className="relative -mt-2 pb-3">

            <nav className="flex flex-row gap-x-2 absolute top-4 right-2">

              <Link to="https://discord.com/users/693586473894805535" target="_blank"
                rel="noopener noreferrer" className={` ${nightMode ? "bg-violet-200/20 hover:bg-white" : "bg-violet-300 text-[#624987] hover:bg-[#3B2C52]"}  rounded-full p-3 cursor-pointer group`}>
                <FaDiscord className={` ${nightMode ? "text-white group-hover:text-black" : "text-[#624987] group-hover:text-white"} `} />
              </Link>


              <Link
                to="https://github.com/Nicoogf"
                target="_blank"
                rel="noopener noreferrer"
                className={` ${nightMode ? "bg-violet-200/20 hover:bg-white" : "bg-violet-300 text-[#624987] hover:bg-[#3B2C52]"}  rounded-full p-3 cursor-pointer group`}>
                <FaGithub className={` ${nightMode ? "text-white group-hover:text-black" : "text-[#624987] group-hover:text-white"} `} />
              </Link>


              <div
                className={` ${nightMode ? "bg-violet-200/20 hover:bg-white" : "bg-violet-300 text-[#624987] hover:bg-[#3B2C52]"}  rounded-full p-3 cursor-pointer group`} onClick={toggleMenuMobile}>
                <IoExitOutline className={` ${nightMode ? "text-white group-hover:text-black" : "text-[#624987] group-hover:text-white"} `} />
              </div>
            </nav>

            <div className="relative w-[35%] p-2">
              <img src={profileImage} className="w-24 rounded-full border-4 border-violet-200/20" alt="Profile" />
              <div className="bg-lime-500 rounded-full w-4 h-4 absolute bottom-2 right-4 animate-pulse" />
            </div>

            <section>
              <h2 className="text-xl font-semibold mb-1">Nicolas Falabella</h2>
              <h1 className="text-sm -mt-1 text-gray-300">
                {english ? "Frontend Developer" : "Desarrollador Frontend"} {/* Texto condicional */}
              </h1>
              <h2 className="text-gray-400 text-sm -mt-1">nicolasgfalabella@gmail.com</h2>
            </section>

            <section className="flex flex-row items-center gap-x-3 mt-2">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="https://wa.me/5492324584106" 
                className="bg-violet-200/20 px-2 py-1 text-xs rounded-sm font-semibold">
                Whatsapp
              </Link>
              <a
                href="mailto:nicolasgfalabella@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-violet-200/20 px-2 py-1 text-xs rounded-sm font-semibold"
              >
                Email
              </a>

              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="https://www.instagram.com/nfalabella_/"
                className="bg-violet-200/20 px-2 py-1 text-xs rounded-sm font-semibold">
                Instagram
              </Link>
            </section>
          </header>

          <div className="border-b border-violet-200/20 my-1" />

          <section className="mt-1 pb-3">
            <h4 className="font-semibold text-lg">
              {english ? "About me" : "Sobre mí"} {/* Texto condicional */}
            </h4>
            <section>
              <p className="text-xs text-gray-400">
                {english
                  ? "I have had the privilege of developing my professional career over the past 3 years. With solid experience in the commercial sector, primarily in customer service, my professional career has shifted towards programming, specializing in Frontend development. Currently pursuing a frontend specialization at Digital House and in the first year as a Systems Analyst at Universidad de Luján."
                  : "He tenido el privilegio de desarrollar mi carrera profesional durante los últimos 3 años. Con una sólida experiencia en el sector comercial, principalmente en atención al cliente, mi trayectoria profesional ha experimentado un giro hacia la programación, especializándome en el desarrollo Frontend. Actualmente cursando especialización en frontend en Digital House y en primer año como Analista de Sistemas en la Universidad de Luján."}
              </p>
              <div className="flex flex-row gap-x-3 mt-2">
                <PiMedalLight />
                <p className="text-sm font-semibold">
                  {english ? "2 years of experience" : "2 años de experiencia"}
                  <span className="hidden">{english ? " developing independent projects" : " desarrollando proyectos independientes"}</span>
                </p>
              </div>
            </section>
          </section>

          <div className="border-b border-violet-200/20" />

          <FormularioContactoMovil />
        </nav>
      </aside>




      <section className="z-50 relative w-[95%] mx-auto h-[98%] max-w-[1440px] grid grid-cols-12 overflow-hidden gap-x-2">

        <article className={` ${nightMode ? "bg-black/70" : "bg-white/70"} hidden xl:grid xl:col-span-3 rounded-xl overflow-hidden border border-violet-400/30 `}>
          <nav className={`p-4 transition-all duration-500`} >

            <header className="relative -mt-2 pb-3 xl:p-3">

              <nav className="flex flex-row gap-x-2 absolute top-4 right-2 z-[999]">

                <Link to="https://discord.com/users/693586473894805535" target="_blank"
                  rel="noopener noreferrer" className={` ${nightMode ? "bg-violet-400/30" : "bg-violet-900/60"} text-violet-300 bg-violet-400/30 hover:bg-white rounded-full p-3 group cursor-pointer transition-all duration-200`}>
                  <FaDiscord className="group-hover:text-violet-800" />
                </Link>

                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  to="https://github.com/Nicoogf" className={` ${nightMode ? "bg-violet-400/30" : "bg-violet-900/60"} text-violet-300 bg-violet-400/30 hover:bg-white rounded-full p-3 group cursor-pointer transition-all duration-200`}>
                  <FaGithub className="group-hover:text-violet-800" />
                </Link>

              </nav>

              <div className="relative w-[35%] p-2">
                <img src={profileImage} className="w-24 rounded-full border-4 border-violet-200/20" />
                <div className="bg-lime-500 rounded-full w-4 h-4 absolute bottom-2 left-16 xl:right-8 animate-pulse" />
              </div>

              <section>
                <h2 className={` ${nightMode ? "text-white" : "text-gray-800"} text-lg font-semibold xl:text-xl `}> Nicolas Falabella</h2>
                <h1 className={` ${nightMode ? "text-gray-200" : "text-gray-600"}  text-sm xl:text-base -mt-1 `}>
                  {english ? "Frontend Developer" : "Desarrollador Frontend"}
                </h1>
                <h2 className={` ${nightMode ? "text-gray-400" : "text-gray-500"}  text-sm -mt-1 unselectable `} > nicolasgfalabella@gmail.com </h2>
              </section>

              <section className="flex flex-row items-center gap-x-2 mt-2 xl:my-2 ">
                <a className={` ${nightMode ? "bg-violet-400/30" : "bg-violet-900/60"}  px-2 py-1 text-xs rounded-md  xl:px-4 xl:py-1 hover:bg-white hover:text-violet-900  transition-all duration-200`} href="https://wa.me/5492324584106 " target="_blank" rel="noopener noreferrer">
                  Whatsapp
                </a>
                <a className={` ${nightMode ? "bg-violet-400/30" : "bg-violet-900/60"}  bg-violet-400/30 px-2 py-1 text-xs rounded-md xl:py-1 xl:px-4 hover:bg-white hover:text-violet-900 transition-all duration-200 `}  href="mailto:nicolasgfalabella@gmail.com" target="_blank" rel="noopener noreferrer">
                  Email
                </a>
                <a className={` ${nightMode ? "bg-violet-400/30" : "bg-violet-900/60"}  bg-violet-400/30 px-2 py-1 text-xs rounded-md xl:py-1 xl:px-4 hover:bg-white hover:text-violet-900 transition-all duration-200 `} href="https://www.instagram.com/nfalabella_/" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </section>

            </header>

            <div className={` ${nightMode ? "border-violet-200/20" : "border-violet-800/30"} border-b  w-[90%] xl:w-[80%] mx-auto `} />

            <section className="mt-1 pb-3 xl:mt-4 xl:p-3">
              <h4 className={` ${nightMode ? "text-white" : "text-gray-800"}  font-semibold text-lg `}>
                {english ? "About me" : "Sobre mi "}
              </h4>
              <section className="">
                <p className={` ${nightMode ? "text-gray-400 " : "text-gray-600"} text-sm `}>
                  {english ? "Over the past two years, I have focused my career on frontend development, leveraging both my academic background and my experience in areas that require strong communication and problem-solving skills. I am currently pursuing a Frontend specialization at Digital House and completing my first year as a Systems Analyst at the University of Luján." :
                    "   Durante los últimos 2 años, he orientado mi carrera hacia el desarrollo frontend, aprovechando tanto mi formación académica como mi experiencia en áreas que requieren habilidades clave de comunicación y resolución de problemas. Actualmente, estoy cursando una especialización en Frontend en Digital House y completando el primer año de Analista de Sistemas en la Universidad de Luján."
                  }
                </p>

                <div className="flex flex-row gap-x-3 mt-2">
                  <PiMedalLight className={` ${nightMode ? "text-white" : "text-gray-800"} `} />
                  <p className={` ${nightMode ? "text-white" : "text-gray-800"} text-sm font-semibold `}>
                    {english ? "2 years of experience." : "2 Años de experiencia."} </p>
                </div>



              </section>
            </section>

            <div className={` ${nightMode ? "border-violet-200/20" : "border-violet-800/30"} border-b  w-[90%] xl:w-[80%] mx-auto `} />

            <FormularioContacto />

          </nav>
        </article>

        <article className={` ${nightMode ? "bg-black/70" : "bg-white/70"} transition-all duration-500 standarport col-span-12 md:col-span-8 xl:col-span-6  rounded-xl relative flex flex-col overflow-hidden overflow-y-scroll border border-violet-400/30 `}>

          <OpcionesRounded />

          <HeaderPortfolio />

          <div className={` ${nightMode ? "border-violet-200/20" : "border-violet-800/30"} border-b  w-[90%] xl:w-[80%] mx-auto `} />

          <TechStack />

          <div className={` ${nightMode ? "border-violet-200/20" : "border-violet-800/30"} border-b  w-[90%] xl:w-[80%] mx-auto `} />

          <Proyect />



          <div className={` ${nightMode ? "border-violet-200/20" : "border-violet-800/30"} border-b  w-[90%] xl:w-[80%] mx-auto `} />

          <Experience />




          <div className={` ${nightMode ? "border-violet-200/20" : "border-violet-800/30"} border-b  w-[90%] xl:w-[80%] mx-auto   md:hidden`} />


          <div className="md:hidden">
            <Curriculum />
          </div>


          <div className={` ${nightMode ? "border-violet-200/20" : "border-violet-800/30"} border-b  w-[90%] xl:w-[80%] mx-auto md:hidden`} />



          <section className="block md:hidden">
            <Formacion />
          </section>


        </article>

        <article className={`  ${nightMode ? "bg-black/70" : "bg-white/70"} hidden md:flex md:flex-col md:col-span-4 xl:col-span-3 rounded-xl overflow-hidden border  border-violet-400/30 `}>


          <div className="hidden md:flex md:mt-4">
            <Curriculum />
          </div>

          <div className={` ${nightMode ? "border-violet-200/20" : "border-violet-800/30"} border-b  w-[90%] xl:w-[80%] mx-auto `} />

          <section className="hidden md:block">
            <Formacion />
          </section>

          <div className={` ${nightMode ? "border-violet-200/20" : "border-violet-800/30"} border-b  w-[90%] xl:w-[80%] mx-auto `} />

          <VscComponent />


        </article>


      </section>

      <Background />
    </main>
  );
}

export default ClassicPortfolio;


