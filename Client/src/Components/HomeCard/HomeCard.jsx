import React, { useState } from "react";
// ICONS
import "./HomeCard.css";
import reviewStar from "../../Assets/star-icon.png";
import { Link } from "react-router-dom";
import arrow from "../../Assets/arrowLeft.png";
import bedIcon from "../../Assets/bed-icon.png";
// Temp demo files for styling
import thumbnail1 from "../../Assets/demo-home-1.jpg";
import thumbnail2 from "../../Assets/demo-home-2.jpg";
import thumbnail3 from "../../Assets/demo-home-3.jpg";
import thumbnail4 from "../../Assets/demo-home-4.jpg";

const HomeCard = (props) => {
  const { loading } = props;
  if (loading) {
    console.log(loading);
    return (
      <div className='home-card-container loading'>
        <div className='home-img-container loading'></div>
      </div>
    );
  }
  const { home } = props;
  // Declare a state variable named "slideIndex" and set its initial value to 0
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = [
    home.images.picture_url,
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
  // RATING
  const rating =
    home.review_scores !== undefined
      ? `${home.review_scores.review_scores_value}.0`
      : ``;
  // STAR
  const star = rating ? (
    <img src={reviewStar} className='rating-star' alt='star' />
  ) : (
    ""
  );
  return (
    <div className='home-card-container'>
      <div className='home-img-container'>
        <button
          className='next-btn'
          onClick={nextSlide}
          style={{ opacity: slideIndex < slides.length - 1 ? 0.8 : 0.1 }}
          disabled={slideIndex >= slides.length - 1}>
          <img className='arrow-icon' src={arrow} alt='arrow-right' />
        </button>
        <button
          className='prev-btn'
          onClick={prevSlide}
          style={{ opacity: slideIndex > 0 ? 0.8 : 0.1 }}
          disabled={slideIndex <= 0}>
          <img className='arrow-icon' src={arrow} alt='arrow-left' />
        </button>
        <Link to={`/listings/${home._id}`}>
          <div
            className='thumbnail-container slider'
            style={{
              width: sliderWidth,
              transform: `translateX(${translateX})`,
            }}>
            {slides.map((slide, index) => (
              <img
                src={slide}
                className='home-thumbnail'
                alt='house'
                key={index}
                style={{ width: thumbnailWidth }}
              />
            ))}
          </div>
        </Link>
      </div>
      <Link to={`/listings/${home._id}`} className='home-text-container'>
        <div className='title-rating-container'>
          <h3 className='home-title'>{home.address.street}</h3>
          <div className='rating-container'>
            {star}
            <p>{rating}</p>
          </div>
        </div>
        <p className='home-category'>{home.property_type}</p>
        <p className='bed-count'>
          {home.beds}
          <img src={bedIcon} className='bed-icon' alt='bed-icon'></img>
        </p>
        <p className='home-price'>
          <span id='highlight'>{home.price}.00 kr SEK</span> per natt
        </p>
      </Link>
    </div>
  );
};

export default HomeCard;
