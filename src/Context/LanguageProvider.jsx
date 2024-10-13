'use client'
import React, { createContext, useContext, useState } from 'react';

const LanguajeContext = createContext();

export const useLanguage = () => {
    const context = useContext(LanguajeContext);
    if (!context) {
        throw new Error("useLanguaje debe ser utilizado dentro del LanguajeProvider");
    }
    return context;
};

export const LanguageProvider = ({ children }) => {
    const [ english , setEnglish ] = useState( true )

    const setSpanish = () => {
        setEnglish(!english)
    }
    

    return (
        <LanguajeContext.Provider value={{
            setSpanish , english
        }}>
            {children}
        </LanguajeContext.Provider>
    );
};