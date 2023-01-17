import React from "react";
import img from "../../Assets/Bottle/img.png";

const SupInfo = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-primaryLight text-white lg:h-[780px] h-full w-full flex items-center ">
      <div className="container mx-auto flex lg:flex-row flex-col-reverse items-center justify-center">
        <div className="lg:max-w-9/12 w-full h-full flex flex-col py-5 sm:gap-y-10 gap-y-5 lg:py-24 md:py-10 text-lg p-5 ">

          <h2 className="sm:text-2xl text-xl w-full">
            This revolutionary supplement <br className="hidden sm:block"/> does this in two ways.
          </h2>

          <p className="w-full font-light text-sm sm:text-lg">
            <b className="font-bold">1. It helps you get into a state of ketosis FAST.</b> Rather than
            the typical 4-6 day cycle, with KetoBOOST+ you can be in a state of
            ketosis in as little as 48 hours.
          </p>

          <p className="w-full font-light text-sm sm:text-lg">
            <b className="font-bold">
              2.KetoBOOST+ insulates your body from slipping out of ketosis. </b>If you caved in and had that ice cream or pastry, KetoBOOST+ will
            make sure that your body remains in a state of ketosis even when you
            go over your carb intake limit. (Of course, you have to be
            reasonable with this).
          </p>

          <p className="w-full font-light text-sm sm:text-lg">
            With KetoBOOST+ on your side, you will get even more out of your
            keto diet. The sooner you can get into a state of ketosis the faster
            you can start <b className="font-bold">melting fat</b> off your body.
          </p>

          <p className=" w-full font-light text-sm sm:text-lg">
            At the same time, if you do go slightly above your carb limits for
            the day, you’ll have the peace of mind that you won’t be
            compromising the ketosis state that you have worked so hard to get
            to.
          </p>
        </div>

        {/* image section */}
        <div className="lg:-ml-48 md:-ml-40 -ml-14 -mb-16 h-full lg:max-w-6/12 w-full ">
          <img src={img} alt="" className="lg:h-[800px] h-full w-full lg:-mt-10" />
        </div>
      </div>
    </div>
  );
};

export default SupInfo;
