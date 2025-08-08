import React from 'react';
import './Timeline.css';

const MinimalTimeline = () => {
const events = [
{ year: "2005-2017", title: "Colegio San Agustin", description: "Concepción" },
{ year: "2018-2021", title: "Pedagogía en Inglés", description: "Universidad San Sebastian" },
{ year: "2018-2021", title: "Analista Programador", description: "INACAP" }
];

return (
<div className="timeline-wrapper">
    <div className="timeline-container">
    <div className="timeline-line"></div>
    
    <div className="timeline-points">
        {events.map((event, index) => (
        <div key={index} className="timeline-point-container">
            <div className="timeline-point"></div>
            <div className="timeline-text">
            <div className="timeline-year">{event.year}</div>
            <div className="timeline-title">{event.title}</div>
            <div className="timeline-description">{event.description}</div>
            </div>
        </div>
        ))}
    </div>
    </div>
</div>
);
};

export default MinimalTimeline;