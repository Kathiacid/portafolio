import React, { useState, useEffect } from "react";
import "./BackgroundLights.css";

export default function BackgroundLights() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    // Escuchamos el evento de movimiento del ratón en toda la ventana
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Multiplicamos por valores pequeños para hacer un efecto "parallax" suave */}
      <div className="bg-glow shape1" style={{ transform: `translate(${mousePos.x * 0.03}px, ${mousePos.y * 0.03}px)` }}></div>
      <div className="bg-glow shape2" style={{ transform: `translate(${mousePos.x * -0.03}px, ${mousePos.y * -0.03}px)` }}></div>
      <div className="bg-glow shape3" style={{ transform: `translate(${mousePos.x * 0.015}px, ${mousePos.y * -0.015}px)` }}></div>
    </>
  );
}