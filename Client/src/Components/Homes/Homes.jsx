import React from "react";
import HomeCard from "../HomeCard/HomeCard";
import "./Homes.css";
const Homes = () => {
  return (
    <div className="Homes-container">
      {/* Här kommer en loop gå som skriver ut varje kort för det vi valt ifrån databasen */}
      <HomeCard />
      <HomeCard />
      <HomeCard />
      <HomeCard />
      <HomeCard />
      <HomeCard />
      <HomeCard />
      <HomeCard />
      <HomeCard />
      <HomeCard />
    </div>
  );
};

export default Homes;
