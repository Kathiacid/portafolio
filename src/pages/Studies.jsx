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
        <h2>Cursos</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, ducimus aut nemo nihil ab voluptatibus excepturi, illum perspiciatis eaque nulla temporibus tempore incidunt nisi harum odio quidem atque non animi.</p>
        </div>
        <img src="./src/assets/imgstudies.png" className="imagen"></img>
        <div className="softskills">
            <h2>Softskills</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sint ex, libero quae quas esse odio ducimus deleniti eaque provident cupiditate dignissimos ab error porro magnam blanditiis maxime dolor ipsum?</p>
        </div>
    </section>
    <div className="contact-info">
        <h3>{t("contact")}</h3>
        <p>Email: tuemail@mail.com</p>
        </div>
</section>

);
}
