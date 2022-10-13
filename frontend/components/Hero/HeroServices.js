import React from "react";
import styled from "@emotion/styled";

let Card = styled("div")`
  & > img {
    border-radius: 50%;
  }
`;

const HeroServices = ({ image, text, subtext }) => {
  return (
    <>
      <Card>
        <img src={image} />
        <h3>{text}</h3>
        <p>{subtext}</p>
      </Card>
    </>
  );
};

HeroServices.defaultProps = {
  image: "https://via.placeholder.com/250",
  text: "sample title",
  subtext: "Lorem Ipsum dolor imet",
};

export default HeroServices;
