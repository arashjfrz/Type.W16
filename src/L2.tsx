// import React, { useState, useEffect } from 'react';
// import './App.css';

// export function App() {
//     const [count, setCount] = useState(1);
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [rememberMe, setRememberMe] = useState(false);

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setCount(2);
//         }, 5000);
//         return () => clearTimeout(timer);
//     }, []);

//     function nextPage() {
//         setCount(prevCount => prevCount + 1);
//     }

//     const isEmailValid = email.trim() !== '';
//     const isPasswordValid = password.trim() !== '';
//     const isNextDisabled = (count === 6 && !isEmailValid) || (count === 7 && !isPasswordValid);

//     return (
//         <>
//             {count === 1 && (
//                 <>
//                     <div className="flex justify-center items-center">
//                         <img src="public/logo.png" alt="" className="flex bg-white w-[60px] h-[60px] rounded-full p-3" />
//                         <h1 className='flex mt-50px mr-60px text-3xl'>Shoea</h1>
//                     </div>
//                     <div className='flex justify-center items-center mt-[80%]'>
//                         <img src="public/spinner-atom.png" alt="" className='animate-spin transition-[2s]' />
//                     </div>
//                 </>
//             )}
//             {count === 2 && (
//                 <div className="flex flex-col items-center">
//                     <img src="public/onboarding page 2.png" alt="Welcome" />
//                     <button onClick={nextPage} className="mt-4">Next</button>
//                 </div>
//             )}
//             {count === 3 && (
//                 <div className="flex flex-col items-center">
//                     <img src="public/WallpaperDog-20534536 1@2x.png" alt="Welcome" />
//                     <h2>We provide high quality products just for you</h2>
//                     <button onClick={nextPage} className="mt-4">Next</button>
//                 </div>
//             )}
//             {count === 4 && (
//                 <div className="flex flex-col items-center">
//                     <img src="public/WallpaperDog-20397673 1.png" alt="Welcome" />
//                     <h2>Your satisfaction is our number one priority</h2>
//                     <button onClick={nextPage} className="mt-4">Next</button>
//                 </div>
//             )}
//             {count === 5 && (
//                 <div className="flex flex-col items-center">
//                     <img src="public/WallpaperDog-20534715 1.png" alt="Welcome" />
//                     <h2>Let's fulfill your fashion needs with Shoearight now!</h2>
//                     <button onClick={nextPage} className="mt-4">Get Started</button>
//                 </div>
//             )}
//             {count === 6 && (
//                 <div className="flex flex-col items-center">
//                     <h1 className="text-2xl mt-4">Login to Your Account</h1>
//                     <input
//                         type="email"
//                         placeholder="Email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         className="mt-4 border border-gray-300 p-2 rounded"
//                     />
//                     <button onClick={nextPage} className="mt-6 p-2 bg-blue-500 text-white rounded" disabled={isNextDisabled}>
//                         Next
//                     </button>
//                 </div>
//             )}
//             {count === 7 && (
//                 <div className="flex flex-col items-center">
//                     <h1 className="text-2xl mt-4">Login to Your Account</h1>
//                     <input
//                         type="password"
//                         placeholder="Password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         className="mt-4 border border-gray-300 p-2 rounded"
//                     />
//                     <label className="mt-2">
//                         <input
//                             type="checkbox"
//                             checked={rememberMe}
//                             onChange={(e) => setRememberMe(e.target.checked)}
//                         />
//                         Remember me
//                     </label>
//                     <button onClick={nextPage} className="mt-6 p-2 bg-blue-500 text-white rounded" disabled={isNextDisabled}>
//                         Sign In
//                     </button>
//                 </div>
//             )}
//             {count === 8 && (
//                 <div className="flex flex-col items-center">
//                     <h1 className="text-2xl mt-4">Welcome Back!</h1>
//                     <p>Email: {email}</p>
//                     <p>Password: {password.replace(/./g, '*')}</p>
//                     <label>
//                         <input
//                             type="checkbox"
//                             checked={rememberMe}
//                             onChange={(e) => setRememberMe(e.target.checked)}
//                         />
//                         Remember me
//                     </label>
//                     <button className="mt-6 p-2 bg-blue-500 text-white rounded">
//                         Sign In
//                     </button>
//                 </div>
//             )}
//         </>
//     );
// }