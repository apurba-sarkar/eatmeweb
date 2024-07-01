import React from "react";
import { Headings } from "../ui/Headings";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Box } from "../ui/Box";
import PaymentComponent from "../Components/PaymentComponent";
import { TableBuilder, TableData, TableHead, TableRow } from "../ui/Table";
import { useSelector } from "react-redux";

export default function CheckOut() {
  const cartDishes = useSelector((state) => state.dish.allDishes);
  console.log(cartDishes);
  const totalPrice = cartDishes.reduce((total, dish) => total + dish.price, 0);
  const totalDish = cartDishes.length;
  console.log(totalPrice, totalDish);
  const orderIdGen = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const nows = hours * 10000 + minutes * 100 + seconds;
    return nows;
  };

  const Gst =Math.round( totalPrice * 0.18,0) ;
  const coupon = 99
  const finalprice= totalPrice+ Gst - coupon
    return (
    <div className="checkout">
      <Headings type="h1" colorvar="primary">
        CHECKOUT
      </Headings>

      <Box color="none" type="support">
        <Headings type="h2">Apply coupon</Headings>
        <div className="checkout-coupon">
          <Input varient="input" placeholder="enter here" />

          <Button varient="primary">Apply</Button>
        </div>
      </Box>
      <div className="checkout-table">
        <TableBuilder size="special">
          <TableHead col="three">
            <TableData>Order Id</TableData>
            <TableData>Total Item</TableData>
            <TableData>Price</TableData>
          </TableHead>
          <TableRow col="three">
            <TableData>{orderIdGen()}</TableData>
            <TableData>{totalDish}</TableData>
            <TableData>{totalPrice}</TableData>
          </TableRow>
          <TableRow col="three">
            <TableData></TableData>
            <TableData>18% GST</TableData>
            <TableData>{Gst}</TableData>
          </TableRow>
          <TableRow col="three">
            <TableData></TableData>
            <TableData>Coupon Applied</TableData>
            <TableData>{coupon}</TableData>
          </TableRow>
          <TableRow col="three" style={{ fontWeight: "bold" }}>
            <TableData></TableData>
            <TableData>Final Rs</TableData>
            <TableData>
            {finalprice}
            </TableData>
          </TableRow>
        </TableBuilder>
        {/* <PaymentComponent /> */}
      </div>
      <Button varient="primary" size="m">
        Confirm
      </Button>
      <Headings colorvar="danger">
        You have to pay rs <span>{finalprice} </span> on your delivery address
      </Headings>
    </div>
  );
}
