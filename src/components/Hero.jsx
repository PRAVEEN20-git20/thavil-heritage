import "./Hero.css";
import heroPerson from "../assets/images/hero-person.png";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">
        <h1>THAVIL HERITAGE</h1>

        <h2>R. Siva Shankar</h2>

        <h3>Gurunathar • Thavil Maestro • Mentor</h3>

        <p>
          Preserving the Legacy of Traditional Thavil Through
          Generations of Excellence.
        </p>

        <div className="hero-buttons">

          <button
            onClick={() => {
              document.getElementById("about")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Explore Heritage
          </button>

          <a
            href="tel:+919790514714"
            className="call-button"
          >
            📞 Book / Contact Us
          </a>

        </div>
      </div>

      <div className="hero-image">
        <img
          src={heroPerson}
          alt="R. Siva Shankar - Thavil Maestro"
          className="hero-person"
        />
      </div>

    </section>
  );
}

export default Hero;