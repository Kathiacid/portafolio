// App.jsx
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Studies from "./pages/Studies";
import Navbar from "./components/Navbar";
import LanguageToggle from "./components/LanguageToggle";
import LoadingScreen from "./components/LoadingScreen";
import "./App.css";

// Importar la configuración de i18n
import "./i18n";

export default function App() {
  const [activePage, setActivePage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation();

  const pages = [
    <Home t={t} key="home" />,
    <Skills t={t} key="skills" />,
    <Studies t={t} key="studies" />
  ];

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Simular carga de recursos
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-container">
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      
      {!isLoading && (
        <>
          <Navbar activePage={activePage} setActivePage={setActivePage} t={t} />
          <LanguageToggle />
          <div className="pages-wrapper">
            {pages[activePage]}
          </div>
        </>
      )}
    </div>
  );
}