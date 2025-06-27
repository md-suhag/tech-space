import React from "react";
import Container from "@/components/shared/Container";

import { useParams } from "react-router-dom";

import ReviewList from "./ReviewList";
import ProductInfo from "./ProductInfo";
import { useGetSingleProductQuery } from "@/redux/features/product/productApi";

const ProductDetails = () => {
  const { id } = useParams();
  const {
    data: { product } = {},
    isLoading,
    error,
  } = useGetSingleProductQuery({ id });
  return (
    <Container>
      {/* Product Image + Info */}

      <ProductInfo id={id} product={product} isLoading={isLoading} />
      <ReviewList id={id} totalReview={product?.reviewCount} />
    </Container>
  );
};

export default ProductDetails;
