// import React from 'react';

import { useLanguage } from "../../Context/LanguageProvider";
import { useNightMode } from "../../Context/NightmodeContext";
import { FaJava, FaReact, FaNodeJs } from "react-icons/fa";
import { SiPostgresql, SiMongodb, SiSpringboot, SiNextdotjs, SiTypescript } from "react-icons/si";
import { FaWordpress } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import dmh from "../../assets/ghm.jpg"
import vitalLogo from "../../assets/vital.png"
import { Link } from "react-router-dom";


const techIcons = {
  "Java": <FaJava />,
  "React JS": <FaReact />,
  "Node JS": <FaNodeJs />,
  "Mongo": <SiMongodb />,
  "Postgres": <SiPostgresql />,
  "Springboot": <SiSpringboot />,
  "Next JS": <SiNextdotjs />,
  "Typescript": <SiTypescript />,
  "Wordpress" : <FaWordpress />,
  "Tailwind" : <RiTailwindCssFill/>
};

const projects = [
  {
    name: {
      es: "Energia Vital",
      en: "Vital Energy",
    },
    link:"https://energiavital.wearebigfive.com/",
    type: {
      es: "Landing page",
      en: "Landing page",
    },
    description: {
      es: "Diseño de una landing page que impulsa a los visitantes a acceder a los servicios de bienestar de Energía Vital",
      en: "Design of a landing page that encourages visitors to access the wellness services of Energía Vital",
    },
    logo: vitalLogo,
    technologies: ["Wordpress"]  // Tecnologías usadas en este proyecto
  },
  {
    name: {
      es: "DigitalMoneyApp",
      en: "DigitalMoneyApp",
    },
    link:"https://digital-money-app-pte7.vercel.app/",
    type: {
      es: "Trabajo Final",
      en: "Landing page",
    },
    description: {
      es: "Desafío frontend: simulación de billetera virtual con registro de usuarios usando API de tercerosl",
      en: "Frontend challenge: simulation of a virtual wallet with user registration using a third-party API",
    },
    logo: dmh,
    technologies: ["Next JS", "Node JS" ,"Tailwind"]  
  },
  
  

];


const Proyect = () => {
  const { nightMode } = useNightMode();
  const { english } = useLanguage(); // Accede a la variable de idioma
  
  return (
    <section className='mt-2'>
      <h4 className={` ${nightMode ? "text-white" : "text-gray-800"} text-base font-semibold text-center md:text-lg `}>
        Proyectos
      </h4>

      {/* Mapeo de proyectos */}
      <section className="flex flex-col sm:flex-row sm:flex-wrap sm:w-[80%] mx-auto mt-2 md:mt-5 pb-6 gap-y-2">
        {projects.map((project, index) => (
          <Link
          to={project.link}
            key={index}
            target="_blank" rel="noopener noreferrer"
            className={` ${nightMode ? "hover:bg-white/10" : "hover:bg-violet-700/40"} flex flex-col gap-x-2  p-1 w-[90%] mx-auto py-2 sm:w-[50%] cursor-pointer rounded-lg transition-all duration-200 group`}
          >
            <div className='flex flex-row items-center gap-x-3'>
              <img
                src={project.logo}
                alt={`${project.name.es} logo`} // Usa una traducción para el alt
                className={` ${nightMode ? "border-violet-200/40" : "border-violet-900/60"} object-contain rounded-full border-4 w-14 h-14 sm:w-16 sm:h-16`}
              />
              <div className='flex flex-col justify-center gap-y-1'>
                <p className={` ${nightMode ? "text-white" : "text-gray-800 group-hover:text-white"} font-semibold `}>
                  {english ? project.name.en : project.name.es} {/* Renderizado condicional para el nombre */}
                </p>
                <p className={` ${nightMode ? "text-gray-400" : "text-gray-600 group-hover:text-gray-300"} text-xs -mt-1 `}>
                  {english ? project.type.en : project.type.es} {/* Renderizado condicional para el tipo */}
                </p>
                <p className={` ${nightMode ? "text-gray-400" : "text-gray-600 group-hover:text-gray-300"} text-xs hidden xl:flex `}>
                  {english ? project.description.en : project.description.es} {/* Renderizado condicional para la descripción */}
                </p>
              </div>
            </div>

            {/* Mapeo de tecnologías usadas en cada proyecto */}
            <section className='w-[90%] mx-auto mt-2 flex flex-row gap-2'> 
              {project.technologies.map((tech, index) => (
                <span key={index} className={` w-6 h-6 ${ nightMode ? "text-violet-300" :"text-violet-800 group-hover:text-violet-200"}`}>
                  {techIcons[tech]}  {/* Renderiza el icono correspondiente */}
                </span>
              ))}
            </section>
          </Link>
        ))}
      </section>
    </section>
  );
};

export default Proyect;