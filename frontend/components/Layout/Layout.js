import React from "react";
import Header from "../Header/Header";
import styled from "@emotion/styled";

let Container = styled("div")`
  max-width: 70%;
  margin: auto;
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
