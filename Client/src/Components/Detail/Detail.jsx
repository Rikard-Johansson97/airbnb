import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [data, setData] = useState(null);
  let { id } = useParams();

  console.log(id);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:3000/listings/${id}`);
      const data = await response.json();
      setData(data);
      console.log(data);
    }
    fetchData();
  }, []);
  return <div></div>;
};

export default Detail;
