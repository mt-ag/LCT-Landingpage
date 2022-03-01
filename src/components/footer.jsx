import React from 'react';
import ImageGetter from './ImageGetter';
import '../styles/tailwind.css';

const Footer = () => (
  <footer className="grid grid-cols-2 gap-y-4 bg-zinc-900 py-4 px-4 font-light text-zinc-200 md:grid-cols-4 md:px-8">
    <div className="my-auto">{`© ${new Date().getFullYear()} MT AG. All Rights reserved.`}</div>
    <div className="flex text-center">
      <a
        href="https://www.mt-ag.com/impressum/"
        className="my-auto rounded px-2 py-1 underline hover:text-blue-200 focus:ring-2 focus:ring-blue-200"
      >
        Legal Notice
      </a>
    </div>
    <div className="flex text-center">
      <a
        href="https://www.mt-ag.com/datenschutz/"
        className="my-auto rounded px-2 py-1 underline hover:text-blue-200 focus:ring-2 focus:ring-blue-200"
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

export default Footer;
