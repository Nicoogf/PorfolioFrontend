// 'use client'
// import React, { useEffect, useRef, useState } from 'react'
// import { useConsole } from '../../../Context/ConsoleContext'
// import { useNavigate } from 'react-router-dom';


// const ConsoleComponent = () => {
//     const { viewConsole, setViewConsole, toggleConsole } = useConsole()
//     const [inputValue, setInputValue] = useState(''); // Para manejar el valor del input
//     const [interactions, setInteractions] = useState([]); // Para manejar el historial de interacciones
//     const navigate = useNavigate()
//     const endOfConsoleRef = useRef(null);


//     const handleEnter = (e) => {
//         if (e.key === "Enter") {
//             e.preventDefault();
//             const command = inputValue.trim();
//             if (command) {
//                 handleCommand(command); // Ejecuta el comando
//                 setInputValue(""); // Limpia el input después de presionar Enter
//             }
//         }
//     }

//     const handleInputChange = (e) => {
//         setInputValue(e.target.value); // Actualiza el valor del input mientras se escribe
//     };

//     const handleCommand = (command) => {
//         let message = '';
//         switch (command.toLowerCase()) {
//             case "ls":
//               message = ".next   node_modules   public   src";
//               break;
//             case "node tecnologias.js":
//               message = "Hello world from personal portfolio";
//               break;
//             case "git add .":
//               message = " ";
//               break;
//             case "git commit":
//               message = "[main f8do87a] Update 1 file changed, 44 insertions(+), 1 deletion(-)";
//               break;
//             case "git push":
//               message = "Enumerating objects: 21, done. To https://github.com/Nicoogf/Portfolio-2024 05scf7f..f7ma27b  main -> main";
//               break;
//             case "close":
//               navigate("/code"); // Reemplaza router.push por navigate
//               return;
//             case "exit":
//               navigate("/");
//               return; // Salir de la función para no añadirlo al historial
//             case "killconsole":
//               toggleConsole();
//               return;
//             case "help":
//               message = "/ls /close / exit /killconsole /node tecnologias.js /git add  /git commit /experiencie.html /curriculum.pdf /networks.ccs /technologies.js /projects.js";
//               break;
//             case "experiencie.html":
//               navigate("/code/experiencie");
//               message = "Redirecting...";
//               break;
//             case "curriculum.pdf":
//               navigate("/code/curriculum");
//               message = "Redirecting...";
//               break;
//             case "networks.ccs":
//               navigate("/code/networks");
//               message = "Redirecting...";
//               break;
//             case "technologies.js":
//               navigate("/code/technologies");
//               message = "Redirecting...";
//               break;
//             case "projects.ts":
//               navigate("/code/projects");
//               message = "Redirecting...";
//               break;
//             default:
//               message = "No action can be performed with that command. Type help to see the list of available commands.";
//               break;
//           }

//         // Añadir la interacción al historial
//         setInteractions(prev => [...prev, { command, message }]);
//     }


//     return (        

//             <main className="bg-[#0D0936] h-[315px] overflow-hidden overflow-y-scroll flex flex-col relative">
//                 {interactions.map((interaction, index) => (
//                     <article key={index} className="flex flex-col mt-3">
//                         <div className="flex flex-row items-center">
//                             <p className="text-[#09AD00] ml-5 code text-sm mr-2">54321@User</p>
//                             <p className="text-[#DC00BA] code text-sm mr-2">PORTFOLIO</p>
//                             <p className="text-[#FFD400] code text-sm mr-2">~/Desktop/portfolio-vsc</p>
//                             <p className="text-[#0BB2FA] code text-sm">(main)</p>
//                         </div>

//                         <div className="flex flex-row items-center text-white">
//                             <p className="text-white ml-5 code text-sm mr-2">$</p>
//                             <p className="text-white code text-sm">{interaction.command}</p>
//                         </div>

//                         {interaction.message && <p className="ml-5 text-white code ">{interaction.message}</p>}
//                     </article>
//                 ))}

//                 <article className="flex flex-row items-center mt-3">
//                     <p className="text-[#09AD00] ml-5 code text-sm mr-2">54321@User</p>
//                     <p className="text-[#DC00BA] code text-sm mr-2">PORTFOLIO</p>
//                     <p className="text-[#FFD400] code text-sm mr-2">~/Desktop/portfolio-vsc</p>
//                     <p className="text-[#0BB2FA] code text-sm">(main)</p>
//                 </article>

//                 <article className="flex flex-row items-center pb-10">
//                     <p className="text-white ml-5 code text-sm mr-2">$</p>
//                     <input
//                         value={inputValue}
//                         onChange={handleInputChange}
//                         onKeyPress={handleEnter}
//                         className="block w-full bg-transparent code outline-none text-white"
//                     />
//                 </article>





