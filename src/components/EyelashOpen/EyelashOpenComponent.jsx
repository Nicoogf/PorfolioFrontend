// import React from 'react'
// import { MdClose } from "react-icons/md";
// import { Link } from 'react-router-dom';
// import { useMenu } from '../../Context/HeaderContext';

// const EyelashOpenComponent = () => {
//     const {
//         EyelashOpen, removeFileFromEyelash, closeAllMenu
//       } = useMenu();
//   return (
//     <nav className='h-[35px] text-white flex flex-row flex-nowrap overflow-hidden bg-[#141138] gap-x-[2px] '>
//     {EyelashOpen.map((eyelash) => (
//       <div key={eyelash.nombre} className='flex flex-row gap-x-3 justify-around md:justify-between items-center bg-[#1D1641] h-[100%] px-3 w-[130px] md:w-[160px]'>

//         <Link to={eyelash.link} className='text-[#0F97FC] flex flex-row gap-x-1 h-[100%] w-[90%] items-center ml-2  text-[10px]'>
//           <img src={eyelash.icon} className='ml-3 md:ml-0 w-5' />
//           <p className='hidden md:flex md:text-xs no-selected text-white 
//          '> {eyelash.nombre} </p>

//         </Link>

//         <button
//           className="text-[#ECF7FF] hover:bg-[#302C4A] w-[20px] rounded-md"
//           onClick={() => removeFileFromEyelash(eyelash.nombre)}
//         >
//           <MdClose />
//         </button>
//       </div>
//     ))}
//   </nav>
//   )
// }

// export default EyelashOpenComponent

import React from 'react';
import { MdClose } from "react-icons/md";
import { Link, useLocation } from 'react-router-dom'; // Importa useLocation
import { useMenu } from '../../Context/HeaderContext';

const EyelashOpenComponent = () => {
  const {
    EyelashOpen, removeFileFromEyelash, closeAllMenu
  } = useMenu();

  const location = useLocation(); // Usa useLocation para obtener la URL actual

  return (
    <nav className='h-[35px] text-white flex flex-row flex-nowrap overflow-hidden bg-[#141138] gap-x-[2px] unselectable '>
      {EyelashOpen.map((eyelash) => (
        <div key={eyelash.nombre} className='flex flex-row gap-x-3 justify-center md:justify-between items-center bg-[#1D1641] h-[100%] px-3 max-w-[175px] md:w-[185px]'>

          <Link to={eyelash.link} className='text-[#0F97FC] flex flex-row gap-x-1 h-[100%] w-[90%] items-center ml-2 text-[10px]'>
            <img src={eyelash.icon} className='ml-3 md:ml-0 w-5' alt={eyelash.nombre} />
            {/* Cambia el color del texto dependiendo de la URL */}
            <p className={`hidden lg:flex md:text-xs no-selected ${
              location.pathname === eyelash.link ? 'text-white' : 'text-blue-500 italic'
            }`}>
              {eyelash.nombre}
            </p>
          </Link>

          <button
            className="text-[#ECF7FF] hover:bg-[#302C4A] w-[10%] rounded-md"
            onClick={() => removeFileFromEyelash(eyelash.nombre)}
          >
            <MdClose />
          </button>
        </div>
      ))}
    </nav>
  );
}

export default EyelashOpenComponent;
