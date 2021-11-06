import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
const Nav = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link
            style={pathname === "/" ? { color: "#fff891" } : { color: "white" }}
            to="/"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            style={
              pathname.startsWith("/work")
                ? { color: "#fff891" }
                : { color: "white" }
            }
            to="/work"
          >
            Our Work
          </Link>
        </li>
        <li>
          <Link
            style={
              pathname === "/contact"
                ? { color: "#fff891" }
                : { color: "white" }
            }
            to="/contact"
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </StyledNav>
  );
};
const StyledNav = styled.nav`
  position: relative;
  z-index: 3;
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 2rem;
    letter-spacing: 2px;
    font-family: "Lobster Two", cursive;
  }
  li {
    padding-left: 10rem;
    position: relative;
    &:hover {
      a {
        color: #fff891;
      }
    }
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 1rem;
    h1 {
      width: 100%;
      text-align: center;
    }
    #logo {
      display: inline-block;
      margin: 1rem auto;
    }
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
        flex: 1;
        text-align: center;
      }
    }
  }
`;
export default Nav;
