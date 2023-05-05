import React from "react";
import '../styles/Trending.css'

function Trending() {
  return (
    <div className="trending-wrapper">
      <div className="trending-title-wrapper">
        <h1 className="trending-title">Trending</h1>
        <span className="trending-title-line"></span>
      </div>
      <div className="trending-grid-wrapper">
        {/* grid-box here from a JSON file */}
      </div>
    </div>
  );
}

export default Trending;
