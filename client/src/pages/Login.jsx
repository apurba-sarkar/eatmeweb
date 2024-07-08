import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/Button";
import { Headings } from "../ui/Headings";
import { Input } from "../ui/Input";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { addLoginUser } from "../reducers/loginUserSlice";
import { login } from "../reducers/authSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const dispatch=useDispatch()
  const loggedIn =useSelector((state)=>state.auth.isAuthenticated)
  // console.log(loggedIn)
  const notify = () =>
    toast.success("Login Succesfull", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const warning = () =>
    toast.warn("Incorrect Password ", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      // transition: Bounce,
    });
  const error = () =>
    toast.error("Account not Found", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      // transition: Bounce,
    });

  // const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.isAuthenticated);

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
    dispatch(login())
    // console.log(filledData);
    userExist();
  };
  const userExist = () => {
    let userEmail = filledData.email;
    let loginUserAttempt = userList.find((item) => item.email === userEmail);
  
    const isUserPresent = loginUserAttempt;
    isUserPresent ? console.log("pressent") : error();

    if (isUserPresent) {
      const handleAllowed = () => {
        setTimeout(() => navigate("/menu"), 2000);
        notify();
        // console.log(notify())
        dispatch(login(true));
        // console.log(auth);
      };
      const present = userList.some(
        (user) =>
          user.email === filledData.email &&
          user.password === filledData.password
      );
      // console.log(loginUserAttempt);
      dispatch(addLoginUser(loginUserAttempt));

      present
        ? handleAllowed()
        : warning()

      // const password = userList.find((item) => item.password === filledData.password)
    }

    // console.log(userList)
  };
  useEffect(()=> loggedIn? (navigate("/profile")):navigate("/login") ,[])
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

          <ToastContainer
            style={{ fontSize: "2rem" }}
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </div>
      </div>
    </div>
  );
}
