import "./Contact.css";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const message = form.message.value;

    const subject = `Thavil Heritage Enquiry - ${name}`;

    const body = `
Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}
    `;

    // 👉 CHANGE ONLY THE EMAIL HERE
    window.location.href = `mailto:siva9790514714@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="contact-section">

      <div className="contact-heading">
        <span className="section-tag">GET IN TOUCH</span>

        <h2>Connect With Us</h2>

        <p>
          Interested in learning Thavil, booking a performance,
          or knowing more about the Gurukulam? Get in touch with us.
        </p>
      </div>

      <div className="contact-content">

        <div className="contact-info">

          <div className="contact-item">
            <span>01</span>
            <div>
              <h3>Learn Thavil</h3>
              <p>Enquire about Thavil training and classes.</p>
            </div>
          </div>

          <div className="contact-item">
            <span>02</span>
            <div>
              <h3>Performance Booking</h3>
              <p>Contact us for festivals, weddings, and events.</p>
            </div>
          </div>

          <div className="contact-item">
            <span>03</span>
            <div>
              <h3>General Enquiry</h3>
              <p>Reach out to know more about Thavil Heritage.</p>
            </div>
          </div>

        </div>

        <form className="contact-form" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">
            Send Enquiry
          </button>

          <div className="whatsapp-buttons">

            <a
              href="https://wa.me/919790514714"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-button"
            >
              WhatsApp – Gurunathar
            </a>

            <a
              href="https://wa.me/916379495963"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-button"
            >
              WhatsApp – Assistant Coach
            </a>

            <a
              href="tel:+919790514714"
              className="call-button"
            >
              📞 Call / Book Contact
            </a>

          </div>

        </form>

      </div>

    </section>
  );
}

export default Contact;