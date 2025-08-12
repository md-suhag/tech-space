import Container from "@/components/shared/Container";
import { clearCart } from "@/redux/features/cart/CartSlice";
import React from "react";
import { useDispatch } from "react-redux";
import successImg from "@/assets/success.svg";

const PaymentSuccess = () => {
  const dispatch = useDispatch();
  dispatch(clearCart());
  return (
    <Container>
      <div className="min-h-[80vh] flex flex-col gap-3 justify-center items-center  ">
        <div className="w-1/2 md:w-1/3 lg:w-1/5">
          <img src={successImg} alt="success" />
        </div>
        <h3 className="">Payment Successfull ✅. Thank you for purchase 😊</h3>
      </div>
    </Container>
  );
};

export default PaymentSuccess;
