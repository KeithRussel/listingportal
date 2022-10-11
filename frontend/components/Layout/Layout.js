import React from "react";
import Header from "../Header/Header";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <div className={styles.container}>{children}</div>
      </main>
    </>
  );
};

export default Layout;
