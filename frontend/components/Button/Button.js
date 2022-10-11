import React from "react";
import style from "./Button.module.css";

const Button = ({ label, color }) => {
  return (
    <button
      type="button"
      style={{ backgroundColor: color }}
      className={style.primaryBtn}
    >
      {label}
    </button>
  );
};

Button.defaultProps = {
  label: "Discover More",
  color: "var(--primary-dark)",
};

export default Button;
