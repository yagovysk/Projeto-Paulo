import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { RiApps2Line } from "react-icons/ri";
import logo from "../../assets/logo.png";
import "./Menu.css";

export function Menu() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="nav-container">
      <RouterLink to="/">
        <img className="logo" src={logo} alt="" />
      </RouterLink>

      <div className="nav-toggle" onClick={toggleMenu}>
        <RiApps2Line className="ri-apps" />
      </div>

      <nav
        className={`nav-menu ${showMenu ? "show-menu" : ""}`}
        aria-label="Menu de Navegação"
      >
        <ul className="container-list">
          <li className="item-list">
            <Link
              to="inicio"
              smooth={true}
              duration={500}
              className="link"
              onClick={toggleMenu}
            >
              Início
            </Link>
          </li>
          <li className="item-list">
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="link"
              onClick={toggleMenu}
            >
              Serviços
            </Link>
          </li>
          <li className="item-list">
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="link"
              onClick={toggleMenu}
            >
              Sobre Nós
            </Link>
          </li>
          <li className="item-list">
            <Link
              to="galeria"
              smooth={true}
              duration={500}
              className="link"
              onClick={toggleMenu}
            >
              Galeria
            </Link>
          </li>
          <li className="item-list">
            <a href="" className="button-list">
              Entre em contato
            </a>
          </li>
        </ul>
        <div className="menu-close" onClick={toggleMenu}>
          <FaTimes className="close-icon" />
        </div>
      </nav>
    </nav>
  );
}
