import React from "react";
import styles from "../Header/Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="wrapper">
        <a href="#">Website Logo Here</a>
        <nav>
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
