import React from "react";
import styled from "styled-components";

function Nav() {
  return (
    <Wrapper>
      <Logo>
        <img src="images/logo.svg" alt="tesla logo" />
      </Logo>
      <LeftButtons>
        <a href="#">model 3</a>
        <a href="#">model x</a>
        <a href="#">model s</a>
        <a href="#">model y</a>
        <a href="#">solar roof</a>
        <a href="#">solar panel</a>
      </LeftButtons>
      <RightButtons>
        <a href="" className="hide">
          Shop
        </a>
        <a href="" className="hide">
          Account
        </a>
        <a href="">Menu</a>
      </RightButtons>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  align-items: center;
  background: none;
  display: flex;
  height: 10vh;
  justify-content: space-between;
  padding: 0 5rem;
  position: fixed;
  width: 100vw;
  z-index: 10;
`;
const Logo = styled.div`
  cursor: pointer;
  img {
    width: 8rem;
  }
`;

const LeftButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  a {
    font-weight: 600;
    text-transform: capitalize;
    font-size: 1.6rem;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const RightButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  a {
    font-weight: 600;
    text-transform: capitalize;
    font-size: 1.4rem;
    padding: 0.3rem 0.5rem;
    border-radius: 0.5rem;
    background: var(--bg-secondary);
  }
  .hide {
    background: none;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;
export default Nav;
