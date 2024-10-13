// import React from 'react';

// // Supongamos que este es el logo que estás usando para todas las experiencias laborales.
// import bigfiveLogo from '../../assets/bigfive.webp'; 
// import { useNightMode } from '../../Context/NightmodeContext';

// const experiences = [
//   {
//     company: "Big Five",
//     role: "Desarrollador Wordpress",
//     period: "Febrero 2024 - Actualidad",
//     logo: bigfiveLogo
//   },
//   // Puedes agregar más experiencias aquí si es necesario
//   {
//     company: "Big Five",
//     role: "Desarrollador Wordpress",
//     period: "Febrero 2023 - Actualidad",
//     logo: bigfiveLogo
//   },
//   {
//     company: "Big Five",
//     role: "Desarrollador Wordpress",
//     period: "Enero 2022 - Diciembre 2023",
//     logo: bigfiveLogo
//   }
// ];

// const Experience = () => {
//   const {  nightMode , toggleNightMode } = useNightMode()
//   return (
//     <section className='mt-2'>
//       <h5 className={` ${nightMode ? "text-white" : "text-gray-800"} text-base font-semibold text-center 
//            md:text-lg `}>Experiencia Laboral</h5>
//       <section className="w-[90%]  xl:w-[80%] mx-auto flex flex-col gap-5 mt-1 py-4">
//         {/* Mapeo de las experiencias laborales */}
//         {experiences.map((experience, index) => (
//           <article key={index} className="flex flex-row gap-x-4 items-center">
//             <div>
//               <img
//                 src={experience.logo}
//                 alt={`${experience.company} logo`}
//                 className= {` w-14 rounded-full border-4 ${ nightMode ? "border-violet-200/40" : "border-violet-900/60" }   `}
//               />
//             </div>
//             <div>
//               <p className={` ${nightMode ? "text-white" : "text-gray-800"} font-semibold ` }>{experience.company}</p>
//               <p className={` ${nightMode ? "" : "text-gray-600"} text-xs text-gray-300 -mt-1 `}>{experience.role}</p>
//               <p className={` ${nightMode ? "" : "text-gray-600"} text-xs text-gray-400 -mt-1 `}>{experience.period}</p>
//             </div>
//           </article>
//         ))}
//       </section>
//     </section>
//   );
// };

// export default Experience;


// import React from 'react';
// import bigfiveLogo from '../../assets/bigfive.webp'; 
// import { useNightMode } from '../../Context/NightmodeContext';
// import { useLanguage } from '../../Context/LanguageProvider'; // Importa el contexto de idioma

// const experiences = [
//   {
//     company: {
//       es: "Big Five",
//       en: "Big Five",
//     },
//     role: {
//       es: "Desarrollador Wordpress",
//       en: "Wordpress Developer",
//     },
//     period: {
//       es: "Febrero 2024 - Actualidad",
//       en: "February 2024 - Present",
//     },
//     logo: bigfiveLogo
//   },
//   // Puedes agregar más experiencias aquí si es necesario
//   {
//     company: {
//       es: "Big Five",
//       en: "Big Five",
//     },
//     role: {
//       es: "Desarrollador Wordpress",
//       en: "Wordpress Developer",
//     },
//     period: {
//       es: "Febrero 2023 - Actualidad",
//       en: "February 2023 - Present",
//     },
//     logo: bigfiveLogo
//   },
//   {
//     company: {
//       es: "Big Five",
//       en: "Big Five",
//     },
//     role: {
//       es: "Desarrollador Wordpress",
//       en: "Wordpress Developer",
//     },
//     period: {
//       es: "Enero 2022 - Diciembre 2023",
//       en: "January 2022 - December 2023",
//     },
//     logo: bigfiveLogo
//   }
// ];

