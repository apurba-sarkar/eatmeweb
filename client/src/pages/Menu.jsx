// import React from "react";

import data from "../data";
// import SingleDish from "./SingleDish";
import { NavLink } from "react-router-dom";
// import SingleDish from "./SingleDish";
export default function Menu() {
  console.log(data);
  console.log(data[0].id);

  return (
    <div>
      {/* <div>Menu</div> */}
      <div className="menu-container">
        <div>filter</div>
        <div className="menu-list">
          {data.map((e) => (
            <NavLink to={`/single/${e.id}`} key={e.id}>
              {e.item}
            </NavLink>
          ))}
        </div>
        <div>sdsad</div>
        {/* <SingleDish/> */}
      </div>
    </div>
  );
}
