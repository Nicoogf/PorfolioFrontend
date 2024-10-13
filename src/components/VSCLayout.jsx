
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import ContactPage from '../pages/code/Contact';
import Dashboard from '../pages/code/Curriculum';
import HeaderComponent from './Header/HeaderComponent';
import HeaderOpctions from './HeaderOpcions/HeaderOpctions';
import AsideIcons from './AsideIcons/AsideIcons';
import AsideExplorer from './AsideExplorer/AsideExplorer';
import { useMenu } from '../Context/HeaderContext';
import { MdClose } from "react-icons/md";
import CurriculumPage from '../pages/code/Curriculum';
import ExperiencePage from '../pages/code/Experience';
import NetworkPage from '../pages/code/Networks';
import ProjectPage from '../pages/code/Projects';
import TechnologiesPage from '../pages/code/Technologies';
import { useConsole } from '../Context/ConsoleContext';
import { useEffect } from 'react';
import RunContact from './JavaApp/page';
import TerminalComponent from './Terminal/TerminalComponent';
import FooterComponent from './Footer/FooterComponent';
import EyelashOpenComponent from './EyelashOpen/EyelashOpenComponent';
import AsideMobile from './AsideMobile/AsideMobile';
import { FaFolderOpen } from "react-icons/fa6";



function VSCLayout() {
  const navigate = useNavigate();
  const {
    EyelashOpen, removeFileFromEyelash, closeAllMenu,viewAsideMobile,toggleAsideMovile
  } = useMenu();

  const { viewConsole } = useConsole()

  useEffect(() => {
    if (EyelashOpen.length === 0) {
      navigate('/code');
    }
  }, [EyelashOpen, navigate]);


  return (
    <main className='w-full max-w-[100%] h-[100vh] bg-[#030D22] flex flex-col min-w-[100%] relative overflow-hidden explorer-font'>


      <HeaderComponent />
      <HeaderOpctions />

      <section className='bg-[#030D22] w-full h-[calc(100%-59px)] flex flex-row' onClick={closeAllMenu}>

        <AsideIcons />
        <AsideExplorer />
        <AsideMobile />

        <section className='w-full md:w-[calc(100%-120px)] relative overflow-hidden'>

        <EyelashOpenComponent />
        <p className={`${ viewAsideMobile ? "translate-x-96" : "translate-x-0"} cursor-pointer md:hidden code absolute top-48 right-8 bg-[#EF2588] text-white font-semibold z-[9999] px-3 py-3 rounded-full transition-all duration-200`}
        onClick={toggleAsideMovile}> 
         <span>
          <FaFolderOpen />
         </span>
        </p>

          <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="curriculum" element={<CurriculumPage />} />
            <Route path="experience" element={<ExperiencePage />} />
            <Route path="network" element={<NetworkPage />} />
            <Route path="projects" element={<ProjectPage />} />
            <Route path="technologies" element={<TechnologiesPage />} />
          </Routes>

          <TerminalComponent />

        </section>




      </section>

     <FooterComponent />

      <RunContact />



    </main>
  );
}

export default VSCLayout;