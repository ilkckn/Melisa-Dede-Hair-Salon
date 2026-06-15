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
  const position = [47.6234, 7.674];

  const address = "Brombacherstr. 66, 79539 Lörrach";
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    address,
  )}&travelmode=driving`;

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
          <h1>Liebt uns.</h1>
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
              <p>Montag – Freitag: 09:00 – 19:00 Uhr</p>
              <p>Samstag: 09:00 – 17:00 Uhr</p>
              <p>Sonntag: Geschlossen</p>
            </div>
            <div className="contact-info">
              <div className="address">
                <div className="icon">
                  <MdLocationPin />
                </div>
                <div className="info">
                  <h2>address</h2>
                  <p>Brombacherstr. 66, 79539 Lörrach</p>
                </div>
              </div>
              <div className="phone">
                <div className="icon">
                  <LuPhone />
                </div>
                <div className="info">
                  <h2>phone</h2>
                  <p>+49 761 123456</p>
                </div>
              </div>
              <div className="email">
                <div className="icon">
                  <MdOutlineEmail />
                </div>
                <div className="info">
                  <h2>email</h2>
                  <p>melisa.dede1@hotmail.com</p>
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
                  <strong style={{ fontSize: "1.4rem" }}>
                    Melisa Dede Hair &amp; Beauty
                  </strong>
                  <p style={{ fontSize: "1.3rem" }}>
                    Brombacherstr. 66, 79539 Lörrach
                  </p>
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
