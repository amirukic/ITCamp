import { useState } from "react";
import "./App.css";
// import Card from "./components/Card";
const App = () => {
  let formValue = {
    name: "",
    email: "",
    lastName: "",
  };
  const [value,setValue] = useState({
    name: "",
    email: "",
    lastName: "",
  })
  return (
    <div>
      <input type="text" placeholder="firstName" onChange={(e) => {
        formValue.lastName = e.target.value
      }} />
      <input type="text" placeholder="lasttName" onChange={(e) => {
        formValue.lastName = e.target.value
      }} />
      <input type="text" placeholder="email" onChange={(e) => {
        formValue.lastName = e.target.value
      }} />
    </div>
  )
};

export default App;
