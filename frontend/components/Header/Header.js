import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";

let Wrapper = styled("div")`
  display: flex;
  width: 70%;
  margin: auto;
  align-items: center;

  & > .nav {
    margin-left: auto;

    & > ul {
      display: flex;
      gap: 4rem;

      & > li {
        list-style: none;
      }
    }
  }
`;

const Header = () => {
  return (
    <div className="header">
      <Wrapper>
        <a href="#">Website Logo Here</a>
        <nav className="nav">
          <ul>
            <li>
              <Link href={`/`}>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href={`/towns`}>
                <a>Places</a>
              </Link>
            </li>
            <li>
              <Link href={`#`}>
                <a>Add Business</a>
              </Link>
            </li>
          </ul>
        </nav>
      </Wrapper>
    </div>
  );
};

export default Header;
