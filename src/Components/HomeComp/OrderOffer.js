import React from "react";
import image1 from "../../Assets/Others/Kickstart Guide.png";
import image2 from "../../Assets/Others/Natural-Stress-Relief.png";

const OrderOffer = () => {
  return (
    <div className="bg-[#00B396] py-5">
      <div className="container mx-auto space-y-[23px] sm:mt-[50px] mt-[19px] sm:mb-[74px]">
        <h1 className="lg:text-[41px] text-[20px] max-w-[793px] sm:w-full w-[300px] mx-auto text-white sm:font-bold font-[600] text-center px-2 mb-[23px]">
          Order <span className="text-[#FBE306]">6 Bottles</span> or
          <span className="text-[#FBE306]"> 3 Bottles </span>
          and Get 2 FREE Bonuses!
        </h1>

        <div className="flex flex-col px-5 lg:px-0 lg:flex-row justify-center items-center lg:gap-x-20 gap-y-10  lg:gap-y-0 ">

          {/* card one */}
          <div className="card pb-6 lg:pb-0 max-w-[503px]  w-full lg:h-[645px] border-2 border-[#36F3D5]">
            <div className="sm:h-[82px] h-[53px] bg-[#047663] rounded-t-2xl p-1 flex justify-center items-center text-center">
              <h1 className="sm:text-2xl text-[16px] font-[450] text-white px-4">
                <span className="text-[#36F3D5] font-bold">BONUS #1</span> Keto
                Kickstart Guide
              </h1>
            </div>
            <div className="flex flex-col items-center mt-[20px]">
              <img
                className="h-[169px] w-[174px] lg:h-[280px]  lg:w-[300px] mb-5"
                src={image1}
                alt=""
              />
              <div>
                <h1 className="text-white lg:text-[22px] font-semibold">
                  MSRP:
                  <span className="w-16 relative mx-2">
                    <span>$59.95</span>
                    <div className="bg-[#E32B1E] lg:w-20  w-14 h-[4px] absolute lg:top-3 top-2 right-0"></div>
                  </span>
                  Today:
                  <span className="text-cYellow"> FREE</span>
                </h1>
              </div>
              <p className="px-4 pt-[10px] text-white lg:text-[22px] font-medium-">
                Everything you need to know to kickstart your KetoSlim journey
                like a pro and get results fast. What to expect, mistakes to
                avoid, tips for staying on track and much more!
              </p>
            </div>
          </div>

          {/* card two */}
          <div className="card max-w-[503px] w-full pb-6 lg:pb-0 lg:h-[645px] border-2 border-[#36F3D5]">
            <div className="sm:h-[82px] h-[53px] bg-[#047663] rounded-t-2xl p-1 flex justify-center items-center text-center">
              <h1 className="sm:text-2xl text-[16px] font-[450] text-white px-4">
                <span className="text-[#36F3D5] font-bold">BONUS #1</span> Natural Stress Relief
              </h1>
            </div>
            <div className="flex flex-col items-center mt-[20px]">
              <img
                className="h-[169px] w-[174px] lg:h-[280px]  lg:w-[302px] mb-5"
                src={image2}
                alt=""
              />
              <div>
                <h1 className="text-white lg:text-[22px] font-semibold">
                  MSRP:
                  <span className="w-16 relative mx-2">
                    <span>$59.95</span>
                    <div className="bg-[#E32B1E] lg:w-20 w-14 h-[4px] absolute lg:top-3 top-2 right-0"></div>
                  </span>
                  Today:
                  <span className="text-cYellow"> FREE</span>
                </h1>
              </div>
              <p className="px-4 pt-[10px] text-white lg:text-[22px] text-[13.5px] font-medium">
              With your brand-new fast-tracked body comes a new mindset. Discover simple methods you can do right now to instantly relieve stress and calm your mind, boost confidence and reduce anxiety.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderOffer;
