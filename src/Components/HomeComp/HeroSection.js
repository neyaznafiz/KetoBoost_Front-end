import React from "react";
import image from "../../Assets/Others/doctrs.png";
const HeroSection = () => {
  return (
    <div className="lg:my-20 my-5 container mx-auto">
      {/* header */}
      <div className="sm:max-w-[730px] sm:w-full w-[330px] text-center mx-auto sm:pb-[41px]">
        <h1 className="sm:text-[41px] text-[15px] font-bold">
          Turbocharge Your Keto Weight Loss By Up To 150% With KetoBOOST+
        </h1>
      </div>

      {/* body */}
      <div className="flex lg:flex-row flex-col justify-center gap-x-3 lg:max-w-[1200px] mx-auto">
        <div className="hidden lg:block w-[900px]">
          <img src={image} alt="" className="h-[780px] w-full object-contain" />
        </div>

        <div className="">
          <p className="text-[13px] p-5 lg:p-0 flex flex-col sm:gap-y-[22px] gap-y-[11px] lg:text-xl">
            <span>
              Getting started with the keto diet is easily the best decision you
              could have made to improve how your body looks, feels, and
              functions
            </span>
            <span>
              By reducing your sugar intake, your body will soon be{" "}
              <b>burning fat </b>
              instead of carbs for fuel. When this happens, it’s called being in
              a state of KETOSIS – the “holy grail” of weight loss.
            </span>
            <span>
              Ketosis is a <b>powerful metabolic state</b> that has the
              potential to completely change the way your body functions. By
              using fat as the primary fuel source you will not only lose pounds
              in a matter of days but you will also feel full of energy.
            </span>
            <span>
              Ketosis is a powerful metabolic state that has the potential to
              completely change the way your body functions. By using fat as the
              primary fuel source you will not only lose pounds in a matter of
              days but you will also feel full of energy.
            </span>
            <span>
              It is not uncommon for people to get better sleep,{" "}
              <b>experience better moods,</b> concentrate better and even see
              illnesses and wounds heal faster.
            </span>
          </p>

          <div className="lg:mt-[48px] mt-[11px] px-4 lg:px-0 lg:pb-0 md:pb-[41px] ">
            <h1 className="text-lg leading-[20px] lg:text-4xl lg:leading-[57px] text-start font-bold pb-[10px]">
              So Why KetoBOOST+?
            </h1>
            <p className="text-[13px] flex flex-col sm:gap-y-[17px] gap-y-[11px] lg:text-xl">
              <span>
                The thing people struggle with most is
                <b> staying in a state of ketosis.</b>
              </span>
              <span>
                We all enjoy a good meal. Even though the keto diet is quite
                delicious, a few weeks in you’ll probably find yourself craving
                some carbs.
              </span>
              <span>
                Fried rice, a bucket of ice cream, sloppy fries, warm doughnuts,
                whatever your vice may be, sooner or later you may give in to a
                cheat meal.
              </span>
              <span>
                Luckily, KetoBOOST+ is designed specifically to solve this issue
                and help you maintain ketosis.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
