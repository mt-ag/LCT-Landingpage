import { Link } from 'gatsby';
import React from 'react';
import MTLogo from '../svgs/mt-ag-logo.svg';

const Header = () => (
  <header className="sticky top-0 z-50 flex justify-between border-b border-zinc-200 bg-cyan-300/75 py-4 px-4 backdrop-blur lg:px-8">
    <Link to="/">
      <span className="text-xl font-bold text-zinc-900">Low Code Testing</span>
    </Link>
    <a href="https://www.mt-ag.com/" className="px-2">
      <div>
        <MTLogo className="h-[28px] w-auto text-zinc-600" />
      </div>
    </a>
  </header>
);

export default Header;
