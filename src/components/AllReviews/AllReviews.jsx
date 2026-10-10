import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AllReviews.css";
import reviewData from "../Reviews/AllReviews.js";
import { MdOutlineUnfoldMore, MdOutlineUnfoldLess } from "react-icons/md";

const STEP = 4;

const rtf = new Intl.RelativeTimeFormat("de", { numeric: "always" });

// Wandelt ein ISO-Datum (z. B. "2026-06-12") in "vor X Monaten" etc. um
const timeAgo = (dateString) => {
  const diffSeconds = Math.round((new Date(dateString) - new Date()) / 1000); // negativ = Vergangenheit

  const units = [
    ["year", 60 * 60 * 24 * 365],
    ["month", 60 * 60 * 24 * 30],
    ["week", 60 * 60 * 24 * 7],
    ["day", 60 * 60 * 24],
    ["hour", 60 * 60],
    ["minute", 60],
  ];

  for (const [unit, seconds] of units) {
    if (Math.abs(diffSeconds) >= seconds) {
      return rtf.format(Math.round(diffSeconds / seconds), unit);
    }
  }
  return "gerade eben";
};

const AllReviews = () => {
  const [visibleCount, setVisibleCount] = useState(STEP);
  const navigate = useNavigate();

  const showMore = () => {
    setVisibleCount((prev) => prev + STEP);
  };

  const showLess = () => {
    setVisibleCount(STEP);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => {
      if (i < Math.floor(rating)) {
        return (
          <span key={i} className="star full">
            ★
          </span>
        );
      } else if (i < rating) {
        return (
          <span key={i} className="star half">
            ★
          </span>
        );
      } else {
        return (
          <span key={i} className="star empty">
            ★
          </span>
        );
      }
    });
  };

  const visibleReviews = reviewData.reviews.slice(1, 1 + visibleCount);
  const hasMore = 1 + visibleCount < reviewData.reviews.length;

  return (
    <section className="all-reviews-container">
      <div className="header">
        <h1>höfliche Worte</h1>
        <p>
          "Ein Ort, an dem Präzision auf Poesie trifft. Unsere Kunden teilen
          ihre Erfahrungen auf dem Weg durch die Kunst der transformativen
          Schönheit und der achtsamen Handwerkskunst."
        </p>
      </div>

      <div className="best-review">
        <span>{renderStars(reviewData.reviews[0].rating)}</span>
        <p>{reviewData.reviews[0].comment}</p>
        <h2>{reviewData.reviews[0].name}</h2>
        <p>{reviewData.reviews[0].service}</p>
      </div>

      <div className="all-reviews">
        {visibleReviews.map((item) => (
          <div className="box" key={item.id}>
            <div className="name-icon-date">
              <div className="name-icon">
                <p>{item.name_icon}</p>
                <h2>{item.name}</h2>
              </div>
              <p>{timeAgo(item.date)}</p>
            </div>
            <span>{renderStars(item.rating)}</span>
            <p>{item.comment}</p>
            <p className="service">
              Service: <span>{item.service}</span>
            </p>
          </div>
        ))}
      </div>

      <div className="show-more-container">
        {visibleCount > STEP && (
          <button className="show-less" onClick={showLess}>
            weniger anzeigen <MdOutlineUnfoldLess />
          </button>
        )}
        {hasMore && (
          <button className="show-more" onClick={showMore}>
            Mehr anzeigen <MdOutlineUnfoldMore />
          </button>
        )}
      </div>

      <div className="your-journey">
        <h1>Beginne deine Reise hin zu einem verfeinerten Selbstbild.</h1>
        <div className="btns">
          <button onClick={() => navigate("/appointment")}>
            einen Termin vereinbaren
          </button>
          <button onClick={() => navigate("/contact")}>Kontakt mit uns</button>
        </div>
      </div>
    </section>
  );
};

export default AllReviews;
