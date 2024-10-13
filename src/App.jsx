
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import ClassicPortfolio from './components/ClasicPortfolioPage';
import VSCLayout from './components/VSCLayout';
import { MenuProvider } from "./Context/HeaderContext";
import { ConsoleProvider } from "./Context/ConsoleContext";
import { NightProvider } from "./Context/NightmodeContext";
import { LanguageProvider } from "./Context/LanguageProvider";


function App() {
  return (
    <LanguageProvider> 
    <NightProvider>
      <MenuProvider>
        <ConsoleProvider>
          <Router>
            <Routes>
              {/* Ruta principal donde eliges el tipo de portfolio */}
              <Route path="/" element={<Home />} />

              {/* Ruta para el portfolio tradicional */}
              <Route path="/about" element={<ClassicPortfolio />} />

              {/* Ruta para la vista tipo VSC con rutas internas */}
              <Route path="/code/*" element={<VSCLayout />} />
            </Routes>
          </Router>
        </ConsoleProvider>
      </MenuProvider>
    </NightProvider>
    </LanguageProvider>
  );
}

export default App;