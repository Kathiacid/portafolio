import React, { useState, useEffect } from "react";
import "./Home.css";
import portada from "../assets/home.png";
import BackgroundLights from "../components/BackgroundLights";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

return (
<section className="home-section">
    <div className={`home-curtain left ${isLoaded ? 'open' : ''}`}></div>
    <div className={`home-curtain right ${isLoaded ? 'open' : ''}`}></div>

    <BackgroundLights />

    <div className="placeholder-box">
        <div className="home-container">
            <header className="home-header">
            <span>/ Estructura /</span>
            <span>/ Estética /</span>
            <span>/ Interacción /</span>
            </header>

            <main className="home-main">
            <div className="hero-text-container">
                <h1>FRONTEND DEVELOPER</h1>
                <h2>✦ 2026 ✦</h2>
            </div>
            
            <div className="hero-image-wrapper">
                <img src={portada} alt="Frontend Developer Illustration" className="hero-image" />
            </div>
            </main>

            <footer className="home-footer">
            <div className="social-links">
                <a href="https://www.linkedin.com/in/kathiacid/" aria-label="">LinkedIn</a>
            </div>
            <div className="contact-email">
                <p>Kathia Cid </p>
            </div>
            
            </footer>
        </div>
    </div>
</section>
);
}