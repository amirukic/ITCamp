import { Routes, Route } from "react-router-dom";
import Soccer from "./components/Soccer";
import Basket from "./components/Basket";
import Navbar from "./components/Navbar";
import Home from "./components/Home"
import "./components/Navbar.css"

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="soccer" element={<Soccer />} />
        <Route path='basket' element={<Basket />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
