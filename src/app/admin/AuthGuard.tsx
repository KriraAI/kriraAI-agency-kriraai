"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebaseConfig";

const ADMIN_EMAIL = "info@kriraai.com";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user.email === ADMIN_EMAIL) {
        localStorage.setItem("isAdminLoggedIn", "true"); 
        router.push("/admin/dashboard");
      }
    });
    return () => unsubscribe();
  }, [router]);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    try {
      const userCred = await signInWithEmailAndPassword(auth, email.trim(), password.trim());
      if (userCred.user.email === ADMIN_EMAIL) {
        localStorage.setItem("isAdminLoggedIn", "true");  
        router.push("/admin/dashboard");
      } else {
        setError("You are not authorized");
        await signOut(auth);
        localStorage.removeItem("isAdminLoggedIn");  
      }
    } catch (error: any) {
      setError("Invalid credentials");
      localStorage.removeItem("isAdminLoggedIn");  
    }
  }

  // Logout example (use this in dashboard or nav for logging out):
  /*
  async function handleLogout() {
    await signOut(auth);
    localStorage.removeItem("isAdminLoggedIn");
    router.push("/admin/login");
  }
  */

  return (
    <div className="max-w-sm mx-auto mt-20 p-4 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2"
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-2"
        />
        {error && <p className="text-red-600">{error}</p>}
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}
