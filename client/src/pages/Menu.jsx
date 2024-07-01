// import React from "react";

import Filters from "../Components/Filters";
import data from "../data";
import { CiZoomIn } from "react-icons/ci";
// import SingleDish from "./SingleDish";
import { NavLink, useNavigate } from "react-router-dom";
import { TableBuilder, TableData, TableHead, TableRow } from "../ui/Table";
import { Button } from "../ui/Button";
import { useState } from "react";
import FullDetails from "../Components/FullDetails";
import { useDispatch } from "react-redux";
import { addDish } from "../reducers/dishSlice";
// import SingleDish from "./SingleDish";
export default function Menu() {
  // const navigate = useNavigate();
  // console.log(data);
  // console.log(data[0].id);
// const dispatch = useDispatch()

  const [dish, setDish] = useState("");
  // console.log(data[0].item);
// const addToCart=()=>{
//   dispatch(addDish())
// }

  return (
    <div>
      {/* <div>Menu</div> */}
      <div className="menu-container">
        <Filters />
        <div className="menu-list">
          <TableBuilder size="big"
          >
            <TableHead col="three">
              <TableData>item no</TableData>
              <TableData>Item List</TableData>
              {/* <TableData>Ad</TableData> */}
            </TableHead>
            {data.map((e) => (
              // <NavLink to={`/single/${e.id}`} key={e.id}>
              <TableRow
              col="three"
                key={e.id}
                style={{ fontSize: "2rem", fontWeight: "bold" }}
              >
                <TableData>{e.id} </TableData>
                <TableData style={{ justifySelf: "left" }}>{e.item} </TableData>
                <TableData>
                  <Button
                    size="s"
                    varient="primary"
                    onClick={() =>
                      // navigate(`/single/${e.id}`)
                      setDish(e)
                    }
                  >
                    View
                  </Button>
                </TableData>
              </TableRow>
            ))}
          </TableBuilder>
        </div>
        <div>
          <FullDetails dish={dish} />
        </div>
        {/* <SingleDish/> */}
      </div>
    </div>
  );
}
