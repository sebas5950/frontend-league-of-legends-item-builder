import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import SignUp from "./components/SignUp"
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Champions from "./components/Champions";
import Login from "./components/Login"
import Home from "./components/Home"

function App() {
  const [championsData, setChampionsData] = useState([]);
  const [user, setUser] = useState(null);
  useEffect(() =>{
    fetch('/champions')
    .then(res => res.json())
    .then(data => setChampionsData(data))
  }, []);

  

  useEffect(() => {
    fetch("/users").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

    return (
      <>
        <NavBar user={user} setUser={setUser} />
        <main>
          {user ? (
            <Routes>
              <Route path="/" element={<Home user={user} />}/>
            </Routes>
          ) : (
            <Routes>
              <Route path="/signup" element={<SignUp setUser={setUser} />} />
              <Route path="/login"element={<Login setUser={setUser} />} />
              <Route path="/" element={<Home />} />
              <Route path="/champions" element={<Champions championsData = {championsData}/>} />
            </Routes>
          )}
        </main>
      </>
    );
  }

export default App;
