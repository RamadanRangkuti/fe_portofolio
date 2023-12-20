"use client"
import React, { useState } from 'react'
import axios from 'axios' 
import { useRouter } from 'next/navigation'

const LoginForm = () => {
  const router = useRouter()
  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleEmailChange = (e) => {
    console.log(e.target.value)/
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
        email,
        password,
      })
      const token = response.data.token;
      localStorage.setItem('@token', token)
      // console.log('Login Successful. Token:', token)
      // setIsLoggedIn(true)
      router.push('/admin')
    } catch (error) {
      alert("Password Salah")
      console.error('Login Error:', error)
    }
  }

  const handleHomeClick = () => {
    router.push('/')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 text-black py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 text-black rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none"
            >
              Login
            </button>
            <br /><br />
            <button
              onClick={handleHomeClick}
              type="btn"
              className="w-full bg-sky-300 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none"
            >
              Home
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;