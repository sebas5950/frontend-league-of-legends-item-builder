import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Champions from "./components/Champions";
import Login from "./components/Login";
import Home from "./components/Home";
import ChampionPage from "./components/ChampionPage";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <>
      <div>
        <NavBar user={user} setUser={setUser} />
        <div className="content-wrapper">
          {user ? (
            <Routes>
              <Route path="/" element={<Home user={user} />} />
              <Route path="/champions" element={<Champions />} />
              <Route
                path="/:id/details"
                element={<ChampionPage user={user} />}
              />
            </Routes>
          ) : (
            <Routes>
              <Route path="/signup" element={<SignUp setUser={setUser} />} />
              <Route path="/login" element={<Login setUser={setUser} />} />
              <Route path="/" element={<Home />} />
              <Route path="/champions" element={<Champions />} />
            </Routes>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;