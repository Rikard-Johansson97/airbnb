import React, { useState } from "react";
import "./Reviews.css";
import avatars from "./avatars";
import RatingMeter from "./RatingMeter/RatingMeter";

const displayAvatar = (lastIndex) => {
  const avatarIndex = lastIndex + 1;
  return avatarIndex >= avatars.length ? 0 : avatarIndex;
};

const ReviewCard = ({ review, lastIndex }) => {
  const [showFullComment, setShowFullComment] = useState(false);

  function handleReadMoreClick() {
    setShowFullComment(true);
  }

  function handleShowLessClick() {
    setShowFullComment(false);
  }

  const comments = showFullComment
    ? review.comments
    : review.comments.substring(0, 200);

  const date = review.date.slice(0, 10);
  return (
    <div className='review-card' key={review._id}>
      <div className='user-info'>
        <img
          src={avatars[lastIndex]}
          alt={review.reviewer_name}
          className='avatar'
        />
        <div className='user-name-date'>
          <p className='name'>{review.reviewer_name}</p>
          <p className='date'>{date}</p>
        </div>
      </div>
      <div className='review-text-container'>
        <p className='review-text'>{comments}</p>
        {!showFullComment && review.comments.length > 200 && (
          <button className='show-text-btn' onClick={handleReadMoreClick}>
            Visa mer
          </button>
        )}
        {showFullComment && (
          <button className='show-text-btn' onClick={handleShowLessClick}>
            Visa mindre
          </button>
        )}
      </div>
    </div>
  );
};

const Reviews = ({ data, loading }) => {
  const [reviewsToShow, setReviewsToShow] = useState(5);
  console.log(data);
  let lastIndex = 0;
  return (
    <div className='reviews-wrapper'>
      <RatingMeter data={data} className='Rating-stats' />
      <div className='reviews-card-wrapper'>
        {data.reviews.slice(0, reviewsToShow).map((review, index) => {
          lastIndex = displayAvatar(lastIndex);
          return (
            <ReviewCard
              review={review}
              lastIndex={lastIndex}
              key={review._id}
            />
          );
        })}
      </div>
      {reviewsToShow < data.reviews.length && (
        <button
          className='show-more-reviews-btn'
          onClick={() => setReviewsToShow(reviewsToShow + 5)}>
          Visa fler omdömen
        </button>
      )}
    </div>
  );
};

export default Reviews;
