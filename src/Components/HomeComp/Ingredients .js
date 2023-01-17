import React from "react";
import image1 from "../../Assets/Others/sodium.png";
import image2 from "../../Assets/Others/Triglyceride-Oil.png";
import image3 from "../../Assets/Others/L-Arginine.png";
import image4 from "../../Assets/Others/Dehydroepiandrosterone.png";
import tick from "../../Assets/Svg/tick.svg";

const Ingredients = () => {
  return (
    <div className="mt-5">
      {/* title */}
      <div className="sm:max-w-[800px] sm:w-full max-w-[375px] text-center mx-auto sm:py-[41px]">
        <h1 className="sm:text-[41px] text-[20px] font-bold ">
          Inside every KetoBOOST+ Capsule You’ll Find:
        </h1>

        <h2 className="sm:text-[23px] mt-2 px-2">
          6 clinically-proven ingredients that increase calorie-burning ketosis
        </h2>
      </div>

      {/* body */}
      <div className="px-10 sm:px-0 lg:-mt-20 grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:py-20 py-5 max-w-[1200px] mx-auto justify-items-center">
        {/* card one */}
        <div className="max-w-[500px] w-full">
          <div>
            <img
              className="w-full lg:h-full md:max-h-96 object-cover rounded-md"
              src={image1}
              alt=""
            />
          </div>
          <div>
            <h1 className="font-bold lg:text-[24px] py-5 lg:w-[506px] lg:h-[80px] ">
              All 3 BHB compounds (Sodium, Calcium, Magnesium)
            </h1>
            <ul className="flex flex-col gap-y-2 lg:mt-6 sm:text-xl text-sm">
              <li className="flex items-start gap-x-2 lg:w-[487px]">
                <img src={tick} alt="" className="w-4 mt-2" />
                BHB is packed with energy that fuels your brain, heart, and
                muscles when carbs aren't available.
              </li>
              <li className="flex items-start gap-x-2 lg:w-[487px]">
                <img src={tick} alt="" className="w-4 mt-2" />
                Consuming BHB-filled supplements increases the ketone count in
                your body and helps you enter ketosis faster.
              </li>
              <li className="flex items-start gap-x-2 lg:w-[487px]">
                <img src={tick} alt="" className="w-4 mt-2" />
                With a higher base-level ketone body count you can stay in
                ketosis even when you eat extra carbs.
              </li>
            </ul>
          </div>
        </div>

        {/* card two */}
        <div className=" max-w-[500px] w-full">
          <div>
            <img
              className="rounded-md w-full lg:h-full md:max-h-96 object-cover"
              src={image2}
              alt=""
            />
          </div>
          <div>
            <h1 className="font-bold lg:text-[24px] py-5 lg:w-[506px] lg:h-[80px] ">
              Medium Chain Triglyceride (MCT) Oil
            </h1>
            <ul className="flex flex-col gap-y-2 sm:text-xl text-sm lg:mt-5">
              <li className="flex items-start gap-x-2 lg:w-[487px]">
              <img src={tick} alt="" className="w-4 mt-2" />
                MCTs are a form of high-quality fat that the body can quickly
                breakdown and use for energy
              </li>
              <li className="flex items-start gap-x-2 lg:w-[487px]">
              <img src={tick} alt="" className="w-4 mt-2" />
                The quick metabolization of MCTs increases ketone production and
                helps the body get into ketosis quickly
              </li>
              <li className="flex items-start gap-x-2 lg:w-[487px]">
              <img src={tick} alt="" className="w-4 mt-2" />
                MCTs are the best alternative for people who cannot handle
                regular fat
              </li>
            </ul>
          </div>
        </div>

        {/* card three */}
        <div className="max-w-[520px] w-full">
          <div>
            <img
              className="rounded-md w-full lg:h-full md:max-h-96 object-cover"
              src={image3}
              alt=""
            />
          </div>
          <div>
            <h1 className="font-bold lg:text-[24px] lg:w-[506px] py-5 lg:h-[80px] ">
              L-Arginine Ketoglutarate (AAKD)
            </h1>
            <ul className="flex flex-col gap-y-2 sm:text-xl text-sm lg:mt-5">
              <li className="flex items-start gap-x-2 lg:w-[487px]">
              <img src={tick} alt="" className="w-4 mt-2" />
                Increases the flow of blood, oxygen, and nutrients to muscles
                throughout the body
              </li>
              <li className="flex items-start gap-x-2 lg:w-[487px]">
                <img src={tick} alt="" className="w-4 mt-2" />
                Helps the body recover faster from workouts
              </li>
              <li className="flex items-start gap-x-2 lg:w-[487px]">
                <img src={tick} alt="" className="w-4 mt-2" />
                Provides more energy to the body in a state of ketosis
              </li>
              <li className="flex  gap-x-2 lg:w-[487px]">
                <img src={tick} alt="" className="w-4 mt-2" />
                Improve strength and healthy muscle tissue
              </li>
            </ul>
          </div>
        </div>

        {/* card four */}
        <div className="max-w-[520px] w-full">
          <div>
            <img
              className="rounded-md w-full lg:h-full md:max-h-96 object-cover"
              src={image4}
              alt=""
            />
          </div>
          <div>
            <h1 className="font-bold lg:text-[24px] py-5 lg:w-[506px] lg:h-[80px] ">
              7 Keto Dehydroepiandrosterone (7-Keto- DHEA)
            </h1>
            <ul className="flex flex-col gap-y-2 sm:text-xl text-sm lg:mt-5">
              <li className="flex items-start gap-x-2 lg:w-[487px]">
                <img src={tick} alt="" className="w-4 mt-2" />
                Gives a metabolic kick that speeds up the basal metabolic rate
              </li>
              <li className="flex items-start gap-x-2 lg:w-[487px]">
                <img src={tick} alt="" className="w-4 mt-2" />
                It helps reduce how much excess energy is stored as fat
              </li>
              <li className="flex items-start gap-x-2 lg:w-[487px]">
              <img src={tick} alt="" className="w-4 mt-2" />
                Higher metabolic rates mean excess energy is converted into heat
                rather than being stored
              </li>
              <li className="flex items-start gap-x-2 lg:w-[487px]">
                <img src={tick} alt="" className="w-4 mt-2" />
                Improves muscle strength and endurance
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ingredients;
