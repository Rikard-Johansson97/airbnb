import React, { useRef, useState, useEffect } from "react";
import "./Categories.css";
import icons from "./index";
import arrows from "../../Assets/arrowLeft.png";

const Categories = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    if (
      currentSlide * window.innerWidth >=
      icons.length * 100 - window.innerWidth
    )
      return setCurrentSlide(currentSlide);
    if (currentSlide < icons.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const sliderStyle = {
    transform: `translateX(-${currentSlide * window.innerWidth}px)`,
    transition: "transform 0.5s ease",
    width: `${icons.length * 100}px`,
  };

  return (
    <div className='wrapper'>
      <img
        className='arrows'
        src={arrows}
        alt='arrow-left'
        onClick={handlePrevSlide}
      />
      <div className='category-slider' style={sliderStyle}>
        {icons.map((icon, index) => (
          <div className='icon-wrapper' key={index} style={{ width: "100px" }}>
            <img
              src={icon.url}
              alt={icon.name}
              key={icon.name}
              className='icon'
            />
            <p className='icon-name'>{icon.name}</p>
          </div>
        ))}
      </div>
      <img
        className='arrows'
        src={arrows}
        alt='arrow-right'
        onClick={handleNextSlide}
      />
    </div>
  );
};

export default Categories;
