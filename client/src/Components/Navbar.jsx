import { NavLink } from "react-router-dom";
import { Headings } from "../ui/Headings";
import { CgProfile } from "react-icons/cg";
// import "./comstyles.css"

export default function Navbar() {
  return (
    <div className="mainNav">
      <img
        src="./mainlogo.jpg"
        alt=""
        style={{ height: "5rem", aspectRatio: "1" }}
      />

      <div className="links">
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
      <NavLink to="/profile">
        <Headings type="h1">
          {" "}
          <CgProfile />
        </Headings>
      </NavLink>
      {/* <CgProfile value={{ color: theme.colors.primary }} /> */}
    </div>
  );
}
