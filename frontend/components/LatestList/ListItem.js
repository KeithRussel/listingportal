import styled from "@emotion/styled";
import React from "react";
import Image from "next/image";

const Item = styled("div")`
  border: 1px solid gray;
  display: grid;
  justify-content: center;
  padding: 1rem;

  .postcard__head {
    h2 {
      text-align: center;
      margin: 0 0 1rem;
    }
  }
`;

const { BASE_URL } = process.env;

const LatestItem = ({ post }) => {
  return (
    <Item>
      <div className="postcard__head">
        <h2>{post.Title}</h2>
        {post.Logo ? (
          <Image src={`${BASE_URL}${post.Logo.url}`} width={500} height={500} />
        ) : (
          <img src="https://via.placeholder.com/250" />
        )}
      </div>
      <div className="postcard__body">
        {post.Address && <div className="address">Address: {post.Address}</div>}
        {post.Website && (
          <div className="website">
            Website:{" "}
            <a href={post.Website} target="_blank">
              {post.Website}
            </a>
          </div>
        )}
        {post.Email && <div className="email">Email: {post.Email}</div>}
      </div>
    </Item>
  );
};

export default LatestItem;
