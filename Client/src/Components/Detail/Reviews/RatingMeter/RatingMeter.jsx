import React from "react";
import "./RatingMeter.css";

const RatingMeter = ({ data }) => {
  const ratings = [
    { name: "Renlighet", value: data.review_scores.review_scores_cleanliness },
    {
      name: "Kommunikation",
      value: data.review_scores.review_scores_communication,
    },
    { name: "Incheckning", value: data.review_scores.review_scores_checkin },
    { name: "Noggrannhet", value: data.review_scores.review_scores_accuracy },
    { name: "Plats", value: data.review_scores.review_scores_location },
    { name: "Värde", value: data.review_scores.review_scores_value },
  ];

  const meterPercentage = (score) => {
    const percentage = score * 10;
    return percentage;
  };

  return (
    <>
      <h3 className='title'>Omdömmen</h3>
      <div className='ratings'>
        {ratings.map((rating, index) => {
          return (
            <div className='rating-meter' key={index}>
              <p className='rating-title'>{rating.name}</p>
              <div className='rating-meter'>
                <div className='total-meter'>
                  <div
                    className='current-meter'
                    style={{
                      width: `${meterPercentage(rating.value)}%`,
                    }}></div>
                </div>
                <p className='rating-score'>{rating.value + ".0"}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RatingMeter;
