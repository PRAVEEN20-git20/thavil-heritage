import "./Booking.css";

function Booking() {

  const handleBooking = () => {

    // 👉 CHANGE ONLY THIS NUMBER
    // Format: 91 + phone number
    // No +, spaces, or hyphens
    const phoneNumber = "919790514714";

    const message =
      "Hello Thavil Heritage, I am interested in booking a Thavil performance. Please share the details.";

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="booking-section">

      <div className="booking-content">

        <span className="section-tag">
          BRING THE RHYTHM
        </span>

        <h2>Performance Booking</h2>

        <p>
          Invite the traditional power of Thavil to your temple festival,
          wedding, cultural celebration, or special occasion.
        </p>

        <div className="booking-options">

          {/* 01 */}
          <div className="booking-option">
            <span>01</span>
            <h3>Temple Festivals</h3>
          </div>

          {/* 02 */}
          <div className="booking-option">
            <span>02</span>
            <h3>Weddings &amp; Ceremonies</h3>
          </div>

          {/* 03 */}
          <div className="booking-option">
            <span>03</span>
            <h3>Cultural Events</h3>
          </div>

        </div>

        <button type="button" onClick={handleBooking}>
          Book a Performance
        </button>

      </div>

    </section>
  );
}

export default Booking;