import React from "react";
import Timeline from "../components/Timeline";
import "./Studies.css";

export default function Studies({ t }) {
return (
<section className="studies-section">
    <h1>Estudios</h1>
    <Timeline />
    <section className="content">
    <div className="cursos">
        <h1>Cursos</h1>
        <p> 
            <ul>
                <li>Curso Javascript UDEMY</li>
                <li> Curso UX/UI UDEMY</li>
            </ul>
        </p>
    </div>
    <img src="./src/assets/imgstudies.png" className="imagen" alt="Estudios"></img>
    <div className="softskills">
        <h1>Softskills</h1>
        <p> 
            <ul>
                <li>Bilingue
        (Español e ingles)</li>
                <li>  Detallista</li>
                <li>Enfoque</li>
                <li>Responsable</li>
                <li>Disciplina</li>
            </ul>
        </p>
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
