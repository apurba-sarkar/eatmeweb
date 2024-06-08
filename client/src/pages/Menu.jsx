// import React from "react";

import Filters from "../Components/Filters";
import data from "../data";
// import SingleDish from "./SingleDish";
import { NavLink, useNavigate } from "react-router-dom";
import { TableBuilder, TableData, TableHead, TableRow } from "../ui/Table";
import { Button } from "../ui/Button";
import { useState } from "react";
// import SingleDish from "./SingleDish";
export default function Menu() {
  const navigate = useNavigate();
  console.log(data);
  // console.log(data[0].id);

  const [dish, setDish] = useState("");
  // console.log(data[0].item);


  return (
    <div>
      {/* <div>Menu</div> */}
      <div className="menu-container">
        <Filters />
        <div className="menu-list">
          <TableBuilder>
            <TableHead>
              <TableData>Sl</TableData>
              <TableData>Item List</TableData>
              {/* <TableData>Ad</TableData> */}
            </TableHead>
            {data.map((e) => (
              // <NavLink to={`/single/${e.id}`} key={e.id}>
              <TableRow
                key={e.id}
                style={{ fontSize: "2rem", fontWeight: "bold" }}
              >
                <TableData>{e.id} </TableData>
                <TableData style={{ justifySelf: "left" }}>{e.item} </TableData>
                <TableData>
                  <Button
                    onClick={() =>
                      // navigate(`/single/${e.id}`)
                      setDish(e)
                    }
                  >
                    Details
                  </Button>
                </TableData>
              </TableRow>
              // </NavLink>
            ))}
          </TableBuilder>
        </div>
        <div>
          <div>{dish.item}</div>
          <div>{dish.price}</div>
        </div>
        {/* <SingleDish/> */}
      </div>
    </div>
  );
}
