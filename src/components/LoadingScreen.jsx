import React, { useEffect, useRef, useState } from 'react';
import './LoadingScreen.css';
import logo from '/icon.png';

const LoadingScreen = ({ onLoadingComplete }) => {
const [progress, setProgress] = useState(0);
const [isComplete, setIsComplete] = useState(false);
const [split, setSplit] = useState(false);

// Duración total de la “carga” (ajústala a gusto)
const DURATION_MS = 2500;

const rafRef = useRef(null);
const startRef = useRef(null);

useEffect(() => {
// Progreso basado en tiempo real → llega a 100 siempre
const tick = (now) => {
    if (!startRef.current) startRef.current = now;
    const elapsed = now - startRef.current;
    const pct = Math.min(100, Math.round((elapsed / DURATION_MS) * 100));
    setProgress(pct);

    if (pct >= 100) {
    setIsComplete(true);
    cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
    return;
    }
    rafRef.current = requestAnimationFrame(tick);
};

rafRef.current = requestAnimationFrame(tick);
return () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
};
}, []);

useEffect(() => {
if (isComplete) {
    // Arranca la animación de apertura
    const t1 = setTimeout(() => setSplit(true), 200);
    // Avisar al padre cuando ya abrió
    const t2 = setTimeout(() => {
    if (onLoadingComplete) onLoadingComplete();
    }, 1400);

    return () => {
    clearTimeout(t1);
    clearTimeout(t2);
    };
}
}, [isComplete, onLoadingComplete]);

return (
<div className={`loading-container ${split ? 'split' : ''}`}>
    {/* Paneles que se abren */}
    <div className="loading-left" aria-hidden="true"></div>
    <div className="loading-right" aria-hidden="true"></div>

    {/* Contenido central */}
    <div className="loading-content">
    <div className="spinning-logo">
        <div className="logo-circle">
        <img src={logo} alt="Logo" className="logo-image" />
        </div>
    </div>

    <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }} />
    </div>

    <div className="loading-text">{progress}%</div>
    </div>
</div>
);
};

export default LoadingScreen;
