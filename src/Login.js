import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      email: email,
      password: password,
    };

    try {
      const res = await axios.post(
        "https://reqres.in/api/login", //eve.holt@reqres.in pass-cityslicker
        payload,
        {
          headers: {
            "x-api-key": "reqres-free-v1",
          },
        },
      );

      localStorage.setItem("login", res.data.token);
      console.log("data view", res);
      console.log("display my token", localStorage.getItem("login"));
    } catch (error) {
      console.error("login failed");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <label>Password:</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
