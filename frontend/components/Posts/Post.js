import React from "react";
import styled from "@emotion/styled";
import { theme } from "../../utils/theme";

let PostCard = styled("div")`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  align-items: center;
  background-color: #eef2f9;
  padding: 0 1rem;
  margin-bottom: 1rem;
  border-left: 15px solid ${theme.colors.secondaryLight};
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

  & > .postcard__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > img {
      height: 120px;
      border-radius: 50%;
    }
  }

  & > .postcard__body {
    & > div {
      padding: 0.5rem 0;
    }
  }
`;

const Post = ({ post }) => {
  return (
    <PostCard>
      <div className="postcard__head">
        <h2>{post.Title}</h2>
        <img src="https://via.placeholder.com/250" />
      </div>
      <div className="postcard__body">
        <div className="content">{post.Content}</div>
        <div className="address">Address: {post.Address}</div>
        <div className="opening">Opening: {post.Opening}</div>
        <div className="closing">Closing: {post.Closing}</div>
      </div>
    </PostCard>
  );
};

export default Post;
