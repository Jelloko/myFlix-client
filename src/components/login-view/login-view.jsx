import React from "react";
import { useState } from "react";

export const LoginView = ({ onLoggedIn }) => {
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      Name: Name,
      Password: Password
    };

    fetch("https://my-flix-cf-fd6a3633859c.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Login response: ", data);
        if (data.user) {
          localStorage.setItem("user", JSON.stringify(data.user));
          localStorage.setItem("token", data.token);
          onLoggedIn(data.user, data.token);
        } else {
          alert("No such user");
        }
      })
      .catch((e) => {
        alert("Something went wrong");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text"
        value={Name}
        onChange={(e) => setName(e.target.value)}
        required />
      </label>
      <label>
        Password:
        <input type="password"
        value={Password}
        onChange={(e) => setPassword(e.target.value)}
        required />
      </label>
      <button type="submit">
        Submit
      </button>
    </form>
  );
};