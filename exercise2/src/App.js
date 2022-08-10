import {Link, Route, Routes } from "react-router-dom";
import Cart from "./Cart";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path={"/Cart"} element={<Cart />} />
        <Route path={"/"} element={<h1>WELCOME</h1>} />
      </Routes>
      <div>
        <Link to={"/"}>
          <h1>WELCOME</h1>
        </Link>

        <Link to={"/Cart"}>
          <h1>Cart</h1>
        </Link>
      </div>
    </div>
  );
};

export default App;
