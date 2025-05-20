import React from 'react';
import { Link } from 'gatsby';
import HyandLogo from '../../svgs/hyand_logo_rgb_all_white.svg';
import LCTLogo from '../../svgs/lct-logo.svg';

const LandingHeader = () => (
  <header className="flex justify-between py-2 px-4 lg:px-0">
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
        className="rounded px-2 py-0.5 text-white hover:text-hyand-blue focus:text-hyand-blue"
      >
        /blog
      </Link>

      <a
        href="https://www.youtube.com/@lct-apex"
        target="_blank"
        rel="noopener"
        className="rounded px-2 py-0.5 text-white hover:text-hyand-blue focus:text-hyand-blue"
      >
        /videos
      </a>
    </div>
    <div className="flex items-center">
      <a
        href="https://www.hyand.com/"
        className="mr-0 ml-auto flex text-zinc-100 hover:text-zinc-100/75"
        style={{ width: 'fit-content' }}
        aria-label="Hyand"
        target="_blank"
        rel="noreferrer"
      >
        <div className="">
          <HyandLogo className="h-[28px] w-auto " />
        </div>
      </a>
    </div>
  </header>
);

export default LandingHeader;
