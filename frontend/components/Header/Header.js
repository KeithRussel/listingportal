import React from "react";
import styles from "../Header/Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <div className="header">
      <div className={styles.wrapper}>
        <a href="#">Website Logo Here</a>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href={`/`}>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href={`/towns`}>
                <a>Places</a>
              </Link>
            </li>
            <li>
              <Link href={`#`}>
                <a>Add Business</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
