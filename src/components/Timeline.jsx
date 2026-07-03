import React from 'react';
import { useTranslation } from 'react-i18next';
import './Timeline.css';

const MinimalTimeline = () => {
  const { t } = useTranslation();

  const events = [
    { year: "2005-2017", title: t("timeline_event1_title"), description: t("timeline_event1_desc") },
    { year: "2018-2021", title: t("timeline_event2_title"), description: t("timeline_event2_desc") },
    { year: "2024-2025", title: t("timeline_event3_title"), description: t("timeline_event3_desc") },
    { year: "2025-2026", title: t("timeline_event4_title"), description: t("timeline_event4_desc") }
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