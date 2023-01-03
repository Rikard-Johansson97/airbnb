import React, { useState } from "react";
import reviewStar from "../../../Assets/star-icon.png";
import House from "../../../Assets/house.png";

const Information = ({ data }) => {
  const [displayCount, setDisplayCount] = useState(5);
  const showMore = () => {
    setDisplayCount(displayCount + 5);
  };
  const rating =
    data.review_scores !== undefined
      ? `${data.review_scores.review_scores_value}.0`
      : ``;
  // STAR
  const star = rating ? (
    <img src={reviewStar} className="detail-star" alt="star" />
  ) : (
    " "
  );
  return (
    <div>
      <div className="detail-header">
        <div className="">
          <h1 className="detail-title">MICA{data.name}</h1>
        </div>
        <div className="detail-info">
          <div className="detail-rating-container">
            {star}
            <p>{rating}</p>
          </div>
          .<p className="detail-underline">{data.reviews.length} Omdömen</p>.
          <p className="detail-icon">
            <img src={House} className="detail-star" alt="house" />
            {data.property_type}
          </p>
          .<p className="detail-underline">{data.address.street}</p>
        </div>
      </div>
      <div className="detail-house-container">
        <div className="detail-house">
          <h4 className="detail-title">Rum</h4>
          <div className="detail-rooms">
            <p>{data.accommodates} Gäster</p> .<p>{data.bedrooms} Sovrum</p> .
            <p>{data.beds} Sängar</p> .
            <p>{!data.bathrooms ? `${data.bathrooms}` : `1`} Badrum</p>
          </div>
        </div>
      </div>
      <div className="detail-summary-container">
        <div className="detail-summary">{data.summary}</div>
      </div>
      <div className="detail-amenities-container">
        <div className="detail-amenities">
          <div>
            <h4 className="detail-title">Vad detta boende erbjuer</h4>
            <ul className="amenities-item">
              {data.amenities?.slice(0, displayCount).map((amenity, index) => (
                <li key={index}>{amenity}</li>
              ))}
            </ul>
            {displayCount < data.amenities?.length && (
              <button className="btn" onClick={showMore}>
                Show more
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
