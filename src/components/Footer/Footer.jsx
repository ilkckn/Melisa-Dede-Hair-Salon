import "./Footer.css";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-main">
      <div className="footer-content">
        <div className="footer-brand">
          <p>Hair & Beauty</p>
          <h2>Melisa Dede</h2>
        </div>

        <div className="footer-info">
          <p>© {year} Melisa Dede Hair & Beauty. Alle Rechte vorbehalten.</p>
          <p className="footer-credit">
            Webdesign by{" "}
            <a
              href="https://www.mccreativestudio.de"
              target="_blank"
              rel="noopener"
              title="MCCreative Studio – Webdesign Lörrach & Basel"
            >
              mccreativestudio.de
            </a>
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-socials">
            <a
              href="#"
              className="insta"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram />
            </a>
            <a
              href="#"
              className="face"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
          </div>

          <nav className="footer-legal" aria-label="Rechtliches">
            <Link to="/impressum">Impressum</Link>
            <Link to="/datenschutz">Datenschutz</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;