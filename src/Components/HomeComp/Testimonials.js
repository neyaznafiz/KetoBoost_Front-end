import React from "react";
import image01 from "../../Assets/Person/images.png";
import imageT from "../../Assets/Person/Top images.png";
import imageBL from "../../Assets/Person/images-b-l.png";
import imageB from "../../Assets/Person/Below images.png";

import image5 from "../../Assets/Person/fdb-p-1.png";
import image6 from "../../Assets/Person/fdb-p-2.png";
import image7 from "../../Assets/Person/fdb-p-3.png";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="lg:pt-[70px] lg:pb-[90px] lg:mt-0 md:mt-[40px] mt-[30px]">
      {/* heading */}
      <h1 className="lg:text-[41px] md:text-[20px] text-[15px] md:w-[330px] lg:w-[800px] w-[210px]  mx-auto text-center font-bold  text-[#000000] lg:leading-[57px]">
        Real KetoBOOST+ Users. Real Life-Changing Results.
      </h1>

      <div className="h-[5px] max-w-[362px] sm:w-full w-[210px] bg-[#36F3D5] mx-auto sm:mb-10 mt-4 "></div>

      {/* body */}
      <div className="flex flex-col justify-center items-center">
        {/* top image */}
        <div className="sm:block hidden mx-5">
          <img src={image01} alt="" />
        </div>

        <div className="sm:hidden block w-[65%] flex justify-center">
          <img src={imageT} alt="" />
        </div>

        {/* testo.. */}
        <div className="review lg:mt-24 px-3 w-full container">
          <div className="flex gap-2 lg:gap-6">
            <img
              className="w-[39px] h-[39px] lg:h-[102px] lg:w-[102px] rounded-xl lg:rounded-none"
              src={image5}
              alt=""
            />

            <div>
              <h1 className="text-primary text-[21px] lg:text-3xl font-bold">
                Evelyn is 35 lbs lighter so far…
              </h1>
              <div className="pb-1 lg:py-3 py-0 flex gap-x-2">
                <div className="rating space-x-1 lg:mt-1">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400 lg:w-[22px] w-3"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400 lg:w-[22px] w-3"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400 lg:w-[22px] w-3"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400 lg:w-[22px] w-3"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400 lg:w-[22px] w-3"
                    checked
                  />
                </div>
                  <p className="text-[#CC7901] font-[600] lg:text-[24px] text-[15px] lg:mt-0 mt-[1px]">
                    Verified Purchase
                  </p>
              </div>
            </div>
          </div>
          <div className=" lg:flex flex gap-x-2 lg:gap-x-0 lg:items-start lg:ml-32">
            <FaQuoteLeft className="lg:text-[40px] text-[190px] h-full text-primary" />
            <div className="lg:mt-[16px] mt-1 lg:ml-[6px] lg:w-[1100px] lg:text-xl text-[13.5px]">
              <p>
                Custom keto meal plans have been a game changer for me (-35 lbs
                so far!) but I’m still not over carbs completely. Sometimes I
                will have the occasional cheat meal and KetoBOOST+ helps me stay
                in ketosis. With KetoBOOST+ I have the peace of mind that I have
                some room to enjoy my food. This little bit of slack gives me
                the strength I need to keep moving forward with my KetoSlim diet
                - great combo, thank you!!
              </p>
              <p className="pt-5">
                <b>Evelyn G.</b>- <span className="text-[16px]">New Mexico, USA</span>
              </p>
            </div>
          </div>
        </div>

        <div className="review sm:mt-[80px] mt-[41px] px-3 w-full container">
          <div className="flex  gap-2 lg:gap-6">
            <img
              className="w-[39px] h-[39px] lg:h-[102px] lg:w-[102px] rounded-xl lg:rounded-none"
              src={image6}
              alt=""
            />

            <div>
              <h1 className="text-[#145154] text-[21px] lg:text-3xl font-bold">
                Dr. Ford takes KetoBOOST+ to stay on track……
              </h1>
              <div className="pb-1 lg:py-3 py-0 flex gap-x-2">
                <div className="rating space-x-1 lg:mt-1">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400 lg:w-[22px] w-3"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400 lg:w-[22px] w-3"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400 lg:w-[22px] w-3"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400 lg:w-[22px] w-3"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400 lg:w-[22px] w-3"
                    checked
                  />
                </div>
                  <p className="text-[#CC7901] font-[600] lg:text-[24px] text-[15px] lg:mt-0 mt-[1px]">
                    Verified Purchase
                  </p>
              </div>
            </div>
          </div>

          <div className=" lg:flex flex gap-x-2 lg:gap-x-0 lg:items-start lg:ml-32">
            <FaQuoteLeft className="lg:text-[40px] text-[190px] h-full text-primary" />
            <div className="lg:mt-[16px] mt-2 lg:ml-[6px] lg:w-[1100px] lg:text-xl text-[13.5px]">
              <p>
                I have a fast paced lifestyle being a doctor and it's very
                challenging to plan out meals. With KetoBOOST+ I no longer have
                to worry about getting my exact macronutrients. My pre-planned
                meals from KetoSlim take care of my macros to a large extent but
                if I can’t get in one of my planned meals I can eat something
                else and have KetoBOOST+ take care of the rest.
              </p>
              <p className="pt-5">
                <b>Evelyn G.</b>- <span className="text-[16px]">New Mexico, USA</span>
              </p>
            </div>
          </div>
        </div>

        <div className="review sm:mt-[80px] mt-[41px] w-full container px-3">
          <div className="flex  gap-2 lg:gap-6">
            <img
              className="w-[39px] h-[39px] lg:h-[102px] lg:w-[102px] rounded-xl lg:rounded-none"
              src={image7}
              alt=""
            />

            <div>
              <h1 className="text-[#145154] text-[21px] lg:text-3xl font-bold">
                Lauren finally broke the negative cycle……
              </h1>
              <div className="pb-1 lg:py-3 py-0 flex gap-x-2">
                <div className="rating space-x-1 lg:mt-1">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400 lg:w-[22px] w-3"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400 lg:w-[22px] w-3"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400 lg:w-[22px] w-3"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400 lg:w-[22px] w-3"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400 lg:w-[22px] w-3"
                    checked
                  />
                </div>
                  <p className="text-[#CC7901] font-[600] lg:text-[24px] text-[15px] lg:mt-0 mt-[1px]">
                    Verified Purchase
                  </p>
              </div>
            </div>
          </div>
          <div className="lg:flex flex gap-x-2 lg:gap-x-0  lg:items-start   lg:ml-32">
            <FaQuoteLeft className="lg:text-[40px] text-[190px] h-full text-primary" />
            <div className="lg:mt-[16px] mt-2 lg:ml-[6px] lg:w-[1100px] lg:text-xl text-[13.5px]">
              <p>
                I have struggled all my life with weight problems. Every time I
                have started a diet it has only lasted a couple of weeks and
                eventually I have found myself in the same negative cycle that
                got me overweight in the first place. With KetoBOOST+ I have the
                added benefit of being in ketosis even if my diet isn't dialled
                in to a T.
              </p>
              <p className="mt-5">
                <b>Evelyn G.</b>- <span className="text-[16px]">New Mexico, USA</span>
              </p>
            </div>
          </div>
        </div>

        {/* bottom image */}
        <div className="sm:block hidden mx-5 mt-10 ">
          <img src={imageBL} alt="" />
        </div>

        <div className="sm:hidden block w-[70%] flex justify-center mt-[90px]">
          <img src={imageB} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
