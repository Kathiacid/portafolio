// components/Navbar.jsx
import React from "react";
import "./Navbar.css";

export default function Navbar({ activePage, setActivePage }) {
return (
<div className="navbar">
    {[0, 1, 2].map((i) => (
    <div
        key={i}
        className={`dot ${activePage === i ? "active" : ""}`}
        onClick={() => setActivePage(i)}
    />
    ))}
</div>
);
}
