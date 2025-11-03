import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Sobre.css";

export function Sobre() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
    AOS.refreshHard(); // Use refreshHard() instead of refresh()
  }, []);
  return (
    <section id="about" className="about-section">
      <h2 data-aos="fade-up" data-aos-delay="300">
        🚀 Por que escolher a PHSO?
      </h2>
      <article
        className="about-article"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <div className="benefits-list">
          <div className="benefit-item" data-aos="fade-up" data-aos-delay="600">
            <div className="benefit-icon">⚡</div>
            <div className="benefit-text">
              Atendimento técnico especializado e ágil
            </div>
          </div>

          <div className="benefit-item" data-aos="fade-up" data-aos-delay="700">
            <div className="benefit-icon">🎯</div>
            <div className="benefit-text">
              Soluções sob medida para cada necessidade
            </div>
          </div>

          <div className="benefit-item" data-aos="fade-up" data-aos-delay="800">
            <div className="benefit-icon">🔧</div>
            <div className="benefit-text">
              Equipamentos modernos e marcas reconhecidas
            </div>
          </div>

          <div className="benefit-item" data-aos="fade-up" data-aos-delay="900">
            <div className="benefit-icon">🛡️</div>
            <div className="benefit-text">
              Compromisso com qualidade, segurança e inovação
            </div>
          </div>
        </div>

        <div className="cta-section" data-aos="fade-up" data-aos-delay="1000">
          <p className="cta-text">
            <span className="highlight-blue">
              Conecte sua empresa ao futuro com a PHSO Soluções em TI.
            </span>
            <br />
            Entre em contato e descubra como o{" "}
            <span className="highlight-blue">Tec Refresh</span> pode transformar
            sua estrutura tecnológica com economia e alto desempenho.
          </p>
        </div>
      </article>
    </section>
  );
}
