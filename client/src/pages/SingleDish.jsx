/* eslint-disable react/prop-types */
// import React from "react";
import { NavLink, useParams } from "react-router-dom";
export default function SingleDish({ mainData }) {
    const {id}= useParams()
    console.log(id)
//   const { item, price } = mainData;
//   console.log(item);
  return <NavLink to={`/single/${mainData.id}`} key={mainData.id}>{mainData.item}</NavLink>;
}