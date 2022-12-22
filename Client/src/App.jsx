import "./App.css";
import Header from "./Components/Header/header";
import Homes from "./Components/Homes/Homes";

import { getHomes } from "./api";
import { useState, useEffect } from "react";
import Detail from "./Components/Detail/Detail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [homes, setHomes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getHomes();
      setHomes(data);
    }
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <Header getHomes={getHomes} setHomes={setHomes}/>
      <Routes>
        <Route path="/" element={<Homes homes={homes}/>} />
        <Route path="/listings/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
