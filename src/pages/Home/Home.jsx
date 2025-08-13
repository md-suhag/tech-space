import React from "react";
import Category from "./categories/Category";
import Container from "@/components/shared/Container";

import NewArrival from "./NewArrival";

const Home = () => {
  return (
    <Container>
      <Category />
      <NewArrival />
    </Container>
  );
};

export default Home;
