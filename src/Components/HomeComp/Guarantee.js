import React from "react";
import gImage from "../../Assets/Icons/giarantedd.png";
import iconLogo from "../../Assets/Icons/infos-logo.png";

const Guarantee = () => {
  return (
    <div className="space-y-5 sm:my-20 my-8">
      {/* header */}
      <div className="sm:max-w-[730px] sm:w-full max-w-[330px] text-center mx-auto lg:pb-[41px]">
        <h1 className="sm:text-[41px] text-[23px] font-bold text-[#145154]">
        100% SATISFACTION <br /> 60-DAY MONEY <br className="block sm:hidden" /> BACK GUARANTEE
        </h1>
      </div>

      {/* body */}
      <div className="flex items-center lg:w-7/12 mx-auto container">
        <img src={gImage} alt="" className="w-80 h-60 hidden lg:block" />

        <p className="lg:text-2xl px-[17px]">
          Your order today is protected by our iron-clad 60-day{" "}
          <b>100% money-back guarantee.</b> If you are not astonished how fast
          your deep stubborn fat stores <b>melt</b> away into pure energy or
          shocked as you admire your new <b>toned slim</b> body in the mirror,
          then at any time in the next <b>60 days</b> let us know and we’ll
          refund every single penny of your investment. No questions asked.
        </p>
      </div>

      <img src={iconLogo} alt="" className="mx-auto lg:h-24 h-14"/>
    </div>
  );
};

export default Guarantee;
