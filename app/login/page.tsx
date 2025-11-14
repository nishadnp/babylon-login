"use client";

import { useState } from "react";
import { auth } from "../../firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function Login() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ fullName?: string; email?: string; password?: string }>({});

  const router = useRouter();

  const validate = () => {
    const newErrors: typeof errors = {};

    if (!fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Invalid email format";
    if (!password.trim()) newErrors.password = "Password is required";
    else if (password.length < 6) newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = async () => {
    if (!validate()) return;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Set displayName in Firebase Auth
      await updateProfile(userCredential.user, { displayName: fullName });
      router.push("/home");
    } catch (error) {
      setErrors({ email: (error as any).message });
    }
  };

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      setErrors({
        email: !email.trim() ? "Email is required" : undefined,
        password: !password.trim() ? "Password is required" : undefined,
      });
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/home");
    } catch (error) {
      setErrors({ email: (error as any).message });
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "400px", margin: "0 auto" }}>
      <h1 style={{ marginBottom: "2rem" }}>Login / Register</h1>

      <div style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          style={{ display: "block", width: "100%", marginBottom: "0.25rem" }}
        />
        {errors.fullName && <span style={{ color: "red", fontSize: "0.85rem" }}>{errors.fullName}</span>}
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ display: "block", width: "100%", marginBottom: "0.25rem" }}
        />
        {errors.email && <span style={{ color: "red", fontSize: "0.85rem" }}>{errors.email}</span>}
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ display: "block", width: "100%", marginBottom: "0.25rem" }}
        />
        {errors.password && <span style={{ color: "red", fontSize: "0.85rem" }}>{errors.password}</span>}
      </div>

      <button onClick={handleRegister} style={{ marginRight: "1rem" }}>
        Register
      </button>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
