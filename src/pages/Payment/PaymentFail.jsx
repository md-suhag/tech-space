import Container from "@/components/shared/Container";
import React from "react";

const PaymentFail = () => {
  return (
    <Container>
      <h3 className="min-h-[80vh] flex justify-center items-center  ">
        Payment Failed ❌. Please try again later.
      </h3>
    </Container>
  );
};

export default PaymentFail;
