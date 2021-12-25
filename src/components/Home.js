import React from "react";
import styled from "styled-components";
import Section from "./Section";
import products from "../products";

function Home() {
  console.log(products);
  return (
    <Container>
      {products.map((product) => {
        console.log(product.title);
        return <Section key={product.id} props={product}></Section>;
      })}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;
export default Home;
