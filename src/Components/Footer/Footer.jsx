import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <ul className="footer-menu">
        <li className="item-footer">
          <Link
            to="inicio"
            smooth={true}
            duration={500}
            className="footer-link"
          >
            Início
          </Link>
        </li>
        <li className="item-footer">
          <Link
            to="services"
            smooth={true}
            duration={500}
            className="footer-link"
          >
            Serviços
          </Link>
        </li>
        <li className="item-footer">
          <Link to="about" smooth={true} duration={500} className="footer-link">
            Sobre
          </Link>
        </li>
        <li className="item-footer">
          <RouterLink to="/galeria-page" className="footer-link">
            Galeria
          </RouterLink>
        </li>
      </ul>
      <div className="container-icons">
        <a href="https://www.instagram.com/phsobytes/" target="blank">
          <FaInstagramSquare className="footer-icon" />
        </a>
        <a href="https://www.facebook.com/paulo.phsobytes" target="blank">
          <FaFacebook className="footer-icon" />
        </a>
        <a
          href="https://wa.me/+556184888530?text=Olá, vim pelo site, gostaria de saber mais sobre seus serviços."
          target="blank"
        >
          <FaWhatsappSquare className="footer-icon" />
        </a>
      </div>
      <h3>&#169; Todos os Direitos Reservados PH - Bytes Soluções em TI</h3>
      <a
        className="tgv-button"
        aria-label="botão que redireciona para o portfolio da empresa que desenvolveu o site, Empresa Togyro Group Victory."
        href="https://togyrogroupvictory.com/"
        target="blank"
      >
        Desenvolvido por Togyro <span>Group</span> Victory
      </a>
    </footer>
  );
}
