import React from "react";
import "./Maps.css";
const Map = ({ lat, lng, data }) => {
  // Replace YOUR_API_KEY with your own API key
  const apiKey = "285c32a7df9b40fb80affa888bf53d45";

  // Use the lat, lng, and zoom parameters to generate the URL for the Google Maps Embed API
  const src = `https://maps.geoapify.com/v1/staticmap?style=osm-carto&center=lonlat:${lng},${lat}&zoom=19&marker=lonlat:${lng},${lat};color:%23ff0000;size:medium&apiKey=${apiKey}`;

  return (
    <div className='maps-wrapper'>
      <h3 className='maps-title'>Var du kommer att vara</h3>
      <p className='maps-address'>{data.address.street}</p>
      <img
        className='my-map-image'
        height='400'
        src={src}
        alt='8531 East Marginal Way South, Tukwila, WA 98108, United States of America'></img>
    </div>
  );
};

export default Map;
