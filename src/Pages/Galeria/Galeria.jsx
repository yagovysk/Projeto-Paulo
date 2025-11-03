import { Link } from "react-router-dom";
import { useState } from "react";
import perfilPaulo from "../../assets/perfil-paulo.jpg";
import perfilPaulo2 from "../../assets/perfil-paulo-2.jpg";
import instalacao2 from "../../assets/instalacao-2.jpg";
import instalacao3 from "../../assets/instalacao-3.jpg";
import instalacaoCamera from "../../assets/instalacao-camera.jpg";
import equipamentos4 from "../../assets/equipamentos-4.jpg";
import equipamentosRedes from "../../assets/equipamentos-redes.jpg";
import organizacaoRedes from "../../assets/organizacao-redes.jpg";
import foto1 from "../../assets/foto1.jpg";
import foto2 from "../../assets/foto2.jpg";
import foto3 from "../../assets/foto3.jpg";
import foto4 from "../../assets/foto4.jpg";
import foto5 from "../../assets/foto5.jpg";
import foto6 from "../../assets/foto6.jpg";
import foto7 from "../../assets/foto7.png";
import foto8 from "../../assets/foto8.jpg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Galeria.css";
import { FooterGallery } from "./Footer-gallery/Footer";

const photos1 = [
  {
    src: perfilPaulo,
    alt: "Paulo - Especialista em TI e fundador da PHSO",
    category: "Equipe",
  },
  {
    src: perfilPaulo2,
    alt: "Paulo - Técnico especializado em redes",
    category: "Equipe",
  },
  {
    src: instalacao2,
    alt: "Instalação de equipamentos de rede",
    category: "Instalação",
  },
  {
    src: instalacao3,
    alt: "Configuração de sistema de rede",
    category: "Instalação",
  },
  {
    src: instalacaoCamera,
    alt: "Instalação de sistema CFTV",
    category: "CFTV",
  },
  {
    src: equipamentos4,
    alt: "Equipamentos modernos de alta qualidade",
    category: "Equipamentos",
  },
  {
    src: equipamentosRedes,
    alt: "Equipamentos para redes estruturadas",
    category: "Equipamentos",
  },
  {
    src: organizacaoRedes,
    alt: "Organização profissional de cabeamento",
    category: "Organização",
  },
  {
    src: foto1,
    alt: "Trabalho de instalação - Projeto 1",
    category: "Projetos",
  },
  {
    src: foto2,
    alt: "Trabalho de instalação - Projeto 2",
    category: "Projetos",
  },
  {
    src: foto3,
    alt: "Trabalho de instalação - Projeto 3",
    category: "Projetos",
  },
  {
    src: foto4,
    alt: "Trabalho de instalação - Projeto 4",
    category: "Projetos",
  },
  {
    src: foto5,
    alt: "Trabalho de instalação - Projeto 5",
    category: "Projetos",
  },
  {
    src: foto6,
    alt: "Trabalho de instalação - Projeto 6",
    category: "Projetos",
  },
  {
    src: foto7,
    alt: "Trabalho de instalação - Projeto 7",
    category: "Projetos",
  },
  {
    src: foto8,
    alt: "Trabalho de instalação - Projeto 8",
    category: "Projetos",
  },
];

export function Galeria() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
    AOS.refreshHard(); // Use refreshHard() instead of refresh()
  }, []);

  const openModal = (photo) => {
    setSelectedImage(photo);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="main-galeria">
      <section className="section-gallery">
        <h2>📸 Galeria Completa</h2>
        <div className="gallery-content">
          <Link className="back-button" to="/">
            ← Voltar
          </Link>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="container-gallery"
          >
            {photos1.map((photo, index) => (
              <div
                key={index}
                className="gallery-item"
                data-aos="zoom-in"
                data-aos-delay={300 + index * 50}
              >
                <div className="photo-wrapper" onClick={() => openModal(photo)}>
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="gallery-photo"
                  />
                  <div className="photo-overlay">
                    <span className="photo-category">{photo.category}</span>
                    <p className="photo-description">{photo.alt}</p>
                    <span className="click-hint">🔍 Clique para ampliar</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="gallery-description">
          Soluções inovadoras para o seu negócio. Nesta galeria, você pode
          conhecer alguns dos projetos que realizamos para nossos clientes,
          utilizando as melhores práticas e ferramentas de TI. Veja como podemos
          ajudar a sua empresa a se destacar no mercado com soluções
          personalizadas e eficientes.
        </p>
      </section>

      {/* Modal para imagem expandida */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              ✕
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="modal-image"
            />
            <div className="modal-info">
              <span className="modal-category">{selectedImage.category}</span>
              <p className="modal-description">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}

      <FooterGallery />
    </section>
  );
}
