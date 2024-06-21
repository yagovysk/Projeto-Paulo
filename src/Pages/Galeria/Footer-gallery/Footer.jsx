import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import "../../../Components/Footer/Footer.css";

export function FooterGallery() {
  return (
    <footer className="footer">
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
