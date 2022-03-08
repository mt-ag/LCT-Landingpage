import React from 'react';
import MTLogo from '../../svgs/mt-ag-logo.svg';

const LandingHeader = () => (
  <header className="flex justify-between py-4 px-4 lg:px-0">
    <h1 className="text-xl font-bold text-zinc-100">Low Code Testing</h1>
    <div className="flex items-center">
      <a
        href="https://www.mt-ag.com/"
        className="mr-0 ml-auto flex"
        style={{ width: 'fit-content' }}
      >
        <div className="">
          <MTLogo className="h-[28px] w-auto text-zinc-100" />
        </div>
      </a>
    </div>
  </header>
);

export default LandingHeader;
