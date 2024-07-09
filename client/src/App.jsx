// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
// import "./Global/variable.css";
import { Route, Routes } from "react-router-dom";
import Menu from "./pages/Menu";
import SingleDish from "./pages/SingleDish";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Contactus from "./pages/Contactus";
import Aboutus from "./pages/Aboutus";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import { Provider } from "react-redux";
import store from "./store";
import ProtectedRoute from "./Components/ProtectedRoute";
import HamNav from "./Components/HamNav";

function App() {
  return (
    <>
      <Provider store={store}>
        <HamNav/>
        {/* <Navbar /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route
            exact
            path="/profile"
            element={<ProtectedRoute element={<Profile />} />}
          />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/Menu" element={<Menu />} />
          <Route exact path="/aboutus" element={<Aboutus />} />
          <Route exact path="/contactus" element={<Contactus />} />
          <Route
            exact
            path="/cart"
            element={<ProtectedRoute element={<Cart />} />}
          />
          <Route
            exact
            path="/checkout"
            element={<ProtectedRoute element={<CheckOut />} />}
          />
          <Route path="/single/:id" element={<SingleDish />} />
        </Routes>
        <Footer />
      </Provider>
    </>
  );
}

export default App;
