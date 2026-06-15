import "./LandingServices.css";
import hair from "../../assets/images/Landing-services/women-hair/hair.png";
import manHair from "../../assets/images/Landing-services/men-hair/man-hair.png";
import colorHighlights from "../../assets/images/Landing-services/color-highlights/color-highlight.png";
import treatmentCare from "../../assets/images/Landing-services/treatment-care/treatment-care.png";
import { TbArrowNarrowRight } from "react-icons/tb";
import { NavLink } from "react-router-dom";

function LandingServices() {
  return (
    <div className="services-container">
      <div className="first">
        <span></span>
        <h4>was wir bieten</h4>
      </div>
      <div className="second">
        <h1>Unsere Leistungen</h1>
        <NavLink to="/services">
          <p>
            Alle Leistungen <TbArrowNarrowRight className="arrow" />
          </p>
        </NavLink>
      </div>
      <div className="third">
        <div className="box">
          <div className="box-content-top">
            <div className="text">
              <span>01</span>
              <h2>Damenschnitt</h2>
              <p>
                Präzise Schnitte, abgestimmt auf Ihren Stil und Ihre
                Gesichtsform.
              </p>
            </div>
            <img src={hair} alt="Damenschnitt" />
          </div>
          <div className="box-content-bottom">
            <p>ab 35 €</p>
          </div>
        </div>

        <div className="box">
          <div className="box-content-top">
            <div className="text">
              <span>02</span>
              <h2>Herrenschnitt</h2>
              <p>
                Klassische und moderne Schnitte, Fades und Bartpflege – sauber
                ausgeführt und genau auf Ihren Typ abgestimmt.{" "}
              </p>
            </div>
            <img src={manHair} alt="Herrenschnitt" />
          </div>
          <div className="box-content-bottom">
            <p>ab 25 €</p>
          </div>
        </div>

        <div className="box">
          <div className="box-content-top">
            <div className="text">
              <span>03</span>
              <h2>Farbe & Strähnen</h2>
              <p>Verwandeln Sie Ihren Look mit professionellen Farbservices.</p>
            </div>
            <img src={colorHighlights} alt="Farbe & Strähnen" />
          </div>
          <div className="box-content-bottom">
            <p>ab 45 €</p>
          </div>
        </div>

        <div className="box">
          <div className="box-content-top">
            <div className="text">
              <span>04</span>
              <h2>Pflege & Treatment</h2>
              <p>Intensivpflege und Reparatur für jeden Haartyp.</p>
            </div>
            <img src={treatmentCare} alt="Pflege & Treatment" />
          </div>
          <div className="box-content-bottom">
            <p>ab 30 €</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingServices;
