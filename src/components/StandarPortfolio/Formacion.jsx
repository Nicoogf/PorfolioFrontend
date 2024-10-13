// import React from 'react';
// import bigfiveLogo from "../../assets/profile.jpg"; 
// import digitalHouse from "../../assets/digital2.jpg"
// import freeLogo from "../../assets/freecode.jpg"
// import { useNightMode } from '../../Context/NightmodeContext';
// import utnLogo from "../../assets/utn.jpg" ;
// import instiLogo from "../../assets/insti.jpg"

// // Array con las formaciones profesionales
// const formaciones = [
//   {
//     institucion: "Digital House",
//     especializacion: "Especialización Frontend",
//     periodo: "Sep 2023 - Oct 2024",
//     logo: digitalHouse
//   },
//   {
//     institucion: "FreeCodeCamp",
//     especializacion: "JavaScript Algoritmos y estructura de datos",
//     periodo: "Jun 2022 - Sep 2022",
//     logo: freeLogo
//   },
//   {
//     institucion: "UTN",
//     especializacion: "Desarrollo web orientado al Backend",
//     periodo: "Mar 2023 - Sep 2023",
//     logo: utnLogo
//   },
//   {
//     institucion: "Digital House",
//     especializacion: "Desarrollo Web Full Stack",
//     periodo: "Feb 2022 - Sep 2022",
//     logo: digitalHouse
//   },
//   {
//     institucion: "ISFD °7",
//     especializacion: "Tecnicatura en Administración de Empresas",
//     periodo: "Mar 2015 - Dic 2018",
//     logo: instiLogo
//   }
// ];

// const Formacion = () => {
//   const {  nightMode , toggleNightMode } = useNightMode()
//   return (
//     <section className='pb-10 xl:pb-2 mt-2'>
//       <h5 className={` ${nightMode ? "text-white" : "text-gray-800"} text-center md:text-start text-base font-semibold ml-4 md:text-lg `}>Formación Profesional</h5>
//       <section className="w-[90%] mx-auto flex flex-col gap-3 mt-2 pb-4">
//         {/* Mapeo de las formaciones profesionales */}
//         {formaciones.map((formacion, index) => (
//           <article key={index} className="flex flex-row gap-x-2 items-center">
//             <div>
//               <img
//                 src={formacion.logo}
//                 alt={`${formacion.institucion} logo`}
//                 className="w-14 xl:w-14 rounded-full border-4 border-violet-200/40"
//               />
//             </div>
//             <div>
//               <p className={` ${nightMode ? "text-white" : "text-gray-800"} font-semibold xl:text-sm `}>{formacion.institucion}</p>
//               <p className={` ${nightMode ? "text-white" : "text-gray-600"} text-xs hidden xl:flex `}>{formacion.especializacion}</p>
//               <p className={` ${nightMode ? "text-white" : "text-gray-600"} text-xs `}>{formacion.periodo}</p>
//             </div>
//           </article>
//         ))}
//       </section>
//     </section>
//   );
// };

// export default Formacion;

import React from 'react';
import bigfiveLogo from "../../assets/profile.jpg"; 
import digitalHouse from "../../assets/digital2.jpg";
import freeLogo from "../../assets/freecode.jpg";
import utnLogo from "../../assets/utn.jpg";
import instiLogo from "../../assets/insti.jpg";
import { useNightMode } from '../../Context/NightmodeContext';
import { useLanguage } from '../../Context/LanguageProvider'; // Importa el contexto de idioma

// Array con las formaciones profesionales traducidas
const formaciones = [
  {
    institucion: {
      es: "Digital House",
      en: "Digital House",
    },
    especializacion: {
      es: "Especialización Frontend",
      en: "Frontend Specialization",
    },
    periodo: {
      es: "Sep 2023 - Oct 2024",
      en: "Sep 2023 - Oct 2024",
    },
    logo: digitalHouse
  },
  {
    institucion: {
      es: "FreeCodeCamp",
      en: "FreeCodeCamp",
    },
    especializacion: {
      es: "JavaScript Algoritmos y estructura de datos",
      en: "JavaScript Algorithms and Data Structures",
    },
    periodo: {
      es: "Jun 2022 - Sep 2022",
      en: "Jun 2022 - Sep 2022",
    },
    logo: freeLogo
  },
  {
    institucion: {
      es: "UTN",
      en: "UTN",
    },
    especializacion: {
      es: "Desarrollo web orientado al Backend",
      en: "Backend Oriented Web Development",
    },
    periodo: {
      es: "Mar 2023 - Sep 2023",
      en: "Mar 2023 - Sep 2023",
    },
    logo: utnLogo
  },
  {
    institucion: {
      es: "Digital House",
      en: "Digital House",
    },
    especializacion: {
      es: "Desarrollo Web Full Stack",
      en: "Full Stack Web Development",
    },
    periodo: {
      es: "Feb 2022 - Sep 2022",
      en: "Feb 2022 - Sep 2022",
    },
    logo: digitalHouse
  },
  {
    institucion: {
      es: "ISFD °7",
      en: "ISFD °7",
    },
    especializacion: {
      es: "Tecnicatura en Administración de Empresas",
      en: "Technician in Business Administration",
    },
    periodo: {
      es: "Mar 2015 - Dic 2018",
      en: "Mar 2015 - Dec 2018",
    },
    logo: instiLogo
  }
];

const Formacion = () => {
  const { nightMode } = useNightMode();
  const { english } = useLanguage(); // Accede al contexto de idioma

  return (
    <section className='pb-10 xl:pb-2 mt-2'>
      <h5 className={` ${nightMode ? "text-white" : "text-gray-800"} text-center md:text-start text-base font-semibold ml-4 md:text-lg `}>
        {english ? "Professional Education" : "Formación Profesional"} {/* Renderizado condicional para el título */}
      </h5>
      <section className="w-[90%] mx-auto flex flex-col gap-3 mt-2 pb-4">
        {/* Mapeo de las formaciones profesionales */}
        {formaciones.map((formacion, index) => (
          <article key={index} className="flex flex-row gap-x-2 items-center">
            <div>
              <img
                src={formacion.logo}
                alt={`${formacion.institucion[english ? 'en' : 'es']} logo`} // Traducción condicional para el alt
                className={` w-14 xl:w-14 rounded-full border-4 ${ nightMode ? "border-violet-200/40" : "border-violet-900/60"} `}
              />
            </div>
            <div>
              <p className={` ${nightMode ? "text-white" : "text-gray-800"} font-semibold xl:text-sm `}>
                {english ? formacion.institucion.en : formacion.institucion.es} {/* Traducción condicional para la institución */}
              </p>
              <p className={` ${nightMode ? "text-white" : "text-gray-600"} text-xs hidden xl:flex `}>
                {english ? formacion.especializacion.en : formacion.especializacion.es} {/* Traducción condicional para la especialización */}
              </p>
              <p className={` ${nightMode ? "text-white" : "text-gray-600"} text-xs `}>
                {english ? formacion.periodo.en : formacion.periodo.es} {/* Traducción condicional para el periodo */}
              </p>
            </div>
          </article>
        ))}
      </section>
    </section>
  );
};

export default Formacion;