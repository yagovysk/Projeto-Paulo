import { FiArrowRightCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import foto1 from "../../assets/foto1.jpg";
import foto2 from "../../assets/foto2.jpg";
import foto3 from "../../assets/foto3.jpg";
import foto4 from "../../assets/foto4.jpg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Photos.css";

const photos = [
  { src: foto1, alt: "Descrição da Foto 1" },
  { src: foto2, alt: "Descrição da Foto 2" },
  { src: foto3, alt: "Descrição da Foto 3" },
  { src: foto4, alt: "descrição da foto 4" },
  // Adicione mais fotos conforme necessário
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
      <h2 data-aos="fade-up" data-aos-delay="200">
        Galeria
      </h2>
      <h3 data-aos="fade-up" data-aos-delay="300">
        Veja todas as fotos dos nossos serviços
      </h3>
      <div data-aos="fade-up" data-aos-delay="400" className="photo-gallery">
        {photos.map((photo, index) => (
          <div key={index} className="photo-item">
            <img src={photo.src} alt={photo.alt} className="photo" />
          </div>
        ))}
      </div>
      <div className="button-container">
        <Link
          data-aos="fade-up"
          data-aos-delay="300"
          to="/galeria-page"
          className="view-more-button"
        >
          Ver Galeria Completa <FiArrowRightCircle className="icon-gallery" />
        </Link>
      </div>
    </section>
  );
}
