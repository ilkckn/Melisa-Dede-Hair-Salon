import "./Contact.css";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import FormContact from "../../components/Form-Contact/FormContact";
import { MdLocationPin, MdOutlineEmail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";

// ⚠️ DEMO-INHALT: Alle Angaben unten sind Platzhalter.
// Vor dem Livegang durch die echten Daten des Salons ersetzen
// (Adresse, Telefon, E-Mail, Öffnungszeiten, Kartenposition).
const SALON = {
  name: "Blanche",
  address: "Musterstraße 12, 79539 Lörrach",
  phone: "+49 7621 000000",
  email: "info@example.com",
  position: [47.6167, 7.6667], // Platzhalter: Zentrum von Lörrach
};

const defaultIcon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});

function Contact() {
  const { name, address, phone, email, position } = SALON;

  // Route anhand der Koordinaten, solange die Adresse nur ein Platzhalter ist
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${position[0]},${position[1]}&travelmode=driving`;

  const openDirections = () => {
    window.open(directionsUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="contact-container">
      <section className="section-top">
        <div className="get-in-touch">
          <span></span>
          <p>Kontakt aufnehmen</p>
        </div>
        <div className="headings">
          <div className="find-visit-us">
            <h1>Finden Sie uns,</h1>
            <h1>besuchen Sie uns,</h1>
          </div>
          <h1>lieben Sie uns.</h1>
        </div>
      </section>
      <section className="section-bottom">
        <FormContact />

        <div className="address-opening-location">
          <div className="contact-info-opening-hours">
            <div className="opening-hours">
              <div className="hours-heading">
                <span></span>
                <p>Öffnungszeiten</p>
              </div>
              <p>Dienstag – Mittwoch – Freitag: 09:00 – 18:00 Uhr</p>
              <p>Donnerstag: 10:00 – 20:00 Uhr</p>
              <p>Samstag: 09:00 – 15:00 Uhr</p>
              <p>Montag: Geschlossen</p>
            </div>
            <div className="contact-info">
              <div className="address">
                <div className="icon">
                  <MdLocationPin />
                </div>
                <div className="info">
                  <h2>Adresse</h2>
                  <p>{address}</p>
                </div>
              </div>
              <div className="phone">
                <div className="icon">
                  <LuPhone />
                </div>
                <div className="info">
                  <h2>Telefon</h2>
                  <p>{phone}</p>
                </div>
              </div>
              <div className="email">
                <div className="icon">
                  <MdOutlineEmail />
                </div>
                <div className="info">
                  <h2>E-Mail</h2>
                  <p>{email}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="location">
            <div className="location-heading">
              <span></span>
              <p>Standort</p>
            </div>
            <MapContainer
              center={position}
              zoom={16}
              style={{ height: "500px", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              />
              <Marker
                position={position}
                icon={defaultIcon}
                eventHandlers={{ click: openDirections }}
              >
                <Tooltip direction="top" offset={[0, -38]}>
                  <strong style={{ fontSize: "1.4rem" }}>{name}</strong>
                  <p style={{ fontSize: "1.3rem" }}>{address}</p>
                  <em style={{ fontSize: "1.2rem" }}>Klicken für Route →</em>
                </Tooltip>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;