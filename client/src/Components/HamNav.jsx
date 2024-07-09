import { CgProfile } from "react-icons/cg";
import { Headings } from "../ui/Headings";
import { NavLink } from "react-router-dom";
import { Button } from "../ui/Button";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineCancel } from "react-icons/md";
import { useSpring, animated } from "@react-spring/web";
import { useState } from "react";
export default function HamNav() {
  const [isOpen, setIsOpen] = useState(false);
  const slideIn = useSpring({
    transform: isOpen ? "translateX(0)" : "translateX(-100%)",
    opacity: isOpen ? 1 : 0,
  });
  return (
    <div>
      <div className="hamlinks-bur">
        {isOpen && (
          <div >
            {" "}
            <Links style={slideIn} setIsOpen={setIsOpen} />
          </div>
        )}
      </div>
      <div>
        <Button onClick={() => setIsOpen(true)}>
          <RxHamburgerMenu />
        </Button>

        <img
          src="./mainlogo.jpg"
          alt=""
          style={{ height: "5rem", aspectRatio: "1" }}
        />
        <NavLink to="/profile" className="spec">
          <Headings type="h1">
            {" "}
            <CgProfile />
          </Headings>
        </NavLink>
      </div>
    </div>
  );
}

const Links = ({ setIsOpen }) => {
  return (
    <div>
      <div className="hamNav">
        <Button onClick={() => setIsOpen(false)}>
          <MdOutlineCancel />
        </Button>
      </div>
      <div className="hamlinks">
        <NavLink to="/">
          {" "}
          <Headings type="nav"> Home</Headings>
        </NavLink>
        <NavLink to="/aboutus">
          {" "}
          <Headings type="nav"> About Us</Headings>{" "}
        </NavLink>
        <NavLink to="/menu">
          <Headings type="nav"> Menus</Headings>{" "}
        </NavLink>
        <NavLink to="/contactus">
          <Headings type="nav"> Contact Us</Headings>{" "}
        </NavLink>
        <NavLink to="/login">
          <Headings type="nav">Login</Headings>{" "}
        </NavLink>
        <NavLink to="/cart">
          <Headings type="nav"> Cart</Headings>
        </NavLink>
      </div>
    </div>
  );
};
