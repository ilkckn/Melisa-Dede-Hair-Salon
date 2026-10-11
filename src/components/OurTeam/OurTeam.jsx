import { NavLink } from "react-router-dom";
import "./OurTeam.css";

// ⚠️ DEMO-INHALT: Name, Foto und Angaben sind Platzhalter.
// Vor dem Livegang durch die echte Inhaberin ersetzen.
const OWNER = {
  name: "Lena Berger",
  role: "Stylistin & Inhaberin",
  image:
    "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
};

function OurTeam() {
  return (
    <div className="about-me-container">
      <div className="top">
        <span></span>
        <h4>Über mich</h4>
      </div>

      <div className="content">
        <div className="about-img">
          <img src={OWNER.image} alt={OWNER.name} loading="lazy" />
        </div>

        <div className="about-info">
          <h1>{OWNER.name}</h1>
          <h3>Stylistin &amp; Inhaberin</h3>

          <p>
            Haare sind für mich mehr als Handwerk, sie sind ein Teil Ihrer
            Persönlichkeit. In meinem Salon Blanche nehme ich mir deshalb für
            jeden Termin die Zeit, die es braucht, von der ersten Beratung bis
            zum letzten Handgriff.
          </p>
          <p>
            Ob Schnitt, Farbe oder Pflege: Jede Behandlung stimme ich
            individuell auf Sie ab. Bei einer Tasse Kaffee in ruhiger,
            persönlicher Atmosphäre sollen Sie sich rundum wohlfühlen.
          </p>

          <div className="badges">
            <span>Persönliche Beratung</span>
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