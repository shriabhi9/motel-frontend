import React from "react";
import { useState } from "react";
import axios from "axios";
import { useLoginProperty } from "../../Context/Login-context";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Login = () => {
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const { setLoginProperty } = useLoginProperty();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoginProperty(false);
      const response = await axios.post(
        "https://hotello-backend-xivc.onrender.com/api/auth/login",
        {
          number,
          password,
        }
      );
      setMessage(response.data.message);
      toast("Login successfuly")
      setLoginProperty(true);
    } catch (error) {
      setLoginProperty(false);
      setMessage(error.response.data.message);
    }
  };

  return (
    <div className="w-full flex items-center justify-center pb-10">
      <div className="flex flex-col gap-6 items-center w-[28rem] px-6">
        <h2 className="text-4xl text-[#233142] font-bold">Login</h2>
        <form onSubmit={handleLogin} className="w-full flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <label className="text-2xl font-bold text-red-600">Number</label>
            <input
              className="outline-none border-b-2 py-2"
              type="text"
              placeholder="Enter the registered mobile no."
              value={number}
              onChange={(e) => {
                if (/^\d{0,10}$/.test(e.target.value)) {
                  setNumber(e.target.value);
                }
              }}
              required
            />
          </div>
          <div className="flex flex-col gap-4">
            <label className="text-2xl font-bold text-red-600">Password</label>
            <input
              className="outline-none border-b-2 py-2"
              placeholder="Enter your password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="flex items-center flex-col group bg-[#f95959] rounded-md px-6 py-2 transition-all duration-200 hover:text-[#233142] hover:bg-[#e3e3e3] text-[#e3e3e3]"
          >
            <span className="text-sm font-bold">Login</span>
          </button>
        </form>
        {message && <p>{message}</p>}
      </div>
      <ToastContainer />
    </div>
  );
};
