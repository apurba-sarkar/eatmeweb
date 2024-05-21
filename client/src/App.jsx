// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import "./Global/variable.css";
import { Route, Routes, } from "react-router-dom";
import Menu from "./pages/Menu";
import SingleDish from "./pages/SingleDish";

function App() {

  return (
    <>
      <div>sad</div>

      <Menu />
      <Routes>
        <Route path="/single/:id" element={<SingleDish/>}/>
      </Routes>
    </>
  );
}

export default App;
