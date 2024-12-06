import React, { useState, useEffect } from 'react';  

export const LoginApp: React.FC = () => {  
  const [page, setPage] = useState(1);  
  const [email, setEmail] = useState('');  
  const [password, setPassword] = useState('');  
  const [rememberMe, setRememberMe] = useState(false);  

  const isEmailValid = email.trim() !== '';  
  const isPasswordValid = password.trim() !== '';  
  const isNextDisabled = (page === 1 && !isEmailValid) || (page === 2 && !isPasswordValid);  

  const nextPage = () => {  
    if (page < 3) setPage(page + 1);  
  };  

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
            className="mt-4 border border-gray-300 p-2 rounded"  
          />  
          <button onClick={nextPage} className="mt-6 p-2 bg-blue-500 text-white rounded" disabled={isNextDisabled}>  
            Next  
          </button>  
        </div>  
      )}  
      {page === 2 && (  
        <div className="flex flex-col items-center">  
          <h1 className="text-2xl mt-4">Login to Your Account</h1>  
          <input  
            type="password"  
            placeholder="Password"  
            value={password}  
            onChange={(e) => setPassword(e.target.value)}  
            className="mt-4 border border-gray-300 p-2 rounded"  
          />  
          <label className="mt-2">  
            <input  
              type="checkbox"  
              checked={rememberMe}  
              onChange={(e) => setRememberMe(e.target.checked)}  
            />  
            Remember me  
          </label>  
          <button onClick={nextPage} className="mt-6 p-2 bg-blue-500 text-white rounded" disabled={isNextDisabled}>  
            Next  
          </button>  
        </div>  
      )}  
      {page === 3 && (  
        <div className="flex flex-col items-center">  
          <h1 className="text-2xl mt-4">Login to Your Account</h1>  
          <div className="mt-4">  
            <p>Email: {email}</p>  
            <p>Password: {password.replace(/./g, '*')}</p>  
            <label>  
              <input  
                type="checkbox"  
                checked={rememberMe}  
                onChange={(e) => setRememberMe(e.target.checked)}  
              />  
              Remember me  
            </label>  
          </div>  
          <button className="mt-6 p-2 bg-blue-500 text-white rounded">  
            Sign In  
          </button>  
        </div>  
      )}  
    </div>  
  );  
};
