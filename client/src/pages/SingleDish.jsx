/* eslint-disable react/prop-types */
// import React from "react";

import { NavLink, useParams } from "react-router-dom";
import data from "../data";
export default function SingleDish() {
    const {id}= useParams()
    console.log(id)
//   const { item, price } = mainData;
//   console.log(item);
const dish = data.find((item) => item.id === parseInt(id));
  return (
  <div>{dish.item}</div>
  )
}