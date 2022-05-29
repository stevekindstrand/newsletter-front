import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  const email = localStorage.getItem("email");
  const nl = localStorage.getItem("newsletter");

  const id = localStorage.getItem("id");

  const [newsletter, setNewsletter] = useState(false);

  //Fetch
  const registerUser = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:4000/register", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        newsletter,
      }),
    });
    const data = await response.json();
    console.log(data.newsletter);
  };

  const logoutUser = () => {
    alert("Logged Out");
    localStorage.removeItem("User");
    navigate("/");
  };

  return (
    <div>
      <h1>Välkommen {user}!</h1>
      <h3>Email: {email}!</h3>
      <h3>Nyhetsbrev: {nl}</h3>
      <h3>ID: {id}</h3>
      <form onSubmit={registerUser}>
        <label>Nyhetsbrev:</label>
        <input
          value={newsletter}
          onChange={() => {
            setNewsletter((newsletter) => !newsletter);
          }}
          type="checkbox"
        />
        {newsletter.toString()}
      </form>
      <input type="submit" value="Logout" onClick={logoutUser} />
    </div>
  );
};

export default Welcome;
