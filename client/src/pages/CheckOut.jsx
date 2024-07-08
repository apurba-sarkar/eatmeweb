// import React from "react";
import { Headings } from "../ui/Headings";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Box } from "../ui/Box";
// import PaymentComponent from "../Components/PaymentComponent";
import { TableBuilder, TableData, TableHead, TableRow } from "../ui/Table";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useMemo, useState } from "react";
import { addOrder } from "../reducers/orderSlice";

export default function CheckOut() {
  const all = useSelector((state) => state.order.allorder);

  console.log(all);
  // --------------------
  const dispatch = useDispatch();
  const couponList = useSelector((state) => state.coupon.allCoupons);
  const [cApplied, setCApplied] = useState(null);
  const [coupon, setCoupon] = useState("");

  const cartDishes = useSelector((state) => state.dish.allDishes);
  // console.log(cartDishes);
  const totalPrice = useMemo(
    () => cartDishes.reduce((total, dish) => total + dish.price, 0),
    [cartDishes]
  );
  const totalDish = useMemo(() => cartDishes.length, [cartDishes]);
  // console.log(totalPrice, totalDish);

  const checkCoupon = useCallback(() => {
    const couponExist = couponList.find((item) => item.cid === coupon);
    couponExist ? console.log("present") : console.log("not found");
    console.log(couponExist);
    setCApplied(couponExist?.discount || 0);
  }, [coupon, couponList]);

  const handleCheckCoupon = useCallback(() => {
    checkCoupon();
    // console.log(coupon);
    console.log(cApplied);
    // console.log(couponList);
  }, [checkCoupon, cApplied]);

  const now = new Date();
  const orderIdGen = useCallback(() => {
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const nows = hours * 10000 + minutes * 100 + seconds;
    return nows;
  }, []);

  const Gst = useMemo(() => Math.round(totalPrice * 0.18, 0), [totalPrice]);

  const finalprice = useMemo(
    () => totalPrice + Gst - cApplied,
    [cApplied, Gst, totalPrice]
  );

  const confirm = () => {
    const daya = {
      orderid: orderIdGen(),
      date: "10-10-12",
      itemc: totalDish,
      price: totalPrice,
    };

    // dispatch(addOrder(daya));
    console.log(all);
    console.log(daya);
  };

  const handleCC = useCallback(function handleC(e) {
    setCoupon(e.target.value);
  },[]);
  // const handleCC = useCallback((e) => setCoupon(e.target.value), []);
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
            onChange={handleCC}
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
