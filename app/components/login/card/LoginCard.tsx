"use client"; // Ensure this is present

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter for redirection
import api from '../../../services/api.js'; // Import the Axios instance
import styles from './styles.module.css';

const LoginCard = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter(); 

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await api.post('/auth/login', { email, password }); // Use Axios instance
      console.log('Response:', response.data);
      if (response.data) {
        console.log('Login successful:', response.data);
        // Store token in local storage
        localStorage.setItem('token', response.data.token);

        // Redirect to dashboard
        router.push('/'); // Change '/dashboard' to your actual dashboard path
      } else {
        // Handle login error
        setError(response.error);
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error);
      setError('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <div className={`${styles.maskedDiv} flex flex-col items-center justify-center`}>
      <img
        src="/images/logo.png"
        alt="Logo"
        className="mb-6"
        style={{
          width: '318px',
          height: '88.2px',
          left: '556px',
          top: ' 166.63px',
          gap: '0px',
          opacity: '0px',
        }}
      />
      <h2 className="text-2xl font-semibold mb-4">Login to your Account</h2>
      <form className="w-full max-w-sm" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email Address:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Enter Password:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="text-red-500 text-xs italic">{error}</p>}
        <div className="flex items-center justify-between">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Log In
          </button>
          <a className="inline-block align-baseline font-bold text-sm text-red-500 hover:text-red-800" href="#">
            Forgot password?
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginCard;
