import ServicesBottom from "../../components/ServicesBotom/ServicesBottom";
import "./Services.css";

function Services() {
  return (
    <main className="services-page">
      <div className="service-page-top">
        <div className="our-craft">
          <span></span>
          <p>unser handwerk</p>
        </div>
        <div className="header">
          <h1>Leistungen &</h1>
          <span>Preise</span>
        </div>
        <p className="bottom-text">Transparente Preise. Keine Überraschungen.</p>
      </div>

      <div className="bottom">
        <ServicesBottom />
      </div>
    </main>
  );
}

export default Services;