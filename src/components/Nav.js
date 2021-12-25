import React from "react";
import styled from "styled-components";
import { openSidebar } from "../redux/appSlice";
import { useDispatch } from "react-redux";
import { products } from "../products";

function Nav() {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Logo>
        <a href="https://tesla-clone-21.netlify.app/">
          <img src="images/logo.svg" alt="tesla logo" />
        </a>
      </Logo>
      <LeftButtons>
        {products.map((product) => {
          return <a href={`#${product.ref}`}>{product.name}</a>;
        })}
      </LeftButtons>
      <RightButtons>
        <a href="#" className="hide">
          Shop
        </a>
        <a href="#" className="hide">
          Account
        </a>
        <button href="#" onClick={() => dispatch(openSidebar())}>
          Menu
        </button>
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
  a {
    font-weight: 600;
    text-transform: capitalize;
    font-size: 1.6rem;
    padding: 0.5rem 2rem;
    border-radius: 0.5rem;
    transition: all 0.5s ease;
  }
  a:hover {
    background: var(--bg-secondary);
  }
  @media (max-width: 1200px) {
    display: none;
  }
`;
const RightButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  a,
  button {
    font-weight: 600;
    text-transform: capitalize;
    font-size: 1.4rem;
    padding: 0.3rem 0.5rem;
    border-radius: 0.5rem;
    background: var(--bg-secondary);
    border: none;
    cursor: pointer;
  }
  .hide {
    background: none;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;
export default Nav;
