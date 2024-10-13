// 'use client'
// import React, { useState } from 'react'
// import svgJava from "../../assets/java.svg"
// import { HiMiniMinusSmall } from "react-icons/hi2";
// import { VscDebugStop } from "react-icons/vsc";
// import { IoMdClose } from "react-icons/io";
// import { BsInfoCircleFill } from "react-icons/bs";
// import { useMenu } from '../../Context/HeaderContext';


// const RunContact = () => {
//     const { runApp, CloseAplication } = useMenu();
//     const [successfully, setSuccessfully] = useState();

//     const sendEmail = () => {
//         setSuccessfully(true)
//     }
//     const finishApp = () => {
//         CloseAplication()
//         setSuccessfully(false)
//     }
//     return (
//         <main className={` ${runApp ? "flex" : "hidden"} absolute w-full h-[100%] bg-black/50 z-[1000]  items-center justify-center`}>
//             <section className='w-[95%] max-w-[300px] h-[200px] overflow-hidden rounded-lg relative'>

//                 <nav className='w-full bg-[#F1F1F1] flex flex-row justify-between items-center'>
//                     <div className='flex flex-row items-center'>
//                         <img src={svgJava} alt="Java Logo" className='ml-2 w-[16px]  border rounded-md border-[#90A7BA]' />
//                         <p className='text-sm ml-2'>Deja tu Mensaje</p>
//                     </div>
//                     <div className='flex flex-row'>
//                         <HiMiniMinusSmall className='p-2 box-content cursor-pointer' />
//                         <VscDebugStop className='p-2 box-content cursor-pointer' />
//                         <IoMdClose className='p-2 box-content hover:bg-red-500 hover:text-white cursor-pointer' onClick={CloseAplication} />
//                     </div>
//                 </nav>
//                 <form className='bg-[#DCDCDC] h-[calc(100%-32px)] flex flex-col  gap-y-4 justify-center  '>

//                     <section className='flex flex-row items-center justify-between'>
//                         <h6 className="ml-4 font-semibold  text-sm"> De : </h6>
//                         <input className='mr-4 border border-[#7B8A99] text-sm p-1' />
//                     </section>

//                     <section className='flex flex-row items-center justify-between'>
//                         <h6 className="ml-4 font-semibold text-sm"> Asunto : </h6>
//                         <input className='mr-4 border border-[#7B8A99] text-sm p-1' />
//                     </section>

//                     <p className='py-1 px-6 block ml-auto border border-[#7A8A99] mr-4 button-java font-semibold cursor-pointer  text-sm' onClick={sendEmail}> Enviar </p>
//                 </form>

//                 <section className={` ${successfully ? "flex" : "hidden"} absolute bg-black/50 top-0 w-full h-[100%] justify-center items-center`}>
//                     <article className='h-[150px] w-[95%] bg-white rounded-md border-[#A2A2A2] overflow-hidden '>
//                         <nav className='h-[30px] bg-white flex items-center'>
//                             <p className='text-sm ml-4'> Message </p>
//                         </nav>
//                         <section className='h-[calc(100%-30px)] flex flex-col items-center justify-center'>
//                             <div className='flex flex-row items-center mx-auto gap-x-4'>
//                                 <BsInfoCircleFill className='text-[#666699] text-3xl' />
//                                 <p className='text-sm'> Email successfully sent</p>
//                             </div>
//                             <p className='button-java px-6 py-1 border border-[#7B8B99] mt-4 cursor-pointer text-sm' onClick={finishApp}> Aceptar</p>
//                         </section>
//                     </article>
//                 </section>


//             </section>
//         </main>
//     )
// }

// export default RunContact

'use client';
import React, { useState } from 'react';
import svgJava from "../../assets/java.svg";
import { HiMiniMinusSmall } from "react-icons/hi2";
import { VscDebugStop } from "react-icons/vsc";
import { IoMdClose } from "react-icons/io";
import { BsInfoCircleFill } from "react-icons/bs";
import { useMenu } from '../../Context/HeaderContext';
import emailjs from 'emailjs-com'; // Asegúrate de tener emailjs instalado

