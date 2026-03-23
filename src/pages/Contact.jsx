import "./Contact.css";
import React from "react";
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.yourName.value.trim();
    const email = e.target.yourEmail.value.trim();
    const subject = e.target.subject.value.trim();
    const message = e.target.message.value.trim();

    if (!name || !email || !subject || !message) {
      alert("Please fill out all fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Prepare data
    const formData = { name, email, subject, message };

    try {
      // const response = await fetch("http://localhost:5000/api/contact", {
      const response = await fetch("https://portfolio-4-hiv2.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Message sent successfully!");
        navigate('/thank-you');
      } else {
        alert("Error sending message. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server not responding.");
    }
  };

  return (
    <div className="contact-page">
      <h1 className="contact-title animate-up animate-delay-1">Contact</h1>
      <div className="line animate-up animate-delay-2"></div>

      <p className="contact-description animate-up animate-delay-3">
        We’re here to help — feel free to get in touch with us
      </p>

      <div className="contact-content-wrapper">
        <div className="contact-info-section animate-up animate-delay-4">
          <div className="info-box">
            <div className="icon-wrapper"><i className="fas fa-map-marker-alt"></i></div>
            <div className="text-content">
              <h3>Address</h3>
              <p>Indore, MP, India</p>
            </div>
          </div>
          <div className="info-box">
            <div className="icon-wrapper"><i className="fas fa-phone-alt"></i></div>
            <div className="text-content">
              <h3>Call Us</h3>
              <p>+91 7773891415</p>
            </div>
          </div>
          <div className="info-box">
            <div className="icon-wrapper"><i className="fas fa-envelope"></i></div>
            <div className="text-content">
              <h3>Email Us</h3>
              <p>Senlucky2005@gmail.com</p>
            </div>
          </div>

          {/* ✅ Updated Google Map for Indore */}
          <div className="map-container animate-up animate-delay-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.0621167490064!2d75.86970507477861!3d22.725126529416356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fdc7e5a64e11%3A0x2d3f36ec366ca4a!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1717744567890!5m2!1sen!2sin"
              width="100%" height="300" style={{ border: 0 }} allowFullScreen=""
              loading="lazy" title="Google Map"
            ></iframe>
            <a
              href="https://www.google.com/maps/place/Indore,+Madhya+Pradesh"
              target="_blank"
              rel="noopener noreferrer"
              className="view-larger-map"
            >
              View larger map
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-section animate-up animate-delay-5">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="yourName">Your Name</label>
                <input type="text" id="yourName" name="yourName" required />
              </div>
              <div className="form-group">
                <label htmlFor="yourEmail">Your Email</label>
                <input type="email" id="yourEmail" name="yourEmail" required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="7" required></textarea>
            </div>
            <button type="submit" className="send-message-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
