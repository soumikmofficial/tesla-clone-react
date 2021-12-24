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
      <CloseIcon className="close" onClick={() => dispatch(closeSidebar())} />
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
  transition: transform 1s ease;
  z-index: 100;
  background: white;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 4rem;
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
  }

  .close {
    font-size: 2.4rem;
    margin-left: auto;
    margin-bottom: 2rem;
    cursor: pointer;
  }
`;

export default Sidebar;
