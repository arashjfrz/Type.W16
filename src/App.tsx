import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'



// export function App() {
//   const [count, setCount] = useState(1)
//   useEffect(() => {
//     setTimeout(() => {
//       setCount(2);
//     }, 5000);
//   }, []);
//   console.log(count)

//   function nextPage() {
//     setCount(count + 1)
//   }
//   return (
//     <>
//       {count == 1 && <>
//         <div className="felx justify-center items-center">
//           <img src="public/logo.png" alt="" className="flex bg-white w-[60px] h-[60px] rounded-full p-3" />
//           <h1 className='flex mt-50px mr-60px text-3xl'>Shoea</h1>
//         </div>
//         <div className='flex justify-center items-center mt-[80%]'>
//           <img src="public/spinner-atom.png" alt="" className=' animate-spin transition-[2s]' />
//         </div>
//       </>
//       }
//       {count == 2 &&
//         <img src="public/onboarding page 2.png" alt="welcome" />
//       }
//     </>

//   )

// }


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
        <>
          <div className="flex justify-center items-center">
            <img src="public/logo.png" alt="" className="flex bg-white w-[60px] h-[60px] rounded-full p-3" />
            <h1 className='flex mt-50px mr-60px text-3xl'>Shoea</h1>
          </div>
          <div className='flex justify-center items-center mt-[80%]'>
            <img src="public/spinner-atom.png" alt="" className='animate-spin transition-[2s]' />
          </div>
        </>
      )}
      {count === 2 && (
        <div className="flex flex-col items-center">
          <img src="public/onboarding page 2.png" alt="Welcome" />
          <button onClick={nextPage} className="mt-4">Next</button>
        </div>
      )}
      {count === 3 && (
        <div className="flex flex-col items-center">
          <img src="public/WallpaperDog-20534536 1@2x.png" alt="Welcome" />
          <h2>We provide high quality products just for you</h2>
          <button onClick={nextPage} className="mt-4">Next</button>
        </div>
      )}
      {count === 4 && (
        <div className="flex flex-col items-center">
          <img src="public/WallpaperDog-20397673 1.png" alt="Welcome" />
          <h2>Your satisfaction is our number one priority</h2>
          <button onClick={nextPage} className="mt-4">Next</button>
        </div>
      )}
      {count === 5 && (
        <div className="flex flex-col items-center">
          <img src="public/WallpaperDog-20534715 1.png" alt="Welcome" />
          <h2>Let's fulfill your fashion needs with Shoearight now!</h2>
          <button onClick={nextPage} className="mt-4">Get Started</button>
        </div>
      )}
    </>
  );
}

