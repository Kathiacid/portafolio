import React from "react";
import "./ProjectCard.css";

export default function ProjectCard() {
return (
<div className="project-card">
    <div className="card-inner">
    <div className="card-front">
        <img src="/assets/project.jpg" alt="project"/>
    </div>
    <div className="card-back">
        <img src="/assets/code.jpg" alt="code"/>
    </div>
    </div>
</div>
);
}
