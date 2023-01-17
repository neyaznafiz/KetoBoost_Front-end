import React from "react";
import image1 from "../../Assets/Icons/delivery-truck 1.png";

const Delivery = () => {
  return (
    <div className="bg-[#047663] lg:h-[203px] flex justify-center items-center">
      <div className="flex flex-col lg:flex-row justify-center items-center my-[28px]">
        <img
          className="w-[104px] h-[104px] lg:h-[151px] lg:w-[151px] mr-[17px]"
          src={image1}
          alt=""
        />
        <div className="leading-[17px]">
          <h1 className="font-bold text-xl text-center lg:text-4xl py-5  lg:h-[80px] text-white flex lg:flex-row flex-col gap-2 -space-y-[4px]">
            <span>
              Every <u className="decoration-yellow-400">6 Bottle</u> Order
            </span>

            <span>
            Gets
             <u className="decoration-yellow-400"> FREE Shipping</u> Too!
            </span>
          </h1>

          <p className="text-white text-[19px] lg:text-[25px] flex gap-2 lg:flex-row flex-col justify-center items-center pb-3">
            <span className="lg:pt-0 lg:pb-0 pt-[8px] pb-[16px] lg:text-[25px] md:text-[19px] text-[13.5px]"> *96% Of Customers Order 6 Bottles</span>
            <span>
            (<span className="text-[#36F3D5] font-semibold">Our Recommended Option</span>)
           </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
