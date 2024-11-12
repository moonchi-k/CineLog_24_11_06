import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const Container = styled.header`
  width: 100%;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.04);
  /* filter: drop-shadow(30px 10px 4px #000000); */
  padding: 20px 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 500;
  @media screen and (max-width: 700px) {
    padding: 20px;
  }
`;

const Logo = styled.h3`
  font-size: 35px;
  font-weight: 700;
  font-family: "Permanent Marker", serif;
  a {
    color: #323232;
  }
`;

const Menu = styled.ul`
  display: flex;
  li {
    margin-left: 110px;
    @media screen and (max-width: 650px) {
      margin-left: 50px;
    }
    a {
      color: #fff;
    }
  }
`;
const Header = () => {
  const headerRef = useRef();
  const scrollHandler = () => {
    const pageY = window.scrollY;
    const current = headerRef.current;

    if (pageY >= 400) {
      current.style.position = "fixed";
      current.style.backgroundColor = "rgba(255,255,255,0.1)";
      current.style.backdropFilter = "blur(10px)";
    } else {
      current.style.position = "absolute";
    }
  };
  useEffect(() => {
    return window.addEventListener("scroll", scrollHandler);
  });
  return (
    <Container ref={headerRef}>
      <Logo>
        <Link to={"/"}>CineLog</Link>
      </Logo>
      {/* <Search></Search> */}
      <Menu>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/search"}>Search</Link>
        </li>
      </Menu>
    </Container>
  );
};

export default Header;
