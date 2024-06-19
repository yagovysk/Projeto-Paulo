import { Link } from "react-router-dom";
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
  { src: foto1, alt: "Descrição da Foto 1" },
  { src: foto2, alt: "Descrição da Foto 2" },
  { src: foto3, alt: "Descrição da Foto 3" },
  { src: foto4, alt: "descrição da foto 4" },
  { src: foto5, alt: "descrição da foto 5" },
  { src: foto6, alt: "descrição da foto 6" },
  { src: foto7, alt: "descrição da foto 7" },
  { src: foto8, alt: "descrição da foto 8" },
  // Adicione mais fotos conforme necessário
];

export function Galeria() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
    AOS.refreshHard(); // Use refreshHard() instead of refresh()
  }, []);
  return (
    <section className="main-galeria">
      <section className="section-gallery">
        <h2>Galeria</h2>
        <div className="gallery-content">
          <Link className="back-button" to="/">
            Voltar
          </Link>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="container-gallery"
          >
            {photos1.map((photo, index) => (
              <div key={index} className="gallery-item">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="gallery-photo"
                />
              </div>
            ))}
          </div>
        </div>
        <p>
          Soluções inovadoras para o seu negócio Nesta galeria, você pode
          conhecer alguns dos projetos que realizamos para nossos clientes,
          utilizando as melhores práticas e ferramentas de TI. Veja como podemos
          ajudar a sua empresa a se destacar no mercado com soluções
          personalizadas e eficientes.
        </p>
      </section>
      <FooterGallery />
    </section>
  );
}
