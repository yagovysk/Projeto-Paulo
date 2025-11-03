import { FiArrowRightCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import perfilPaulo from "../../assets/perfil-paulo.jpg";
import perfilPaulo2 from "../../assets/perfil-paulo-2.jpg";
import instalacao2 from "../../assets/instalacao-2.jpg";
import equipamentos4 from "../../assets/equipamentos-4.jpg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Photos.css";

const photos = [
  { src: perfilPaulo, alt: "Paulo - Especialista em TI", category: "Equipe" },
  {
    src: perfilPaulo2,
    alt: "Paulo - Técnico especializado",
    category: "Equipe",
  },
  { src: instalacao2, alt: "Instalação de equipamentos", category: "Serviços" },
  {
    src: equipamentos4,
    alt: "Equipamentos modernos",
    category: "Equipamentos",
  },
];

export function Photos() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
    AOS.refreshHard(); // Use refreshHard() instead of refresh()
  }, []);
  return (
    <section id="galeria" className="section-photos">
      <div className="gallery-header">
        <h2 data-aos="fade-up" data-aos-delay="200">
          📸 Galeria
        </h2>
        <h3 data-aos="fade-up" data-aos-delay="300">
          Veja nosso trabalho em ação e conheça nossa equipe especializada
        </h3>
      </div>

      <div data-aos="fade-up" data-aos-delay="400" className="photo-gallery">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="photo-item"
            data-aos="zoom-in"
            data-aos-delay={500 + index * 100}
          >
            <div className="photo-wrapper">
              <img src={photo.src} alt={photo.alt} className="photo" />
              <div className="photo-overlay">
                <span className="photo-category">{photo.category}</span>
                <p className="photo-description">{photo.alt}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Card especial do botão */}
        <div
          className="photo-item gallery-button-card"
          data-aos="zoom-in"
          data-aos-delay="900"
        >
          <Link to="/galeria-page" className="gallery-card-button">
            <div className="button-content">
              <div className="button-icon">📸</div>
              <h3>Ver Todas as Fotos</h3>
              <p>
                Explore nossa galeria completa com todos os projetos realizados
              </p>
              <div className="button-cta">
                <span>Clique aqui</span>
                <FiArrowRightCircle className="icon-gallery" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
