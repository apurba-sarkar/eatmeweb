// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import "./Global/variable.css";
import { Route, Routes, } from "react-router-dom";
import Menu from "./pages/Menu";
import SingleDish from "./pages/SingleDish";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from './pages/Signup';





function App() {

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/signup" element={<Signup/>}/>
        <Route exact path="/Menu" element={<Menu/>}/>
        <Route path="/single/:id" element={<SingleDish/>}/>
      </Routes>
    </>
  );
}

export default App;
