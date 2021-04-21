import React from 'react';
import ImageGetter from '../ImageGetter';

const LandingHeader = () => (
  <header className="flex justify-between py-4 px-4 md:px-8">
    <h1 className="text-gray-100 font-bold text-xl">Low Code Testing</h1>
    <a href="https://www.mt-ag.com/">
      <ImageGetter
        filename="mt-ag-logo.png"
        classes="max-h-6 w-20 select-none"
        alt="mt ag logo"
      />
    </a>
  </header>
);

export default LandingHeader;
