import React from "react";
import { Box } from "../ui/Box";
import { Headings } from "../ui/Headings";
import { GiChickenOven } from "react-icons/gi";
export default function Filters() {
  return (
    <div className="filters">
      <Box color="danger" type="option">
       <Headings type="h3" colorvar="other"> Non Veg 
       {/* <GiChickenOven /> */}
       </Headings>
      </Box>
      <Box color="primary" type="option">
       <Headings type="h3" colorvar="other"> Veg Only 
       {/* <GiChickenOven /> */}
       </Headings>
      </Box>
      <Box color="support" type="option">
       <Headings type="h3"> Clear Filter
       {/* <GiChickenOven /> */}
       </Headings>
      </Box>
    </div>
  );
}
