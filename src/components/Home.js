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
      <img src='https://cdn.discordapp.com/attachments/981197460493979738/1005141787838529536/logo-1200-.png'  
    style={{   position: "absolute",
    
    left: "50%",
    top: "33%",
   width: "40%",
      
    transform: "translate(-50%, -50%)",
    zIndex: "-1",
    filter: "blur(0px)"}}/>
        <h2 class="home_title">Please Login or Sign-up</h2>
      </div>
      </section>
    );
  }
}

export default Home;
