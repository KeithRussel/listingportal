import React from "react";
import style from "./Button.module.css";
import Link from "next/link";

const Button = ({ label, color }) => {
  return (
    <Link href={`/towns`}>
      <a style={{ backgroundColor: color }} className={style.primaryBtn}>
        {label}
      </a>
    </Link>
  );
};

Button.defaultProps = {
  label: "Discover More",
  color: "var(--primary-dark)",
};

export default Button;
