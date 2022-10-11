import React from "react";
import Button from "../Button/Button";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.hero__left}>
          <h1>Discover the Best Food Business in Pangasinan</h1>
          <Button label={`Discover more`} />
        </div>
        <div className={styles.hero__right}>
          <img src="https://via.placeholder.com/250" />
        </div>
      </div>
    </>
  );
};

export default Hero;
