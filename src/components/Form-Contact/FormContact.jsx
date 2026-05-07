import "./FormContact.css";
import { useState } from "react";

function FormContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { name, email, subject, message } = formData;

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      alert("Please fill in all fields.");
      return;
    }
    setIsSubmitting(true);
  };

  return (
    <div className="form-contact-container">
      <div className="form-heading">
        <span></span>
        <p>Send a Message</p>
      </div>
      <form action="" onSubmit={handleSubmit}>
        <div className="name-email">
          <div className="name">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={name} onChange={handleChange} />
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="subject">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={handleChange}
          />
        </div>
        <div className="message">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows="5"
            value={message}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="submit">
          <button type="submit">Send Message</button>
        </div>
        {isSubmitting && (
          <p className="success-message">Message sent successfully!</p>
        )}
      </form>
    </div>
  );
}

export default FormContact;
