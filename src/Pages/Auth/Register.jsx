import React from "react";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");


  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://hotello-backend-xivc.onrender.com/api/auth/register",
        { username, number, email, password }
      );
      toast("Register Successfuly")
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div className="w-full flex items-center justify-center pb-10">
      <div className="flex flex-col gap-6 items-center w-[28rem] px-6">
        <h2 className="text-4xl text-[#233142] font-bold">Register</h2>
        <form onSubmit={handleRegister} className="w-full flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <label className="text-2xl font-bold text-red-600">Username</label>
            <input
              className="outline-none border-b-2 py-2"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Enter username"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label className="text-2xl font-bold text-red-600">Number</label>
            <input
              type="text"
              value={number}
              className="outline-none border-b-2 py-2"
              onChange={(e) => {
                if (/^\d{0,10}$/.test(e.target.value)) {
                  setNumber(e.target.value);
                }
              }}
              placeholder="Enter 10-digit valid number"
              required
            />
          </div>
          <div className="flex flex-col gap-4">
            <label className="text-2xl font-bold text-red-600">Email</label>
            <input
              className="outline-none border-b-2 py-2"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email address"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label className="text-2xl font-bold text-red-600">Password:</label>
            <input
              className="outline-none border-b-2 py-2"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="flex items-center flex-col group bg-[#f95959] rounded-md px-6 py-2 transition-all duration-200 hover:text-[#233142] hover:bg-[#e3e3e3] text-[#e3e3e3]"
          >
            <span className="text-sm font-bold">Register</span>
          </button>
        </form>
        {message && <p>{message}</p>}
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Register;
