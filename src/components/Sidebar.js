import React from "react";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
import { closeSidebar } from "../redux/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { sidebar } from "../products";

function Sidebar() {
  const dispatch = useDispatch();
  const { isSidebarOpen } = useSelector((state) => state.app);
  return (
    <Wrapper sidebar={isSidebarOpen}>
      <CloseIconContainer>
        <CloseIcon className="close" onClick={() => dispatch(closeSidebar())} />
      </CloseIconContainer>
      {sidebar.map((btn) => {
        return (
          <li>
            <a href="#">{btn}</a>
          </li>
        );
      })}
      <p>&copy; 2021 Tesla Clone by Soumik</p>
    </Wrapper>
  );
}

const Wrapper = styled.aside`
  ${(props) => {
    if (!props.sidebar) {
      return `
      transform: translateX(100%);
      `;
    }
  }}
  transition: transform .8s ease;
  z-index: 100;
  background: white;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 0 5rem;
  position: fixed;
  right: 0;
  top: 0;
  width: clamp(250px, 40vw, 300px);
  li {
    font-family: var(--sb-font);
    padding: 1.2rem 0;
    font-size: 1.6rem;
    font-weight: 600;
    text-transform: capitalize;
    line-height: 2rem;
    box-shadow: 0 1px 0 rgb(0, 0, 0, 0.2);
  }

  .close {
    font-size: 2.4rem;
    cursor: pointer;
  }

  p {
    margin: 5rem auto 0;
  }
`;

const CloseIconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 10vh;
`;

export default Sidebar;
