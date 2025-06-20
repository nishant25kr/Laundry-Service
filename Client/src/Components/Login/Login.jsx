
import React, { useState } from "react";

export default function Login({ onLoginSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",  // ⚠️ important for session cookies
        body: JSON.stringify({ username, password }),
      });

      if (res.ok) {
        alert("Login successful");
        onLoginSuccess(); // show dashboard
      } else {
        alert("Invalid credentials");
      }
    } catch (err) {
      console.error("Login error", err);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto ">
      <h2 className="text-xl font-bold mb-4">User Login</h2>
      <input
        type="text"
        placeholder="Username"
        className="input input-bordered w-full mb-2"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="input input-bordered w-full mb-4"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={login}
        className="btn bg-blue-600 text-white w-full"
      >
        Login
      </button>
    </div>
  );
}
