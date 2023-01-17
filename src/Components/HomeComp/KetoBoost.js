import React from "react";
import { BsFillHandThumbsUpFill } from "react-icons/bs";

const KetoBoost = () => {
  return (
    <div className="bg-gray-200 lg:py-16 py-6">
      <div className="container mx-auto border flex flex-col justify-center ">
        <h1 className="sm:text-[51px] text-[21px] text-primaryLight font-bold text-center">
          Keto<span className="text-red-600">BOOST+</span>
        </h1>

        <div className="grid grid-cols-2 lg:grid-cols-3 lg:gap-x-9 gap-x-4 gap-y-6 mx-auto lg:mt-10 mt-6 px-3 max-w-[1200px]">
          {/* one */}
          <div className="flex items-center gap-3 sm:w-80">
            <div className="bg-white lg:p-4 p-2 rounded-full border-2 border-primaryLight flex justify-center items-center">
              <BsFillHandThumbsUpFill className="text-primaryLight lg:text-3xl" />
            </div>
            <p className="sm:text-[25px] text-[13px] sm:font-[500]">
              Natural Formula
            </p>
          </div>

          {/* two */}
          <div className="flex items-center gap-3 sm:w-96">
            <div className="bg-white lg:p-4 p-2 rounded-full border-2 border-primaryLight flex justify-center items-center">
              <BsFillHandThumbsUpFill className="text-primaryLight lg:text-3xl" />
            </div>
            <p className="sm:text-[25px] text-[13px] font-[500]">
              Plant Ingredients
            </p>
          </div>

          {/* three */}
          <div className="flex items-center gap-3 sm:w-96">
            <div className="bg-white lg:p-4 p-2 rounded-full border-2 border-primaryLight flex justify-center items-center">
              <BsFillHandThumbsUpFill className="text-primaryLight lg:text-3xl" />
            </div>
            <p className="sm:text-[25px] text-[13px] font-[500]">
              Non-Habit Forming
            </p>
          </div>

          {/* four */}
          <div className="flex items-center gap-3 sm:w-60">
            <div className="bg-white lg:p-4 p-2 rounded-full border-2 border-primaryLight flex justify-center items-center">
              <BsFillHandThumbsUpFill className="text-primaryLight lg:text-3xl" />
            </div>
            <p className="sm:text-[25px] text-[13px] font-[500]">Non-GMO</p>
          </div>

          {/* five */}
          <div className="flex items-center gap-3 sm:w-72">
            <div className="bg-white lg:p-4 p-2 rounded-full border-2 border-primaryLight flex justify-center items-center">
              <BsFillHandThumbsUpFill className="text-primaryLight lg:text-3xl" />
            </div>
            <p className="sm:text-[25px] text-[13px]  font-[500]">
              No Stimulants
            </p>
          </div>

          {/* six */}
          <div className="flex items-center gap-3 sm:w-80">
            <div className="bg-white lg:p-4 p-2 rounded-full border-2 border-primaryLight flex justify-center items-center">
              <BsFillHandThumbsUpFill className="text-primaryLight lg:text-3xl" />
            </div>
            <p className="sm:text-[25px] text-[13px] font-[500]">
              Easy To Swallow
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KetoBoost;
