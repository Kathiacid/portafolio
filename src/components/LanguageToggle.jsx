// components/LanguageToggle.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import "./LanguageToggle.css";

export default function LanguageToggle() {
const { i18n } = useTranslation();
const isSpanish = i18n.language === "es";

const toggleLanguage = () => {
i18n.changeLanguage(isSpanish ? "en" : "es");
};

return (
<div className="lang-switch-wrapper">
    <img
    src="../flags/es.png"
    alt="Español"
    className="lang-flag left"
    />
    <label className="lang-switch">
    <input type="checkbox" checked={!isSpanish} onChange={toggleLanguage} />
    <span className="lang-slider" />
    </label>
    <img
    src="../flags/us.png"
    alt="English"
    className="lang-flag right"
    />
</div>
);
}
