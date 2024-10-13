import { FaJava, FaReact, FaNodeJs } from "react-icons/fa";
import { SiPostgresql, SiMongodb, SiSpringboot, SiNextdotjs, SiTypescript ,SiAstro } from "react-icons/si";
import { useNightMode } from "../../Context/NightmodeContext";
import { useLanguage } from "../../Context/LanguageProvider";

const technologies = [
  { name: "Java", icon: <FaJava /> },
  { name: "React JS", icon: <FaReact /> },
  { name: "Postgres", icon: <SiPostgresql /> },
  { name: "Node JS", icon: <FaNodeJs /> },
  { name: "Mongo", icon: <SiMongodb /> },
  { name: "Springboot", icon: <SiSpringboot /> },
  { name: "Next JS", icon: <SiNextdotjs /> },
  { name: "Typescript", icon: <SiTypescript /> },
  { name: "Astro", icon: <SiAstro /> },
];

const TechStack = () => {
  const {  nightMode , toggleNightMode } = useNightMode()
  const { english , setSpanish  } = useLanguage()
  return (
    <section className="p-2 pb-6 xl:py-6">

      <h5 className={` ${nightMode ? "text-white" : "text-gray-800"} text-base font-semibold text-center 
           md:text-lg xl:mb-3 `}> 
           { english ? "Technology Stack" : "Stack Tecnológico "} 
      </h5>

      <section className="w-[90%] md:w-[70%] mx-auto flex flex-row items-center justify-center flex-wrap gap-2 mt-2">
        {technologies.map((tech, index) => (
          <article
            key={index}
            className={` ${nightMode ? "bg-violet-400/30 " : "bg-violet-900/60"} border border-violet-400/40 rounded-lg flex flex-row items-center gap-x-2 px-3 py-1 hover:bg-violet-700 transition-all duration-200 cursor-pointer hover:border-violet-800 `}
          > 
            <span className={` ${nightMode ? "text-gray-100" : " text-violet-200"}  text-sm`}> {tech.icon} </span>
            <p className={` ${nightMode ? "text-gray-100" : " text-violet-200"}  text-sm`}>{tech.name}</p>           
          </article>
        ))}
      </section>
    </section>
  );
};

export default TechStack;
