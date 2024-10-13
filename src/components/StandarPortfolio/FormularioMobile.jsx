import React, { useRef, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { useNightMode } from '../../Context/NightmodeContext';

const FormularioContactoMovil = () => {
    const form = useRef();
    const { nightMode, toggleNightMode } = useNightMode()
    const [errors, setErrors] = useState({});
    const [isSending, setIsSending] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    const validateForm = () => {
        const formData = new FormData(form.current);
        const remitente = formData.get('remitente');
        const message = formData.get('message');
        let formErrors = {};

        // Validar que el remitente sea un correo válido
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!remitente) {
            formErrors.remitente = "El remitente es obligatorio.";
        } else if (!emailRegex.test(remitente)) {
            formErrors.remitente = "El remitente debe ser un correo válido.";
        }

        // Validar que el mensaje no esté vacío
        if (!message) {
            formErrors.message = "El mensaje es obligatorio.";
        }

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0; // Si no hay errores, retornar true
    };

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
                    setSuccessMessage("¡El mensaje se envió correctamente!");
                    form.current.reset(); // Resetear el formulario
                },
                (error) => {
                    setIsSending(false); // Ocultar spinner
                    console.log('FAILED...', error.text);
                },
            );
    };

    // useEffect para ocultar el mensaje de éxito después de 4 segundos
    useEffect(() => {
        if (successMessage) {
            const timer = setTimeout(() => {
                setSuccessMessage(""); // Limpiar el mensaje después de 4 segundos
            }, 4000);
            return () => clearTimeout(timer); // Limpiar el temporizador al desmontar o cambiar mensaje
        }
    }, [successMessage]);

    return (
        <form className="flex flex-col gap-y-2 mt-4" ref={form} onSubmit={sendEmail}>
            {/* Remitente */}
            <label className="text-xs hidden">Remitente</label>
            <input
                name="remitente"
                placeholder="Ingresar Remitente"
                className={`placeholder:text-sm p-2 bg-violet-200/20 border border-transparent rounded-md outline-none ${errors.remitente ? 'border-red-500' : ''}`}
            />
            {errors.remitente && <p className="text-red-500 text-xs">{errors.remitente}</p>}

            {/* Mensaje */}
            <label className="text-xs hidden">Mensaje</label>
            <textarea
                name="message"
                placeholder="Ingresar mensaje"
                className={`placeholder:text-sm p-2 bg-violet-200/20 border border-transparent rounded-md outline-none ${errors.message ? 'border-red-500' : ''}`}
            />
            {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}

            {/* Botón de envío */}
            <button
                className={` ${nightMode ? "text-violet-950 bg-white" : "bg-violet-950/60 text-violet-100 hover:bg-violet-800/60"} max-w-[175px] x-3 py-2  mt-2 w-[80%] ml-auto font-semibold rounded-md flex items-center justify-center`}
                type="submit"
                disabled={isSending} // Desactivar el botón mientras se está enviando
            >
                {isSending ? (
                    <svg
                        className="animate-spin h-4 w-4 text-violet-950"
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
                    "Enviar"
                )}
            </button>

            {/* Mensaje de éxito */}
            {successMessage && (
                <p className="text-green-500 text-xs mt-2 text-center">{successMessage}</p>
            )}
        </form>
    );
};

export default FormularioContactoMovil;
