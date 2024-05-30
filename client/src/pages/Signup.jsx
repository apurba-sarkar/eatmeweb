import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  return (
    <div>
      <div>photo</div>
      <div>
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
      <button onClick={() => navigate("/login")}>login</button>
    </div>
  );
}
