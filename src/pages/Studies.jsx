import React from "react";
import Timeline from "../components/Timeline";
import "./Studies.css";

export default function Studies({ t }) {
return (
<section className="studies-section">
    <Timeline />
    <div className="contact-info">
    <h3>{t("contact")}</h3>
    <p>Email: tuemail@mail.com</p>
    </div>
</section>
);
}
