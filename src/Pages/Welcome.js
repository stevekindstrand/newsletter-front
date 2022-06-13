import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  const email = localStorage.getItem("email");
  const id = localStorage.getItem("id");
  // const nl = localStorage.getItem("newsletter");

  const [newsletter, setNewsletter] = useState(false);

  //Fetch
  const welcomeUser = async () => {
    let idNewsletter = {
      _id: id,
      newsletter: !newsletter,
    };

    fetch("http://localhost:4000/register", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(idNewsletter),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNewsletter(!newsletter);
      });
  };

  const logoutUser = () => {
    alert("Logged Out");
    localStorage.removeItem("user");
    localStorage.removeItem("email");
    localStorage.removeItem("id");
    navigate("/");
  };

  return (
    <div>
      <h1>Välkommen {user}!</h1>
      <h3>Email: {email}!</h3>
      {/* <h3>Nyhetsbrev: {nl}</h3> */}
      <h3>ID: {id}</h3>
      <label>Nyhetsbrev: </label>
      <input
        type="button"
        value={newsletter}
        onClick={welcomeUser}
        // {() => {
        //   setNewsletter((newsletter) => !newsletter);
        // }}
      />
      {/* {newsletter.toString()} */}
      <br />
      <br />
      <input type="submit" value="Logout" onClick={logoutUser} />
    </div>
  );
};

export default Welcome;
