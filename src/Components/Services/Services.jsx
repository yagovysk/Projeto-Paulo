import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Services.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export function Services() {
  const [activeService, setActiveService] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const services = [
    {
      id: 1,
      title: "CFTV IP de alta performance",
      description:
        "Monitoramento inteligente com câmeras IP, acesso remoto, gravação em nuvem e integração com sistemas de segurança.",
      whatsappMessage:
        "Olá, vim pelo site, gostaria de solicitar seu serviço de CFTV IP de alta performance.",
    },
    {
      id: 2,
      title: "Rede estruturada com alto desempenho",
      description:
        "Projetos e implantação de infraestrutura de rede com cabeamento organizado, switches, roteadores e pontos de acesso otimizados.",
      whatsappMessage:
        "Olá, vim pelo site, gostaria de solicitar seu serviço de Rede estruturada com alto desempenho.",
    },
    {
      id: 3,
      title: "Manutenção de equipamentos de TI",
      description:
        "Diagnóstico, reparo e suporte técnico para computadores, servidores, periféricos e dispositivos de rede.​",
      whatsappMessage:
        "Olá, vim pelo site, gostaria de solicitar serviços de manutenção de equipamentos de TI.",
    },
    {
      id: 4,
      title: "Tec Refresh: renovação tecnológica inteligente",
      description:
        "Atualização estratégica de equipamentos, softwares e sistemas para garantir performance, segurança e compatibilidade com as demandas atuais — sem precisar trocar tudo do zero.",
      whatsappMessage:
        "Olá, vim pelo site, gostaria de solicitar uma instalação de Tec Refresh: renovação tecnológica inteligente.",
    },
    {
      id: 5,
      title: "Assistência",
      description:
        "Realizamos serviços de reparo nas instalações, atualização e otimização das mesmas, além da instalação do seu equipamento.",
      whatsappMessage:
        "Olá, vim pelo site, gostaria de solicitar uma assistência técnica.",
    },
  ];

  const handleWhatsAppClick = (message) => {
    const phoneNumber = "556184888530"; // Substitua pelo número de telefone desejado
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  const handleServiceClick = (index) => {
    setActiveService((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth <= 768;
      setIsMobile(isMobileView);
      if (!isMobileView) {
        setActiveService(0); // Defina o primeiro botão como ativo em telas desktop
      } else {
        setActiveService(null); // Resete o estado ativo em telas mobile
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Chame a função uma vez para definir o estado inicial

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
    AOS.refreshHard(); // Use refreshHard() instead of refresh()
  }, []);

  return (
    <section id="services" className="section-services">
      <h2 data-aos="fade-up" data-aos-delay="200">
        Nossas especialidades
      </h2>
      <div className={`services-buttons ${isMobile ? "mobile" : "desktop"}`}>
        {services.map((service, index) => (
          <div key={service.id} className="service-container">
            <button
              className={`service-button ${
                activeService === index ? "active" : ""
              }`}
              onClick={() => handleServiceClick(index)}
            >
              {service.title}
              {isMobile &&
                (activeService === index ? (
                  <FaChevronUp className="chevron-icon" />
                ) : (
                  <FaChevronDown className="chevron-icon" />
                ))}
            </button>
            {activeService === index && (
              <div className="service-description">
                <p>{service.description}</p>
                <button
                  className="request-button"
                  onClick={() => handleWhatsAppClick(service.whatsappMessage)}
                >
                  Solicitar Serviço
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
