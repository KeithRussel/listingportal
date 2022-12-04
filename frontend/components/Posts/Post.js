import React from "react";
import styled from "@emotion/styled";
import { theme } from "../../utils/theme";
import Image from "next/image";

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

const { APP_URL } = process.env;

const Post = ({ post }) => {
  return (
    <PostCard>
      <div className="postcard__head">
        <h2>{post.Title}</h2>
        {post.Logo ? (
          <Image src={`${APP_URL}${post.Logo.url}`} width={500} height={500} />
        ) : (
          <img src="https://via.placeholder.com/250" />
        )}
      </div>
      <div className="postcard__body">
        {post.Content && <div className="content">{post.Content}</div>}
        {post.Address && <div className="address">Address: {post.Address}</div>}
        {post.Opening && <div className="opening">Opening: {post.Opening}</div>}
        {post.Closing && <div className="closing">Closing: {post.Closing}</div>}
        {post.Website && (
          <div className="website">
            Website:{" "}
            <a href={post.Website} target="_blank">
              {post.Website}
            </a>
          </div>
        )}
        {post.Email && <div className="website">Email: {post.Email}</div>}
      </div>
    </PostCard>
  );
};

export default Post;
