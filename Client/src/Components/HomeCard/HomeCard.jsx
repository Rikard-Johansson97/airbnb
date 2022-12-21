import React, { useState } from "react";
import "./HomeCard.css";
import reviewStar from "../../Assets/star-icon.png";
import arrow from "../../Assets/arrowLeft.png";
// Temp demo files for styling
import thumbnail1 from "../../Assets/demo-home-1.jpg";
import thumbnail2 from "../../Assets/demo-home-2.jpg";
import thumbnail3 from "../../Assets/demo-home-3.jpg";
import thumbnail4 from "../../Assets/demo-home-4.jpg";

const HomeCard = () => {
  // Declare a state variable named "slideIndex" and set its initial value to 0
  const [slideIndex, setSlideIndex] = useState(0);

  // ! NOTE: här kommer man pusha in bilderna som kommer ifrån databasen. Arrayen är flexibel och slidern annpassar sig efter hur många bilder som finns i arrayen.
  const slides = [
    thumbnail1,
    thumbnail2,
    thumbnail3,
    thumbnail4,
    thumbnail4,
    thumbnail4,
  ];

  // Declare a function that increments the slideIndex by 1
  const nextSlide = () => {
    setSlideIndex(slideIndex + 1);
  };

  // Declare a function that decrements the slideIndex by 1
  const prevSlide = () => {
    setSlideIndex(slideIndex - 1);
  };

  // Calculate the width of the slider container
  const sliderWidth = `${slides.length * 100}%`;
  const thumbnailWidth = `${100 / slides.length}%`;
  // Calculate the translateX value for the slides based on the slideIndex
  const translateX = `-${slideIndex * (100 / slides.length)}%`;

  return (
    <div className='home-card-container'>
      <div className='home-img-container'>
        {/* Only render the next button if the slideIndex is less than the total number of slides */}
        {slideIndex < slides.length - 1 && (
          <button className='next-btn' onClick={nextSlide}>
            <img className='arrow-icon' src={arrow} alt='arrow-right' />
          </button>
        )}
        {/* Only render the prev button if the slideIndex is greater than 0 */}
        {slideIndex > 0 && (
          <button className='prev-btn' onClick={prevSlide}>
            <img className='arrow-icon' src={arrow} alt='arrow-left' />
          </button>
        )}
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
      </div>
      {/* Other component JSX*/}
      <div className='home-text-container'>
        <div className='title-rating-container'>
          <h3 className='home-title'>
            Stockholm, Sweden
            {/* Insert city */}
            {/* Insert Country */}
          </h3>
          <div className='rating-container'>
            <img src={reviewStar} className='rating-star' alt='star' />
            <p>{/* INSERT RATING HERE */}4.5</p>
          </div>
        </div>
        <p className='home-price'>
          <span id='dark-grey'>{/* INSERT PRICE HERE */}137.00 SEK</span> per
          night
        </p>
      </div>
    </div>
  );
};

export default HomeCard;
