import React from "react";
import ListItem from "./ListItem";
import styled from "@emotion/styled";

const Wrapper = styled("div")`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (max-width: 450px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const LatestList = ({ posts }) => {
  console.log(posts);
  return (
    <>
      <h2>Latest Listing</h2>
      <Wrapper>
        {posts &&
          posts.map((post, index) => <ListItem post={post} key={index} />)}
      </Wrapper>
    </>
  );
};

export default LatestList;
