import React from "react";
import "./Home.css";
import LanguageToggle from "../components/LanguageToggle";

export default function Home({ t }) {
return (
<section className="home-section">
    <div className="logo-container">
    <img src="./src/assets/icon.png" alt="Logo" className="logo" />
    </div>
    
    <div className="intro-text">
    <h1>{t('Bienvenido')}</h1>
    </div>

    <div className="placeholder-image">
    {/* Imagen futura */}
    <LanguageToggle />
    </div>
</section>
);
}