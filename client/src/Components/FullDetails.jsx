/* eslint-disable react/prop-types */
import React from "react";
import { Headings } from "../ui/Headings";
import { Button } from "../ui/Button";

export default function FullDetails({ dish }) {
  const time = Math.floor(Math.random() * 100);
  console.log(dish);
  console.log(time);
  return (
    <>
      {!dish.id ? (
        ""
      ) : (
        <>
          <div className="fd">
            <Headings type="h1" colorvar="primary">
              {dish.item}
            </Headings>
            <img src="./biriyani.jpg" />
            <div className="fd-data">
              <Headings>
                <label>Item No:</label>
                <div>{dish.id}</div>
              </Headings>
              <Headings>
                <label>Item Name:</label>
                <div>{dish.item}</div>
              </Headings>
              <Headings>
                <label>Item Price:</label>
                <div> Rs {dish.price}</div>
              </Headings>
              <Headings>
                <label>Average Preparing Time: </label>
                <div>{time} min</div>
              </Headings>
              <Headings>
                <label>Ingredients:</label>
                <div>Formula x</div>
              </Headings>
            </div>
            <Button varient="primary">Add To Cart</Button>
          </div>
        </>
      )}
    </>
  );
}
