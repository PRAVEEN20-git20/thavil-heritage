import "./LearnThavil.css";

function LearnThavil() {

  // 👉 ADD YOUR TWO WHATSAPP NUMBERS HERE
  // Format: 91 + 10-digit number
  // No +, spaces, or hyphens

  const phoneNumbers = {
    primary: "919790514714",
    secondary: "916379495963",
  };

  const openWhatsApp = (number, course) => {

    const message = `Hello Thavil Heritage, I am interested in ${course}. Please share the details.`;

    const whatsappURL = `https://wa.me/${number}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  const chooseWhatsApp = (course) => {

    const choice = window.confirm(
      "OK = Contact 1\nCancel = Contact 2"
    );

    if (choice) {
      openWhatsApp(phoneNumbers.primary, course);
    } else {
      openWhatsApp(phoneNumbers.secondary, course);
    }
  };

  return (
    <section className="learn-section">

      <div className="learn-heading">
        <span className="section-tag">LEARN THE TRADITION</span>

        <h2>Learn Thavil</h2>

        <p>
          Begin your journey into the traditional art of Thavil under the
          guidance of an experienced Gurunathar.
        </p>
      </div>


      <div className="learning-options">

        {/* 01 */}
        <div className="learning-card">
          <div className="learning-number">01</div>

          <h3>Beginner Training</h3>

          <p>
            Learn the fundamentals of Thavil, basic rhythms, hand techniques,
            and traditional practice methods.
          </p>

          <button
            type="button"
            onClick={() => chooseWhatsApp("Beginner Training")}
          >
            Learn More
          </button>
        </div>


        {/* 02 */}
        <div className="learning-card">
          <div className="learning-number">02</div>

          <h3>Advanced Training</h3>

          <p>
            Develop advanced rhythmic skills, performance techniques,
            traditional patterns, and stage confidence.
          </p>

          <button
            type="button"
            onClick={() => chooseWhatsApp("Advanced Training")}
          >
            Learn More
          </button>
        </div>


        {/* 03 */}
        <div className="learning-card">
          <div className="learning-number">03</div>

          <h3>Performance Training</h3>

          <p>
            Prepare for temple festivals, cultural events, ceremonies,
            and professional Thavil performances.
          </p>

          <button
            type="button"
            onClick={() => chooseWhatsApp("Performance Training")}
          >
            Learn More
          </button>
        </div>

      </div>

    </section>
  );
}

export default LearnThavil;