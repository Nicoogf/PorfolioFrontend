// import React from 'react'
// import vsc from "../../assets/vsc.svg"
// import access from "../../assets/shortcut.jpg"
// import { useNavigate } from 'react-router-dom';
// import { useNightMode } from '../../Context/NightmodeContext';



// const VscComponent = () => {

//   const { nightMode, toggleNightMode } = useNightMode()
//   const navigate = useNavigate();
//   const handleDoubleClick = () => {
//     navigate('/code');
//   };




//   return (
//     <section className="hidden md:flex md:flex-col md:justify-center md:items-center">
//       <h3 className={` ${nightMode ? "text-white" : "text-gray-800" }  font-semibold text-center mt-2 `}> Ejecuta visual Studio Code </h3>
//       <p className= {` ${ nightMode ? "text-gray-300" : "text-gray-700" } text-xs text-gray-400 italic `}> La aplicacion inicia con doble click </p>
//       <article className="mx-auto my-4 py-2 px-3 flex flex-col flex-justify-center cursor-pointer hover:bg-violet-300/30 transition-all duration-200 rounded-md"
//         onDoubleClick={handleDoubleClick}>
//         <div className="relative flex flex-col justify-center items-center">
//           <img src={vsc} className="w-14" />
//           <img src={access} className="absolute w-4 -bottom-2 left-4 " />
//         </div>

//         <p className={` ${nightMode ? "text-gray-300" : "text-gray-700"} text-xs mx-auto mt-4 ` }> Visual Studio Code </p>
//       </article>
//     </section>
//   )
// }

// export default VscComponent


import React from 'react';
import vsc from "../../assets/vsc.svg";
import access from "../../assets/shortcut.jpg";
import { useNavigate } from 'react-router-dom';
import { useNightMode } from '../../Context/NightmodeContext';
import { useLanguage } from '../../Context/LanguageProvider'; // Importa el contexto de idioma

const VscComponent = () => {
  const { nightMode } = useNightMode();
  const { english } = useLanguage(); // Accede al estado de idioma
  const navigate = useNavigate();

  const handleDoubleClick = () => {
    navigate('/code');
  };

  return (
    <section className="hidden md:flex md:flex-col md:justify-center md:items-center">
      <h3 className={` ${nightMode ? "text-white" : "text-gray-800"} font-semibold text-center mt-2`}>
        {english ? "Run Visual Studio Code" : "Ejecuta Visual Studio Code"} {/* Renderizado condicional */}
      </h3>
      <p className={`${nightMode ? "text-gray-300" : "text-gray-700"} text-xs text-gray-400 italic`}>
        {english ? "The application starts with a double click" : "La aplicación inicia con doble click"} {/* Renderizado condicional */}
      </p>
      <article
        className="mx-auto my-4 py-2 px-3 flex flex-col flex-justify-center cursor-pointer hover:bg-violet-300/30 transition-all duration-200 rounded-md"
        onDoubleClick={handleDoubleClick}
      >
        <div className="relative flex flex-col justify-center items-center">
          <img src={vsc} className="w-14" alt="Visual Studio Code logo" />
          <img src={access} className="absolute w-4 -bottom-2 left-4" alt="Shortcut icon" />
        </div>

        <p className={` ${nightMode ? "text-gray-300" : "text-gray-700"} text-xs mx-auto mt-4`}>
          {english ? "Visual Studio Code" : "Visual Studio Code"} {/* Traducción si es necesario */}
        </p>
      </article>
    </section>
  );
};

export default VscComponent;
