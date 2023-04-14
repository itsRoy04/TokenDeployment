import React from "react";
import TypeTokenCard from "@/components/TypeTokenCard";
const Tokens = () => {
  return (
    <>
      <div className="flex px-20 justify-center">
        <div className="flex justify-start">
          {/* <TypeTokenCard /> */}
        </div>

        <div className="flex ">
          <div className="py-20 px-12 bg-white rounded-2xl shadow-xl z-20">
          <div className="h-72 border-b-2 border-palette-lighter flex justify-center items-center">
          <img
            // src={tokens.LOGO}
            // alt={imageNode.altText}
            // layout="fill"
            className="transform duration-500 ease-in-out hover:scale-110 w-56 h-56 "
          />
        </div>
        <div className="h-48 relative">
          <div className="font-primary text-palette-primary text-2xl pt-4 px-4 font-semibold">
            {/* {title} */}
          </div>
          <div className="text-lg text-gray-600 p-4 font-primary font-light text-justify">
            {/* {description} */}
          </div>
          <div
            className="text-palette-dark font-primary font-medium text-base absolute bottom-0 right-0 mb-4 pl-8 pr-4 pb-1 pt-2 bg-palette-lighter 
            rounded-tl-sm triangle"
          >
            {/* <Price
              currency="$"
              num={price}
              numSize="text-lg"
            /> */}
          </div>
        </div>
        
        
            <div>
              <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">
                Create Token
              </h1>
              <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">
                Create Token to enjoy all the services with onclick implementation.
              </p>
            </div>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Token Name"
                className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
              />
                   <input
                type="text"
                placeholder="Token Symbol"
                className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
              />
              <input
                type="text"
                placeholder="Token Supply"
                className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
              />
           
            </div>
            <div className="text-center mt-6">
              <button className="py-3 w-64 text-xl text-white bg-blue-400 rounded-2xl">
                Deploy
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tokens;
