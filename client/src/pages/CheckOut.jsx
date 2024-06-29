import React from "react";
import { Headings } from "../ui/Headings";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Box } from "../ui/Box";
import PaymentComponent from "../Components/PaymentComponent";

export default function CheckOut() {
  return (
    <div className="checkout">
      <Headings type="h1" colorvar="primary">
        sda
      </Headings>
      <Headings>Delivery instuction</Headings>
      <Box color="none" type="support">
        <Headings type="h2">Coupon Apply</Headings>
        <Input varient="input" placeholder="enter here" />
        <Button varient="primary">Apply</Button>
      </Box>
      <PaymentComponent />
    </div>
  );
}
