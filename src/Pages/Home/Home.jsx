import { Sobre } from "../../Components/About/Sobre";
import { Footer } from "../../Components/Footer/Footer";
import { Menu } from "../../Components/Menu/Menu";
import { Orçamento } from "../../Components/Orçamento/Orçamento";
import { Photos } from "../../Components/Photos/Photos";
import { Services } from "../../Components/Services/Services";
import { Start } from "../../Components/Start/Start";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./Home.css";

export function Home() {
  // Estado para controlar a visibilidade do botão
  const [showButton, setShowButton] = useState(false);

  // Função para manipular o evento de scroll
  const handleScroll = () => {
    // Calcule a posição do meio da página
    const middleOfPage = window.innerHeight / 2;

    // Verifique se a posição do scroll é maior que o meio da página
    const isPastMiddle = window.scrollY > middleOfPage;

    // Atualize o estado com base na condição
    setShowButton(isPastMiddle);
  };

  // Adicione um ouvinte de evento de scroll quando o componente for montado
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Remova o ouvinte de evento quando o componente for desmontado
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <main className="main-home">
      <section className="section-menu-start">
        <Menu />
        <Start />
      </section>
      {showButton && (
        <button className="scroll-button" onClick={() => window.scrollTo(0, 0)}>
          <FaArrowUp className="scrolltotop-icon" />
        </button>
      )}
      <Services />
      <Sobre />
      <Orçamento />
      <Photos />
      <Footer />
    </main>
  );
}
