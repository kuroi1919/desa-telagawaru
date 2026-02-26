
"use client"

import { useState } from "react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  const handleLogin = () => {
    const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL
    const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD
    const userEmail = process.env.NEXT_PUBLIC_USER_EMAIL
    const userPassword = process.env.NEXT_PUBLIC_USER_PASSWORD

    if (email === adminEmail && password === adminPassword) {
      setMessage("Login sebagai Admin berhasil")
    } else if (email === userEmail && password === userPassword) {
      setMessage("Login sebagai User berhasil")
    } else {
      setMessage("Email atau password salah")
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">Login</h1>

      <input
        type="email"
        placeholder="Email"
        className="border p-2"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="border p-2"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2"
      >
        Login
      </button>

      <p>{message}</p>
    </div>
  )
}
