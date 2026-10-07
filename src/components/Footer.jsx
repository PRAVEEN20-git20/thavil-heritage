import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-section">

      <div className="footer-main">

        {/* Brand */}
        <div className="footer-brand">
          <h2>THAVIL HERITAGE</h2>

          <p>
            Preserving the timeless tradition of Thavil
            and nurturing the next generation of artists.
          </p>
        </div>


        {/* Explore */}
        <div className="footer-links">
          <h3>Explore</h3>

          <a href="#home">Home</a>
          <a href="#about">About Thavil</a>
          <a href="#guru">The Gurunathar</a>
          <a href="#students">Students</a>
          <a href="#gallery">Gallery</a>
        </div>


        {/* Connect */}
        <div className="footer-links">
          <h3>Connect</h3>

          <a href="#learn">Learn Thavil</a>
          <a href="#booking">Performance Booking</a>
          <a href="#contact">Contact</a>
        </div>

      </div>


      {/* Bottom */}
      <div className="footer-bottom">

        <p>
          © 2026 Thavil Heritage. All Rights Reserved.
        </p>

        <p>
          Crafted with ❤️ for the Thavil tradition.
        </p>

      </div>

    </footer>
  );
}

export default Footer;