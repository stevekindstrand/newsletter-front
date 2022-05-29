import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Fetch
  const loginUser = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if ((data.email, data.password)) {
      localStorage.setItem("user", data.firstName + " " + data.lastName);
      localStorage.setItem("email", data.email);
      localStorage.setItem("newsletter", data.newsletter);
      localStorage.setItem("id", data._id);
      alert("Login successful");
      navigate("/welcome");
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <div className="Login">
      <h1>Login</h1>
      <form onSubmit={loginUser}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
