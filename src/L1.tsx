import React, { useState, useEffect } from 'react';
import './App.css'
import { SignUpForm } from './signup';


export const LoginApp: React.FC = () => {
  const [page, setPage] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const isEmailValid = email.trim() !== '';
  const isPasswordValid = password.trim() !== '';
  const isNextDisabled = (page === 1 && !isEmailValid) || (page === 2 && !isPasswordValid);

  const nextPage = () => {
    if (page < 2) setPage(page + 1);
  };


  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    if (storedEmail) {
      setEmail(storedEmail);
    }
    if (storedPassword) {
      setPassword(storedPassword);
    }
  }, []);


  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {page === 1 && (
        <div className="flex flex-col items-center">
          <img src="public/logo.png" alt="Logo" />
          <h1 className="text-2xl mt-4">Login to Your Account</h1>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-4 border w-60 border-gray-300 px-6 py-3 rounded-full"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-4 border  w-60 border-gray-300 px-6 py-3 rounded-full"
          />
          <label className="mt-2">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            Remember me
          </label>
          <button onClick={nextPage} className="mt-6 p-2 w-48 bg-zinc-700 text-white rounded-full" disabled={isNextDisabled}>
            Next
          </button>
          <button onClick={() => setPage(2)} className="mt-6 p-2 w-48 bg-zinc-700 text-white rounded-full">  
            Sign Up  
          </button>  
        </div>
      )}
        {page === 2 && (  
        <SignUpForm />  
      )}  

    {page === 3 && (
      <div className="flex flex-col items-center">
        <h1 className="text-2xl mt-4">Login to Your Account</h1>
        <div className="mt-4">
          <p>Your deta is saved successfuly</p>
        </div>

        </div>
      )}
    </div>
  );
};
