import "./Reviews.css";
import { Link, useNavigate } from "react-router-dom";
import reviewData from "./AllReviews.js";

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

function Reviews() {
  const navigate = useNavigate();

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

  return (
    <div className="reviews-container">
      <div className="top">
        <span></span>
        <h4>was kunden sagen</h4>
      </div>
      <div className="middle">
        <h1>Bewertungen</h1>
        <div className="review-points">
          <p>5.0</p>
          <span>/ bei Google</span>
        </div>
      </div>
      <div className="bottom">
        <div className="comment-container">
          {reviewData.reviews
            .map((review) => {
              const isLong = review.comment.length > 300;

              return (
                <div key={review.id} className="comment-box">
                  <div className="name-icon-date">
                    <div className="name-icon">
                      <span>{review.name_icon}</span>
                      <p>{review.name}</p>
                    </div>
                    <p>{timeAgo(review.date)}</p>
                  </div>

                  <p className="comment">{review.comment}</p>

                  {isLong && (
                    <Link to="/reviews" className="read-more-link">
                      Mehr lesen →
                    </Link>
                  )}

                  {review.service && (
                    <p className="service">Service: {review.service}</p>
                  )}

                  <div className="rating">{renderStars(review.rating)}</div>
                </div>
              );
            })
            .slice(0, 4)}
        </div>
        <p className="view-all" onClick={() => navigate("/reviews")}>
          Alle Kommentare anzeigen
        </p>
      </div>
    </div>
  );
}

export default Reviews;
