import "./Gallery.css";
import { useState } from "react";
import galleryData from ".//GalleryData.js";

function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Women", "Men", "Color", "Bridal"];

  const filteredData =
    activeFilter === "All"
      ? galleryData
      : galleryData.filter((item) => item.category.toLocaleLowerCase() === activeFilter.toLocaleLowerCase());

  return (
    <div className="gallery-container">
      <section className="gallery-sec-1">
        <div className="our-work-header">
          <span></span>
          <p>our work</p>
        </div>
        <div className="headers">
          <h1>before &</h1>
          <h1>after</h1>
        </div>
      </section>

      <section className="gallery-sec-2">
        <div className="filters">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${filter === activeFilter ? "active" : ""}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      <section className="gallery-sec-3">
        <div className="gallery-grid">
          {filteredData.map((item) => (
            <div key={item.id} className="gallery-item">
              <img src={item.image} alt={item.alt} />
              <h3>{item.alt}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Gallery;
