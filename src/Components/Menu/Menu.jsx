import { Link } from "react-router-dom";
import React, { useState } from "react";
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
      <Link to="/">
        <img className="logo" src={logo} alt="" />
      </Link>
      <div className="nav-actions">
        <div className="nav-toggle" onClick={toggleMenu}>
          <RiApps2Line className="ri-apps" />
        </div>
      </div>
      <nav
        className={`nav-menu ${showMenu ? "show-menu" : ""}`}
        aria-label="Menu de Navegação"
      >
        <ul className="container-list">
          <li className="item-list">
            <Link to="/" href="" className="link">
              Início
            </Link>
          </li>
          <li className="item-list">
            <Link to="/About" href="" className="link">
              Serviços
            </Link>
          </li>
          <li className="item-list">
            <Link to="/Portfolio" href="" className="link">
              Sobre Nós
            </Link>
          </li>
          <li className="item-list">
            <Link to="/galeria" className="link">
              Galeria
            </Link>
          </li>
          <li className="item-list">
            <Link to="/Contato" href="" className="button-list">
              Entre em contato
            </Link>
          </li>
        </ul>
        <div className="menu-close" onClick={toggleMenu}>
          <FaTimes className="close-icon" />
        </div>
      </nav>
    </nav>
  );
}
