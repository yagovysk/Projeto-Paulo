import React, { useState, useEffect } from "react";
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
      title: "Vendas",
      description:
        "A venda de equipamentos feita direto ao cliente, após solicitar o orçamento, que envolve a instalação do equipamento, configuração do sistema e do serviço. O cliente também pode solicitar a venda do equipamento separadamente, através do nosso contato, recebendo então apenas o equipamento, sem os serviços de instalação ou configuração. O equipamento é seu, e você pode solicitar serviços posteriores de suporte ou reparo da PHSO Bytes & Serviços, através do nosso contato.",
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
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="section-services">
      <h2>Serviços</h2>
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
