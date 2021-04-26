import React from 'react';
import ImageGetter from '../ImageGetter';

const LandingFooter = () => (
  <footer className="bg-gray-900 text-gray-200 grid grid-cols-4 py-4 px-4 md:px-8">
    <div className="my-4 lg:my-0">{`© ${new Date().getFullYear()} MT AG. All Rights reserved.`}</div>
    <div className="text-center">
      <a
        href="https://www.mt-ag.com/impressum/"
        className="px-2 py-1 text-white underline hover:text-blue-200 rounded focus:ring-2 focus:ring-blue-200"
      >
        Legal Notice
      </a>
    </div>
    <div className="text-center">
      <a
        href="https://www.mt-ag.com/datenschutz/"
        className="px-2 py-1 text-white underline hover:text-blue-200 rounded focus:ring-2 focus:ring-blue-200"
      >
        Data protection declaration
      </a>
    </div>
    <a
      href="https://www.mt-ag.com/"
      className="text-right focus:ring-2 focus:ring-blue-200"
    >
      <ImageGetter
        filename="mt-ag-logo.png"
        classes="max-h-6 w-20 select-none "
        alt="mt ag logo"
      />
    </a>
  </footer>
);

export default LandingFooter;
