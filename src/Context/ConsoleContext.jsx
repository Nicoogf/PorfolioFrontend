'use client'
import React, { createContext, useContext, useState } from 'react';


const ConsoleContext = createContext();

export const useConsole = () => {
    const context = useContext(ConsoleContext);
    if (!context) {
        throw new Error("useConsole debe ser utilizado dentro del MenuProvider");
    }
    return context;
};

export const ConsoleProvider = ({ children }) => {
    const [viewConsole, setViewConsole] = useState(false)

    const toggleConsole = () => {
        setViewConsole(!viewConsole)
    }

    const activeConsole = () =>{
        setViewConsole(true)
    }


    return (
        <ConsoleContext.Provider value={{
            viewConsole, setViewConsole,toggleConsole,activeConsole
        }}>
            {children}
        </ConsoleContext.Provider>
    );
};