import React from "react";
import "../styles/Trending.css";
import TrendingData from "../data/TrendingData";

function Trending() {
  return (
    <div className="trending-wrapper">
      <div className="trending-title-wrapper">
        <h1 className="trending-title">Trending</h1>
        <span className="trending-title-line"></span>
      </div>
      <div className="trending-grid-wrapper">
        {TrendingData.map((item) => {
          return (
            <div className="trending-grid-box">
              <h2 className="trending-grid-title">{item.name}</h2>
              <p className="trending-grid-button">View more</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Trending;
