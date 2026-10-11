import FormAppointment from "../../components/Form-Appointment/FormAppointment";
import "./Appointment.css";
import { useState } from "react";

// ⚠️ DEMO-INHALT: Kontaktdaten und Öffnungszeiten sind Platzhalter.
// Vor dem Livegang durch die echten Daten des Salons ersetzen.
const CONTACT = {
  address: "Musterstraße 12, 79539 Lörrach",
  phone: "+49 7621 000000",
  email: "info@example.com",
};

const SERVICES = [
  "Damenhaarschnitt",
  "Herrenhaarschnitt",
  "Färbung",
  "Balayage",
  "Fade & Bart",
  "Behandlung",
];

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
          <h1>Buchen Sie einen</h1>
          <h1>Termin</h1>
        </div>
        <div className="appointment-description">
          <p>
            Jeder Besuch beginnt mit einem Gespräch. Wählen Sie Ihren Service,
            wählen Sie Ihre Stylistin oder Ihren Stylisten und wir kümmern uns
            um den Rest.
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
                <p>{CONTACT.address}</p>
              </div>
            </div>
            <div className="phone">
              <div className="icon">📞</div>
              <div className="info">
                <h2>Telefon</h2>
                <p>{CONTACT.phone}</p>
              </div>
            </div>
            <div className="email">
              <div className="icon">📧</div>
              <div className="info">
                <h2>Email</h2>
                <p>{CONTACT.email}</p>
              </div>
            </div>
          </div>

          <div className="opening-hours">
            <h2>Öffnungszeiten</h2>
            <div className="hours-days">
              <div className="tue-wed-fri">
                <h2>Dienstag – Mittwoch – Freitag</h2>
                <p>09:00 – 18:00 Uhr</p>
              </div>
              <div className="thursday">
                <h2>Donnerstag</h2>
                <p>10:00 – 20:00 Uhr</p>
              </div>
              <div className="saturday">
                <h2>Samstag</h2>
                <p>09:00 – 15:00 Uhr</p>
              </div>
              <div className="mo">
                <h2>Montag</h2>
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
            Reservieren Sie Ihren <span>Platz</span>
          </h2>
          <div className="select-a-service">
            <h2 className="select-service">Wählen Sie einen Service aus</h2>
            <div className="appointment-services">
              {SERVICES.map((service) => (
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
