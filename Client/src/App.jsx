import "./App.css";
import Header from "./Components/Header/header";
import Homes from "./Components/Homes/Homes";
import Detail from "./Components/Detail/Detail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homes />} />
        <Route path="/listings/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
