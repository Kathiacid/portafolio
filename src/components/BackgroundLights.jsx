import React, { useState, useEffect } from "react";
import "./BackgroundLights.css";

export default function BackgroundLights() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX - window.innerWidth / 2) / 10;
      const y = (e.clientY - window.innerHeight / 2) / 10;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="bg-glow shape1" style={{ transform: `translate(${mousePos.x * 1.5}px, ${mousePos.y * 1.5}px)` }}></div>
      <div className="bg-glow shape2" style={{ transform: `translate(${mousePos.x * -1.2}px, ${mousePos.y * -1.2}px)` }}></div>
      <div className="bg-glow shape3" style={{ transform: `translate(${mousePos.x * 0.8}px, ${mousePos.y * 0.8}px)` }}></div>
    </>
  );
}