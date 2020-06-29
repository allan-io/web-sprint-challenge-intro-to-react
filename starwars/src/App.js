import React, { useState, useEffect } from 'react';
import HeaderSection from "./components/HeaderContainer/HeaderSection"
import CardsPage from "./components/CardsPageContainer/CardsPage"
import axios from "axios"
import './App.css';
import PaginationSection from './components/PaginationContainer/PaginationSection';

const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character").then((res) => {
      setData(res.data.results)
    })
  }, [])

  return (
    <div className="App">
      <HeaderSection/>
      <CardsPage data={data}/>
      <PaginationSection/>
    </div>
  );
}

export default App;
