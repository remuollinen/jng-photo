import React from "react";
import Slideshow from "../components/Slideshow";

function Home() {
  return (
    <div className="page">
      <Slideshow />
      <h1 className="title">Joel N'Gawé</h1>
      <p style={{ lineHeight: "2rem" }}>
        Hello, I'm Joel - a photographer based in Helsinki, Finland. Welcome to
        my website where you can view some of my photos and learn more about me.
        If you wish to work with me, feel free to contact me.
      </p>
    </div>
  );
}

export default Home;
