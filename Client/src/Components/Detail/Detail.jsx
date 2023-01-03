import React, { useState } from "react";
import "./Detail.css";
import { useParams } from "react-router-dom";
import { useQuery } from "../../hooks/useQuery";
import thumbnail1 from "../../Assets/demo-home-1.jpg";
import thumbnail2 from "../../Assets/demo-home-2.jpg";
import thumbnail3 from "../../Assets/demo-home-3.jpg";
import thumbnail4 from "../../Assets/demo-home-4.jpg";
import arrow from "../../Assets/arrowLeft.png";
import Reviews from "./Reviews/Reviews";
import Maps from "./Maps/Maps";
import Price from "./Price/Price";
import Information from "./Information/Information";

const Detail = () => {
  let { id } = useParams();
  const [data, loading] = useQuery(`/listings/${id}`);
  const [slideIndex, setSlideIndex] = useState(0);

  if (loading) return <div>Loading...</div>;

  const slides = [
    data.images.picture_url,
    thumbnail1,
    thumbnail2,
    thumbnail3,
    thumbnail4,
  ];

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
            <Information data={data} />
            <Price data={data} />
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
