import React from "react";
import styled from "styled-components";
import Section from "./Section";
import carInfo from "../carInfo";

function Home() {
  return (
    <Container>
      {carInfo.map((car) => {
        const { id } = car;
        return (
          <Section
            key={id}
            {...car}
            leftBtn="custom order"
            rightBtn="existing inventory"
          />
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;
export default Home;
