import React from "react";
import "./Home.css";
import LanguageToggle from "../components/LanguageToggle";
import portada from "../assets/portada.png"
import icon from "../assets/icon.png";

export default function Home({ t }) {
return (
<section className="home-section">
    <div className="logo-container">
    <img src={icon} alt="Logo" className="logo" />
    </div>
    
    <div className="intro-text">
    <h1>{t('Bienvenido')}</h1>
    </div>

    <div className="placeholder-image">
    {portada}
    <LanguageToggle />
    </div>
</section>
);
}