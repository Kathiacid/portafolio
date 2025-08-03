// App.jsx
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Studies from "./pages/Studies";
import Navbar from "./components/Navbar";
import LanguageToggle from "./components/LanguageToggle";
import "./App.css";

export default function App() {
  const [activePage, setActivePage] = useState(0);
  const { t } = useTranslation();

  const pages = [
    <Home t={t} />,
    <Skills t={t} />,
    <Studies t={t} />
  ];

  return (
    <div className="app-container">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <div className="pages-wrapper">
        {pages[activePage]}
      </div>
    </div>
  );
}
