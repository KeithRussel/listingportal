import React from "react";
import styles from "../Header/Header.module.css";

const Header = () => {
  return (
    <div className="header">
      <div className={styles.wrapper}>
        <a href="#">Website Logo Here</a>
        <nav className={styles.nav}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Places</a>
            </li>
            <li>
              <a href="#">Add Business</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
