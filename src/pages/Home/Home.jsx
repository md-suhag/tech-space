import React from "react";
import Category from "./categories/Category";
import Container from "@/components/shared/Container";

import NewArrival from "./NewArrival";
import FeaturedProducts from "./FeaturedProducts";

const Home = () => {
  return (
    <Container>
      <Category />
      <FeaturedProducts />
      <NewArrival />
    </Container>
  );
};

export default Home;
