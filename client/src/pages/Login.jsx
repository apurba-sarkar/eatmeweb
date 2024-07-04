import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/Button";
import { Headings } from "../ui/Headings";
import { Input } from "../ui/Input";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { addLoginUser } from "../reducers/loginUserSlice";

export default function Login() {
  const dispatch = useDispatch();

  const [filledData, setFilledData] = useState({
    email: "",
    password: "",
  });
  const userList = useSelector((state) => state.user.alluser);
  const navigate = useNavigate();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFilledData({ ...filledData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(filledData);
    userExist();
  };
  const userExist = () => {
    let userEmail = filledData.email;
    let loginUserAttempt = userList.find((item) => item.email === userEmail);
    const isUserPresent = loginUserAttempt;
    isUserPresent ? console.log("pressent") : console.log("not found");

    if (isUserPresent) {
      const present = userList.some(
        (user) =>
          user.email === filledData.email &&
          user.password === filledData.password
      );
      console.log(loginUserAttempt);
      dispatch(addLoginUser(loginUserAttempt));

      present
        ? navigate("/menu")
        : console.log("username or password is incorrect");

      // const password = userList.find((item) => item.password === filledData.password)
    }

    // console.log(userList)
  };
  return (
    <div className="login">
      <div className="login-head">
        <Headings type="h1" colorvar="primary">
          Login Page
        </Headings>
      </div>
      <div className="login-card">
        <div className="login-photo">photo</div>
        <div className="login-data">
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
          <Button varient="primary" size="m" onClick={handleSubmit}>
            {" "}
            Submit
          </Button>
          <h2>
            New in this website?
            <Button
              varient="register"
              size="other"
              onClick={() => navigate("/signup")}
            >
              Register
            </Button>
            here
          </h2>
        </div>
      </div>
    </div>
  );
}
