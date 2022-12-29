import React, { useState, useEffect } from "react";
import HomeCard from "../HomeCard/HomeCard";
import "./Homes.css";
import noResult from "../../Assets/noHomeFound.png";
import Categories from "../Categories/Categories";
import { useQuery } from "../../hooks/useQuery";

const Homes = ({ searchQuery }) => {
  const [query, setQuery] = useState("");
  const [data, loading] = useQuery(`/listings/${query}`);

  useEffect(() => {
    if (searchQuery) {
      console.log(searchQuery);
      setQuery(`?city=${searchQuery}`);
    }
  }, [searchQuery]);

  const handleCategoryChange = (category) => {
    setQuery(`categories/${category}`); // Update the query state when the category changes
  };

  if (loading)
    return (
      <div className='no-result'>
        <img src={noResult} className='no-result-img' alt='noHomeFound' />
      </div>
    );
  return (
    <>
      <Categories onCategoryChange={handleCategoryChange} />
      <div className='Homes-container'>
        {data.length > 0 ? (
          data.map((home) => <HomeCard key={home._id} home={home} />)
        ) : (
          <div className='no-result'>
            <img src={noResult} className='no-result-img' alt='noHomeFound' />
          </div>
        )}
      </div>
    </>
  );
};

export default Homes;
