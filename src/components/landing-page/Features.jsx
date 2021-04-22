import React from 'react';
import Metadata from '../../svgs/lct-metadata-driven.svg';

const Features = () => (
  <>
    <div className="py-16 lg:py-32 my">
      <div className="grid grid-cols-2 gap-x-5">
        <div className="">
          <Metadata className="w-full" />
        </div>
        <div className="m-auto w-5/6">
          <h3 className="font-semibold text-gray-700 text-2xl">
            Don&apos;t write custom test code
          </h3>
          <p className="mt-2 text-base">
            LCT offers a Low Code interface to design your tests. It has access
            your Application metadata and lets you design your tests over
            wizards.
          </p>
        </div>
      </div>
    </div>
  </>
);

export default Features;
