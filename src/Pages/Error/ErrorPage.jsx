import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="lg:mx-20 px-5 ">
            
      <div className="text-center bg-white rounded-2xl border 2 border-green-200 mt-15 pb-8 font-[quickSand] ">
        <div className="flex justify-center items-center">
          <img className="w-[250px]" src="/errorImg.png" alt="" />
        </div>
        <div>
          <p className="text-3xl font-bold pt-2 ">
            <span className="text-red-700 font-extrabold" >404 - </span> page not found
          </p>
          <p className="font-medium text-lg pt-2">The page you'r are looking doesn't exist</p>
        </div>
        <Link to={"/"}>
        <button className="mt-3 justify-center"> 
           <div className="box-border relative z-30 inline-flex items-center justify-center w-auto px-4 py-1.5 overflow-hidden font-bold text-white transition-all duration-300 bg-gradient-to-r from-green-500 to-yellow-500 ; rounded-lg cursor-pointer group ring-offset-2 ring-1 ring-green-300 ring-offset-green-200 hover:ring-offset-green-500 ease focus:outline-none"> 
          
            <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
            <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
            <span className="relative z-20 flex items-center text-sm">
              <svg
                className="relative w-5 h-5 mr-2 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
              <span className="text-lg">Back to home </span>
            </span>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;