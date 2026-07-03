import React from "react";
import { useTranslation } from "react-i18next";
import Timeline from "../components/Timeline";
import "./Studies.css";

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
    <img src="./src/assets/imgstudies.png" className="imagen" alt="Estudios"></img>
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
    <img src="./src/assets/contactametitulo.png" className="contact-info__image" alt="Contáctame"></img>
    <img src="./src/assets/flechas.png" className="contact-info__arrows" alt="Flechas"></img>
    </div>
    <section>
        <div className="name"><img src="./src/assets/contact/person.png"></img><p>Kathia Cid Mellado</p></div>
        <div className="ubi"><img src="./src/assets/contact/ubi.png"></img><p>Concepción,Chile</p></div>
        <div className="git"><img src="./src/assets/contact/git.png"></img><p>Kathiacid</p></div>
        <div className="gmail"><img src="./src/assets/contact/gmail.png"></img><p>kathiacid98@gmail.com</p></div> 
        <div className="phone"><img src="./src/assets/contact/phone.png"></img><p>+56984038859</p></div>
    </section>

</section>
);
}
