import ServicesBottom from "../../components/ServicesBotom/ServicesBottom";
import "./Services.css";

function Services() {
  return (
    <main className="services-page">
      <div className="service-page-top">
        <div className="our-craft">
          <span></span>
          <p>our craft</p>
        </div>
        <div className="header">
          <h1>services &</h1>
          <span>pricing</span>
        </div>
        <p className="bottom-text">Transparent pricing. No surprises.</p>
      </div>

      <div className="bottom">
        <ServicesBottom />
      </div>
    </main>
  );
}

export default Services;
