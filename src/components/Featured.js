import React from "react";
import '../styles/Featured.css'

function Featured() {
  return (
    <div className="featured-wrapper">
      <div className="featured-title-wrapper">
      <span className="featured-title-line"></span>
        <h1 className="featured-title">Featured</h1>
        <span className="featured-title-line"></span>
      </div>
      <div className="featured-grid-wrapper">
        {/* grid-box here from a JSON file */}
      </div>
    </div>
  );
}

export default Featured;
