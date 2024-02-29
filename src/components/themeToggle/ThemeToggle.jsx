"use client";

import React, { useContext } from "react";
import styles from "./themeToggle.module.css";
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext);

  // console.log(theme);

  return (
    <div className={styles.container} onClick={toggle}>
      <Image src="/moon.png" width={14} height={14} />
      <div
        className={styles.circle}
        style={
          theme === "dark"
            ? { backgroundColor: "#0f172a" }
            : { right: "2.5px", backgroundColor: "white" }
        }
      ></div>
      <Image src="/sun.png" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
