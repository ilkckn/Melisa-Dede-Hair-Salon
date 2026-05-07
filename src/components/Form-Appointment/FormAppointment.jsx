import "./FormAppointment.css";
import { useState } from "react";

function FormAppointment({ selectedService, onSubmitSuccess }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    stylist: "",
    date: "",
    time: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !selectedService ||
      !formData.stylist ||
      !formData.date ||
      !formData.time
    ) {
      alert("Please fill in all fields before submitting.");
      return;
    }
    const appointmentData = { ...formData, service: selectedService };
    console.log("Appointment Data:", appointmentData);
    onSubmitSuccess();
    setIsSubmitted(true);
  };

  return (
    <div className="form-appointment-container">
      <form action="" onSubmit={handleSubmit}>
        <div className="first-last-name">
          <div className="first-name">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="last-name">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="email">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="service-stylist">
          <div className="stylist">
            <label htmlFor="stylist">Stylist</label>
            <select
              id="stylist"
              value={formData.stylist}
              onChange={handleChange}
            >
              <option value="">Select a Stylist</option>
              <option value="sophie-müller">Sophie Müller</option>
              <option value="marc-bauer">Marc Bauer</option>
              <option value="lena-weber">Lena Weber</option>
              <option value="anna-fischer">Anna Fischer</option>
              <option value="max-schmidt">Max Schmidt</option>
              <option value="sarah-johnson">Sarah Johnson</option>
            </select>
          </div>
        </div>
        <div className="date-time">
          <div className="date">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>
          <div className="time">
            <label htmlFor="time">Time</label>
            <input
              type="time"
              id="time"
              value={formData.time}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="submit-button">
          <button type="submit">Confirm Appointment</button>
        </div>
        <div className="confirm-text">
          {!isSubmitted ? (
            <p>We'll confirm your booking within 2 hours by email.</p>
          ) : (
            <p>
              ✅ Your appointment has been received! We'll confirm within 2
              hours.{" "}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

export default FormAppointment;
