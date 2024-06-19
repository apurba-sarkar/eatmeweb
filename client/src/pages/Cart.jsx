import React from "react";
import { Headings } from "../ui/Headings";
import Shipping from "../Components/Shipping";
import OrderSummary from "../Components/OrderSummary";

export default function Cart() {
  return (
    <div className="cart">
      <div className="cart-head">
        <Headings type="h1" colorvar="primary">
          CART DETAILS
        </Headings>
      </div>
      <div className="cart-body">
        <Shipping />
        <OrderSummary />
      </div>
    </div>
  );
}
