import React, { useState, useEffect } from "react";
import "./Detail.css";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [data, setData] = useState({});
  let { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:3000/listings/${id}`);
      const data = await response.json();
      function addCommas(num) {
        if (num % 100 === 0) {
          var numString = String(num / 100);
          if (numString.length === 1) {
            numString = numString + "0";
          }
          return numString;
        } else {
          var numString = String(num);
          var digits = numString.split("");
          digits = digits.reverse();
          digits[0] = "," + digits[0];
          return digits.reverse().join("");
        }
      }
      let dataObj = {
        img: data.images.picture_url,
        name: data.name,
        rating:
          data.review_scores !== undefined
            ? `${data.review_scores.review_scores_value}.0`
            : ``,
      };
      setData(dataObj);
      console.log(response.data);
    }
    fetchData();
  }, []);
  return (
    <div className='detail-container'>
      <div>
        <img className='detail-img' src={data.img} alt='pic' />
      </div>
      {data.name}
      <br />
      {data.rating}
      <br />
      {data.reviews}
    </div>
  );
};

export default Detail;
