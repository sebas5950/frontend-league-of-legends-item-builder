import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Champions from "./components/Champions";
import Login from "./components/Login";
import Home from "./components/Home";
import ChampionPage from "./components/ChampionPage"
import UserBuilds from "./components/UserBuilds";

function App() {

  const [championsData, setChampionsData] = useState([]);
  const [user, setUser] = useState(null);
  const [filterChamp, setFilterChamp ] = useState([])
  const [items, setItemsData ] = useState([])
  const [builds, setBuilds] = useState([])

  useEffect(() => {
    fetch("/champions")
      .then((res) => res.json())
      .then((data) => setChampionsData(data));
  }, []);

  useEffect(() => {
    fetch(`/items`)
      .then((res) => res.json())
      .then((data) => setItemsData(data));
  }, []);


  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/builds")
      .then((res) => res.json())
      .then((data) => setBuilds(data));
  }, []);

   function grabSearch(value){
    setFilterChamp(value)
   }
  const newChamp = championsData.filter((champ) => {
    return (champ.name.includes(filterChamp))
  })


  return (
    <>
      <div>
        <NavBar user={user} setUser={setUser} />
        <div className="content-wrapper">
          
          {user ? (
            <Routes>
              <Route 
              path="/" 
              element={<Home user={user} 
              />} />
              <Route
              path="/champions"
              element={<Champions championsData={championsData} 
              />} />
              <Route 
              path="/:id/details"
              element={<ChampionPage />}
              />
              <Route
              path="/builds" 
              element={<UserBuilds items={items} champ={championsData} user={setUser} builds = {builds}/>}
              /> 
            </Routes>
          ) : (
            <Routes>
              <Route 
              path="/signup" 
              element={<SignUp setUser={setUser} 
              />} />
              <Route 
              path="/login" 
              element={<Login setUser={setUser} 
              />} />
              <Route 
              path="/" 
              element={<Home
              />} />
               <Route
              path="/champions"
              element={<Champions championsData={championsData} 
              />} />
            </Routes>
          )}
          
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
