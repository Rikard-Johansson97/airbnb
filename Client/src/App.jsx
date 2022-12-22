import "./App.css";
import Header from "./Components/Header/header";
import Homes from "./Components/Homes/Homes";
import { getHomes } from "./api";
import { useState, useEffect } from "react";

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
    <div className='App'>
      <Header getHomes={getHomes} setHomes={setHomes} />
      <Homes homes={homes} />
    </div>
  );
}

export default App;
