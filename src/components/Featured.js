import React from "react";
import "../styles/Featured.css";
import FeaturedData from "../data/FeaturedData";
function Featured() {
  return (
    <div className="featured-wrapper">
      <div className="featured-title-wrapper">
        <span className="featured-title-line"></span>
        <h1 className="featured-title">Featured</h1>
        <span className="featured-title-line"></span>
      </div>
      <div className="featured-grid-wrapper">
        {FeaturedData.map((item) => {
          return (
            <div
              className="featured-grid-box"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/${item.image})`,
              }}
            >
              {/* <img src={`${process.env.PUBLIC_URL}/images/${item.image}`} alt={item.name}/> */}
              <h2 className="featured-grid-title">{item.name}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Featured;
