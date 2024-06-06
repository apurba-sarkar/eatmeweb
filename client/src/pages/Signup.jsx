import { useNavigate } from "react-router-dom";
import { Headings } from "../ui/Headings";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";

export default function Signup() {
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
            <Input placeholder="full name" type="text" varient="input" />
            <Input placeholder="pincode" type="text" varient="input" />
            <Input placeholder="mobile" type="text" varient="input" />
            <Input placeholder="email" type="email" varient="input" />
            <Input placeholder="password" type="password" varient="input" />
            <Input placeholder="confirm password" type="password" varient="input" />
            <Button varient="primary" size="m">
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
