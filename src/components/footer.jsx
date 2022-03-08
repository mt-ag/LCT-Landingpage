import React from 'react';
import MTLogo from '../svgs/mt-ag-logo.svg';
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
  </footer>
);

export default Footer;
