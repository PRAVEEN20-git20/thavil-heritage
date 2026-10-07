import "./Gallery.css";
import { useState } from "react";

const galleryItems = [
  "PERFORMANCE",
  "TRADITION",
  "CELEBRATION",
  "MUSIC",
  "HERITAGE",
  "MOMENTS",
];

function Gallery() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="gallery-section">

      <div className="gallery-heading">
        <span className="section-tag">MOMENTS OF HERITAGE</span>

        <h2>Performance Gallery</h2>

        <p>
          A glimpse into performances, traditions, celebrations,
          and memorable moments from the Thavil Heritage journey.
        </p>
      </div>

      <div className={`gallery-grid ${showMore ? "show-more" : ""}`}>

        {galleryItems.map((item, index) => (
          <div
            className={`gallery-item gallery-item-${index + 1}`}
            key={index}
          >
            {item}
          </div>
        ))}

      </div>

      {/* Mobile Explore More */}
      <button
        type="button"
        className="gallery-explore-btn"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? "Show Less" : "Explore More"}
      </button>

    </section>
  );
}

export default Gallery;