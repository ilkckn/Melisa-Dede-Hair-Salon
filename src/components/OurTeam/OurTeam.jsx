import { NavLink } from "react-router-dom";
import "./OurTeam.css";
// import aboutImg from "../../assets/images/about/melisa.jpg";

function OurTeam() {
  return (
    <div className="about-me-container">
      <div className="top">
        <span></span>
        <h4>Über mich</h4>
      </div>

      <div className="content">
        <div className="about-img">
          <img src="/dresser/personal.jpeg" alt="Melisa Dede" />
        </div>

        <div className="about-info">
          <h1>Melisa Dede</h1>
          <h3>Stylistin &amp; Inhaberin</h3>

          <p>
            Seit über 10 Jahren bin ich mit Leidenschaft Friseurin. In meinem
            Salon arbeite ich allein das bedeutet für Sie: meine volle
            Aufmerksamkeit, von der ersten Beratung bis zum letzten Schnitt.
          </p>
          <p>
            Ob Schnitt, Farbe oder Pflege jeder Termin wird individuell auf Sie
            abgestimmt. Auf Wunsch sorge ich gerne für eine ruhige, private
            Atmosphäre, in der Sie sich rundum wohlfühlen.
          </p>

          <div className="badges">
            <span>10+ Jahre Erfahrung</span>
            <span>Schnitt · Farbe · Styling</span>
            <span>Damen &amp; Herren</span>
          </div>

          <NavLink to="/appointment" className="cta">
            Termin buchen
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;