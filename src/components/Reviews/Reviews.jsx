import "./Reviews.css";
import reviewData from "./AllReviews.js";

function Reviews() {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => {
      if (i < Math.floor(rating)) {
        // Tam yıldız
        return (
          <span key={i} className="star full">
            ★
          </span>
        );
      } else if (i < rating) {
        // Yarım yıldız
        return (
          <span key={i} className="star half">
            ★
          </span>
        );
      } else {
        // Boş yıldız
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
        <h4>what clients say</h4>
      </div>
      <div className="middle">
        <h1>Reviews</h1>
        <div className="review-points">
          <p>4.8</p>
          <span>/ on Google</span>
        </div>
      </div>
      <div className="bottom">
        <div className="comment-container">
          {reviewData.reviews.map((review) => (
            <div key={review.id} className="comment-box">
              <div className="name-icon-date">
                <div className="name-icon">
                  <span>{review.name_icon}</span>
                  <p>{review.name}</p>
                </div>
                <p>{review.date}</p>
              </div>
              <p className="comment">{review.comment}</p>
              <div className="rating">{renderStars(review.rating)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reviews;
