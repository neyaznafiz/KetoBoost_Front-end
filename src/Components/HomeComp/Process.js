import React from "react";

const Process = () => {
  return (
    <div className="container mx-auto lg:px-10">
        <div class="mx-auto sm:pb-12 pb-9 pt-5 sm:px-3 px-8 lg:max-w-[1100px] md:max-w-[700px] max-w-[400px] w-full">
          <div class="flex items-center">
            {/* first */}
            <div class="flex items-center relative">
              <div class=" transition duration-500 h-8 w-8 rounded-full bg-primaryLight">
               {/*  */}
              </div>
              <div class="absolute top-10 sm:-left-11 -left-3 sm:text-lg text-xs text-center w-max font-medium">
              Order Submitted
              </div>
            </div>
            <div class="flex-auto transition duration-500 ease-in-out bg-primaryLight h-2"></div>
          
            {/* second */}
            <div class="flex items-center relative">
              <div class=" transition duration-500 h-8 w-8 rounded-full bg-primaryLight">
               {/*  */}
              </div>
              <div class="absolute top-10 -left-6 sm:text-lg text-xs text-center w-max font-medium">
              Special Offer
              </div>
            </div>
            <div class="flex-auto transition duration-500 ease-in-out bg-primaryLight/40 h-2"></div>

            {/* third */}
            <div class="flex items-center relative">
              <div class=" transition duration-500 h-8 w-8 rounded-full bg-primaryLight/40 text-center">
              <div className="text-white text-5xl -mt-[10px]">●</div>
              </div>
              <div class="absolute top-10 lg:-left-[90px] md:-left-24 -left-16 sm:text-lg text-xs text-center w-max font-medium">
              Order Confirmation
              </div>
            </div>
         
           
          </div>
        </div>
      </div>

  );
};

export default Process;
