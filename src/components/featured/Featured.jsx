import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <strong>Hey! Lucas here! </strong>Discover my stories and ideas!
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            maiores vero aliquam.
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
            tempore recusandae, sed in dicta, quidem fugit aliquam qui nostrum
            et consequatur, eum quibusdam ut? Nisi natus iste officia, iusto
            necessitatibus recusandae delectus ducimus amet quia quo modi rerum
            veritatis cupiditate illum eos vel hic, eum autem culpa voluptates
            totam ex?
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
