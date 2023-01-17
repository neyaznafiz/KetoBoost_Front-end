import React from "react";
import yahoo from "../../Assets/Icons/yahoo.png";
import okm from "../../Assets/Icons/okMagagine.png";
import mw from "../../Assets/Icons/market-watch.png";
import usaT from "../../Assets/Icons/USA-Today.png";

const Organization = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center lg:gap-x-24 gap-x-5 lg:my-20 my-10 w-max mx-auto">
        <img src={yahoo} alt="" className="lg:h-full h-5" />
        <img src={mw} alt="" className="lg:h-full h-5" />
        <img src={okm} alt="" className="lg:h-full h-5" />
        <img src={usaT} alt="" className="lg:h-full h-5" />
      </div>
    </div>
  );
};

export default Organization;
