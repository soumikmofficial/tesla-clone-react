import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section({ props }) {
  const { image, title, description, btn1, btn2, ref } = props;
  return (
    <Wrapper bgImg={image} id={ref}>
      <Fade clear big>
        <ItemText>
          <h2>{title}</h2>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade clear big>
          <ButtonGroup>
            <LeftButton>{btn1}</LeftButton>
            {btn2 && <RightButton>{btn2}</RightButton>}
          </ButtonGroup>
        </Fade>
        <DownArrow src="images/down-arrow.svg"></DownArrow>
      </Buttons>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: ${(props) => `url("images/${props.bgImg}")`} no-repeat center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  padding: 0 0.5rem;
  width: 100vw;
`;

const ItemText = styled.section`
  padding-top: 13rem;
  text-align: center;
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
  gap: 2rem;
  width: 100vw;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const LeftButton = styled.button`
  background: var(--bg-button);
  border-radius: 2rem;
  border: none;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  opacity: 0.8;
  padding: 1.5rem 0rem;
  text-transform: uppercase;
  width: clamp(80px, 80%, 500px);
  cursor: pointer;

  @media (min-width: 768px) {
    width: clamp(150px, 80%, 250px);
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
