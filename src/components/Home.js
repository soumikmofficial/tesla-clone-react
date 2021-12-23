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
      <Section
        title="Lowest Cost Solar Panels in America"
        image="solar-panel.jpg"
        description="Money-back gurantee"
        leftBtn="Order Now"
        rightBtn="Learn More"
      />
      <Section
        title="Solar for New Roofs"
        image="solar-roof.jpg"
        description="Solar Roof Cost Less Than a New Roof"
        leftBtn="Order Now"
        rightBtn="Learn More"
      />
      <Section title="Accessories" image="accessories.jpg" leftBtn="Shop Now" />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;
export default Home;
