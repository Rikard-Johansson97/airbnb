import "./App.css";
import Header from "./Components/Header/header";
import Homes from "./Components/Homes/Homes";
import Detail from "./Components/Detail/Detail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <BrowserRouter>
      <Header onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<Homes searchQuery={searchQuery} />} />
        <Route path="/listings/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
