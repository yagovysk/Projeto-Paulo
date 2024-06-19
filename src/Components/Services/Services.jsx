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
      title: "Instalação e configuração",
      description:
        "Especificação de Arquitetura, Segurança e Performance, Instalação e  Configuração de Servidores, Configuração de periféricos, Otimização de desempenho, Configuração de Redes com e Wifi. Instalação de softwares e hardware, configuração de  Roteadores e Switches. Cabeamento Estruturado - Documentação de REDE. Instalação e Reorganização de Rack de Equipamentos.",
      whatsappMessage:
        "Olá, gostaria de solicitar informações sobre o Serviço 1.",
    },
    {
      id: 2,
      title: "Segurança",
      description:
        "Em estabelecimentos, empresas ou indústrias, por onde circulam milhares de pessoas diariamente é indispensável que haja um serviço de segurança de qualidade. As avançadas tecnologias disponíveis atualmente contribuem para a criação de soluções eficazes e integradas com todos os sistemas e sensores de monitoramento e segurança, aplicando regras de alarmes e procedimentos de atuação, que serão traduzidos como um investimento em conforto e fidelização para com os clientes.",
      whatsappMessage:
        "Olá, gostaria de solicitar informações sobre o Serviço 2.",
    },
    {
      id: 3,
      title: "Racks",
      description:
        "Se seus racks de equipamentos e cabeamento estão em completa desordem devida várias manobras e cabos não utilizados (abandonados).PHSO- Bytes, tem uma equipe especializada nessa modalidade de serviços. ​Racks desorganizados além da má aparência para o seu negócio e dificuldade de gerenciamento, muitas vezes influencia na performance de todo o sistema de rede e telefonia.​",
      whatsappMessage:
        "Olá, gostaria de solicitar informações sobre o Serviço 3.",
    },
    {
      id: 4,
      title: "CFTV",
      description:
        "Está precisando ter um sistema de CFTV, conte com a PHSO Bytes & Serviços , para instalar este sistema para você, pois os sistemas de monitoramento, com certeza aumentam a segurança de uma residência ou empresa.",
      whatsappMessage:
        "Olá, gostaria de solicitar informações sobre o Serviço 4.",
    },
    {
      id: 5,
      title: "Assistência",
      description:
        "Realizamos serviços de reparo nas instalações, atualização e otimização das mesmas, além da instalação do seu equipamento.",
      whatsappMessage:
        "Olá, gostaria de solicitar informações sobre o Serviço 5.",
    },
  ];

  const handleWhatsAppClick = (message) => {
    const phoneNumber = "5599999999999"; // Substitua pelo número de telefone desejado
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
        Serviços
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