//             </main>

//     )
// }

// export default ConsoleComponent 


'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useConsole } from '../../../Context/ConsoleContext'
import { useNavigate } from 'react-router-dom';

const ConsoleComponent = () => {
    const { viewConsole, setViewConsole, toggleConsole } = useConsole()
    const [inputValue, setInputValue] = useState(''); // Para manejar el valor del input
    const [interactions, setInteractions] = useState([]); // Para manejar el historial de interacciones
    const navigate = useNavigate();
    const consoleContainerRef = useRef(null); // Ref para el contenedor

    const handleEnter = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            const command = inputValue.trim();
            if (command) {
                handleCommand(command); // Ejecuta el comando
                setInputValue(""); // Limpia el input después de presionar Enter
            }
        }
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value); // Actualiza el valor del input mientras se escribe
    };

    const handleCommand = (command) => {
        let message = '';
        switch (command.toLowerCase()) {
            case "ls":
              message = ".next   node_modules   public   src";
              break;           
            case "git add .":
              message = " ";
              break;
            case "git commit":
              message = "[main f8do87a] Update 1 file changed, 44 insertions(+), 1 deletion(-)";
              break;
            case "git push":
              message = "Enumerating objects: 21, done. To https://github.com/Nicoogf/Portfolio-2024 05scf7f..f7ma27b  main -> main";
              break;
            case "close":
              navigate("/code"); // Reemplaza router.push por navigate
              return;
            case "exit":
              navigate("/");
              return; // Salir de la función para no añadirlo al historial
            case "killconsole":
              toggleConsole();
              return;
            case "help":
              message = "/ls /close / exit /killconsole /git add  /git commit /open experiencie /open curriculum /open networks /open technologies /open projects";
              break;
            case "open experiencie":
              navigate("/code/experiencie");
              message = "Redirecting...";
              break;
            case "open curriculum":
              navigate("/code/curriculum");
              message = "Redirecting...";
              break;
            case "open networks":
              navigate("/code/networks");
              message = "Redirecting...";
              break;
            case "open technologies":
              navigate("/code/technologies");
              message = "Redirecting...";
              break;
            case "open projects":
              navigate("/code/projects");
              message = "Redirecting...";
              break;        
            case "cls":
                setInteractions([]);         
                break;  
            default:
              message = "No action can be performed with that command. Type help to see the list of available commands.";
              break;
          }

        // Añadir la interacción al historial
        setInteractions(prev => [...prev, { command, message }]);
    }

    useEffect(() => {
        // Al agregar una nueva interacción, hacer scroll hacia el final
        if (consoleContainerRef.current) {
            consoleContainerRef.current.scrollTo({
                top: consoleContainerRef.current.scrollHeight,
                behavior: 'smooth' // Agrega el comportamiento suave
            });
        }
    }, [interactions]);

    return (        
        <main className="bg-[#0D0936] h-[315px] overflow-hidden overflow-y-scroll flex flex-col relative w-full" ref={consoleContainerRef}>
            {interactions.map((interaction, index) => (
                <article key={index} className="flex flex-col mt-3">
                    <div className="flex flex-row items-center">
                        <p className="text-[#09AD00] ml-5 code text-sm mx-2 hidden md:flex">54321@User</p>
                        <p className="text-[#DC00BA] code text-sm mr-2 hidden md:flex">PORTFOLIO</p>
                        <p className="text-[#FFD400] code text-sm mr-2">~/Desktopp/portfolio-vsc</p>
                        <p className="text-[#0BB2FA] code text-sm">(main)</p>
                    </div>

                    <div className="flex flex-row items-center text-white">
                        <p className="text-white ml-5 code text-sm mx-2">$</p>
                        <p className="text-white code text-sm">{interaction.command}</p>
                    </div>

                    {interaction.message && <p className="ml-5 text-white code ">{interaction.message}</p>}
                </article>
            ))}

            <article className="flex flex-row items-center mt-3">
                <p className="text-[#09AD00] ml-5 code text-sm mr-2  hidden md:flex">54321@User</p>
                <p className="text-[#DC00BA] code text-sm mx-2 hidden md:flex">PORTFOLIO</p>
                <p className="text-[#FFD400] code text-sm mx-2">~/Desktop/portfolio-vsc</p>
                <p className="text-[#0BB2FA] code text-sm">(main)</p>
            </article>

            <article className="flex flex-row items-center pb-10">
                <p className="text-white code text-sm ml-2 mr-4">$</p>
                <input
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyPress={handleEnter}
                    className="block w-full bg-transparent code outline-none text-white"
                />
            </article>
        </main>
    );
}

export default ConsoleComponent;

