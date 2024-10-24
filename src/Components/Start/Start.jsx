import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Start.css";

export function Start() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
    AOS.refreshHard();
  }, []);

  return (
    <section id="inicio" className="section-start">
      <Helmet>
        <title>
          Ph - Bytes Soluções em TI | Cabeamento Estruturado de Redes Brasília
        </title>
        <meta
          name="description"
          content="Serviço especializado em cabeamento de rede e CFTV para uma internet mais rápida e estável em Brasília, aumentando a produtividade e segurança. Também oferecemos serviços de instalação de câmeras para segurança do seu negócio."
        />
        <meta
          name="google-site-verification"
          content="6YgrxNVZ9knysI76PYSeaKjn8bw3y2UoCZlb1tCNbYk"
        />
      </Helmet>
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
          <a
            href="https://wa.me/+556183247066?text=Olá, vim pelo site, gostaria de saber mais sobre seus serviços."
            target="blank"
          >
            Saiba mais!
          </a>
        </div>
      </article>
    </section>
  );
}
