import insti from "../../assets/insti.jpg"
import freecode from "../../assets/freecode.jpg"
import DigitalHouse from "../../assets/digital2.jpg"
import utn from "../../assets/utn.jpg"

import ProfileImage from "../../assets/profile.jpg"
import { Link } from "react-router-dom"
import { BsFillCircleFill } from "react-icons/bs";
import { IoMdDownload } from "react-icons/io";
import { useConsole } from "../../Context/ConsoleContext"
import { useLanguage } from "../../Context/LanguageProvider"

function CurriculumPage() {
  const { viewConsole } = useConsole();
  const { setSpanish , english} =useLanguage()

    return (
      <main className={` ${viewConsole ? "h-[calc(100%-350px)]" : "h-[100%]"}
       overflow-y-scroll pt-2 pb-12 font-normal relative`}>
  
        <p className={` ${viewConsole ? "hidden" : "flex"} fixed right-8 bottom-8 bg-[#D72180] border border-[#A21C68] p-2 rounded-full z-50 w-10 h-10 flex items-center justify-center `}> 
         <IoMdDownload className="text-[#E1E2E9]"/>
        </p>
        <div className='mx-auto bg-white flex flex-col p-3 lg:p-8 overflow-hidden max-w-[798px] overflow-y-scroll papper'>
        <header className='flex flex-row justify-between items-center  pb-4 w-full  max-w-[798px] mx-auto relative'>
          <section>
            <h2 className='font-bold text-2xl lg:3xl'> Nicolas </h2>
            <h3 className='font-bold text-2xl lg:3xl'> Falabella </h3>
            <h4 className='text-sm lg:text-xl font-semibold'> Frontend Developer </h4>
          </section>

          <section className='hidden md:flex'>
            <img src={ProfileImage} className='md:w-14 lg:w-20 rounded-full' alt="Profile imagen" />
          </section>
          <div className='border-b border-black w-[95%] mx-auto absolute bottom-0'/>
        </header>

        <section className='relative flex flex-col gap-y-1 lg:flex-row py-2 w-full lg:gap-x-4 justify-between lg:items-center md:py-3'>
          <h6 className='text-xs unselectable'> nicolasgfalabella@gmail.com </h6>
          <h6 className='text-xs unselectable'> (02324) 15584106 </h6>
          <Link className='text-xs hidden md:flex text-[#036DC1]' to="https://www.linkedin.com/in/nicolas-falabella-02ab47251/" target="_blank" y rel="noopener noreferrer" aria-label="Perfil de LinkedIn de Nicolás Falabella"> www.linkedin.com/nicolas-falabella </Link>
          <h6 className='text-xs'> Mercedes, Buenos Aires </h6>
          <div className='border-b border-black w-[95%] mx-auto absolute bottom-0'/>
        </section>

        <section className='relative flex flex-col  py-2  lg:py-3 w-full'>
          <h6 className='text-xl font-bold lg:mb-2'> About </h6>
          <h6 className='text-xs  md:text-sm my-2'>
          <span className="font-semibold"> 
            { english ? "Frontend Developer " : "Desarrollador Frontend "} 
          </span> 
          {english ? " specializing in technologies such as " : "especializado en tecnologías como"} 

          <span className="font-semibold"> React </span> 
          {english ? "and" : "y"}  

          <span className="font-semibold"> Next.js </span>. 
          
          {english ? " I am expanding my knowledge through a specialization at Digital House. Simultaneously, I am training in" : "Actualmente, estoy ampliando mis conocimientos a través de una especialización en Digital House. Sincrónicamente, me estoy formando en"} 

          <span className="font-semibold"> Java </span> 
          
          { english ? "to complement my skills in the backend area. Additionally, I am in my first year of the Bachelor’s Degree in Systems at the National University of Luján, where I am being trained in various areas of information technology and developing skills in solving IT-related problems." : 
          "para complementar mis habilidades en el área backend. Además, curso el primer año de la Licenciatura en Sistemas en la Universidad Nacional de Luján, donde me capacito en diversas áreas de tecnologías de la información y desarrollo de habilidades en la resolución de problemas informáticos."
          }
        
            
          </h6>
          <div className='border-b border-black w-[95%] mx-auto absolute bottom-0'/>
        </section>

        <section className='relative flex flex-col py-2 w-full mx-auto gap-y-6 lg:gap-y-3 pb-8'>
        <h6 className='text-xl font-bold lg:mb-2'>
          { english ? "Work Experience" : "Experiencia Laboral"}  </h6>
          <div>
            <h3 className='my-2 font-semibold md:text-lg'>
              WeAreBigFive <span className='text-sm font-normal'>(Wordpress Developer)</span>
            </h3>
            <ul className='flex flex-col gap-y-3 '>

              <li className='flex flex-row gap-x-3 items-center'>
              <BsFillCircleFill className='hidden lg:flex w-[6px] ' />
                <span className='text-xs md:text-sm'> 
                  <span className="font-semibold"> 
                    { english ? "Design and Development" : "Diseño y desarrollo :"}  </span> 
                    {english ? "Creation and customization of WordPress themes according to the specific needs of clients, developing skills in interface adaptation and user-centered design. I ensured that the final work met the established objectives and improved the user experience." : "Creación y personalización de temas en WordPress según las necesidades específicas de los clientes, desarrollando habilidades en la adaptación de interfaces y diseño centrado en el usuario. Aseguré que el trabajo final cumpliera con los objetivos planteados y mejorara la experiencia del usuario."}</span>
              </li>

              <li className='flex flex-row gap-x-3'>
              <BsFillCircleFill className='hidden lg:flex w-[9px] ' />
              <span className='text-xs md:text-sm'>
                <span className="font-semibold"> 
                  { english ? "Maintenance and Optimization :" : "Mantenimiento y Optimización :"} </span> 
                  
                  { english ? "Regular supervision of websites, ensuring performance optimization and security through updates of WordPress, plugins, and themes. This guaranteed the stability and efficiency of the sites." : "Supervisión regular de sitios web, asegurando la optimización del rendimiento y la seguridad a través de actualizaciones de WordPress, plugins y temas. Esto garantizó la estabilidad y eficiencia de los sitios."}
                </span>
              </li>
              
            </ul>
          </div>
          <div>
          <h3 className='my-2 font-semibold md:text-lg'>
              Inter-fas <span className='font-normal text-sm'> 
                {english ? "(Sales Coordinator)" : " (Coordinador de Ventas)"} </span>
            </h3>
            <ul className='flex flex-col gap-y-3'>
              <li className='flex flex-row gap-x-3'>
              <BsFillCircleFill className='hidden lg:flex w-[9px] ' />
              <span className='text-xs md:text-sm'> 
                <span className="font-semibold"> 
                  { english ? "Personalized Attention and Follow-Up." : "Atención Personalizada y Seguimiento:"} </span> 
                  {english ? "Contact with post-sale customers allowed me to develop skills in expectation management and problem resolution, which are essential for interacting with end users in technological projects" : " El contacto con clientes post-venta me permitió desarrollar habilidades en la gestión de expectativas y resolución de problemas, esenciales para la interacción con usuarios finales en proyectos tecnológicos."}
                 </span>
              </li>
              <li className='flex flex-row gap-x-3'>
              <BsFillCircleFill className='hidden lg:flex w-[6px] ' />
              <span className='text-xs md:text-sm'>
              <span className="font-semibold"> {english ? "Team Coordination and Management." :"Coordinación y Gestión de Equipos:"} </span>
              {english ? "Organizing the schedule of the technical team taught me how to coordinate work teams, ensuring that agreed deadlines are met and improving the effectiveness of project delivery." : "La organización de la agenda del equipo técnico me enseñó a coordinar equipos de trabajo, asegurando que se cumplan los plazos pactados y mejorando la eficacia en la entrega de proyectos."}
                </span>
              </li>              
            </ul>
          </div>
          <div>
          <h3 className='my-2 font-semibold md:text-lg'>
              Telecom <span className='font-normal text-sm'> 
                { english ? "(Sales Advisor)" : "(Asesor Comercial)" } </span>
            </h3>
            <ul className='flex flex-col gap-y-3'>
              <li className='flex flex-row gap-x-3'>
              <BsFillCircleFill className='hidden lg:flex w-[9px] ' />
              <span className='text-xs md:text-sm'> 
                <span className="font-semibold"> 
                 {english ? "Customer Service" : " Atención al Cliente:"}  </span>
                 
                 { english ? "Direct work with clients to identify and resolve technical issues related to mobile devices and intangible services. This experience allowed me to develop a strong ability to understand needs and provide effective solutions, enhancing customer satisfaction." : "Trabajo directo con clientes para identificar y resolver problemas técnicos relacionados con dispositivos móviles y servicios intangibles. Esta experiencia me permitió desarrollar una sólida capacidad para comprender necesidades y ofrecer soluciones efectivas, mejorando la satisfacción del cliente."
                 }</span>
              </li>
              <li className='flex flex-row gap-x-3'>
              <BsFillCircleFill className='hidden lg:flex w-[6px] ' />
              <span className='text-xs md:text-sm'>
              <span className="font-semibold">
                { english ? "Communication: " : "Comunicación:"}  </span>
                { english ? "My experience in telecommunications taught me to communicate effectively with non-technical users, adapting complex concepts to make them understandable for anyone. I learned the importance of translating technical requirements into clear and efficient solutions, ensuring that customers understand every aspect of the product or service." :"La experiencia en telecomunicaciones me enseñó a comunicarme eficazmente con usuarios no técnicos, adaptando conceptos complejos para que sean comprensibles para cualquier persona. Aprendí la importancia de traducir requisitos técnicos en soluciones claras y eficientes, garantizando que los clientes comprendan cada aspecto del producto o servicio."}
                </span>
              </li>
              <li className='flex flex-row gap-x-3'>
              <BsFillCircleFill className='hidden lg:flex w-[9px] ' />
              <span className='text-xs md:text-sm'> 
              <span className="font-semibold"> 
                { english ? "Training : " : "Capacitación :"} </span> 
                { english ? "Guiding new employees from their onboarding process until they master their responsibilities allowed me to develop empathy and patience. Having started as an apprentice, I understand firsthand the challenges a new person faces in their role, which has helped me support them in their adaptation." : "Orientar a nuevos empleados, guiándolos desde su proceso de integración hasta que dominaran sus responsabilidades, me permitió desarrollar empatía y paciencia. Al haber comenzado como aprendiz, comprendo de primera mano los desafíos que enfrenta una persona nueva en su rol, lo que me ayudó a apoyarlos en su adaptación"}</span>
              </li>

            </ul>
          </div>
          <div>
          <h3 className='my-2 font-semibold md:text-lg'>
              Vika <span className='font-normal text-sm'> {english ? "(Administrative)" : "(Administrativo)"} </span>
            </h3>
            <ul className='flex flex-col gap-y-3'>
              <li className='flex flex-row gap-x-3'>
              <BsFillCircleFill className='hidden lg:flex w-[6px] ' />
              <span className='text-xs md:text-sm'> 
              <span className="font-semibold">  {english ? "Effective Communication :" : " Comunicación Efectiva :" }</span>
              { english ? "Constant interaction with clients and suppliers improved my ability to communicate clearly and facilitate collaboration, essential skills for working effectively in a team." : "La interacción constante con clientes y proveedores mejoró mi capacidad para comunicarme claramente y facilitar la colaboración, habilidades necesarias para trabajar eficazmente en equipo"}</span>
              </li>
              <li className='flex flex-row gap-x-3'>
              <BsFillCircleFill className='hidden lg:flex w-[6px] ' />
              <span className='text-xs md:text-sm'>
              <span className="font-semibold"> 
                {english ? "Problem Solving : " : "Resolución de Problemas : "}
                  </span>
                  {english ? "Addressing and resolving discrepancies in inventory taught me to think critically and find solutions quickly, skills that are fundamental in agile development environments" : "Abordar y solucionar discrepancias en el inventario me enseñó a pensar críticamente y encontrar soluciones rápidamente, habilidades que son fundamentales en entornos de desarrollo ágil."} 
                </span>
              </li>
              
             
            </ul>
          </div>
          <div className='border-b border-black w-[95%] mx-auto absolute bottom-0'/>
        </section>

        <section className='relative flex flex-col  gap-y-4 py-2 w-full mx-auto pb-8'>

        <h6 className='text-xl font-bold lg:mb-2'> {english ? "Education" : "Educacion"} </h6>
          <article className='flex flex-row gap-x-3'>
            <img src={DigitalHouse} alt="Digital House" className='w-10'/>
            
            <div>
              <h6 className='text-sm'> {english ? "Frontend Specialization." : "Especializacion Frontend"}
              <span className='font-semibold'> (Digital House)</span> 
              </h6>
              <h6 className='text-sm hidden md:flex'> Sep 2023 - Oct 2024 </h6>
            </div>
           
          </article>

          <article className='flex flex-row gap-x-3'>
          <img src={utn} alt="Digital House" className='w-10'/>
          <div>

            <h6 className='text-sm'> {english ? "Full Stack Web Developmen" :"Desarrollo Web FullStack"}
            <span className='font-semibold'> (UTN)</span> 
            </h6>
            <h6 className='text-sm hidden md:flex'> Mar 2022 - Sep 2023 </h6>
            </div>
          </article>

          <article className='flex flex-row gap-x-3'>
          <img src={freecode} alt="Digital House" className='w-10 h-10'/>
          <div>
            <h6 className='text-sm'> JavaScript Algorithms and Data StructuresJavaScript 
            <span className='font-semibold'> (FreeCodeCamp)</span> 
            </h6>
            <h6 className='text-sm hidden md:flex'> 2022 </h6>
           </div>
          </article>

          <article className='flex flex-row gap-x-3'>
          <img src={DigitalHouse} alt="Digital House" className='w-10 h-10'/>
          <div>
            <h6 className='text-sm'> {english ? "Full Stack Web Developmen" :"Desarrollo Web FullStack"}
            <span className='font-semibold'> (DigitalHouse)</span> 
            </h6>
            <h6 className='text-sm hidden md:flex'> Feb 2022 - Nov 2022 </h6>
           </div>
          </article>

          <article className='flex flex-row gap-x-3'>
          <img src={insti} alt="Digital House" className='w-10 h-10'/>
          <div>
            <h6 className='text-sm'> {english ? "Business Administration." : "Administracion de Empresas"} 
              <span className='font-semibold'> {english ? "(Higher Education)" : "( Terciario )" } </span> 
            </h6>
            <h6 className='text-sm hidden md:flex'> Mar 2015 - Dic 2018</h6>
          </div>
          </article>


          <div className='border-b border-black w-[95%] mx-auto absolute bottom-0'/>

        </section>

        <section className='relative flex flex-col lg:flex-row  py-2 w-full mx-auto'>


          <section className='flex flex-col md:flex-row gap-x-4'>

         
            <article className='text-sm'>   
            <h6 className='text-xl font-bold lg:mb-2'> {english ? "Languages" :"Idiomas" } </h6> 
             <span className='-mt-2'> { english ? "English" : "Ingles"} (A2) </span>
            </article>

            <article>
         

             
            </article>

        
          </section>





        </section>
      </div>
      </main>
    )
  }
  
  export default CurriculumPage;
  