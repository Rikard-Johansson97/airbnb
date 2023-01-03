import React, { useState, useEffect } from "react";
import "./Detail.css";
import { useParams } from "react-router-dom";
import { useQuery } from "../../hooks/useQuery";
import reviewStar from "../../Assets/star-icon.png";
import thumbnail1 from "../../Assets/demo-home-1.jpg";
import thumbnail2 from "../../Assets/demo-home-2.jpg";
import thumbnail3 from "../../Assets/demo-home-3.jpg";
import thumbnail4 from "../../Assets/demo-home-4.jpg";
import House from "../../Assets/house.png";
import arrow from "../../Assets/arrowLeft.png";
import { useMedia } from "../../hooks/useMedia";
import Reviews from "./Reviews/Reviews";
import Maps from "./Maps/Maps";

const Detail = () => {
  let { id } = useParams();
  const [data, loading] = useQuery(`/listings/${id}`);
  const [displayCount, setDisplayCount] = useState(5);
  const [slideIndex, setSlideIndex] = useState(0);
  const isLarge = useMedia("(min-width: 800px)");

  if (loading) return <div>Loading...</div>;

  const slides = [
    data.images.picture_url,
    thumbnail1,
    thumbnail2,
    thumbnail3,
    thumbnail4,
  ];

  const showMore = () => {
    setDisplayCount(displayCount + 5);
  };

  const nextSlide = () => {
    setSlideIndex(slideIndex + 1);
  };

  const prevSlide = () => {
    setSlideIndex(slideIndex - 1);
  };
  // Calculates the width of the slider container
  const sliderWidth = `${slides.length * 100}%`;
  const thumbnailWidth = `${100 / slides.length}%`;
  // Calculates the translateX value for the slides based on the slideIndex
  const translateX = `-${slideIndex * (100 / slides.length)}%`;

  const rating =
    data.review_scores !== undefined
      ? `${data.review_scores.review_scores_value}.0`
      : ``;
  // STAR
  const star = rating ? (
    <img src={reviewStar} className="detail-star" alt="star" />
  ) : (
    ""
  );

  console.log(data);
  return (
    <>
      <div className="detail-container">
        <div className="detail-wrap">
          <div className="detail-img-container">
            <button
              className="next-btn"
              onClick={nextSlide}
              style={{ opacity: slideIndex < slides.length - 1 ? 0.8 : 0.1 }}
              disabled={slideIndex >= slides.length - 1}>
              <img className="arrow-icon" src={arrow} alt="arrow-right" />
            </button>
            <button
              className="prev-btn"
              onClick={prevSlide}
              style={{ opacity: slideIndex > 0 ? 0.8 : 0.1 }}
              disabled={slideIndex <= 0}>
              <img className="arrow-icon" src={arrow} alt="arrow-left" />
            </button>
            <div>
              <div
                className="thumbnail-container slider margin"
                style={{
                  width: sliderWidth,
                  transform: `translateX(${translateX})`,
                }}>
                {slides.map((slide, index) => (
                  <img
                    src={slide}
                    className="home-thumbnail"
                    alt="house"
                    key={index}
                    style={{ width: thumbnailWidth }}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="detail-devider">
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
                  .
                  <p className="detail-underline">
                    {data.reviews.length} Omdömen
                  </p>
                  .
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
                    <p>{data.accommodates} Gäster</p> .
                    <p>{data.bedrooms} Sovrum</p> .<p>{data.beds} Sängar</p> .
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
                      {data.amenities
                        ?.slice(0, displayCount)
                        .map((amenity, index) => (
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

            <div className="detail-price-container">
              <div>
                {isLarge ? (
                  <div className="detail-price">
                    <div>
                      <div className="detail-price-header">
                        <p className="detail-header-title">
                          {data.price} Kr SEK natt
                        </p>
                        <div className="detail-rating-container">
                          {star}
                          <p>{rating}</p>
                        </div>
                        <p className="detail-underline">
                          {data.reviews.length} Omdömen
                        </p>
                      </div>
                      <button className="btn--price large">Reservera</button>
                      <div className="detail-price-footer">
                        <div>
                          <p className="detail-footer-text">
                            {data.price} X 5 nätter
                          </p>
                          <p className="detail-footer-text">Städavgift</p>
                        </div>
                        <div>
                          <p>{data.price * 5} kr SEK</p>
                          <p>{data.cleaning_fee.$numberDecimal}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="detail-price">
                    <p>{data.price} Kr SEK natt</p>

                    <button className="btn--price">Reservera</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {!data.reviews.length > 0 ? null : (
        <Reviews data={data} loading={loading}></Reviews>
      )}
      <Maps
        lng={data.address.location.coordinates[0]}
        lat={data.address.location.coordinates[1]}
        data={data}
      />
    </>
  );
};

export default Detail;
