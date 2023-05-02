import React from 'react';
import VideoShowcase from './VideoShowcase';

const InfoHeader = () => {
  return (
    <div className="h-full pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14">
      <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
          <div className="">
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-5xl">
              <span className="block">Testing APEX Apps is now</span>

              <span className="block bg-gradient-to-r from-green-300 to-emerald-500 bg-clip-text py-3 text-transparent">
                as easy as creating them.
              </span>
            </h2>
          </div>
        </div>
        <div class="mx-4 mt-2 md:mt-8 lg:mx-0 lg:mt-0">
          <VideoShowcase />
        </div>
      </div>
    </div>
  );
};

export default InfoHeader;
