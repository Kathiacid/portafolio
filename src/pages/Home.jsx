import React from "react";
import "./Home.css";
import LanguageToggle from "../components/LanguageToggle";

export default function Home({ t }) {
return (
<section className="home-section">
    <div className="placeholder-image">
    {/* Imagen futura */}
        <LanguageToggle />
    </div>
</section>
);
}


