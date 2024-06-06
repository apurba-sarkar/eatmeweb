// import React from "react";

import Filters from "../Components/Filters";
import data from "../data";
// import SingleDish from "./SingleDish";
import { NavLink } from "react-router-dom";
import { TableBuilder } from "../ui/Table";
// import SingleDish from "./SingleDish";
export default function Menu() {
  console.log(data);
  console.log(data[0].id);

  return (
    <div>
      {/* <div>Menu</div> */}
      <div className="menu-container">
        <Filters />
        <div className="menu-list">
          <TableBuilder>
            {data.map((e) => (
              <NavLink to={`/single/${e.id}`} key={e.id}>
                {e.item}
              </NavLink>
            ))}
          </TableBuilder>
        </div>
        <div>sdsad</div>
        {/* <SingleDish/> */}
      </div>
    </div>
  );
}
