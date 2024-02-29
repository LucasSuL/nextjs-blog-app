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
      <div
        key={cat}
        className={styles.category}
        style={{ backgroundColor: catColors[index] }}
      >
        <Image
          className={styles.img}
          src={`/${cat}.png`}
          width={32}
          height={32}
        ></Image>
        <p className={styles.text}>{cat}</p>
      </div>
    );
  });
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Popular Categories</h2>
      <div className={styles.categories}>{categories}</div>
    </div>
  );
};

export default CategoryList;
