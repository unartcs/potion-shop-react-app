import React, { useState } from "react";
import CategoryList from "../data/CategoryList";
import "../styles/Categories.css";
import Category from "./Category";
function Categories() {
  const [activeCategory, setActiveCategory] = useState();
  const gridBoxHandler = (cat) => {
    setActiveCategory(cat);
  };
  return (
    <div className="categories-wrapper">
      {activeCategory ? (
        <Category activeCategory={activeCategory}/>
      ) : (
        <div className="categories-grid-container">
          {CategoryList.map((item) => {
            return (
              <div
                className="categories-grid-box"
                onClick={() => gridBoxHandler(item)}
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}/images/${item.image})`,
                }}
              >
                <h2 className="categories-grid-title">{item.name}</h2>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Categories;
