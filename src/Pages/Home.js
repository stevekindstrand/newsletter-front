import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const Register = () => {
    navigate("/register");
  };

  const Login = () => {
    navigate("/login");
  };

  return (
    <div className="homeDiv">
      <h1>Home</h1>
      <input type="submit" value="Register" onClick={Register} />
      <input type="submit" value="Login" onClick={Login} />
    </div>
  );
};

export default Home;
