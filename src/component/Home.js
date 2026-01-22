import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  let navigate = useNavigate("");
  // const [color, setColor] = useState("red");
  const [count, setCount] = useState(0);

  // const handleNavigate = () => {
  //   navigate("/about_us");
  // };

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSub = () => {
    setCount(count - 1);
  };

  // const myStyle = {
  //   color: "red",
  // };

  return (
    <div>
      <h1 className="text-red-600">count = {count}</h1>
      <button onClick={handleAdd}>add</button>
      <button onClick={handleSub}>Sub</button>

      {/* <h1 style={myStyle}>i am in home</h1> */}
      {/* <ul>
        <li> */}
      {/* <button onClick={() => navigate("/about_us")}>about us</button> */}
      {/* <button onClick={handleNavigate}>about us</button> */}
      {/* <Link to="/about_us">AboutUs</Link> */}
      {/* </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul> */}
    </div>
  );
};

export default Home;
