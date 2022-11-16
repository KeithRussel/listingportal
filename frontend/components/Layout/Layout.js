import React from "react";
import Header from "../Header/Header";
import styled from "@emotion/styled";

let Container = styled("div")`
  max-width: 70%;
  margin: auto;

  @media (max-width: 450px) {
    max-width: 90%;
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <Container>{children}</Container>
      </main>
    </>
  );
};

export default Layout;
