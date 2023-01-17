import React from "react";
import Heading from "./Heading";
import whiteTB from "../../Assets/Others/white-tb.png";
import yoga from "../../Assets/Others/yoga.png";
import bodyCarbs from "../../Assets/Others/bodu-carbs.png";
import bodyFats from "../../Assets/Others/body-fats.png";
import vs from "../../Assets/Others/VS.png";

const Info = () => {
  return (
    <div className="lg:-mt-10">
    
      {/* title */}
      <div className="sm:max-w-[850px] sm:w-full max-w-[360px] text-center mx-auto sm:py-[41px] space-y-5 sm:mt-0 mt-[36px] lg:-mb-0 -mb-9">
        <h1 className="sm:text-[46px] text-[20px] font-bold text-red-600">
          HOW DOES IT WORK?
        </h1>

        <h2 className="sm:text-[23px] text-[13px] font-semibold sm:px-0 px-4">
          KETOSIS FORCES YOUR BODY TO BURN FAT FOR ENERGY INSTEAD OF CARBS.
        </h2>
      </div>

      {/* body */}
      <div className="lg:h-[900px] md:h-[1800px] h-[1683px] relative flex flex-col items-center">
        <div className="w-full border relative hidden lg:block z-1">
          <img src={yoga} alt="" className="object-cover h-[500px] w-full" />
          <img
            src={whiteTB}
            alt=""
            className="w-full h-96 absolute -bottom-44"
          />
        </div>

        <div className="container absolute top-16 z-50 flex lg:flex-row flex-col lg:justify-center md:justify-around items-center lg:gap-y-8 gap-y-14 lg:gap-x-52 md:gap-x-20">
          {/* card one */}
          <div className="flex flex-col justify-center items-center mx-2">
            <div className="-mb-2 z-50">
              <img src={bodyCarbs} alt="" className="h-40" />
            </div>

            <div className="bg-white shadow-lg max-w-[400px] w-full rounded-lg lg:h-[570px] md:h-[640px]">
              <div className="bg-black text-white mx-16 text-center py-3 rounded-b-lg">
                <p>WHY YOUR DIETS FAIL…</p>
              </div>

              <div className="p-8">
                <p className="min-h-[170px]">
                  Currently with the massive load of carbohydrates in our foods,
                  our bodies are conditioned to burn carbs for energy instead of
                  fat. Because it is an easier energy source for the body to use
                  up.
                </p>

                {/* divider */}

                <div className="my-10">
                  <div className="divider">
                    <p className="bg-red-600 text-white px-8 py-3 rounded-full">
                      THE PROBLEM
                    </p>
                  </div>
                </div>

                {/* content */}
                <div className="space-y-5">
                  <p>
                    1. Fat stores on the body as carbs are burned as an easy
                    energy fuel. Essentially we gain more weight year after
                    year.
                  </p>

                  <p>
                    2. Carbs are not the body’s ideal source of energy therefore
                    we are usually left feeling tired, stressed and drained at
                    the end of each day.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* vs */}
          <div className="sm:-mb-28 lg:my-0 -my-12 z-[99] absolute lg:top-[calc(900px-520px)] md:top-[49.5%] top-[50.6%]">
            <img src={vs} alt="" className="lg:h-28 md:h-[100px] h-[85px]" />
          </div>

          {/* card two */}
          <div className="flex flex-col justify-center items-center mx-2 ">
            <div className="-mb-2 z-50">
              <img src={bodyFats} alt="" className="h-40" />
            </div>

            <div className="bg-white shadow-lg max-w-[400px] w-full  rounded-lg lg:h-[570px] md:h-[640px]">
              <div className="bg-black text-white mx-16 text-center py-3 rounded-b-lg">
                <p>WHY KETO WORKS!</p>
              </div>

              <div className="p-8">
                <p className="min-h-[190px]">
                  Ketosis is the state where your body is actually burning fat
                  for energy instead of carbs. Ketosis is difficult to obtain on
                  your own and takes day to regain if you fall out of it.
                  KetoBOOST+ capsules actually help your body achieve ketosis
                  fast and help you burn fat for energy instead of carbs!
                </p>

                {/* divider */}

                <div className="my-5">
                  <div className="divider">
                    <p className="bg-red-600 text-white px-8 py-3 rounded-full">
                      THE SOLUTION
                    </p>
                  </div>
                </div>

                {/* content */}
                <div className="space-y-5">
                  <p>
                    1. When your body is in ketosis, you are actually burning
                    stored fat for energy and not carbs!
                  </p>

                  <p>
                    2. Fat IS the body’s ideal source of energy and when you are
                    in ketosis you experience energy and mental clarity like
                    never before, and of course the desired weight loss.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
