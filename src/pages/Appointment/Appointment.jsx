import FormAppointment from "../../components/Form-Appointment/FormAppointment";
import "./Appointment.css";
import { useState } from "react";

function Appointment() {
  const [selectedService, setSelectedService] = useState([]);

  const handleAppointmentSubmit = () => {
    setSelectedService([]);
  };

  const toggleService = (service) => {
    setSelectedService((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service],
    );
  };

  return (
    <div className="appointment-container">
      <section className="header-sec">
        <div className="reserve-your-time">
          <span></span>
          <p>Reservieren Sie Ihren Termin</p>
        </div>
        <div className="appointment-heading">
          <h1>Buchen Sie ein</h1>
          <h1>Termin</h1>
        </div>
        <div className="appointment-description">
          <p>
            Jeder Besuch beginnt mit einem Gespräch. Wählen Sie Ihren Service,
            wählen Sie Ihr Stylist und wir kümmern uns um den Rest.
          </p>
        </div>
      </section>

      <section className="content-sec">
        <div className="content-left">
          <div className="contact-location">
            <h2>Kontaktinformationen</h2>
            <div className="address">
              <div className="icon">📍</div>
              <div className="info">
                <h2>Adresse</h2>
                <p>Brombacherstr 66, 79539 Lörrach</p>
              </div>
            </div>
            <div className="phone">
              <div className="icon">📞</div>
              <div className="info">
                <h2>Telefon</h2>
                <p>+49 761 123456</p>
              </div>
            </div>
            <div className="email">
              <div className="icon">📧</div>
              <div className="info">
                <h2>Email</h2>
                <p>melisa.dede1@hotmail.com</p>
              </div>
            </div>
          </div>

          <div className="opening-hours">
            <h2>Öffnungszeiten</h2>
            <div className="hours-days">
              <div className="mon-fri">
                <h2>Mo. – Fr.</h2>
                <p>09:00 – 19:00 Uhr</p>
              </div>
              <div className="sat">
                <h2>Samstag</h2>
                <p>09:00 – 17:00 Uhr</p>
              </div>
              <div className="sun">
                <h2>Sonntag</h2>
                <p>Geschlossen</p>
              </div>
              <div className="holidays">
                <h2>Feiertage</h2>
                <p>Weihnachten: 25. Dezember</p>
                <p>Neujahrstag: 1. Januar</p>
              </div>
            </div>
          </div>
        </div>

        <div className="content-right">
          <h2>
            Reservieren Sie Ihr <span>Stelle</span>
          </h2>
          <div className="select-a-service">
            <h2 className="select-service">Wählen Sie einen Service aus</h2>
            <div className="appointment-services">
              <div className="appointment-services">
                {[
                  "Damenhaarschnitt",
                  "Herrenhaarschnitt.",
                  "Färbung",
                  "Balayage",
                  "Fade & Bart",
                  "Behandlung",
                ].map((service) => (
                  <div
                    key={service}
                    className={`box ${selectedService.includes(service) ? "active" : ""}`}
                    onClick={() => toggleService(service)}
                  >
                    <p>{service}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <FormAppointment
            selectedService={selectedService}
            onSubmitSuccess={handleAppointmentSubmit}
          />
        </div>
      </section>
    </div>
  );
}

export default Appointment;
