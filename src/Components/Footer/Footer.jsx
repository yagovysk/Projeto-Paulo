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
        <a href="">
          <FaInstagramSquare className="footer-icon" />
        </a>
        <a href="">
          <FaFacebook className="footer-icon" />
        </a>
        <a href="">
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
