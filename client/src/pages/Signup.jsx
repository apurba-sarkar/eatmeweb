import { useNavigate } from "react-router-dom";
import { Headings } from "../ui/Headings";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { useState } from "react";

export default function Signup() {
  const template = {
    fullname: "",
    pincode: "",
    mobile: "",
    email: "",
    password: "",
    cpassword: "",
  };
  const [filledData, setFilledData] = useState(template);
  const [notAllow, setNotAllow] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFilledData({
      ...filledData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const allow = filledData.password == filledData.cpassword;
    if (allow) {
      const { cpassword, ...fd } = filledData;
      // delete filledData.cpassword;
      // const { password, cpassword, ...dataWithoutCPassword } = filledData;
      // console.log(filledData);
      console.log(fd);
      setFilledData(template);
    } else {
      setNotAllow(true);
      console.log("mismatch");
    }
  };

  const navigate = useNavigate();
  return (
    <div>
      <div className="login">
        <div className="login-head">
          <Headings type="h1" colorvar="primary">
            Signup Page
          </Headings>
        </div>
        <div className="login-card">
          <div className="login-photo">photo</div>
          <div className="login-data">
            <Input
              placeholder="full name"
              type="text"
              varient="input"
              name="fullname"
              value={filledData.fullname}
              onChange={handleChange}
            />
            <Input
              placeholder="pincode"
              type="text"
              varient="input"
              name="pincode"
              value={filledData.pincode}
              onChange={handleChange}
            />
            <Input
              placeholder="mobile"
              type="text"
              varient="input"
              name="mobile"
              value={filledData.mobile}
              onChange={handleChange}
            />
            <Input
              placeholder="email"
              type="email"
              varient="input"
              name="email"
              value={filledData.email}
              onChange={handleChange}
            />
            <Input
              placeholder="password"
              type="password"
              varient="input"
              name="password"
              value={filledData.password}
              onChange={handleChange}
            />

            <Input
              placeholder="confirm password"
              type="password"
              name="cpassword"
              varient="input"
              value={filledData.cpassword}
              onChange={handleChange}
            />
            <Headings type="side">dsdds</Headings>
            <Button varient="primary" size="m" onClick={handleSubmit}>
              {" "}
              Create Account
            </Button>
            <h2>
              already Have an account?
              <Button varient="register" size="other">
                login
              </Button>
              here{" "}
            </h2>
          </div>
        </div>
      </div>
      {/* <div>
        <h1>Sign Up</h1>
        <label htmlFor=""> First Name</label>
        <input type="text" placeholder="first name" name="firstName" />
        <label htmlFor="">Last Name</label>
        <input type="text" placeholder="last name" name="lastName" />
        <label htmlFor="">Mobile No:</label>
        <input type="text" placeholder="phone number" name="phoneNumber" />
        <label htmlFor="">Password</label>
        <input type="password" placeholder="password" name="password" />
        <label htmlFor="">Confirm Password</label>
        <input type="password" placeholder="cpassword" name="cpassword" />
        <button>Login</button>
      </div>
      <div>already registered ?</div>
      <button onClick={() => navigate("/login")}>login</button> */}
    </div>
  );
}
