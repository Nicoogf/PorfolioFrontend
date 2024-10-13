import React from 'react';
import { Link } from 'react-router-dom'; // O asegúrate de que estás usando el correcto si estás en Next.js
import { useMenu } from '../../Context/HeaderContext';

const FilesComponent = ({ fileName, iconUrl, link }) => {
    const { addFileToEyelash } = useMenu();
    return (
        <Link
            to={link}
            className='flex flex-row items-center gap-x-1  pl-7 py-[2px] cursor-pointer hover:bg-[#0A2F66]'
            onClick={() => addFileToEyelash(fileName, link, iconUrl)}
        >
            <span className='relative'>
                <img src={iconUrl} alt="logo" className='w-[14px] md:w-[18px]' />
            </span>
            <p className='text-[12px] text-[#EFFFDB]'>{fileName}</p>
        </Link>
    );
};

export default FilesComponent;