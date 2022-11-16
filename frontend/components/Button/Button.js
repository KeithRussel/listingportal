import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";

let PrimaryBtn = styled("a")`
  border-radius: 10px;
  color: var(--primary-light);
  cursor: pointer;
  padding: 1rem;

  @media (max-width: 450px) {
    width: 150px;
    margin: auto;
    text-align: center;
  }
`;

const Button = ({ label, color, btnLink }) => {
  return (
    <Link href={btnLink}>
      <PrimaryBtn style={{ backgroundColor: color }}>{label}</PrimaryBtn>
    </Link>
  );
};

Button.defaultProps = {
  label: "Discover More",
  color: "var(--primary-dark)",
  btnLink: "/towns",
};

export default Button;
