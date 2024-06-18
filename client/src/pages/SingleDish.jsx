/* eslint-disable react/prop-types */
// import React from "react";

import { useParams } from "react-router-dom";
import data from "../data";
export default function SingleDish() {
  const { id } = useParams();
  console.log(id);
  const dish = data.find((item) => item.id === parseInt(id));
  return (
    
    <div>
      <div>{dish.item}</div>
      <div>{dish.id}</div>
      {/* <div>{dish.item}</div> */}
    </div>
  );
}