// const Experience = () => {
//   const { nightMode } = useNightMode();
//   const { english } = useLanguage(); // Accede a la variable de idioma
//   return (
//     <section className='mt-2'>
//       <h5 className={` ${nightMode ? "text-white" : "text-gray-800"} text-base font-semibold text-center md:text-lg `}>
//         Experiencia Laboral
//       </h5>
//       <section className="w-[90%] xl:w-[80%] mx-auto flex flex-col gap-5 mt-1 py-4">
//         {/* Mapeo de las experiencias laborales */}
//         {experiences.map((experience, index) => (
//           <article key={index} className="flex flex-row gap-x-4 items-center">
//             <div>
//               <img
//                 src={experience.logo}
//                 alt={`${experience.company.es} logo`} // Usa una traducción para el alt
//                 className={` w-14 rounded-full border-4 ${nightMode ? "border-violet-200/40" : "border-violet-900/60"}`}
//               />
//             </div>
//             <div>
//               <p className={` ${nightMode ? "text-white" : "text-gray-800"} font-semibold `}>
//                 {english ? experience.company.en : experience.company.es} {/* Renderizado condicional para la empresa */}
//               </p>
//               <p className={` ${nightMode ? "" : "text-gray-600"} text-xs text-gray-300 -mt-1 `}>
//                 {english ? experience.role.en : experience.role.es} {/* Renderizado condicional para el rol */}
//               </p>
//               <p className={` ${nightMode ? "" : "text-gray-600"} text-xs text-gray-400 -mt-1 `}>
//                 {english ? experience.period.en : experience.period.es} {/* Renderizado condicional para el periodo */}
//               </p>
//             </div>
//           </article>
//         ))}
//       </section>
//     </section>
//   );
// };

// export default Experience;



import React from 'react';
import bigfiveLogo from '../../assets/bigfive.webp'; 
import telecomLogo from "../../assets/telecom.webp"
import interfasLogo from "../../assets/interfas.webp"
import { useNightMode } from '../../Context/NightmodeContext';
import { useLanguage } from '../../Context/LanguageProvider'; // Importa el contexto de idioma

// Array con las experiencias laborales
const experiences = [
  {
    company: {
      es: "Big Five",
      en: "Big Five",
    },
    role: {
      es: "Desarrollador Wordpress",
      en: "Wordpress Developer",
    },
    period: {
      es: "Febrero 2024 - Actualidad",
      en: "February 2024 - Present",
    },
    logo: bigfiveLogo
  },
  {
    company: {
      es: "Telecom",
      en: "Telecom",
    },
    role: {
      es: "Asesor Comercial",
      en: "Sales Advisor",
    },
    period: {
      es: "Noviembre 2019 - Julio 2022",
      en: "November 2019 - July 2022",
    },
    logo: telecomLogo

  },
  {
    company: {
      es: "Interfas",
      en: "Interfas",
    },
    role: {
      es: "Coordinador de Ventas",
      en: "Sales Coordinator",
    },
    period: {
      es: "Mayo 2023 - Agosto 2023",
      en: "May 2023  -  August 2023",
    },
    logo: interfasLogo
  }
];

const Experience = () => {
  const { nightMode } = useNightMode();
  const { english } = useLanguage(); // Accede a la variable de idioma

  return (
    <section className='mt-2'>
      <h5 className={` ${nightMode ? "text-white" : "text-gray-800"} text-base font-semibold text-center md:text-lg `}>
        {english ? "Work Experience" : "Experiencia Laboral"} {/* Renderizado condicional para el título */}
      </h5>
      <section className="w-[90%] xl:w-[80%] mx-auto flex flex-col gap-5 mt-1 py-4">
        {/* Mapeo de las experiencias laborales */}
        {experiences.map((experience, index) => (
          <article key={index} className="flex flex-row gap-x-4 items-center">
            <div>
              <img
                src={experience.logo}
                alt={`${experience.company[english ? 'en' : 'es']} logo`} // Traducción condicional para el alt
                className={` w-14 rounded-full border-4 ${nightMode ? "border-violet-200/40" : "border-violet-900/60"}`}
              />
            </div>
            <div>
              <p className={` ${nightMode ? "text-white" : "text-gray-800"} font-semibold `}>
                {english ? experience.company.en : experience.company.es} {/* Traducción condicional para la empresa */}
              </p>
              <p className={` ${nightMode ? "" : "text-gray-600"} text-xs text-gray-300 -mt-1 `}>
                {english ? experience.role.en : experience.role.es} {/* Traducción condicional para el rol */}
              </p>
              <p className={` ${nightMode ? "" : "text-gray-600"} text-xs text-gray-400 -mt-1 `}>
                {english ? experience.period.en : experience.period.es} {/* Traducción condicional para el periodo */}
              </p>
            </div>
          </article>
        ))}
      </section>
    </section>
  );
};

export default Experience;