'use client'
import React, { createContext, useContext, useState } from 'react';


const MenuContext = createContext();

export const useMenu = () => {
    const context = useContext(MenuContext);
    if (!context) {
        throw new Error("useMenu debe ser utilizado dentro del MenuProvider");
    }
    return context;
};

export const MenuProvider = ({ children }) => {
    const [viewFile, setViewFile] = useState(false);
    const [viewTerminal, setViewTerminal] = useState(false);
    const [viewHelp, setViewHelp] = useState(false);

    //Explorer Variables
    const [viewExplorer, setViewExplorer] = useState(false)
    const [ viewSrc , setViewSrc ] = useState(false)

    //Eyelash
    const [ EyelashOpen , setEyelashOpen ] = useState([]) ;

    //JavaAPP
    const [ runApp , setRunApp ] = useState(false)

    //ExplorerMobile
    const [ viewAsideMobile , setViewAsideMobile] = useState(false)

    const toggleFile = () => {
        setViewFile(!viewFile)
        setViewTerminal(false)
        setViewHelp(false)
    }

    const toggleTerminal = () => {
        setViewTerminal(!viewTerminal)
        setViewFile(false)
        setViewHelp(false)
    }

    const toggleHelp = () => {
        setViewHelp(!viewHelp)
        setViewFile(false)
        setViewTerminal(false)
    }

    const closeAllMenu = () => {
        setViewFile(false)
        setViewTerminal(false)
        setViewHelp(false)
    }

    //Variables Explores

    const toggleExplorer = () => {
        setViewExplorer(!viewExplorer)
        setViewSrc(false)
    }

    const toggleSrc = () => {
        setViewSrc(!viewSrc)
    }


    //Pestañas

    const addFileToEyelash = (fileName, link, iconUrl) => {
        const newFile = { nombre: fileName, link, icon: iconUrl };
        setEyelashOpen(prevState => {
            // Verificar si ya existe el archivo
            const fileExists = prevState.some(file => file.nombre === fileName);
            if (!fileExists) {
                return [...prevState, newFile];
            }
            return prevState; // No agregar duplicados
        });
    };
    const removeFileFromEyelash = (nombre) => {
        setEyelashOpen(prevState => prevState.filter(file => file.nombre !== nombre));
    };

    const StartAplication = () =>{
        setRunApp(true)
    }
    const CloseAplication = () =>{
        setRunApp(false)
    }

    //AsideMobile
    const toggleAsideMovile = () => {
        setViewAsideMobile(!viewAsideMobile)
    }

    //Clasic Porfolio
    const [ viewMenuMobiles , setMenuMobile ] = useState(false)

    const toggleMenuMobile = () => {
      setMenuMobile(!viewMenuMobiles)
    }
    



    return (
        <MenuContext.Provider value={{
            viewFile, setViewFile, toggleFile,
            viewTerminal,setViewTerminal, toggleTerminal,
            viewHelp, setViewHelp, toggleHelp,
            closeAllMenu,
            viewExplorer,setViewExplorer,toggleExplorer,
            viewSrc , setViewSrc ,toggleSrc ,
            EyelashOpen,addFileToEyelash,removeFileFromEyelash,
            StartAplication , runApp ,CloseAplication,
            toggleAsideMovile,viewAsideMobile,
            viewMenuMobiles,toggleMenuMobile
            

        }}>
            {children}
        </MenuContext.Provider>
    );
};