// import { useEffect } from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const tr = { border: "1px solid black" };
  let value = ""
  const [user, setUser] = useState([]);
  async function getUser() {
    const res = await fetch(
      `https://random-data-api.com/api/dessert/random_dessert?size=${value}`
    );
    const data = await res.json();

    setUser(data);
  }
  // useEffect(() => {
  //   getUser();
  // }, []);
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          value = e.target.value;
        }}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          getUser(value);
        }}
      >
        Submit
      </button>
      {user.map((e) => {
        return (
          <div>
            <div style={tr}>
              <h1>{e.variety}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
