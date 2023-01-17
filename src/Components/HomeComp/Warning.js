import React from "react";

const Warning = () => {
  return (
    <div className="bg-black text-white lg:text-[19px] md:text-xl text-[9px] sm:h-[78px] h-[56px] flex justify-center items-center text-center px-2">
      <div className="container mx-auto">
      <h1>
        <span className="text-cYellow mr-2">Warning!</span> 
        Due to extremelt high demand there is a limited supply of ketoBOOST+
        Capsules in stock as of
        <span className="text-cYellow ml-1"> November 21, 2022 HURRY!</span>
      </h1>
      </div>
    </div>
  );
};

export default Warning;
