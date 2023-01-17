import React from "react";
import leavesBg from "../../Assets/Others/leaves-bg.png";
import oneBottle from "../../Assets/Bottle/one-bottle.png";
import sixBottle from "../../Assets/Bottle/six-bottle.png";
import threeBottle from "../../Assets/Bottle/three-bottle.png";
import { BsCart4 } from "react-icons/bs";
import { AiOutlineCheckSquare, AiFillStar } from "react-icons/ai";
import masterCard from "../../Assets/Icons/master-card-icon.png";
import visaCard from "../../Assets/Icons/visa-card-icon.png";
import acCard from "../../Assets/Icons/american-express-card-icon.png";
import discoverCard from "../../Assets/Icons/discover-card-icon.png";

const Discount = () => {
  return (
    <div>
      {/* top section */}
      <div className="relative lg:h-60 h-28 flex justify-center items-center">
        <img src={leavesBg} alt="" className="w-full h-full object-cover" />

        <div className="h-full w-full bg-[#021F57]/80 absolute top-0"></div>

        <h1 className="absolute text-white lg:text-4xl text-[17px] font-semibold tracking-wide text-center">
          Claim Your Discounted KetoBOOST+ <br /> Below Now While Stocks Last
        </h1>
      </div>

      {/* discount card section */}
      <div className="lg:py-20 py-5 bg-[#EEEEEE] lg:px-0 px-3">
        <div className="lg:flex  grid grid-cols-1 justify-items-center justify-center gap-y-5 gap-x-6 container mx-auto">
          {/* first card */}
          <div className="lg:h-[582px] sm:max-w-[450px] h-full sm:w-[390px] w-full bg-white border-2 border-gray-400 rounded-lg flex flex-col justify-around items-center p-5">
            <div>
              <div className="text-center">
                <h2 className="text-xl font-bold text-primaryLight">
                  1 BOTTLE
                </h2>
                <h3 className="text-lg text-black font-semibold">
                  30 Days supply
                </h3>
              </div>

              <img src={oneBottle} alt="" className="lg:h-72 w-40 object-contain" />
            </div>

            <div className="flex flex-col justify-center items-center gap-y-3">
              <p className="text-3xl font-bold text-primaryLight">
                $59 <small className="text-xs">/bottle</small>
              </p>

              <div className="flex justify-center">
                <button className="flex items-center gap-x-2 text-[#021F57] font-semibold bg-gradient-to-t from-[#FCD334] to-[#FFF698] px-5 py-2">
                  <span className="text-sm">ADD TO CART</span>
                  <BsCart4 className="text-white bg-[#021F57] text-2xl p-1 rounded-full" />
                </button>
              </div>

              <div className="flex items-center justify-center">
                <img src={masterCard} alt="" className="h-7 w-12" />
                <img src={visaCard} alt="" className="h-11 w-16 -mx-2 -my-1" />
                <img src={acCard} alt="" className="h-8 w-10" />
                <img src={discoverCard} alt="" className="h-10 w-14 -mr-2" />
              </div>

              <div className="flex items-center justify-center gap-x-2">
                <p className="w-12 relative">
                  <span>$100</span>
                  <div className="bg-red-700 w-11 h-[2px] absolute top-3 right-0"></div>
                </p>
                <p>$59</p>
              </div>
            </div>
          </div>

          {/* second card */}
          <div className="lg:h-[682px] sm:max-w-[450px] h-full sm:w-[390px] w-full bg-[#FFFEDA] border-2 border-primaryLight rounded-lg flex flex-col justify-around items-center p-5">
            <div>
              <div className="text-center">
                <h2 className="text-xl font-bold text-primaryLight">
                  6 BOTTLE
                </h2>
                <h3 className="text-lg text-black font-semibold">
                  180 Days supply
                </h3>
              </div>

              <div className="relative">
                <img src={sixBottle} alt="" className="h-72 w-full object-contain" />
                <p className="w-20 h-20 text-xl font-medium bg-[#0216C8] text-white border p-3 rounded-full -rotate-[30deg] absolute right-[1%] bottom-[5%]">
                  SAVE $480
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-y-3 ">
              <p className="text-3xl font-bold text-primaryLight">
                $19 <small className="text-xs">/bottle</small>
              </p>

              <div className="space-y-2 mb-3">
                <p className="bg-primaryLight text-white flex items-center gap-x-2 px-6 py-2 rounded-md uppercase italic">
                  <AiOutlineCheckSquare className="text-xl" />
                  free shipping!
                </p>

                <p className="bg-red-700 text-white flex items-center gap-x-2 px-6 py-2 rounded-md uppercase italic">
                  <AiOutlineCheckSquare className="text-xl" />2 free bonuses!
                </p>
              </div>

              <div className="flex justify-center">
                <button className="flex items-center gap-x-2 text-[#021F57] font-semibold bg-gradient-to-t from-[#FCD334] to-[#FFF698] px-5 py-2">
                  <span className="text-sm">ADD TO CART</span>
                  <BsCart4 className="text-white bg-[#021F57] text-2xl p-1 rounded-full" />
                </button>
              </div>

              <div className="flex items-center justify-center">
                <img src={masterCard} alt="" className="h-7 w-12" />
                <img src={visaCard} alt="" className="h-11 w-16 -mx-2 -my-1" />
                <img src={acCard} alt="" className="h-8 w-10" />
                <img src={discoverCard} alt="" className="h-10 w-14 -mr-2" />
              </div>

              <div className="flex items-center justify-center gap-x-2">
                <p className="w-12 relative">
                  <span>$504</span>
                  <div className="bg-red-700 w-11 h-[2px] absolute top-3 right-0"></div>
                </p>
                <p>$114</p>
              </div>
            </div>
          </div>

          {/* third card */}
          <div className="lg:h-[650px] sm:max-w-[450px] h-full sm:w-[390px] w-full bg-white border-2 border-gray-400 rounded-lg flex flex-col justify-around items-center p-5">
            <div className="text-center">
              <h2 className="text-xl font-bold text-primaryLight">3 BOTTLE</h2>
              <h3 className="text-lg text-black font-semibold">
                90 Days supply
              </h3>
            </div>

            <div className="relative">
              <img src={threeBottle} alt="" className=" w-full object-contain" />
              <p className="w-20 h-20 text-xl font-medium bg-[#0216C8] text-white border p-4 rounded-full -rotate-[30deg] absolute right-[3%] bottom-[14%]">
                SAVE $210
              </p>
            </div>

            <div className="flex flex-col justify-center items-center gap-y-3 ">
              <p className="text-3xl font-bold text-primaryLight">
                $29 <small className="text-xs">/bottle</small>
              </p>

              <p className="bg-primaryLight text-white flex items-center gap-x-2 px-6 py-2 rounded-md uppercase italic mb-3">
                <AiOutlineCheckSquare className="text-xl" />
                free shipping!
              </p>

              <div className="flex justify-center">
                <button className="flex items-center gap-x-2 text-[#021F57] font-semibold bg-gradient-to-t from-[#FCD334] to-[#FFF698] px-5 py-2">
                  <span className="text-sm">ADD TO CART</span>
                  <BsCart4 className="text-white bg-[#021F57] text-2xl p-1 rounded-full" />
                </button>
              </div>

              <div className="flex items-center justify-center">
                <img src={masterCard} alt="" className="h-7 w-12" />
                <img src={visaCard} alt="" className="h-11 w-16 -mx-2 -my-1" />
                <img src={acCard} alt="" className="h-8 w-10" />
                <img src={discoverCard} alt="" className="h-10 w-14 -mr-2" />
              </div>

              <div className="flex items-center justify-center gap-x-2">
                <p className="w-12 relative">
                  <span>$207</span>
                  <div className="bg-red-700 w-11 h-[2px] absolute top-3 right-0"></div>
                </p>
                <p>$87</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* bottom section */}
      <div className="text-center w-full bg-[#EEEEEE] pb-10 space-y-3 lg:-mt-5">
        <u className="text-[#A7A7A7] w-max mx-auto sm:text-xl text-[13px]">
          No thanks, I won’t be having cheat meals <br /> and don’t need ketosis
          support!
        </u>

        <h2 className="sm:text-[34px] text-[17px] font-semibold sm:pt-12 pt-5">Our customers say</h2>

        <div className="flex justify-center items-center gap-x-2 sm:text-3xl text-[19px] text-yellow-600">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>

        <p className="sm:text-[24px] text-[13px]">Based on real customer reviews!</p>
      </div>
    </div>
  );
};

export default Discount;
