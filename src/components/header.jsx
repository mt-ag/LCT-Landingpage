import { Link } from 'gatsby';
import React from 'react';
import ImageGetter from './ImageGetter';

const Header = () => (
  <header className="flex justify-between py-4 px-4 lg:px-8 bg-gradient-to-r from-cyan-300 to-lightBlue-400">
    <Link to="/">
      <span className="text-gray-900 font-bold text-xl">Low Code Testing</span>
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
