import React, { useEffect, useState } from "react";
import HealingPotions from "../data/HealingPotions";
import ManaPotions from "../data/ManaPotions";
import Products from "../data/Products";
function Category({ activeCategory }) {
  const [categoryData, setCategoryData] = useState(Products.filter((item)=> activeCategory.id === item.id))
    // useEffect(()=>{
    //     setCategoryData(Products.filter((item)=>item.id === activeCategory.id))
    // },[activeCategory])
  //   useEffect(() => {
  //     switch (activeCategory.id) {
  //       case "001":
  //         setCategoryData(HealingPotions)
  //         break;
  //       case "002":
  //         setCategoryData(ManaPotions)
  //         break;
  //       default:
  //         setCategoryData(HealingPotions)
  //     }
  //   }, [activeCategory]);
  return (
    <div className="category-wrapper">
      <div className="category-container">
        <h1 className="category-title">{activeCategory.name}</h1>
        <div className="category-items-grid-container">
          {categoryData[0].items.map((item) => {
            return (
              <div className="items-grid-box">
                <h2 className="items-grid-title">{item.name}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Category;
