import React from "react";

const Heading = ({ subtitle, title, tc }) => {
  return (
    <>
      <div className=" lg:mt-[50px]">
        <h1
          className={`text-[25px] w-[330px] lg:text-[41px] lg:w-[730px]  mx-auto text-center font-bold  ${tc}`}
        >
          {title}
        </h1>

        {subtitle && (
          <h3 className="leading-[18px] lg:leading-[47px]  text-[13px]  lg:h-[96px] lg:text-[23px] font-medium mx-auto text-center">
            {subtitle}
          </h3>
        )}
      </div>
    </>
  );
};

export default Heading;
