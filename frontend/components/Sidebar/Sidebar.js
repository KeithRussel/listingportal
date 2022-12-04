import styled from "@emotion/styled";
import React from "react";
import FeaturedImage from "./FeaturedImage";

let SideBar = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

  h2 {
    width: 100%;
    text-align: center;
    background-color: #2f3334;
    margin: 0 0 1rem;
    padding: 1rem 0;
    color: #fff;
  }
`;

const Sidebar = () => {
  return (
    <SideBar>
      <h2>Featured Companies</h2>
      <FeaturedImage />
      <FeaturedImage />
      <FeaturedImage />
    </SideBar>
  );
};

export default Sidebar;
