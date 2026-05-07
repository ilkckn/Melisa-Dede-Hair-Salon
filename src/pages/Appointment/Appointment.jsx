import FormAppointment from "../../components/Form-Appointment/FormAppointment";
import "./Appointment.css";
import { useState } from "react";

function Appointment() {
  const [selectedService, setSelectedService] = useState("");

  const handleAppointmentSubmit = () => {
    setSelectedService("");
  }

  return (
    <div className="appointment-container">
      <section className="header-sec">
        <div className="reserve-your-time">
          <span></span>
          <p>Reserve Your Time</p>
        </div>
        <div className="appointment-heading">
          <h1>Book an</h1>
          <h1>appointment</h1>
        </div>
        <div className="appointment-description">
          <p>
            Every visit begins with a conversation. Choose your service, pick
            your stylist and let us take care of the rest.
          </p>
        </div>
      </section>

      <section className="content-sec">
        <div className="content-left">
          <div className="contact-location">
            <h2>Contact Information</h2>
            <div className="address">
              <div className="icon">📍</div>
              <div className="info">
                <h2>Address</h2>
                <p>Hauptstraße 24, 79098 Freiburg</p>
              </div>
            </div>
            <div className="phone">
              <div className="icon">📞</div>
              <div className="info">
                <h2>Phone</h2>
                <p>+49 761 123456</p>
              </div>
            </div>
            <div className="email">
              <div className="icon">📧</div>
              <div className="info">
                <h2>Email</h2>
                <p>info@salon.com</p>
              </div>
            </div>
          </div>

          <div className="opening-hours">
            <h2>Opening Hours</h2>
            <div className="hours-days">
              <div className="mon-fri">
                <h2>mon - fri</h2>
                <p>9:00 AM - 19:00 PM</p>
              </div>
              <div className="sat">
                <h2>Saturday</h2>
                <p>9:00 AM - 17:00 PM</p>
              </div>
              <div className="sun">
                <h2>Sunday</h2>
                <p>Closed</p>
              </div>
              <div className="holidays">
                <h2>Holidays</h2>
                <p>Christmas: Dec 25</p>
                <p>New Year's Day: Jan 1</p>
              </div>
            </div>
          </div>
        </div>

        <div className="content-right">
          <h2>
            Reserve your <span>spot</span>
          </h2>
          <div className="select-a-service">
            <h2 className="select-service">Select a Service</h2>
            <div className="appointment-services">
              <div className="appointment-services">
                {["Women's Cut", "Men's Cut", "Coloring", "Balayage", "Fade+Beard", "Treatment"].map(
                  (service) => (
                    <div
                      key={service}
                      className={`box ${selectedService === service ? "active" : ""}`}
                      onClick={() => setSelectedService(service)}
                    >
                      <p>{service}</p>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
          <FormAppointment selectedService={selectedService} onSubmitSuccess={handleAppointmentSubmit} />
        </div>
      </section>
    </div>
  );
}

export default Appointment;
