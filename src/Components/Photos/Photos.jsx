import React from "react";
import { Link } from "react-router-dom";
import foto1 from "../../assets/foto1.jpg";
import foto2 from "../../assets/foto2.jpg";
import foto3 from "../../assets/foto3.jpg";
import foto4 from "../../assets/foto4.jpg";
import "./Photos.css";

const photos = [
  { src: foto1, alt: "Descrição da Foto 1" },
  { src: foto2, alt: "Descrição da Foto 2" },
  { src: foto3, alt: "Descrição da Foto 3" },
  { src: foto4, alt: "descrição da foto 4" },
  // Adicione mais fotos conforme necessário
];

export function Photos() {
  return (
    <section id="galeria" className="section-photos">
      <h2>Galeria</h2>
      <h3>Veja todas as fotos dos nossos serviços</h3>
      <div className="photo-gallery">
        {photos.map((photo, index) => (
          <div key={index} className="photo-item">
            <img src={photo.src} alt={photo.alt} className="photo" />
          </div>
        ))}
      </div>
      <div className="button-container">
        <Link to="/galeria-page" className="view-more-button">
          Ver Galeria Completa
        </Link>
      </div>
    </section>
  );
}
