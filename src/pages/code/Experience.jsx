import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useConsole } from "../../Context/ConsoleContext";
import { useLanguage } from "../../Context/LanguageProvider";

function ExperiencePage() {
  const { viewConsole   }  = useConsole()
  const { english , setSpanish } = useLanguage()
  return (
    <main className={` ${ viewConsole ? "h-[calc(100%-350px)]" : "h-[100%]"}
    code overflow-y-scroll pt-2 pb-12`}>
      <article className="flex flex-row gap-x-4 text-xs md:text-sm">

        <div className='flex flex-row items-center'>
          <p className="text-[#FF2E97] no-selected"> 1 </p>
        </div>


        <div className='flex flex-row items-center ml-2'>
          <h6 className="text-[#FF2E97] mr-2"> {`<!DOCTYPE`}</h6>
          <h6 className="text-[#EFD400] mr-1"> {`html`}</h6>
          <h6 className="text-[#FF2E97]"> {`>`}</h6>
        </div>

      </article>

      <article className="flex flex-row gap-x-4 text-xs md:text-sm">

        <div className='flex flex-row items-center'>
          <p className="text-[#FF2E97] no-selected"> 2 </p>
          <MdKeyboardArrowRight className='text-[#BFAE8B] text-[14px] rotate-90 ml-1' />
        </div>

        <div className='flex flex-row items-center '>
          <h6 className="text-[#FF2E97] mr-2"> {`<html`}</h6>
          <h6 className="text-[#EFD400] "> {`lang`}</h6>
          <h6 className="text-[#EFD400] "> {`=`}</h6>
          <h6 className="text-[#0EF3FF] mr-1"> {` ${ english ? `"en"` : `"es"`}`}</h6>
          <h6 className="text-[#FF2E97]"> {`>`}</h6>
        </div>

      </article>

      <article className="flex flex-row gap-x-4 text-xs md:text-sm">

        <div className='flex flex-row items-center'>
          <p className="text-[#FF2E97] no-selected"> 3 </p>
          <MdKeyboardArrowRight className='text-[#BFAE8B] text-[14px] rotate-90 ml-1' />
        </div>

        <div className='flex flex-row items-center ml-2 md:ml-6'>
          <h6 className="text-[#FF2E97] mr-2"> {`<head>`}</h6>
        </div>

      </article>


      <article className="flex flex-row gap-x-4 text-xs md:text-sm">

        <p className="text-[#FF2E97] no-selected"> 4 </p>

        <div className='flex flex-row items-center ml-7 md:ml-14'>
          <h6 className="text-[#FF2E97] mr-2"> {`<meta`}</h6>
          <h6 className="text-[#EFD400] "> {`charset`}</h6>
          <h6 className="text-[#EFD400] "> {`=`}</h6>
          <h6 className="text-[#0EF3FF] mr-1"> {`"UTF-8"`}</h6>
          <h6 className="text-[#FF2E97]"> {`>`}</h6>
        </div>

      </article>

      <article className="flex flex-row gap-x-4 text-xs md:text-sm">

        <p className="text-[#FF2E97] no-selected"> 5 </p>

        <div className='flex flex-row items-center ml-7 md:ml-14'>
          <h6 className="text-[#FF2E97] mr-2"> {`<meta`}</h6>
          <h6 className="text-[#EFD400] "> {`name`}</h6>
          <h6 className="text-[#EFD400] "> {`=`}</h6>
          <h6 className="text-[#0EF3FF] mr-1"> {`"viewport"`}</h6>

          <h6 className="text-[#EFD400] hidden lg:flex "> {`content`}</h6>
          <h6 className="text-[#EFD400] hidden lg:flex"> {`=`}</h6>
          <h6 className="text-[#0EF3FF] mr-1 hidden lg:flex"> {`""width=device-width, initial-scale=1.0""`}</h6>

          <h6 className="text-[#FF2E97]"> {`>`}</h6>
        </div>

      </article>

      <article className="flex flex-row gap-x-4 text-xs md:text-sm">

        <p className="text-[#FF2E97] no-selected"> 6 </p>

        <div className='flex flex-col md:flex-row items-start ml-7 md:ml-14'>
          <h6 className="text-[#FF2E97] mr-2"> {`<title>`}</h6>
          <h6 className="text-[#FDEFC6] ml-4 md:-ml-1 "> { english ? `Personal Portfolio` : `Portfolio personal`}</h6>
          <h6 className="text-[#FF2E97] mr-2"> {`</title>`}</h6>
        </div>

      </article>

      <article className="flex flex-row gap-x-4 text-xs md:text-sm">

        <p className="text-[#FF2E97] no-selected"> 7 </p>

        <div className='flex flex-row items-center ml-7 md:ml-14'>
          <h6 className="text-[#FF2E97] mr-2"> {`<link `}</h6>
          <h6 className="text-[#EFD400] "> {`src`}</h6>
          <h6 className="text-[#EFD400] "> {`=`}</h6>
          <Link className="text-[#0EF3FF] mr-1 underline" to="/code/network"> {`"networks.css"`}</Link>
          <h6 className="text-[#FF2E97]"> {`>`}</h6>
        </div>

      </article>

      <article className="flex flex-row gap-x-4 text-xs md:text-sm">

        <p className="text-[#FF2E97] no-selected"> 8 </p>

        <div className='flex flex-row items-center ml-6 md:ml-10'>
          <h6 className="text-[#FF2E97] mr-2"> {`</head>`}</h6>
        </div>

      </article>

      <article className="flex flex-row gap-x-4 text-xs md:text-sm">

        <p className="text-[#FF2E97] no-selected"> 9 </p>

        <div className='flex flex-row items-center ml-6 md:ml-10'>
          <h6 className="text-[#FF2E97] mr-2"> {`<body>`}</h6>
        </div>

      </article>

      <article className="flex flex-row gap-x-4 text-xs md:text-sm">

        <p className="text-[#FF2E97] no-selected"> 10 </p>

        <div className='flex flex-col md:flex-row items-start ml-7 md:ml-14'>
          <h6 className="text-[#FF2E97] mr-2"> {`<h1>`}</h6>
          <h6 className="text-[#FDEFC6] ml-4 md:-ml-1 "> { english ? `Professional Experience` : `Portfolio personal`}</h6>
          <h6 className="text-[#FF2E97] mr-2"> {`</h1>`}</h6>
        </div>

      </article>

      <article className="flex flex-row gap-x-4 text-xs md:text-sm">

        <p className="text-[#FF2E97] no-selected"> 11 </p>

        <div className='flex flex-row items-center ml-7 md:ml-14'>
          <h6 className="text-[#FF2E97] mr-2"> {`<ul>`}</h6>
        </div>

      </article>

      <article className="flex flex-row gap-x-4 text-xs md:text-sm">

        <p className="text-[#FF2E97] no-selected"> 12 </p>

        <div className='flex flex-col md:flex-row items-start ml-8 md:ml-16'>
          <h6 className="text-[#FF2E97] mr-2"> {`<li>`}</h6>
          <h6 className="text-[#FDEFC6] ml-4 md:-ml-1"> {`(2024 | ${english ? "Frontend Developer)" : "Desarrollador Frontend)"} `}</h6>
          <h6 className="text-[#FF2E97] mr-2"> {`</li>`}</h6>
        </div>

      </article>

      <article className="flex flex-row gap-x-4 text-xs md:text-sm">

        <p className="text-[#FF2E97] no-selected"> 13 </p>

        <div className='flex flex-col items-start ml-8 md:ml-16'>
          <h6 className="text-[#0198DF] mr-2"> {` <! --`}</h6>
          <h6 className="text-[#0198DF] ml-4 "> {` ${ english ? "Performed regular maintenance tasks, including WordPress updates, plugins, and themes, ensuring optimal site performance" 
            :
            "Realización de tareas de mantenimiento regular, incluyendo actualizaciones de WordPress, plugins y temas, asegurando el rendimiento óptimo del sitio."
            }`}</h6>
          <h6 className="text-[#0198DF] mr-2"> {`-->`}</h6>
        </div>

      </article>


      <article className="flex flex-row gap-x-4 text-xs md:text-sm">

        <p className="text-[#FF2E97] no-selected"> 14 </p>

        <div className='flex flex-col md:flex-row items-start ml-8 md:ml-16'>
          <h6 className="text-[#FF2E97] mr-2"> {`<li>`}</h6>
          <h6 className="text-[#FDEFC6] ml-4 md:-ml-1"> {`(2023 | ${ english ? "Sales Coordinator)" : "Coordinador de Ventas)"}`}</h6>
          <h6 className="text-[#FF2E97] mr-2"> {`</li>`}</h6>
        </div>

      </article>

      <article className="flex flex-row gap-x-4 text-xs md:text-sm">

        <p className="text-[#FF2E97] no-selected"> 15 </p>

        <div className='flex flex-col items-start ml-8 md:ml-16'>
          <h6 className="text-[#0198DF] mr-2"> {` <! --`}</h6>
          <h6 className="text-[#0198DF] ml-4 "> {` ${ english ? "CRM Data Entry: Enter and update customer and activity information in the company's CRM systems, maintaining accurate and accessible records." :"Registro de Datos en CRM: Ingresar y actualizar la información de clientes y actividades en los sistemas CRM de la empresa, manteniendo un registro preciso y accesible."}`}</h6>
          <h6 className="text-[#0198DF] mr-2"> {`-->`}</h6>
        </div>

      </article>


      <article className="flex flex-row gap-x-4 text-xs md:text-sm">

        <p className="text-[#FF2E97] no-selected"> 16 </p>

        <div className='flex flex-col md:flex-row items-start ml-8 md:ml-16'>
          <h6 className="text-[#FF2E97] mr-2"> {`<li>`}</h6>
          <h6 className="text-[#FDEFC6] ml-4 md:-ml-1"> {`(2019 - 2022 | ${ english ? "Sales Advisor)" :" Asesor Comercial)"} `}</h6>
          <h6 className="text-[#FF2E97] mr-2"> {`</li>`}</h6>
        </div>

      </article>

      <article className="flex flex-row gap-x-4 text-xs md:text-sm">

        <p className="text-[#FF2E97] no-selected"> 17 </p>

        <div className='flex flex-col items-start ml-8 md:ml-16'>
          <h6 className="text-[#0198DF] mr-2"> {` <! --`}</h6>
          <h6 className="text-[#0198DF] ml-4 "> {` ${english ? "Branch Manager in Mercedes for mass and home products sales, implementing effective strategies to maximize team performance and achieve sales goals" :"Encargado de sucursal Mercedes en ventas de productos masivos y de hogar, implementando estrategias efectivas para maximizar el rendimiento del equipo y alcanzar metas de ventas."}`}</h6>
          <h6 className="text-[#0198DF] mr-2"> {`-->`}</h6>
        </div>

      </article>

      <article className="flex flex-row gap-x-4 text-xs md:text-sm">

        <p className="text-[#FF2E97] no-selected"> 18 </p>

        <div className='flex flex-col md:flex-row items-start ml-8 md:ml-16'>
          <h6 className="text-[#FF2E97] mr-2"> {`<li>`}</h6>
          <h6 className="text-[#FDEFC6] ml-4 md:-ml-1"> {`(2018 | ${english ? "Administrative Assistant" : "Administrativo"})`}</h6>
          <h6 className="text-[#FF2E97] mr-2"> {`</li>`}</h6>
        </div>

      </article>

      <article className="flex flex-row gap-x-4 text-xs md:text-sm">

        <p className="text-[#FF2E97] no-selected"> 19 </p>

        <div className='flex flex-col items-start md:text-sm ml-8 md:ml-16'>
          <h6 className="text-[#0198DF] mr-2"> {` <! --`}</h6>
          <h6 className="text-[#0198DF] ml-4 "> {` ${ english ? "Responsible for processing sales invoicing, ensuring accuracy in document issuance and compliance with administrative procedures" : "Encargado de realizar la facturación de ventas, asegurando la precisión en la emisión de documentos y el cumplimiento de procedimientos administrativos"}`}</h6>
          <h6 className="text-[#0198DF] mr-2"> {`-->`}</h6>
        </div>

      </article>

      <article className="flex flex-row gap-x-4 text-xs md:text-sm">

        <p className="text-[#FF2E97] no-selected"> 20 </p>

        <div className='flex flex-row items-center ml-7 md:ml-14'>
          <h6 className="text-[#FF2E97] mr-2"> {`</ul>`}</h6>
        </div>

      </article>



      <article className="flex flex-row gap-x-4 text-xs md:text-sm">

        <p className="text-[#FF2E97] no-selected"> 21 </p>

        <div className='flex flex-row items-center ml-12'>
          <h6 className="text-[#FF2E97] mr-2"> {`<script `}</h6>
          <h6 className="text-[#EFD400] "> {`src`}</h6>
          <h6 className="text-[#EFD400] "> {`=`}</h6>
          <Link className="text-[#0EF3FF] mr-1 underline" to="/code/technologies"> {`"technologies.css"`}</Link>
          <h6 className="text-[#FF2E97]"> {`>`}</h6>
          <h6 className="text-[#FF2E97] mr-2"> {`</script> `}</h6>
        </div>

      </article>

      <article className="flex flex-row gap-x-4 text-xs md:text-sm">

        <p className="text-[#FF2E97] no-selected"> 22 </p>

        <div className='flex flex-row items-center ml-6 md:ml-10'>
          <h6 className="text-[#FF2E97] mr-2"> {`</body>`}</h6>
        </div>

      </article>

      <article className="flex flex-row gap-x-4 text-xs md:text-sm">

        <p className="text-[#FF2E97] no-selected"> 23 </p>

        <div className='flex flex-row items-center ml-4'>
          <h6 className="text-[#FF2E97] mr-2"> {`</html>`}</h6>
        </div>

      </article>
    </main>
  )

}

export default ExperiencePage;
