import { Link } from 'gatsby';
import React from 'react';
import ImageGetter from './ImageGetter';

const Header = () => (
  <header className="flex justify-between bg-gradient-to-r from-cyan-300 to-sky-400 py-4 px-4 lg:px-8">
    <Link to="/">
      <span className="text-xl font-bold text-zinc-900">Low Code Testing</span>
    </Link>
    <a href="https://www.mt-ag.com/">
      <ImageGetter
        filename="mt-ag-logo.png"
        classes="max-h-6 w-20 select-none"
        alt="mt ag logo"
      />
    </a>
  </header>
);

export default Header;
