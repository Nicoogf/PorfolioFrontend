// import React, { useRef } from 'react';
// import emailjs from 'emailjs-com';

// const FormularioContacto = () => {
//     const form = useRef();
//     const sendEmail = (e) => {
//         e.preventDefault();

//         emailjs
//             .sendForm('service_kqpxvnf', 'template_lg3g9qs', form.current, "BjjMTn9xEt7p26HyT")
//             .then(
//                 () => {
//                     console.log('SUCCESS!');
//                 },
//                 (error) => {
//                     console.log('FAILED...', error.text);
//                 },
//             );
//     };
//     return (
//         <form className="flex flex-col mt-1 gap-y-2 xl:p-3" ref={form} onSubmit={sendEmail}>
//             <label className="text-xs hidden ">
//                 Asunto
//             </label>
//             <input className=" outline-none p-2 bg-[#160830]/60 border border-[#372F54] rounded-md text-sm" name="remitente" />
//             <label className="text-xs hidden">
//                 Mensaje
//             </label>
//             <textarea className="p-2 bg-[#160830]/60  border border-[#372F54] rounded-md text-sm outline-none " name="message" />

//             <button className="hover:bg-white hover:text-violet-900 bg-violet-200/20 px-3 py-2 text-white mt-1 w-[70%] ml-auto font-semibold rounded-md max-w-[120px] xl:mt-2 text-xs transition-all duration-200"> Enviar </button>


//         </form>
//     )
// }

// export default FormularioContacto


// import React, { useEffect, useRef, useState } from 'react';
// import emailjs from 'emailjs-com';
// import { useNightMode } from '../../Context/NightmodeContext';
// import { useLanguage } from '../../Context/LanguageProvider';

// const FormularioContacto = () => {
//     const form = useRef();
//     const [errors, setErrors] = useState({});
//     const [isSending, setIsSending] = useState(false);
//     const [successMessage, setSuccessMessage] = useState("");
//     const {  nightMode , toggleNightMode } = useNightMode()
//     const { english , setSpanish  } = useLanguage()

//     const validateForm = () => {
//         const formData = new FormData(form.current);
//         const remitente = formData.get('remitente');
//         const message = formData.get('message');
//         let formErrors = {};

