import React from 'react';
import { Link } from 'gatsby';
import MTLogo from '../../svgs/mt-logo.svg';
import LCTLogo from '../../svgs/lct-logo.svg';

const LandingHeader = () => (
  <header className="flex justify-between py-4 px-4 lg:px-0">
    <div className="flex items-center space-x-5">
      <div className="flex items-center">
        <LCTLogo className="mr-2 h-[36px] w-auto" />
        <h1 className="text-xl font-bold text-zinc-100">
          <span className="hidden md:block">Low Code Testing</span>
          <span className="md:hidden">LCT</span>
        </h1>
      </div>
      <Link
        to="/blog"
        className="rounded px-2 py-1 text-zinc-200 hover:bg-sky-200/10 focus:outline-none focus:ring focus:ring-sky-300/50"
      >
        Blog
      </Link>
      <a
        href="https://www.youtube.com/@lct-apex"
        target="_blank"
        rel="noopener"
        className="rounded px-2 py-1 text-zinc-200 hover:bg-sky-200/10 focus:outline-none focus:ring focus:ring-sky-300/50"
      >
        Videos
      </a>
    </div>
    <div className="flex items-center">
      <a
        href="https://www.mt-ag.com/"
        className="mr-0 ml-auto flex text-zinc-100 hover:text-zinc-100/75"
        style={{ width: 'fit-content' }}
        aria-label="MT AG"
      >
        <div className="">
          <MTLogo className="h-[28px] w-auto " />
        </div>
      </a>
    </div>
  </header>
);

export default LandingHeader;
