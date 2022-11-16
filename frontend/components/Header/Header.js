import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { theme } from "../../utils/theme";
import { FaBars } from "react-icons/fa";

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
        a {
          color: #1a1a1a;
          font-weight: bold;

          :hover {
            color: ${theme.colors.primaryDark};
            transition: 0.3s;
          }
        }
      }
    }
  }

  @media (max-width: 450px) {
    display: none;
  }
`;

let MobileWrapper = styled("div")`
  display: none;

  @media (max-width: 450px) {
    width: 90%;
    display: flex;
    margin: auto;
    justify-content: space-between;
  }
`;

const Header = () => {
  return (
    <div className="header">
      <Wrapper>
        <Link href={`/`}>
          <a>Negosyo Directory</a>
        </Link>
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
      <MobileWrapper>
        <Link href={`/`}>
          <a>Negosyo Directory</a>
        </Link>
        <div>
          <FaBars />
        </div>
      </MobileWrapper>
    </div>
  );
};

export default Header;