//         // Validar que el remitente sea un correo válido
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!remitente) {
//             formErrors.remitente = "El remitente es obligatorio.";
//         } else if (!emailRegex.test(remitente)) {
//             formErrors.remitente = "El remitente debe ser un correo válido.";
//         }

//         // Validar que el mensaje no esté vacío
//         if (!message) {
//             formErrors.message = "El mensaje es obligatorio.";
//         }

//         setErrors(formErrors);
//         return Object.keys(formErrors).length === 0; // Si no hay errores, retornar true
//     };

//     useEffect(() => {
//         if (successMessage) {
//             const timer = setTimeout(() => {
//                 setSuccessMessage(""); // Limpiar el mensaje después de 4 segundos
//             }, 4000);
//             return () => clearTimeout(timer); // Limpiar el temporizador al desmontar o cambiar mensaje
//         }
//     }, [successMessage]);


//     const sendEmail = (e) => {
//         e.preventDefault();
//         setSuccessMessage(""); // Limpiar mensaje de éxito al intentar enviar

//         if (!validateForm()) {
//             return; // Si hay errores, no enviar el email
//         }

//         setIsSending(true); // Mostrar spinner
//         emailjs
//             .sendForm('service_kqpxvnf', 'template_lg3g9qs', form.current, "BjjMTn9xEt7p26HyT")
//             .then(
//                 () => {
//                     setIsSending(false); // Ocultar spinner
//                     setSuccessMessage("¡El mensaje se envió correctamente!");
//                     form.current.reset(); // Resetear el formulario
//                 },
//                 (error) => {
//                     setIsSending(false); // Ocultar spinner
//                     console.log('FAILED...', error.text);
//                 },
//             );
//     };

//     return (
//         <form className="flex flex-col mt-1 gap-y-2 xl:p-3" ref={form} onSubmit={sendEmail}>
//             {/* Remitente */}
//             <label className="text-xs hidden">Remitente</label>
//             <input
//                 className={` ${nightMode ? "bg-[#160830]/60 border-[#372F54]" : "bg-violet-900/40 border-violet-950/60" } outline-none p-2 bg-[#160830]/60 border border-[#372F54] rounded-md text-sm ${errors.remitente ? 'border-red-500' : ''}`}
//                 name="remitente"
//                 placeholder={ english ? "Email" : "Correo electrónico"}
//             />
//             {errors.remitente && <p className="text-red-500 text-xs">{errors.remitente}</p>}

//             {/* Mensaje */}
//             <label className="text-xs hidden">Mensaje</label>
//             <textarea
//                 className={`p-2 ${nightMode ? "bg-[#160830]/60 border-[#372F54]" : "bg-violet-900/40 border-violet-950/60" }  border  rounded-md text-sm outline-none ${errors.message ? 'border-red-500' : ''}`}
//                 name="message"
//                 placeholder={ english ? "Leave your message" : "Escribe tu mensaje"}
//             />
//             {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}

//             {/* Botón de envío */}
//             <button
//                 className="hover:bg-white hover:text-violet-900 bg-violet-200/20 px-3 py-2 text-white mt-1 w-[70%] ml-auto font-semibold rounded-md max-w-[120px] xl:mt-2 text-xs transition-all duration-200 flex items-center justify-center"
//                 type="submit"
//                 disabled={isSending} // Desactivar el botón mientras se está enviando
//             >
//                 {isSending ? (
//                     <svg
//                         className="animate-spin h-4 w-4 text-white"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                     >
//                         <circle
//                             className="opacity-25"
//                             cx="12"
//                             cy="12"
//                             r="10"
//                             stroke="currentColor"
//                             strokeWidth="4"
//                         ></circle>
//                         <path
//                             className="opacity-75"
//                             fill="currentColor"
//                             d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
//                         ></path>
//                     </svg>
//                 ) : (
//                    <span> {english ? "Send" : "Enviar"} </span> 
//                 )}
//             </button>

//             {/* Mensaje de éxito */}
//             {successMessage && (
//                 <p className="text-green-500 text-xs mt-2 text-center">{successMessage}</p>
//             )}
//         </form>
//     );
// };

// export default FormularioContacto;


import React, { useEffect, useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { useNightMode } from '../../Context/NightmodeContext';
import { useLanguage } from '../../Context/LanguageProvider';

const FormularioContacto = () => {
    const form = useRef();
    const [errors, setErrors] = useState({});
    const [isSending, setIsSending] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const { nightMode } = useNightMode();
    const { english } = useLanguage(); // Obtener el idioma actual del contexto

    const validateForm = () => {
        const formData = new FormData(form.current);
        const remitente = formData.get('remitente');
        const message = formData.get('message');
        let formErrors = {};

        // Validar que el remitente sea un correo válido
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!remitente) {
            formErrors.remitente = english ? "Email is required." : "El remitente es obligatorio.";
        } else if (!emailRegex.test(remitente)) {
            formErrors.remitente = english ? "Please enter a valid email." : "El remitente debe ser un correo válido.";
        }

        // Validar que el mensaje no esté vacío
        if (!message) {
            formErrors.message = english ? "Message is required." : "El mensaje es obligatorio.";
        }

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0; // Si no hay errores, retornar true
    };

    useEffect(() => {
        if (successMessage) {
            const timer = setTimeout(() => {
                setSuccessMessage(""); // Limpiar el mensaje después de 4 segundos
            }, 4000);
            return () => clearTimeout(timer); // Limpiar el temporizador al desmontar o cambiar mensaje
        }
    }, [successMessage]);

    const sendEmail = (e) => {
        e.preventDefault();
        setSuccessMessage(""); // Limpiar mensaje de éxito al intentar enviar

        if (!validateForm()) {
            return; // Si hay errores, no enviar el email
        }

        setIsSending(true); // Mostrar spinner
        emailjs
            .sendForm('service_kqpxvnf', 'template_lg3g9qs', form.current, "BjjMTn9xEt7p26HyT")
            .then(
                () => {
                    setIsSending(false); // Ocultar spinner
                    setSuccessMessage(english ? "Message sent successfully!" : "¡El mensaje se envió correctamente!");
                    form.current.reset(); // Resetear el formulario
                },
                (error) => {
                    setIsSending(false); // Ocultar spinner
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <form className="flex flex-col mt-1 gap-y-2 xl:p-3" ref={form} onSubmit={sendEmail}>
            {/* Remitente */}
            <label className="text-xs hidden">Remitente</label>
            <input
                className={` ${nightMode ? "bg-[#160830]/60 border-[#372F54]" : "bg-violet-300/30 border-violet-800/30 placeholder:text-violet-900/70 text-black" } outline-none p-2 bg-[#160830]/60 border border-[#372F54] rounded-md text-sm ${errors.remitente ? 'border-red-500' : ''}`}
                name="remitente"
                placeholder={ english ? "Email" : "Correo electrónico"}
            />
            {errors.remitente && <p className="text-red-500 text-xs">{errors.remitente}</p>}

            {/* Mensaje */}
            <label className="text-xs hidden">Mensaje</label>
            <textarea
                className={`p-2 ${nightMode ? "bg-[#160830]/60 border-[#372F54]" : "bg-violet-300/30 border-violet-800/30 placeholder:text-violet-900/70 text-black" }  border  rounded-md text-sm outline-none ${errors.message ? 'border-red-500' : ''}`}
                name="message"
                placeholder={ english ? "Leave your message" : "Escribe tu mensaje"}
            />
            {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}

            {/* Botón de envío */}
            <button
                className={` ${nightMode ? " hover:bg-white hover:text-violet-900 bg-violet-200/20 " : "hover:bg-violet-900/60 hover:text-violet-300 bg-violet-800/50 " } px-3 py-2 text-white mt-1 w-[70%] ml-auto font-semibold rounded-md max-w-[120px] xl:mt-2 text-xs transition-all duration-200 flex items-center justify-center`}
                type="submit"
                disabled={isSending} // Desactivar el botón mientras se está enviando
            >
                {isSending ? (
                    <svg
                        className="animate-spin h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        ></circle>
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        ></path>
                    </svg>
                ) : (
                    <span>{english ? "Send" : "Enviar"}</span>
                )}
            </button>

            {/* Mensaje de éxito */}
            {successMessage && (
                <p className="text-green-500 text-xs mt-2 text-center">{successMessage}</p>
            )}
        </form>
    );
};

export default FormularioContacto;
