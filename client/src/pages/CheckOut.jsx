// import React from "react";
import { Headings } from "../ui/Headings";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Box } from "../ui/Box";
// import PaymentComponent from "../Components/PaymentComponent";
import { TableBuilder, TableData, TableHead, TableRow } from "../ui/Table";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addOrder } from "../reducers/orderSlice";

export default function CheckOut() {
  const all = useSelector((state) => state.order.allorder);
  console.log(all)
  // --------------------
  const dispatch = useDispatch();
  const couponList = useSelector((state) => state.coupon.allCoupons);
  const [cApplied, setCApplied] = useState(null);
  const [coupon, setCoupon] = useState("");

  const cartDishes = useSelector((state) => state.dish.allDishes);
  // console.log(cartDishes);
  const totalPrice = cartDishes.reduce((total, dish) => total + dish.price, 0);
  const totalDish = cartDishes.length;
  // console.log(totalPrice, totalDish);

  const handleCheckCoupon = () => {
    couponChecker();
    // console.log(coupon);
    console.log(cApplied);
    // console.log(couponList);
  };

  const couponChecker = () => {
    const couponExist = couponList.find((item) => item.cid === coupon);
    couponExist ? console.log("present") : console.log("not found");
    console.log(couponExist);
    setCApplied(couponExist?.discount);
  };

  const now = new Date();
  const orderIdGen = () => {
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const nows = hours * 10000 + minutes * 100 + seconds;
    return nows;
  };
  const Gst = Math.round(totalPrice * 0.18, 0);

  const finalprice = totalPrice + Gst - cApplied;

  const confirm = () => {
    const daya = {
      orderid: orderIdGen(),
      date: "10-10-12",
      itemc: totalDish,
      price: totalPrice,
    };

    // dispatch(addOrder(daya));
    console.log(all);
    console.log(daya)
  };
  return (
    <div className="checkout">
      <Headings type="h1" colorvar="primary">
        CHECKOUT
      </Headings>

      <Box color="none" type="support">
        <Headings type="h2">Apply coupon</Headings>
        <div className="checkout-coupon">
          <Input
            varient="input"
            placeholder="enter here"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
          />

          <Button varient="primary" onClick={handleCheckCoupon}>
            Apply
          </Button>
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
            <TableData> - {cApplied}</TableData>
          </TableRow>
          <TableRow col="three" style={{ fontWeight: "bold" }}>
            <TableData></TableData>
            <TableData>Final Rs</TableData>
            <TableData>{finalprice}</TableData>
          </TableRow>
        </TableBuilder>
        {/* <PaymentComponent /> */}
      </div>
      <Button varient="primary" size="m" onClick={confirm}>
        Confirm
      </Button>
      <Headings colorvar="danger">
        You have to pay rs <span>{finalprice} </span> on your delivery address
      </Headings>
    </div>
  );
}
