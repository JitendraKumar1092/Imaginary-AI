import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { logo } from "./assets";
import { Home, Createpost } from "./pages";
import { Loader2 } from "./copmonents";
import "animate.css";

const App = () => {
  // State to manage the modal visibility
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <BrowserRouter>
      <header className="flex justify-around items-center bg-[#1c1c1c] p-4 text-white border-b border-gray-800">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="w-12 left-20 h-auto rounded-full object-contain border-2 border-gray-300  bg-[#1c1c1c]"
          />
        </Link>
        <a
          href="https://github.com/jitendrakumar1092/imaginary-ai"
          target="_blank"
          className="flex gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900"
        >
          <svg
            viewBox="0 0 24 24"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#FFFFFF"
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            ></path>
          </svg>
          Imaginary AI
        </a>
        <div>
          <Link
            to="/create-post"
            className="bg-white hover:from-blue-600 hover:to-blue-800 text-black font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce mr-6"
          >
            Create Image
          </Link>
          <Link
            onClick={() => setModalOpen(true)}
            className="bg-[#1c1c1c] border border-white hover:from-blue-600 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce mr-6 "
          >
            Create Video
          </Link>
        </div>
      </header>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
          <div className=" bg-white bg-opacity-0 p-8 rounded-2xl backdrop-blur-3xl">
            <p className="text-lg font-medium mb-4">Coming Soon!</p>
            <p>This feature is currently under development.</p>
            <div className="w-30 h-30">
              <Loader2 />
            </div>
            <button
              onClick={() => setModalOpen(false)}
              className="mt-4 text-[#1c1c1c] bg-white px-4 py-2 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <main className="p-4 bg-[#1c1c1c] min-h-screen text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<Createpost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;

// import React from "react";
// import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// import { logo } from "./assets";
// import { Home, Createpost } from "./pages";
// const App = () => {
//   return (
//     <BrowserRouter>
//       <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
//         <Link to="/">
//           <img
//             src={logo}
//             alt="logo"
//             className="w-28 rounded-full  h-16 object-contain "
//           ></img>
//         </Link>
//         <Link
//           to="/create-post"
//           className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
//         >
//           Create
//         </Link>
//       </header>
//       <header>
//         <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh- 73px)]"></main>
//         <Routes>
//           <Route path="/" element={<Home />}></Route>
//           <Route path="/create-post" element={<Createpost />}></Route>
//         </Routes>
//       </header>
//     </BrowserRouter>
//   );
// };

// export default App;
