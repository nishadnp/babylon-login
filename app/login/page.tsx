"use client";

import { useState } from "react";
import { auth } from "../../firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function Login() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      localStorage.setItem("fullName", fullName);
      router.push("/home");
    } catch (error) {
      alert("Error: " + (error as any).message);
    }
  };

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/home");
    } catch (error) {
      alert("Error: " + (error as any).message);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Login / Register</h1>
      <input
        type="text"
        placeholder="Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        style={{ display: "block", margin: "0.5rem 0" }}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: "block", margin: "0.5rem 0" }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: "block", margin: "0.5rem 0" }}
      />
      <button onClick={handleRegister} style={{ marginRight: "1rem" }}>
        Register
      </button>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
