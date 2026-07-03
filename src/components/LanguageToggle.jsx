// components/LanguageToggle.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import "./LanguageToggle.css";
import esFlag from "/flags/es.png";
import usFlag from "/flags/us.png";
import esFlag from "../assets/flags/es.png";
import usFlag from "../assets/flags/us.png";

export default function LanguageToggle() {
const { i18n } = useTranslation();
const isSpanish = i18n.language === "es";

const toggleLanguage = () => {
i18n.changeLanguage(isSpanish ? "en" : "es");
};

return (
<div className="lang-switch-wrapper">
    <img
    src={esFlag}
    alt="Español"
    className="lang-flag left"
    />
    <label className="lang-switch">
    <input type="checkbox" checked={!isSpanish} onChange={toggleLanguage} />
    <span className="lang-slider" />
    </label>
    <img
    src={usFlag}
    alt="English"
    className="lang-flag right"
    />
</div>
);
}
