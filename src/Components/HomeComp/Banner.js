import React from "react";
import { TiTick } from "react-icons/ti";
import person from "../../Assets/Banner/ezgif-1.png";
import leaves from "../../Assets/Banner/leaves-flower.png";
import bottle from "../../Assets/Bottle/one-bottle.png";
import gradient from "../../Assets/Others/gradient-bg.png";
import tick from "../../Assets/Svg/yellow-tick.svg"

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-primaryLight text-white">
      <div className=" relative lg:h-[699px] h-96 w-full overflow-hidden">
        <div className="container mx-auto relative">
        <div className="absolute lg:top-40 top-10 z-50">
          <h1 className="lg:text-8xl md:text-5xl text-3xl space-x-4 ml-2">
            <span className="font-bold">MELT FAT</span>
            <span className="italic text-red-600">FAST!</span>
          </h1>

          <h3 className="text-black lg:text-4xl md:text-2xl sm:w-full w-40 lg:py-2 ml-2">
            BOOST YOUR KETO RESULTS
          </h3>

          <p className="text-cYellow lg:text-2xl md:text-xl  font-medium tracking-wide flex flex-col lg:py-5 py-2 ml-2">
            <span>Powerful New Formula</span>
            <span>Triggers Fat-Burning Ketosis!</span>
          </p>

          <ul className="flex flex-col gap-y-2 lg:text-xl md:text-lg text-sm md:pt-0 pt-4 ml-2">
            <li className="flex items-center sm:gap-x-3 gap-x-2">
            <img src={tick} alt="" className="sm:w-5 w-3 sm:mt-2 mt-1" />
              Burn Fat For Energy
            </li>
            <li className="flex items-center sm:gap-x-3 gap-x-2">
              <img src={tick} alt="" className="sm:w-5 w-3 sm:mt-2 mt-1" />
              Release Fat Stores
            </li>
            <li className="flex items-center sm:gap-x-3 gap-x-2">
              <img src={tick} alt="" className="sm:w-5 w-3 sm:mt-2 mt-1" />
              Increase Energy Naturally
            </li>
            <li className="flex items-center sm:gap-x-3 gap-x-2">
              <img src={tick} alt="" className="sm:w-5 w-3 sm:mt-2 mt-1" />
              Enjoy Fast Weight Loss
            </li>
            <li className="flex items-center sm:gap-x-3 gap-x-2">
              <img src={tick} alt="" className="sm:w-5 w-3 sm:mt-2 mt-1" />
              Love The Way You Feel!
            </li>
          </ul>
        </div>
       </div>

        {/* image section */}
        <img
          src={leaves}
          alt=""
          className="absolute lg:h-[500px] md:h-[400px] h-60 lg:top-60 lg:right-[440px] -right-3 top-20"
        />

        <img
          src={person}
          alt=""
          className="absolute lg:h-[600px] h-52 lg:w-[900px] lg:right-0 -right-8 lg:top-14 top-32"
        />

        <img
          src={gradient}
          alt=""
          className="lg:h-44 lg:w-[600px] h-24 w-40 absolute right-0 lg:-bottom-4 -bottom-0"
        />

        <img
          src={bottle}
          alt=""
          className="lg:h-[370px] h-40 absolute lg:right-[470px] right-24 bottom-0"
        />
      </div>
    </div>
  );
};

export default Banner;
