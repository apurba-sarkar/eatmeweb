import React from "react";

import data from "../data";
import SingleDish from "./SingleDish";

export default function Menu() {
    console.log(data)
  return (
    <div>
      <div>Menu</div>
      <div>
        {data.map((e) => (
          <SingleDish key={e.id} mainData={e}/>
        ))}
      </div>
    </div>
  );
}
