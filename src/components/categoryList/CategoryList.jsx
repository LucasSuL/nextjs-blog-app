import React from "react";
import styles from "./categoryList.module.css";
import Image from "next/image";

const CategoryList = () => {
  const catNames = ["style", "fashion", "food", "travel", "culture", "coding"];
  const catColors = [
    "#57c4ff31",
    "#da85c731",
    "#7fb88133",
    "#ff795736",
    "#ffb04f45",
    "#5e4fff31",
  ];
  const categories = catNames.map((cat, index) => {
    return (
      <div className="col">
        <div
          key={cat}
          className="d-flex align-items-center justify-content-center gap-2 rounded p-3 mt-4 text-capitalize"
          style={{ backgroundColor: catColors[index] }}
        >
          <Image
            className="rounded-5"
            src={`/${cat}.png`}
            width={32}
            height={32}
          ></Image>
          <p className="m-0">{cat}</p>
        </div>
      </div>
    );
  });
  return (
    <div className="container border">
      <h2 className="mt-5">Popular Categories</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-6">
        {categories}
      </div>
    </div>
  );
};

export default CategoryList;
