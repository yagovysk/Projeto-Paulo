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
        Sobre Nós
      </h2>
      <article
        className="about-article"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <p data-aos="fade-up" data-aos-delay="600">
          A empresa foi fundada com o objetivo claro de atender o melhor
          possível seus clientes com base na relação de confiança que exerce com
          seus Clientes e Fornecedores. E pela seriedade com que trata a
          qualidade de seus produtos e serviços. Trazendo ao mercado novas
          tecnologias e produtos com padrão de alta qualidade, confiabilidade e
          baixo custo capaz de proporcionar valor agregado, criando uma parceria
          entre a empresa e seus clientes.
        </p>
      </article>
    </section>
  );
}
