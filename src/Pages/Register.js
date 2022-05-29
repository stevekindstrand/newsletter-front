import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  //fetch
  const registerUser = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
        newsletter,
      }),
    });

    const data = await response.json();

    if ((data.firstName, data.lastName, data.email_id, data.password)) {
      alert("You successfully created an account");
      navigate("/login");
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={registerUser}>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <input
          type="checkbox"
          value={newsletter}
          onChange={() => {
            setNewsletter((newsletter) => !newsletter);
          }}
        />
        {newsletter.toString()}
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
