import React, { useState } from "react";
import "./Recommendations.css"; // Asegúrate de que este archivo exista y esté bien enlazado
import FranciscoPhoto from "../assets/icons/francisco.png"; // Cambia a .jpg si es necesario
import CarlosPhoto from "../assets/icons/carlos.jpeg"; // Cambia a .jpg si es necesario
import CertificadoFrontendTalentoDigital from "../assets/certificados/certificacionfrontendtalentodigital.png";
import CertificadoBootcampFrontendVue from "../assets/certificados/certificadobootcampfrontendvue.png";
import CertificadoAplicacionesIniciales from "../assets/certificados/Certificadodeaplicacionesiniciales.png";
import CertificadoIngles from "../assets/certificados/certificadodeingles.png";
import CertificadoFullstack from "../assets/certificados/certificadofullstack.png";
import CertificadoTISeguro from "../assets/certificados/certificadotiseguro.png";
import CertificadoColaboracionAcademica from "../assets/certificados/certificadocolaboracionacademica.png";

const certificates = [
  { src: CertificadoFrontendTalentoDigital, alt: "Certificado Frontend Talento Digital" },
  { src: CertificadoBootcampFrontendVue, alt: "Certificado Bootcamp Frontend Vue" },
  { src: CertificadoAplicacionesIniciales, alt: "Certificado Aplicaciones Iniciales" },
  { src: CertificadoIngles, alt: "Certificado de Inglés" },
  { src: CertificadoFullstack, alt: "Certificado Fullstack" },
  { src: CertificadoTISeguro, alt: "Certificado TI Seguro" },
  { src: CertificadoColaboracionAcademica, alt: "Certificado Colaboración Académica" },
];

export default function Recommendations({ t }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const closeModal = () => setSelectedImage(null);

  return (
    <div className="recommendations-page">
      <div className="recommendations-container">
        
        {/* SECCIÓN RECOMENDACIONES */}
        <h1 className="section-title">{t("recommendations")}</h1>
        <div className="recs-grid">
          <div className="rec-card">
            <div className="quote-icon">❝</div>
            <p className="rec-text">{t("rec1_text")}</p>
            <div className="rec-author-profile">
              <img src={FranciscoPhoto} alt="Francisco" className="rec-author-img" />
              <div className="rec-author-info">
                <h4>{t("rec1_author")}</h4>
                <span>{t("rec1_role")}</span>
              </div>
            </div>
          </div>
          
          <div className="rec-card">
            <div className="quote-icon">❝</div>
            <p className="rec-text">{t("rec2_text")}</p>
            <div className="rec-author-profile">
              <img src={CarlosPhoto} alt="Carlos" className="rec-author-img" />
              <div className="rec-author-info">
                <h4>{t("rec2_author")}</h4>
                <span>{t("rec2_role")}</span>
              </div>
            </div>
          </div>
        </div>

        {/* SECCIÓN CERTIFICADOS (CARRUSEL) */}
        <h1 className="section-title" style={{ marginTop: '50px' }}>{t("certificates")}</h1>
        <div className="carousel-wrapper">
        <div className="carousel-track">
          {certificates.map((cert, index) => (
            <div key={index} className="cert-item" onClick={() => setSelectedImage(cert.src)}>
              <img src={cert.src} alt={cert.alt} />
            </div>
          ))}
        </div>
        </div>
        
      </div>

      {selectedImage && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Vista previa del certificado" className="modal-image" />
            <button className="modal-close" onClick={closeModal}>🐾</button>
          </div>
        </div>
      )}
    </div>
  );
}