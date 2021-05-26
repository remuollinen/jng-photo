import React from "react";
import { ImageData } from "../components/ImageData";

function Portfolio() {
  return (
    <div className="page">
      <h1 className="title">Portfolio</h1>
      <div className="grid-container">
        {ImageData.map((image, index) => {
          return (
            <img
              key={index + 1}
              src={image}
              alt=""
              className="grid-img"
              id={`img${index + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio;
