import { useReducer, useState } from "react";
import Axios from "./Axios";
import {Link, Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  

  return <div>
    <Routes>
        <Route path={"/Axios"} element={<Axios />} />
        <Route path={"/"} element={<h1>WELCOME</h1>} />
      </Routes>
      <div>
        <Link to={"/"}>
          <h1>WELCOME</h1>
        </Link>

        <Link to={"/Axios"}>
          <h1>News</h1>
        </Link>
      </div>
  </div>;
}

export default App;
