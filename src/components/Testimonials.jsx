import React, { useEffect, useState } from 'react';
import './Testimonials.css';

const testimonialsData = [
  {
    quote:
      "Their expertise, professionalism, and dedication to client satisfaction make them a standout choice in the industry. I look forward to collaborating with them on future projects.",
    name: "Aarav Mehta",
    title: "Founder & CEO, Mehta Digital Solutions",
  },
  {
    quote:
      "Working with them was seamless from start to finish. The product exceeded our expectations, both in design and functionality.",
    name: "Priya Sharma",
    title: "Product Manager, InnovateX",
  },
  {
    quote:
      "The attention to detail and user experience they bring is unmatched. They transformed our vision into a high-performing application.",
    name: "Rahul Verma",
    title: "CTO, Verma Ventures",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Slide every 5 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  const { quote, name, title } = testimonialsData[currentIndex];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-heading">My Client Feedback</h2>
          <div className="line"></div>
        <p className="testimonials-intro">
          These are a few words from clients I've worked with—highlighting my commitment to quality, user-centered design, and
          reliable development. Their feedback reflects the value I bring to every project.
        </p>

        <div className="testimonial-content">
          <div className="quote-box">
            <div className="quote-icon">“</div>
            <blockquote className="testimonial-quote">{quote}</blockquote>
            <p className="client-name">{name}</p>
            <p className="client-title">{title}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
