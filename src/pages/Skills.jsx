import React from "react";
import "./Skills.css";
import CVButton from "../assets/cv-button.png";
import MinkiShelterImage from "../assets/Minki-shelter.jpg";
import CalicoYaImage from "../assets/calico-ya.webp";

export default function Skills() {
return (
<div className="skills-page">
    {/* Primer div contenedor (header hasta download button) */}
    <div className="top-section">
    <div className="header-section">
        <h2>Hola</h2>
        <p className="description">
        Soy una profesional con dos años de estudios en Análisis de Programación, 
        complementados con cursos especializados en UX/UI y desarrollo Front-End. 
        Me apasiona crear experiencias digitales funcionales y visualmente atractivas, 
        tanto en aplicaciones como en sitios web.
        </p>
        <a href="/cv.pdf" download className="cv-link">
        <img src={CVButton} alt="Descargar CV" className="cv-button" />
        </a>
    </div>
    </div>

    {/* Segundo div contenedor (habilidades hasta proyectos) */}
    <div className="content-section">
    {/* Sección de habilidades */}
    <div className="skills-section">
        <h3>Habilidades</h3>
        <div className="skills-columns">
        <div className="skills-column">
            <div className="skill-item">Python</div>
            <div className="skill-item">CSS</div>
            <div className="skill-item">JavaScript</div>
            <div className="skill-item">Roxitrus</div>
        </div>
        <div className="skills-column">
            <div className="skill-item">React</div>
            <div className="skill-item">HTML</div>
            <div className="skill-item">MongoDB</div>
            <div className="skill-item">Photoshop</div>
        </div>
        <div className="skills-column">
            <div className="skill-item">Figma</div>
            <div className="skill-item">Visual</div>
            <div className="skill-item">MySQL</div>
        </div>
        </div>
    </div>

    {/* Sección de proyectos */}
    <div className="projects-section">
        <h3>Algunos de mis proyectos</h3>
        <div className="projects-grid">
        <div className="project-card">
            <img src={MinkiShelterImage} alt="Minki's shelter" />
            <div className="project-info">
            <h4>Minki's shelter</h4>
            <p>Página web para un refugio de gatos</p>
            </div>
        </div>
        <div className="project-card">
            <img src={CalicoYaImage} alt="Calico-ya" />
            <div className="project-info">
            <h4>Calico-ya</h4>
            <p>Página Web para .......</p>
            </div>
        </div>
        </div>
    </div>
    </div>
</div>
);
}