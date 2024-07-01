import React from "react";
import { Box } from "../ui/Box";
import { Headings } from "../ui/Headings";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { nonveg, veg,all } from "../reducers/menuSlice";
export default function Filters() {
  const dispatch = useDispatch();
  return (
    <div className="filters">
      <Box
        color="danger"
        // color="disabled"
        type="option"
        onClick={() => dispatch(nonveg("nonveg"))}
      >
        <Headings type="h3" colorvar="other">
          {" "}
          Non Veg
          {/* <GiChickenOven /> */}
        </Headings>
      </Box>
      <Box
        color="primary"
        type="option"
        onClick={() => dispatch(veg("nonveg"))}
      >
        <Headings type="h3" colorvar="other">
          {" "}
          Veg Only
          {/* <GiChickenOven /> */}
        </Headings>
      </Box>
      <Box color="support" type="option"
      onClick={()=>dispatch(all())}>
        <Headings type="h3">
          {" "}
          Clear Filter
          {/* <GiChickenOven /> */}
        </Headings>
      </Box>
    </div>
  );
}
