import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Signup from "./components/Signup"
import Footer from "./components/Footer";
import Header from "./components/Header";
import Champions from "./components/Champions";

function App() {
  const championsUrl = "http://127.0.0.1:3000/champions"
  const [championsData, setChampionsData] = useState([]);

  useEffect(() =>{
    fetch(championsUrl)
    .then(res => res.json())
    .then(data => setChampionsData(data))
  }, []);

  

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/champions" element={<Champions champion={championsData}/>} />
        <Route path="/" element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
