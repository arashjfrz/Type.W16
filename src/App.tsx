import { useState } from 'react'
import { useEffect } from 'react'
import { LoginApp } from './L1';
import './App.css'


export function App() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(2);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  function nextPage() {
    setCount(prevCount => prevCount + 1);
  }

  return (
    <>
      {count === 1 && (
        <div className="flex flex-col justify-center items-center h-screen bg-white">
          <div className="flex items-center mb-4">
            <img src="public/logo (1).png" alt="" className="relative bg-black w-[50px] h-[50px] rounded-full p-2" />
            <h1 className="text-3xl font-larg text-black ml-2">Shoea</h1>
          </div>
          <div className="flex justify-center items-center animate-spin">
            <img src="public/spinner-atom.png" alt="" className="w-8 h-8" />
          </div>
        </div>
      )}
      {count === 2 && (
        <div className="flex flex-col items-center">
          <img src="public/onboarding page 2.png" alt="Welcome" onClick={nextPage} />
        </div>
      )}
      {count === 3 && (
        <div className="flex flex-col items-center">
          <img src="public/WallpaperDog-20534536 1@2x.png" alt="Welcome" />
          <h2>We provide high quality products just for you</h2>
          <button onClick={nextPage} className="mt-20 p-2 w-60 bg-zinc-700 text-white rounded-full">Next</button>
        </div>
      )}
      {count === 4 && (
        <div className="flex flex-col items-center">
          <img src="public/WallpaperDog-20397673 1.png" alt="Welcome" />
          <h2>Your satisfaction is our number one priority</h2>
          <button onClick={nextPage} className="mt-24 p-2 w-60 bg-zinc-700 text-white rounded-full">Next</button>
        </div>
      )}
      {count === 5 && (
        <div className="flex flex-col items-center">
          <img src="public/WallpaperDog-20534715 1.png" alt="Welcome" />
          <h2>Let's fulfill your fashion needs with Shoearight now!</h2>
          <button onClick={nextPage} className="mt-20 p-2 w-60 bg-zinc-700 text-white rounded-full">Get Started</button>
        </div>
      )}

      {count === 6 && <LoginApp />}

    </>
  );
}

