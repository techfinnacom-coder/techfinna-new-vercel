"use client";

import React, { useState, useEffect } from 'react';
import bcrypt from 'bcryptjs';
import Graph from "@/components/Admin/Graph";
import Table from "@/components/Admin/Table";

const ADMIN_PASSWORD_HASH = process.env.NEXT_PUBLIC_ADMIN_PASSWORD_HASH || '';

const AdminPage = () => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');

  console.log("password",password, ADMIN_PASSWORD_HASH);

  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin');
    if (isAdmin === 'true') {
      window.dispatchEvent(new Event('isAdminChange'));
      setIsAuthenticated(true);
    }
  }, []);

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const isMatch = await bcrypt.compare(password, ADMIN_PASSWORD_HASH);
      if (isMatch) {
        localStorage.setItem('isAdmin', 'true');
        window.dispatchEvent(new Event('isAdminChange'));
        setIsAuthenticated(true);
        setError('');
      } else {
        setError('Invalid password');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 shadow-md w-full max-w-md rounded-xl">
          <h1 className="text-2xl font-bold mb-6 text-center text-black">Admin Login</h1>
          <form onSubmit={handlePasswordSubmit}>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 p-2 w-full border focus:outline-none focus:ring-2 focus:ring-black/80 rounded-lg text-black"
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <button
              type="submit"
              className="w-full bg-black text-white p-2 hover:bg-black/80 rounded-lg"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Graph />
      <Table />
    </div>
  );
};

export default AdminPage;