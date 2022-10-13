import React from "react";
import Button from "../Button/Button";
import styled from "@emotion/styled";
import HeroServices from "./HeroServices";

let HeroMain = styled("div")`
  display: flex;
  justify-content: space-around;
  height: 600px;
  align-items: center;
  flex-wrap: wrap;

  & > * {
    flex: 1 1 50%;
  }

  & > .hero__left h1 {
    font-size: 4rem;
  }

  & > .hero__right {
    display: flex;
    justify-content: center;
  }

  & > .hero__right img {
    height: 500px;
    border-radius: 50%;
  }
`;

let Services = styled("div")`
  display: flex;
`;

const Hero = () => {
  return (
    <>
      <HeroMain>
        <div className="hero__left">
          <h1>Discover the Best Food Business in Pangasinan</h1>
          <Button label={`Discover more`} />
        </div>
        <div className="hero__right">
          <img src="https://via.placeholder.com/250" />
        </div>
      </HeroMain>
      <Services>
        <HeroServices />
      </Services>
    </>
  );
};

export default Hero;
