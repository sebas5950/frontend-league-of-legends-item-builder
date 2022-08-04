import React from "react";
import { Link } from "react-router-dom";

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <header>
      <div>
        <Link to="/">Home</Link>
        <Link to="/champions">Champions</Link>
        <Link to="/itembuilds">Builds</Link>
      </div>
      <div>
        {user ? (
          <Link to="/" onClick={handleLogoutClick}>Logout</Link>
        ) : (
          <>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </>
        )}
        
      </div>
    </header>
  );
}

export default NavBar;

