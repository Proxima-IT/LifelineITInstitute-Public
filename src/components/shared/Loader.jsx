import React from "react";

const Loader = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-40">
      <div className="flex space-x-2">
        <div className="w-4 h-4 rounded-full bg-blue-400 animate-bounce"></div>
        <div className="w-4 h-4 rounded-full bg-blue-500 animate-bounce [animation-delay:.2s]"></div>
        <div className="w-4 h-4 rounded-full bg-blue-600 animate-bounce [animation-delay:.4s]"></div>
      </div>
    </div>
    </div>
  );
};

export default Loader;
