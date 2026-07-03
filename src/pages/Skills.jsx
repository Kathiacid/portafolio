import React from "react";
import { useTranslation } from "react-i18next";
import "./Skills.css";
import CVButton from "../assets/cv-button.png";
import LosBreinsImage from "../assets/icons/losbreins.png";
import BreinsStoreImage from "../assets/icons/breinsstore.png";
import AukaImage from "../assets/icons/auka.png";

import PythonIcon from "../assets/icons/Group.png";
import CssIcon from "../assets/icons/css.png"; // Esta ruta ya era correcta, pero la revisé.
import JsIcon from "../assets/icons/js.png";
import BootstrapIcon from "../assets/icons/bootstrap.png";
import ReactIcon from "../assets/icons/react.png";
import HtmlIcon from "../assets/icons/htnl.png";
import MongoIcon from "../assets/icons/mongo.png";
import PsIcon from "../assets/icons/ps.png";
import FigmaIcon from "../assets/icons/figma.png";
import VisualIcon from "../assets/icons/visual.png"; // Esta ruta ya era correcta, pero la revisé.
import MysqlIcon from "../assets/icons/mysql.png";
import VueIcon from "../assets/icons/vue.png";
import DjangoIcon from "../assets/icons/django.png";
import ProfilePhoto from "../assets/profile-photo.jpeg";
import TypescriptIcon from "../assets/icons/typescript.png";
import TailwindIcon from "../assets/icons/tailwind.png";
import EjemploImage from "../assets/ejemplo.jpg";


export default function Skills({ t: propT }) {
  const { t } = useTranslation();

return (
<div className="skills-page" style={{ overflow: "hidden" }}>
    <div className="top-section">
    <section className="title">
        <h2>
        <span style={{ color: 'black' }}>&lt;</span>
        <span style={{ color: '#F9C4C5' }}>h2</span>
        <span style={{ color: 'black' }}>&gt;</span>
        <span style={{ color: 'black' }}> {t('skills_greeting')} </span>
        <span style={{ color: 'black' }}>&lt;/</span>
        <span style={{ color: '#F9C4C5' }}>h2</span>
        <span style={{ color: 'black' }}>&gt;</span>
        </h2>
    </section>
    <div className="header-section">
        <img src={ProfilePhoto} className="profile-photo" alt="Foto de perfil" />
        <p className="description">
        {t('skills_description')}
        </p>
        <a href="/cv.pdf" download="CV-Kathia-Cid.pdf" className="cv-link">
        <img src={CVButton} alt={t('downloadCV')} className="cv-button" />
        </a>
    </div>
    </div>

    <div className="content-section">
    <div className="skills-section">
        <h1>{t('mySkills')}</h1>
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
        <div className="skills-column">
            <button className="skill-item">
            <img src={TypescriptIcon} alt="TypeScript" className="skill-icon" />
            TypeScript
            </button>
            <button className="skill-item">
            <img src={TailwindIcon} alt="Tailwind CSS" className="skill-icon" />
            Tailwind CSS
            </button>
        </div>
        </div>
    </div>

    <div className="projects-section">
        <h1>{t('skills_projects_title')}</h1>
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
                        <span>{t('skills_visit_web')}</span>
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
                        <span>{t('skills_visit_store')}</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="project-card flip-card" onClick={() => window.open('https://auka-terapias-main-dq9u.vercel.app/', '_blank')}>
            <div className="project-card-inner">
                <div className="project-card-front">
                    <img src={AukaImage} alt="AUKA" />
                    <div className="project-info">
                    <h4>AUKA</h4>
                    <div className="tech-icons">
                        <div className="tech-btn"><img src={ReactIcon} alt="React" title="React" /></div>
                        <div className="tech-btn"><img src={HtmlIcon} alt="HTML" title="HTML" /></div>
                        <div className="tech-btn"><img src={CssIcon} alt="CSS" title="CSS" /></div>
                        <div className="tech-btn"><img src={JsIcon} alt="JavaScript" title="JavaScript" /></div>
                        <div className="tech-btn"><img src={DjangoIcon} alt="Django" title="Django" />
                        </div>
                    </div>
                    </div>
                </div>
                <div className="project-card-back">
                    <img src={EjemploImage} alt="Reverso AUKA" />
                    <div className="visit-overlay">
                        <span>{t('skills_visit_store')}</span>
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