import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Start.css";

export function Start() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
    AOS.refreshHard(); // Use refreshHard() instead of refresh()
  }, []);
  return (
    <section id="inicio" className="section-start">
      <article
        className="article-start"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h1 data-aos="fade-up" data-aos-delay="200">
          Soluções em TI
        </h1>
        <h2 data-aos="fade-up" data-aos-delay="400">
          Cabeamento Estruturado de Redes
        </h2>
        <p data-aos="fade-up" data-aos-delay="600">
          Ter um serviço de TI especializado em cabeamento de rede e CFTV traz
          muitos benefícios. Com um cabeamento bem feito, sua internet fica mais
          rápida e estável, melhorando a produtividade. O sistema de CFTV
          aumenta a segurança e permite monitoramento constante. Isso reduz
          problemas técnicos e permite que você se concentre no crescimento do
          seu negócio.
        </p>
        <div
          className="container-botton"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <a href="">Saiba mais!</a>
        </div>
      </article>
    </section>
  );
}
