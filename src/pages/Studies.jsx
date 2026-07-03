import React from "react";
import { useTranslation } from "react-i18next";
import Timeline from "../components/Timeline";
import "./Studies.css";
import ImgStudies from "../assets/imgstudies.png";
import ContactameTitulo from "../assets/contactametitulo.png";
import Flechas from "../assets/flechas.png";
import PersonIcon from "../assets/contact/person.png";
import UbiIcon from "../assets/contact/ubi.png";
import GitIcon from "../assets/contact/git.png";
import GmailIcon from "../assets/contact/gmail.png";
import PhoneIcon from "../assets/contact/phone.png";


export default function Studies({ t: propT }) {
  const { t } = useTranslation();

return (
<section className="studies-section">
    <h1>{t('myStudies')}</h1>
    <Timeline />
    <section className="content">
    <div className="cursos">
        <h1>{t('courses_title')}</h1>
        <ul>
            <li>{t('course_js')}</li>
            <li>{t('course_uxui')}</li>
        </ul>
    </div>
    <img src={ImgStudies} className="imagen" alt="Estudios"></img>
    <div className="softskills">
        <h1>{t('softskills_title')}</h1>
        <ul>
            <li>{t('softskill_bilingual')}</li>
            <li>{t('softskill_detail')}</li>
            <li>{t('softskill_focus')}</li>
            <li>{t('softskill_responsible')}</li>
            <li>{t('softskill_discipline')}</li>
        </ul>
    </div>
    </section>
    <div className="contact-info">
    <img src={ContactameTitulo} className="contact-info__image" alt={t('contact_title')}></img>
    <img src={Flechas} className="contact-info__arrows" alt="Flechas"></img>
    </div>
    <section>
        <div className="name"><img src={PersonIcon} alt="Persona"></img><p>{t('contact_name')}</p></div>
        <div className="ubi"><img src={UbiIcon} alt="Ubicación"></img><p>{t('contact_location')}</p></div>
        <div className="git"><img src={GitIcon} alt="GitHub"></img><p>{t('contact_github')}</p></div>
        <div className="gmail"><img src={GmailIcon} alt="Gmail"></img><p>{t('contact_email')}</p></div> 
        <div className="phone"><img src={PhoneIcon} alt="Teléfono"></img><p>+56984038859</p></div>
    </section>

</section>
);
}
