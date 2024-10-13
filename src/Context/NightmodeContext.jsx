'use client'
import React, { createContext, useContext, useState } from 'react';

const NightModeContext = createContext();

export const useNightMode = () => {
    const context = useContext(NightModeContext);
    if (!context) {
        throw new Error("useNightMode debe ser utilizado dentro del MenuProvider");
    }
    return context;
};

export const NightProvider = ({ children }) => {
   
    const [ nightMode , setNightMode ] = useState(true)

    const toggleNightMode = () => {
        setNightMode(!nightMode)
    }



    return (
        <NightModeContext.Provider value={{
            nightMode , toggleNightMode

        }}>
            {children}
        </NightModeContext.Provider>
    );
};