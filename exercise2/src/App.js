import { useReducer, useState } from "react";
import Todo from "./Todo";
import "./App.css"

// const reducer = (state , action) => {
//   switch (actionm,type) {
//     case "increment":
//     case "decrement":
//       return action.data
//     default: 
//     return state
//   }
// }

function App() {

  let a = fetch("https://soccer.sportmonks.com/api/v2.0/leagues?271").then((res) => {return res.json()})
  .then(res => console.log(res))
  
  // const [count, dispatch] = iseReducer(reducer, 0);

  // function increment () {
  //   dispatch({type: "increment" , data: count + 1})
  // }

  // function decrement () {
  //   dispatch({type: "decrement" , data: count - 1})
  // }
  return ( 
    <div>
      {/* <button onClick={decrement}>-</button>
      <p>{count}</p>
      <button onClick={increment}>+</button> */}
      {/* <Todo /> */}
    </div>
   );
}

export default App;