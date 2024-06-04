// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
// import "./Global/variable.css";
import { Route, Routes, } from "react-router-dom";
import Menu from "./pages/Menu";
import SingleDish from "./pages/SingleDish";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from './pages/Signup';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Contactus from "./pages/Contactus";
import Aboutus from "./pages/Aboutus";
import Profile from "./pages/Profile";





function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/profile" element={<Profile/>}/>
        <Route exact path="/signup" element={<Signup/>}/>
        <Route exact path="/Menu" element={<Menu/>}/>
        <Route exact path="/aboutus" element={<Aboutus/>}/>
        <Route exact path="/contactus" element={<Contactus/>}/>
        <Route path="/single/:id" element={<SingleDish/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
