// import React from "react";

import data from "../data";
// import SingleDish from "./SingleDish";
import { NavLink} from "react-router-dom";
export default function Menu() {
  console.log(data)
  console.log(data[0].id);
  
  return (
    <div>
      <div>Menu</div>
      <div>
        {data.map((e) => (
          <NavLink to={`/single/${e.id}`} key={e.id}>
            {e.item}
          </NavLink>
        ))}
      </div>
    </div>
  );
}