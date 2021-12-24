import React from "react";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
import { closeSidebar } from "../redux/appSlice";
import { useDispatch, useSelector } from "react-redux";

function Sidebar() {
  const dispatch = useDispatch();
  const { isSidebarOpen } = useSelector((state) => state.app);
  return (
    <Wrapper sidebar={isSidebarOpen}>
      <CloseIconContainer>
        <CloseIcon className="close" onClick={() => dispatch(closeSidebar())} />
      </CloseIconContainer>
      <li>
        <a href="#">existing inventory</a>
      </li>
      <li>
        <a href="#">used inventory</a>
      </li>
      <li>
        <a href="#">trade-in</a>
      </li>
      <li>
        <a href="#">test drive</a>
      </li>
      <li>
        <a href="#">cybertruck</a>
      </li>
      <li>
        <a href="#">roadster</a>
      </li>
      <li>
        <a href="#">semi</a>
      </li>
      <li>
        <a href="#">charging</a>
      </li>
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
`;

const CloseIconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 10vh;
`;

export default Sidebar;
