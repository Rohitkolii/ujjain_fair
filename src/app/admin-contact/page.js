"use client";

import { useState } from "react";
import { auth } from "../stall-enquiry/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import Contacts from "@/Components/Contacts";

export default function AdminPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLoggedIn(true);
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  if (!loggedIn) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4 bg-gray-50 p-4">
        <h2 className="text-2xl font-bold">Admin Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border px-4 py-2 rounded w-64"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border px-4 py-2 rounded w-64"
        />
        <button
          onClick={handleLogin}
          className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/80"
        >
          Login
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </div>
    );
  }

  return (
    <div className="p-4 space-y-5">
      <br />
      <h1 className="text-2xl font-bold text-center">Contacts Queries</h1>
      <Contacts />
    </div>
  );
}
