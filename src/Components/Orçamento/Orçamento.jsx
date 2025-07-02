import img from "../../assets/img-orçamento.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Orçamento.css";

export function Orçamento() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
    AOS.refreshHard(); // Use refreshHard() instead of refresh()
  }, []);
  return (
    <section className="section-orçamento">
      <article
        className="article-orçamento"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h2 data-aos="fade-up" data-aos-delay="400">
          Projetos e Orçamentos
        </h2>
        <div>
          <p data-aos="fade-up" data-aos-delay="600">
            Você pode comprar equipamentos diretamente conosco após solicitar um
            orçamento. A compra pode incluir instalação, configuração do sistema
            e ativação do serviço. Se preferir, você pode comprar apenas o
            equipamento, sem instalação ou configuração, através do nosso
            contato.
          </p>
          <p data-aos="fade-up" data-aos-delay="600">
            Após a compra, o equipamento é seu. Você pode solicitar suporte ou
            reparo da PHSO Bytes & Serviços a qualquer momento. Também
            oferecemos serviços de reparo, atualização e otimização de
            instalações, além de instalação de novos equipamentos.
          </p>
        </div>

        <a
          href="https://wa.me/+5561982347066?text=Olá, vim pelo site, gostaria de solicitar um orçamento."
          target="blank"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          Solicitar orçamento
        </a>
      </article>
      <img data-aos="fade-up" data-aos-delay="400" src={img} alt="" />
    </section>
  );
}
