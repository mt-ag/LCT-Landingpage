import React from 'react';
import ImageGetter from '../ImageGetter';

const LandingHeader = () => (
  <div className="flex justify-between py-4">
    <h1 className="text-gray-100 font-bold text-xl">Low Code Testing</h1>
    <a href="https://www.mt-ag.com/">
      <ImageGetter
        filename="mt-ag-logo.png"
        classes="max-h-6 w-20"
        alt="mt ag logo"
      />
    </a>
  </div>
);

export default LandingHeader;
