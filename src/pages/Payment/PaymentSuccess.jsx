import Container from "@/components/shared/Container";
import { clearCart } from "@/redux/features/cart/CartSlice";
import React from "react";
import { useDispatch } from "react-redux";

const PaymentSuccess = () => {
  const dispatch = useDispatch();
  dispatch(clearCart());
  return (
    <Container>
      <h3 className="min-h-[80vh] flex justify-center items-center  ">
        Payment Successfull ✅. Thank you for purchase 😊
      </h3>
    </Container>
  );
};

export default PaymentSuccess;
