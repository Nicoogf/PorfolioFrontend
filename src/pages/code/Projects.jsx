import { Link } from "react-router-dom";
import { useConsole } from "../../Context/ConsoleContext";
import { useLanguage } from "../../Context/LanguageProvider";

// src/pages/app/Dashboard.jsx
function ProjectPage() {
  const { viewConsole } = useConsole();
  const { english } = useLanguage()
  return (
    <main className={` ${viewConsole ? "h-[calc(100%-350px)]" : "h-[100%]"}
    code overflow-y-scroll pt-2 pb-12 font-normal relative`}>
    <article className="flex flex-row gap-x-4 text-xs md:text-sm">

      <div className='flex flex-row items-center'>
        <p className="text-[#FF2E97] no-selected"> 1 </p>
      </div>


      <div className='flex flex-row items-center md:ml-2'>
        <h6 className="text-[#FF2CF1] mr-2"> {`interface`}</h6>
        <h6 className="text-[#EFD400] mr-1"> {`Proyect {`}</h6>
      </div>

    </article>

    <article className="flex flex-row gap-x-4 text-xs md:text-sm">

      <div className='flex flex-row items-center'>
        <p className="text-[#FF2E97] no-selected"> 2 </p>
      </div>


      <div className='flex flex-row items-center ml-1 md:ml-4'>
        <h6 className="text-[#FF2E97] mr-2"> {`name `}</h6>
        <h6 className="text-[#FF2CF1]  md:flex"> {`:`}</h6>
        <h6 className="text-[#FF2CF1] mr-1 italic"> {` String`}</h6>
        <h6 className="text-[#FF2E97] md:flex"> {`;`}</h6>
      </div>

    </article>

    <article className="flex flex-row gap-x-4 text-xs md:text-sm">

      <div className='flex flex-row items-center'>
        <p className="text-[#FF2E97] no-selected"> 3 </p>
      </div>


      <div className='flex flex-row items-center ml-1 md:ml-4'>
        <h6 className="text-[#FF2E97] mr-2"> {`area`}</h6>
        <h6 className="text-[#FF2CF1] md:flex"> {`:`}</h6>
        <h6 className="text-[#FF2CF1] mr-1 italic"> {` String`}</h6>
        <h6 className="text-[#FF2E97] md:flex"> {`;`}</h6>
      </div>

    </article>

    <article className="flex flex-row gap-x-4 text-xs md:text-sm">

      <div className='flex flex-row items-center'>
        <p className="text-[#FF2E97] no-selected"> 4 </p>
      </div>


      <div className='flex flex-row items-center ml-1 md:ml-4'>
        <h6 className="text-[#FF2E97] mr-2"> {`tecnologias`}</h6>
        <h6 className="text-[#FF2CF1] md:flex"> {`:`}</h6>
        <h6 className="text-[#FF2CF1] mr-1 italic"> {` String`}</h6>
        <h6 className="text-[#FF2CF1] mr-1 "> {` []`}</h6>
        <h6 className="text-[#FF2E97] md:flex"> {`;`}</h6>
      </div>

    </article>

    <article className="flex flex-row gap-x-4 text-xs md:text-sm">

      <div className='flex flex-row items-center'>
        <p className="text-[#FF2E97] no-selected"> 5 </p>
      </div>


      <div className='flex flex-row items-center ml-1 md:ml-4'>
        <h6 className="text-[#FF2E97] mr-2"> {`link`}</h6>
        <h6 className="text-[#FF2CF1] md:flex"> {`:`}</h6>
        <h6 className="text-[#FF2CF1] mr-1 italic"> {` String`}</h6>
        <h6 className="text-[#FF2E97] md:flex"> {`;`}</h6>
      </div>

    </article>

    <article className="flex flex-row gap-x-4 text-xs md:text-sm">

      <div className='flex flex-row items-center'>
        <p className="text-[#FF2E97] no-selected"> 6 </p>
      </div>


      <div className='flex flex-row items-center ml-1 md:ml-4'>
        <h6 className="text-[#FF2E97] mr-2"> {`repositorio`}</h6>
        <h6 className="text-[#FF2CF1] md:flex"> {`:`}</h6>
        <h6 className="text-[#FF2CF1] mr-1 italic"> {` String`}</h6>
        <h6 className="text-[#FF2E97] md:flex"> {`;`}</h6>
      </div>

    </article>

    <article className="flex flex-row gap-x-4 text-xs md:text-sm">

      <div className='flex flex-row items-center'>
        <p className="text-[#FF2E97] no-selected"> 7 </p>
      </div>


      <div className='flex flex-row items-center ml-1 md:ml-4'>
        <h6 className="text-[#FF2E97] mr-2"> {`description`}</h6>
        <h6 className="text-[#FF2CF1] md:flex"> {`:`}</h6>
        <h6 className="text-[#FF2CF1] mr-1 italic"> {` String`}</h6>
        <h6 className="text-[#FF2E97] md:flex"> {`;`}</h6>
      </div>

    </article>

    <article className="flex flex-row gap-x-4 text-xs md:text-sm">

      <div className='flex flex-row items-center'>
        <p className="text-[#FF2E97] no-selected"> 8 </p>
      </div>


      <div className='flex flex-row items-center ml-1 md:ml-4'>

        <h6 className="text-[#EFD400]  md:flex"> {`}`}</h6>

      </div>

    </article>

    <article className="flex flex-row gap-x-4 text-xs md:text-sm">

      <div className='flex flex-row items-center'>
        <p className="text-[#FF2E97] no-selected"> 9 </p>
      </div>


      <div className='flex flex-row items-center ml-1 md:ml-4'>



      </div>

    </article>

    <article className="flex flex-row gap-x-4 text-xs md:text-sm">

      <div className='flex flex-row items-center'>
        <p className="text-[#FF2E97] no-selected"> 10 </p>
      </div>


      <div className='flex flex-row items-center ml-1 md:ml-4'>
        <h6 className="text-[#0198DF]  md:flex"> {` // ${english ? "List of projects, you can open it through the link." :"Listado de proyectos, puedes abrirlo mediante el link"}`}</h6>
      </div>

    </article>

    <article className="flex flex-row gap-x-4 text-xs md:text-sm">

      <div className='flex flex-row items-center'>
        <p className="text-[#FF2E97] no-selected"> 11 </p>
      </div>


      <div className='flex flex-row items-center ml-1 md:ml-4'>



      </div>

    </article>



    <article className="flex flex-row gap-x-4 text-xs md:text-sm">

      <div className='flex flex-row items-center'>
        <p className="text-[#FF2E97] no-selected"> 12 </p>
      </div>


      <div className='flex flex-row items-center ml-1 md:ml-4'>
        <h6 className="text-[#FF2CF1] mr-2"> {`const`}</h6>
        <h6 className="text-[#AB2370] md:flex"> {`proyecto_uno`}</h6>
        <h6 className="text-[#FF2CF1] mr-1 "> {`:`}</h6>
        <h6 className="text-[#EFD400]  md:flex"> {`Proyect `}</h6>
        <h6 className="text-[#FF2CF1] mx-1 "> {`=`}</h6>
        <h6 className="text-[#EFD400]  md:flex"> {`{ `}</h6>
      </div>

    </article>

    <article className="flex flex-row gap-x-4 text-xs md:text-sm">

      <div className='flex flex-row items-center'>
        <p className="text-[#FF2E97] no-selected"> 13 </p>
      </div>


      <div className='flex flex-row items-center ml-2 md:ml-6'>
        <h6 className="text-[#FF2E97] mr-2"> {`name:`}</h6>
        <h6 className="text-[#0EF3FF] md:flex"> {`"DigitalMoneyApp"`}</h6>
        <h6 className="text-[#FF2E97] mr-2"> {`,`}</h6>

      </div>

    </article>

    <article className="flex flex-row gap-x-4 text-xs md:text-sm">

      <div className='flex flex-row items-center'>
        <p className="text-[#FF2E97] no-selected"> 14 </p>
      </div>


      <div className='flex flex-row items-center ml-2 md:ml-6'>
        <h6 className="text-[#FF2E97] mr-2"> {`area:`}</h6>
        <h6 className="text-[#0EF3FF] md:flex"> {`"Frontend"`}</h6>
        <h6 className="text-[#FF2E97] mr-2"> {`,`}</h6>

      </div>

    </article>

    <article className="flex flex-row gap-x-4 text-xs md:text-sm">

      <div className='flex flex-row items-center'>
        <p className="text-[#FF2E97] no-selected"> 15 </p>
      </div>


      <div className='flex flex-row items-center ml-2 md:ml-6'>
        <h6 className="text-[#FF2E97] "> {`tecnologias:`}</h6>
        <h6 className="text-[#FF2CF1] "> {`[`}</h6>
        <h6 className="text-[#0EF3FF]"> {`"Next"`}</h6>
        <h6 className="text-[#FF2E97] "> {`,`}</h6>
        <h6 className="text-[#0EF3FF] md:flex"> {`"Tailwind"`}</h6>
        <h6 className="text-[#FF2CF1] "> {`]`}</h6>
        <h6 className="text-[#FF2E97] "> {`,`}</h6>


      </div>

    </article>
    <article className="flex flex-row gap-x-4 text-xs md:text-sm">

      <div className='flex flex-row items-center'>
        <p className="text-[#FF2E97] no-selected"> 16 </p>
      </div>


      <div className='flex flex-row items-center ml-2 md:ml-6'>
        <h6 className="text-[#FF2E97] mr-2"> {`repositorio:`}</h6>
        <Link target="_blank" rel="noopener noreferrer" to="https://github.com/Nicoogf/DigitalMoneyApp" className="text-[#0EF3FF] mr-2"> {`"https://github.com/Nicoogf/DigitalMoneyApp"`}</Link>
        <h6 className="text-[#FF2E97] mr-2"> {`,`}</h6>


      </div>

    </article>

    <article className="flex flex-row gap-x-4 text-xs md:text-sm">

      <div className='flex flex-row items-center'>
        <p className="text-[#FF2E97] no-selected"> 17 </p>
      </div>


      <div className='flex flex-row items-center ml-2 md:ml-6'>
        <h6 className="text-[#FF2E97] mr-2"> {`link:`}</h6>
        <Link target="_blank" rel="noopener noreferrer" to="https://digital-money-app.vercel.app/" className="text-[#0EF3FF] mr-2"> {`"https://digital-money-app.vercel.app/"`}</Link>
      </div>

    </article>

    <article className="flex flex-row gap-x-4 text-xs md:text-sm">

      <div className='flex flex-row items-center'>
        <p className="text-[#FF2E97] no-selected"> 18 </p>
      </div>


      <div className='flex flex-row items-center ml-2 md:ml-6'>
        <h6 className="text-[#FF2E97] mr-2"> {`description:`}</h6>
        <h6 className="text-[#0EF3FF] mr-2"> {` ${ english ? "Final project, the task was to follow the" :"Trabajo final, la consigna fue respetar"}`}
          <span className='underline'>  <Link target="_blank" rel="noopener noreferrer" to={"https://www.figma.com/proto/97PL2osKArAZLEvUjjtEt5/FRONT---SPRINT-1--Digital-Money-House?node-id=1720-2993&scaling=scale-down&page-id=269%3A194&starting-point-node-id=1057%3A10999"}> { `${ english ? "Figma design" : "el diseño Figma"}`}  </Link> </span>
          {` ${english ? "and simulate a virtual wallet that allows user registration." : "y simular una billetera virtual que permita el registro de usuarios"} `}
        </h6>
      </div>

    </article>

    <article className="flex flex-row gap-x-4 text-xs md:text-sm">

      <div className='flex flex-row items-center'>
        <p className="text-[#FF2E97] no-selected"> 19 </p>
      </div>


      <div className='flex flex-row items-center ml-2 md:ml-6'>
        <h6 className="text-[#EFD400]  md:flex"> {`}`}</h6>
      </div>

    </article>
  </main>
  )
}

export default ProjectPage;
