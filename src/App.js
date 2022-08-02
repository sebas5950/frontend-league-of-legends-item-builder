import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Signup from "./components/Signup"
import Footer from "./components/Footer";
import Header from "./components/Header";
import Champions from "./components/Champions";
import Login from "./components/Login"


function App() {
  const championsUrl = "http://127.0.0.1:3001/champions"
  // const usersUrl = "http://127.0.0.1:3000/users"
  const [championsData, setChampionsData] = useState([]);
  const [currentUser, setCurrentUser] = useState(false)

  useEffect(() =>{
    fetch(championsUrl)
    .then(res => res.json())
    .then(data => setChampionsData(data))
  }, []);

  

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/champions" element={<Champions champion={championsData}/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
