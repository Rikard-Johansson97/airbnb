import React, { useState, useEffect } from "react";
import HomeCard from "../HomeCard/HomeCard";
import "./Homes.css";
import noResult from "../../Assets/noHomeFound.png";

const Homes = ({ homes }) => {
  return (
    <div className='Homes-container'>
      {homes.length > 0 ? (
        homes.map((home) => <HomeCard key={home._id} home={home} />)
      ) : (
        <div className='no-result'>
          <img src={noResult} className='no-result-img' alt='noHomeFound' />
        </div>
      )}
    </div>
  );
};

export default Homes;
