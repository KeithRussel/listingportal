import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";

let PrimaryBtn = styled("a")`
  border-radius: 10px;
  color: var(--primary-light);
  cursor: pointer;
  padding: 1rem;
`;

const Button = ({ label, color }) => {
  return (
    <Link href={`/towns`}>
      <PrimaryBtn style={{ backgroundColor: color }}>{label}</PrimaryBtn>
    </Link>
  );
};

Button.defaultProps = {
  label: "Discover More",
  color: "var(--primary-dark)",
};

export default Button;
