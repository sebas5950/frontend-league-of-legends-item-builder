import React from "react";
import video from "../images/video.mp4";

function Home({ user, championsData }) {
  if (user) {
    return (
      <section>
        <video autoPlay loop muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
          filter: "blur(4px)"
        }}>
      <source src={video} type="video/mp4"/>
        </video>
      <div className="logged-in-home">
      <h1 class="hero_title">LEAGUE OF LEGENDS ITEM BUILDER</h1>
        <h2 class="home_title2">Welcome Back, {user.username}!</h2>
      </div>
      </section>
    );
  } else {
    return (
      <section>
        <video autoPlay loop muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
          filter: "blur(4px)"
        }}>
      <source src={video} type="video/mp4"/>
        </video>
      <div className="signup-home">
      <h1 class="hero_title">LEAGUE OF LEGENDS ITEM BUILDER</h1>
        <h2 class="home_title">Please Login or Sign-up</h2>
      </div>
      </section>
    );
  }
}

export default Home;
