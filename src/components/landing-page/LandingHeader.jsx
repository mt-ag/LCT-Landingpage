import React from 'react';
import { Link } from 'gatsby';
import MTLogo from '../../svgs/mt-ag-logo.svg';

const LandingHeader = () => (
  <header className="flex justify-between py-4 px-4 lg:px-0">
    <div className="flex items-center space-x-5">
      <h1 className="text-xl font-bold text-zinc-100">
        <span className="hidden md:block">Low Code Testing</span>
        <span className="md:hidden">LCT</span>
      </h1>
      <Link
        to="/blog"
        className="rounded px-2 py-1 text-zinc-300 hover:bg-zinc-700/50 focus:outline-none focus:ring focus:ring-cyan-300/70"
      >
        Blog
      </Link>
    </div>
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
