/* eslint-disable react/no-unescaped-entities */

import { useNavigate } from "react-router-dom";
import { Button } from "../ui/Button";
import { Headings } from "../ui/Headings";

export default function Home() {
  const navigate= useNavigate()
  return (
    <div className="home">
      
      <div className="home-hero">
        <div  className="herobar-one">
          <Headings type="master" colorvar="primary">
            Enjoy our <br /> Delicious Meal
          </Headings>
          <p>
            Imagine a symphony of flavors dancing on your palate, each bite a
            harmonious blend of textures and tastes. That's what you experience
            when you savor our delicious meal. Crafted with the finest
            ingredients and an unwavering dedication to culinary excellence, our
            dishes are designed to not only satiate your hunger but to create a
            memorable dining experience.
          </p>
          <Button varient="primary" size="l" onClick={()=>navigate("/menu")}>Order Now</Button>
        </div>
        <div className="homeimg">
          <img src="./burger.png" alt="" />
        </div>
      </div>
    </div>
  );
}