const RunContact = () => {
    const { runApp, CloseAplication } = useMenu();
    const [successfully, setSuccessfully] = useState(false);
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        remitente: "",
        message: "",
    });
    const [loading, setLoading] = useState(false); // Para manejar el estado de carga

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const isValidEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar email
        return emailPattern.test(email);
    };

    const sendEmail = async () => {
        // Validar campos
        if (!formData.remitente || !formData.message) {
            setError("Por favor, completa todos los campos.");
            return;
        }
        if (!isValidEmail(formData.remitente)) {
            setError("Por favor, introduce un email válido.");
            return;
        }

        setLoading(true); // Iniciar carga

        try {
            // Aquí va la configuración de emailjs
            const result = await emailjs.send('service_kqpxvnf', 'template_lg3g9qs', {
                remitente: formData.remitente,
                message: formData.message,
            }, 'BjjMTn9xEt7p26HyT');

            setSuccessfully(true);
            setError(""); // Limpiar error en caso de éxito
            // Resetea el formulario si es necesario
            setFormData({ remitente: "", message: "" });
        } catch (err) {
            setError("Error al enviar el email. Intenta nuevamente.");
            setSuccessfully(false);
        } finally {
            setLoading(false); // Detener carga
        }
    };

    const finishApp = () => {
        // No cerrar la aplicación, solo limpiar mensajes
        setSuccessfully(false);
        setError(""); // Limpiar error al hacer clic en aceptar
    };

    return (
        <main className={`${runApp ? "flex" : "hidden"} absolute w-full h-full bg-black/50 z-[1000] items-center justify-center`}>
            <section className='w-[95%] max-w-[300px] h-auto overflow-hidden rounded-lg relative'>
                <nav className='w-full bg-[#F1F1F1] flex flex-row justify-between items-center'>
                    <div className='flex flex-row items-center'>
                        <img src={svgJava} alt="Java Logo" className='ml-2 w-[16px] border rounded-md border-[#90A7BA]' />
                        <p className='text-sm ml-2'>Deja tu Mensaje</p>
                    </div>
                    <div className='flex flex-row'>
                        <HiMiniMinusSmall className='p-2 box-content cursor-pointer' />
                        <VscDebugStop className='p-2 box-content cursor-pointer' />
                        <IoMdClose className='p-2 box-content hover:bg-red-500 hover:text-white cursor-pointer' onClick={CloseAplication} />
                    </div>
                </nav>
                <form className='bg-[#DCDCDC] h-[calc(100%-32px)] flex flex-col gap-y-4 justify-center py-3'>
                    <section className='flex flex-row items-center justify-between'>
                        <h6 className="ml-4 font-semibold text-sm">De:</h6>
                        <input
                            name="remitente"
                            value={formData.remitente}
                            onChange={handleChange}
                            className='mr-4 border border-[#7B8A99] text-sm p-1'
                            type="email" // Asegúrate de que el input sea de tipo email
                        />
                    </section>
                    <section className='flex flex-row items-center justify-between'>
                        <h6 className="ml-4 font-semibold text-sm">Asunto:</h6>
                        <input
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className='mr-4 border border-[#7B8A99] text-sm p-1'
                        />
                    </section>

                    <p className='py-1 px-6 block ml-auto border border-[#7A8A99] mr-4 button-java font-semibold cursor-pointer text-sm' onClick={sendEmail}>
                        {loading ? "Enviando..." : "Enviar"}
                    </p>
                </form>

                {/* Mensaje de éxito o error */}
                {(successfully || error) && (
                    <section className={`absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black/50`}>
                        <article className='h-auto w-[95%] max-w-[300px] bg-white rounded-md border-[#A2A2A2] overflow-hidden'>
                            <nav className='h-[30px] bg-white flex items-center'>
                                <p className='text-sm ml-4'>Mensaje</p>
                            </nav>
                            <section className='h-[calc(100%-30px)] flex flex-col items-center justify-center py-3 px-2'>
                                <div className='flex flex-row items-center mx-auto gap-x-4'>
                                    <BsInfoCircleFill className={`text-${successfully ? '[#666699]' : 'red-500'} text-3xl`} />
                                    <p className='text-sm'>{successfully ? "Email enviado correctamente" : error}</p>
                                </div>
                                <p className='button-java px-6 py-1 border border-[#7B8B99] mt-4 cursor-pointer text-sm' onClick={finishApp}>Aceptar</p>
                            </section>
                        </article>
                    </section>
                )}

                {/* Spinner de carga */}
                {loading && (
                    <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black/50 z-10">
                        <div className="loader"></div> {/* Aquí puedes agregar tu spinner */}
                    </div>
                )}
            </section>
        </main>
    );
};

export default RunContact;
