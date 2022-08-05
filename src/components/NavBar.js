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
    <nav className='navbar'>
   
      <div>
      <img src="https://cdn.discordapp.com/attachments/981197460493979738/1004830201605267617/league_logo.png" className="logo" alt="logo"/>
      <Link to="/">HOME</Link>
      <Link to="/champions">CHAMPIONS</Link>
      </div>
      <div>
        {user ? (
           <Link to="/" onClick={handleLogoutClick}>LOGOUT</Link>
        ) : (
          <>
      <Link to="/signup">SIGN-UP</Link>
            <Link to="/login">LOGIN</Link>
          </>
        )}
        
      </div>
 
    </nav>
  );
}

export default NavBar;

