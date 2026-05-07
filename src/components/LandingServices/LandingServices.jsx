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
        <h4>what we offer</h4>
      </div>
      <div className="second">
        <h1>Our Services</h1>
        <NavLink to="/services">
          <p>
            All Services <TbArrowNarrowRight className="arrow" />
          </p>
        </NavLink>
      </div>
      <div className="third">
        <div className="box">
          <div className="box-content-top">
            <div className="text">
              <span>01</span>
              <h2>Women's Cut</h2>
              <p>Precision cuts tailored to your style and face shape.</p>
            </div>
            <img src={hair} alt="Women's Haircut" />
          </div>
          <div className="box-content-bottom">
            <p>from €35</p>
          </div>
        </div>
        <div className="box">
          <div className="box-content-top">
            <div className="text">
              <span>02</span>
              <h2>Men's Cut</h2>
              <p>Classic and modern cuts, fades and beard grooming.</p>
            </div>
            <img src={manHair} alt="Men's Haircut" />
          </div>
          <div className="box-content-bottom">
            <p>from €25</p>
          </div>
        </div>
        <div className="box">
          <div className="box-content-top">
            <div className="text">
              <span>03</span>
              <h2>Color & Highlights</h2>
              <p>Transform your look with our expert color services.</p>
            </div>
            <img src={colorHighlights} alt="Color & Highlights" />
          </div>
          <div className="box-content-bottom">
            <p>from €45</p>
          </div>
        </div>
        <div className="box">
          <div className="box-content-top">
            <div className="text">
              <span>04</span>
              <h2>Treatment & Care</h2>
              <p>Deep conditioning and repair for all hair types.</p>
            </div>
            <img src={treatmentCare} alt="Treatment & Care" />
          </div>
          <div className="box-content-bottom">
            <p>from €30</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingServices;
