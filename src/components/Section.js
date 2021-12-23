import React from "react";
import styled from "styled-components";

function Section({ title, image, description, leftBtn, rightBtn }) {
  return (
    <Wrapper bgImg={image}>
      <ItemText>
        <h2>{title}</h2>
        <p>{description}</p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>{leftBtn}</LeftButton>
          {rightBtn && <RightButton>{rightBtn}</RightButton>}
        </ButtonGroup>
        <DownArrow src="images/down-arrow.svg"></DownArrow>
      </Buttons>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${(props) => `url("images/${props.bgImg}")`} no-repeat center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ItemText = styled.section`
  text-align: center;
  padding-top: 13rem;
  h2 {
    font-size: 4.5rem;
    padding-bottom: 0.8rem;
  }
  p {
    font-size: 1.7rem;
  }
`;
const Buttons = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ButtonGroup = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  width: 100%;
`;

const LeftButton = styled.button`
  background: var(--bg-button);
  border-radius: 1.5rem;
  border: none;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  opacity: 0.8;
  padding: 1.2rem 0rem;
  text-transform: uppercase;
  width: clamp(80px, 80%, 500px);

  @media (min-width: 768px) {
    width: clamp(150px, 80%, 300px);
  }
`;
const RightButton = styled(LeftButton)`
  background: white;
  color: var(--text-color);
`;

const DownArrow = styled.img`
  margin: 2rem 0 3rem;
  width: 3.5rem;
  animation: bounce infinite 1.5s;
  opacity: 0.5;
`;

export default Section;
