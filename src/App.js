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
  const championsUrl = "http://127.0.0.1:3001/champions"
  // const usersUrl = "http://127.0.0.1:3000/users"
  const [championsData, setChampionsData] = useState([]);
  const [user, setUser] = useState(null);
  useEffect(() =>{
    fetch(championsUrl)
    .then(res => res.json())
    .then(data => setChampionsData(data))
  }, []);

  

  useEffect(() => {
    fetch("/user").then((r) => {
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
            <Switch>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          ) : (
            <Switch>
              <Route path="/signup">
                <SignUp setUser={setUser} />
              </Route>
              <Route path="/login">
                <Login setUser={setUser} />
              </Route>
              <Route path="/">
                <Home />
              </Route>
              <Route path="/champions">
                <Champions championsData = {championsData}/>
              </Route>
            </Switch>
          )}
        </main>
      </>
    );
  }

export default App;
