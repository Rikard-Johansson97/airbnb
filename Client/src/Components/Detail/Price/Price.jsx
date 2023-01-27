import React from "react";
import { useMedia } from "../../../hooks/useMedia";
import reviewStar from "../../../Assets/star-icon.png";

const Price = ({ data }) => {
  const isLarge = useMedia("(min-width: 800px)");
  const rating =
    data.review_scores !== undefined
      ? `${data.review_scores.review_scores_value}.0`
      : ``;
  // STAR
  const star = rating ? (
    <img src={reviewStar} className='detail-star' alt='star' />
  ) : (
    " "
  );
  return (
    <div className='detail-price-container'>
      <div>
        {isLarge ? (
          <div className='detail-price'>
            <div>
              <div className='detail-price-header'>
                <p className='detail-header-title'>{data.price} Kr SEK natt</p>
                <div className='detail-rating-container'>
                  {star}
                  <p>{rating}</p>
                </div>
                <p className='detail-underline'>
                  {data.reviews.length} Omdömen
                </p>
              </div>
              <button className='btn--price large'>Reservera</button>
              <div className='detail-price-footer'>
                <div>
                  <p className='detail-footer-text'>{data.price} X 5 nätter</p>
                </div>
                <div>
                  <p>{data.price * 5} kr SEK</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className='detail-price'>
            <p>{data.price} Kr SEK natt</p>

            <button className='btn--price'>Reservera</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Price;
