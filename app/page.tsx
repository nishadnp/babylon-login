"use client";

import { useEffect, useState } from "react";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function Home() {
  const [name, setName] = useState("");
  const router = useRouter();

  useEffect(() => {
    const storedName = localStorage.getItem("fullName") || "User";
    setName(storedName);
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    localStorage.removeItem("fullName");
    router.push("/login");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Hey, {name}! You’re successfully logged in.</h1>
      <button onClick={handleLogout} style={{ marginTop: "1rem" }}>
        Logout
      </button>
    </div>
  );
}
