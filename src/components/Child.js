import React, { useState } from "react";

const Child = ({isLoggedIn, setIsLoggedIn }) => {
  const[username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (username && password) {
      setIsLoggedIn(true);
    }
  }

  return (
    <div>
      {isLoggedIn ? (
        <p>You are logged in!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default Child;
