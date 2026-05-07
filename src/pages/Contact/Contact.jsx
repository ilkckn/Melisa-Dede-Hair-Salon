import "./Contact.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import FormContact from "../../components/Form-Contact/FormContact";
L.Icon.Default.mergeOptions({ iconUrl: markerIcon, shadowUrl: markerShadow });

function Contact() {
  const position = [47.999, 7.8421];

  return (
    <div className="contact-container">
      <section className="section-top">
        <div className="get-in-touch">
          <span></span>
          <p>Get in Touch</p>
        </div>
        <div className="headings">
          <div className="find-visit-us">
            <h1>Find us,</h1>
            <h1>visit us,</h1>
          </div>
          <h1>Love us.</h1>
        </div>
      </section>
      <section className="section-bottom">
        <FormContact />

        <div className="address-opening-location">
          <div className="contact-info-opening-hours">
            <div className="opening-hours">
              <div className="hours-heading">
                <span></span>
                <p>Opening Hours</p>
              </div>
              <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
              <p>Saturday: 10:00 AM - 6:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
            <div className="contact-info">
              <div className="address">
                <div className="icon">📍</div>
                <div className="info">
                  <h2>address</h2>
                  <p>Hauptstraße 24, 79098 Freiburg</p>
                </div>
              </div>
              <div className="phone">
                <div className="icon">📞</div>
                <div className="info">
                  <h2>phone</h2>
                  <p>+49 761 123456</p>
                </div>
              </div>
              <div className="email">
                <div className="icon">📧</div>
                <div className="info">
                  <h2>email</h2>
                  <p>info@blanche.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="location">
            <div className="location-heading">
              <span></span>
              <p>Location</p>
            </div>
            <MapContainer
              center={position}
              zoom={15}
              style={{ height: "400px", width: "100%" }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={position}>
                <Popup>Blanche Salon — Hauptstraße 24</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
