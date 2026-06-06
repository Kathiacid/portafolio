import React from "react";
import "./Skills.css";
import CVButton from "../assets/cv-button.png";
import LosBreinsImage from "../assets/icons/losbreins.png";
import BreinsStoreImage from "../assets/icons/breinsstore.png";

import PythonIcon from "../assets/icons/Group.png";
import CssIcon from "../assets/icons/css.png";
import JsIcon from "../assets/icons/js.png";
import BootstrapIcon from "../assets/icons/bootstrap.png";
import ReactIcon from "../assets/icons/react.png";
import HtmlIcon from "../assets/icons/htnl.png";
import MongoIcon from "../assets/icons/mongo.png";
import PsIcon from "../assets/icons/ps.png";
import FigmaIcon from "../assets/icons/figma.png";
import VisualIcon from "../assets/icons/visual.png";
import MysqlIcon from "../assets/icons/mysql.png";
import VueIcon from "../assets/icons/vue.png";
import ProfilePhoto from "../assets/Profile-photo.png";
import EjemploImage from "../assets/ejemplo.jpg";


export default function Skills() {
return (
<div className="skills-page">
    <div className="top-section">
    <section className="title">
        <h2>
        <span style={{ color: 'black' }}>&lt;</span>
        <span style={{ color: '#F9C4C5' }}>h2</span>
        <span style={{ color: 'black' }}>&gt;</span>
        <span style={{ color: 'black' }}> Hola </span>
        <span style={{ color: 'black' }}>&lt;/</span>
        <span style={{ color: '#F9C4C5' }}>h2</span>
        <span style={{ color: 'black' }}>&gt;</span>
        </h2>
    </section>
    <div className="header-section">
        <img src={ProfilePhoto} className="profile-photo" alt="Foto de perfil" />
        <p className="description">
        Soy una profesional con dos años de estudios en Analista programador, complementados con cursos especializados en UX/UI y desarrollo Front-End. Me apasiona crear experiencias digitales funcionales y visualmente atractivas, tanto en aplicaciones como en sitios web.
        </p>
        <a href="/portafolio/cv.pdf" download="CV.pdf" className="cv-link">
        <img src={CVButton} alt="Descargar CV" className="cv-button" />
        </a>
    </div>
    </div>

    <div className="content-section">
    <div className="skills-section">
        <h1>Habilidades</h1>
        <div className="skills-columns">
        <div className="skills-column">
            <button className="skill-item">
            <img src={PythonIcon} alt="Python" className="skill-icon" />
            Python
            </button>
            <button className="skill-item">
            <img src={CssIcon} alt="CSS" className="skill-icon" />
            CSS
            </button>
            <button className="skill-item">
            <img src={JsIcon} alt="JavaScript" className="skill-icon" />
            JavaScript
            </button>
            <button className="skill-item">
            <img src={BootstrapIcon} alt="Bootstrap" className="skill-icon" />
            Bootstrap
            </button>
        </div>

        <div className="skills-column">
            <button className="skill-item">
            <img src={ReactIcon} alt="React" className="skill-icon" />
            React
            </button>
            <button className="skill-item">
            <img src={HtmlIcon} alt="HTML" className="skill-icon" />
            HTML
            </button>
            <button className="skill-item">
            <img src={MongoIcon} alt="MongoDB" className="skill-icon" />
            MongoDB
            </button>
            <button className="skill-item">
            <img src={PsIcon} alt="Photoshop" className="skill-icon" />
            Photoshop
            </button>
        </div>

        <div className="skills-column">
            <button className="skill-item">
            <img src={FigmaIcon} alt="Figma" className="skill-icon" />
            Figma
            </button>
            <button className="skill-item">
            <img src={VisualIcon} alt="Visual Studio Code" className="skill-icon" />
            Visual Studio Code
            </button>
            <button className="skill-item">
            <img src={MysqlIcon} alt="MySQL" className="skill-icon" />
            MySQL
            </button>
            <button className="skill-item">
            <img src={VueIcon} alt="Vue" className="skill-icon" />
            Vue
            </button>
        </div>
        </div>
    </div>

    <div className="projects-section">
        <h1>Algunos de mis proyectos</h1>
        <div className="projects-grid">
        <div className="project-card flip-card" onClick={() => window.open('https://www.losbreins.com/', '_blank')}>
            <div className="project-card-inner">
                <div className="project-card-front">
                    <img src={LosBreinsImage} alt="Los Breins Roblox" />
                    <div className="project-info">
                    <h4>Los Breins Roblox</h4>
                    <div className="tech-icons">
                        <div className="tech-btn"><img src={ReactIcon} alt="React" title="React" /></div>
                        <div className="tech-btn"><img src={HtmlIcon} alt="HTML" title="HTML" /></div>
                        <div className="tech-btn"><img src={CssIcon} alt="CSS" title="CSS" /></div>
                        <div className="tech-btn"><img src={JsIcon} alt="JavaScript" title="JavaScript" /></div>
                    </div>
                    </div>
                </div>
                <div className="project-card-back">
                    <img src={EjemploImage} alt="Reverso Los Breins Roblox" />
                    <div className="visit-overlay">
                        <span>Visitar Web 🚀</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="project-card flip-card" onClick={() => window.open('https://www.breinstore.com/', '_blank')}>
            <div className="project-card-inner">
                <div className="project-card-front">
                    <img src={BreinsStoreImage} alt="BREINSSTORE ©" />
                    <div className="project-info">
                    <h4>BREINSSTORE ©</h4>
                    <div className="tech-icons">
                        <div className="tech-btn"><img src={ReactIcon} alt="React" title="React" /></div>
                        <div className="tech-btn"><img src={HtmlIcon} alt="HTML" title="HTML" /></div>
                        <div className="tech-btn"><img src={CssIcon} alt="CSS" title="CSS" /></div>
                        <div className="tech-btn"><img src={JsIcon} alt="JavaScript" title="JavaScript" /></div>
                        <div className="tech-btn">Shopify</div>
                    </div>
                    </div>
                </div>
                <div className="project-card-back">
                    <img src={EjemploImage} alt="Reverso BREINSSTORE ©" />
                    <div className="visit-overlay">
                        <span>Visitar Tienda 🛍️</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    </div>
</div>
);
}