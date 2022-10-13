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
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1rem;
  background-color: #112d4e;
  border-radius: 2rem;
  margin: 1rem 0;

  & > div {
    flex: 0 0 30%;
    text-align: center;
    color: #fff;
  }
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
        <HeroServices />
        <HeroServices />
      </Services>
    </>
  );
};

export default Hero;
