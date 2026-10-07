import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      <div className="navbar-logo">
        THAVIL HERITAGE
      </div>

      {/* Mobile Menu Button */}
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        ☰
      </button>

      <ul className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>

        <li>
          <a href="#home" onClick={closeMenu}>Home</a>
        </li>

        <li>
          <a href="#about" onClick={closeMenu}>About Thavil</a>
        </li>

        <li>
          <a href="#guru" onClick={closeMenu}>The Gurunathar</a>
        </li>

        <li>
          <a href="#assistant-coach" onClick={closeMenu}>Assistant Coach</a>
        </li>

        <li>
          <a href="#students" onClick={closeMenu}>Students</a>
        </li>

        <li>
          <a href="#gallery" onClick={closeMenu}>Gallery</a>
        </li>

        <li>
          <a href="#learn" onClick={closeMenu}>Learn Thavil</a>
        </li>

        <li>
          <a href="#booking" onClick={closeMenu}>Performance Booking</a>
        </li>

        <li>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;