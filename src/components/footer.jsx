import React from 'react';
import { Link } from 'gatsby';
import MTLogo from '../svgs/mt-ag-logo.svg';
import '../styles/tailwind.css';

const Footer = () => (
  <footer className="grid grid-cols-1 divide-y divide-white/50 bg-mt-blue py-4 px-4 text-sm font-light text-white md:px-8 md:text-base lg:text-lg xl:text-xl">
    <div className="mt-8 flex justify-between pb-4">
      <a
        href="https://www.mt-ag.com/"
        className=" mb-2 text-zinc-100 hover:text-zinc-100/75"
        style={{ width: 'fit-content' }}
        aria-label="MT AG"
      >
        <div className="">
          <MTLogo className="h-[32px] w-auto " />
        </div>
      </a>
    </div>
    <div className="flex justify-between py-4">
      <div>
        <p>Balcke-Dürr-Allee 9</p>
        <p>40882 Ratingen</p>
        <p className="mt-2">Phone: +49 2102 30961-0</p>
        <p className="mb-2">Fax: +49 2102 30961-101</p>
        <p>Info@mt-ag.com</p>
      </div>
      <div className="grid grid-cols-1 space-y-4 md:grid-cols-2 md:space-y-0 md:space-x-6">
        <div>
          <p className="mb-1 font-semibold">More</p>
          <p>
            <Link className="u-footer-link" to="/blog">
              LCT Blog
            </Link>
          </p>
          <p>
            <a className="u-footer-link" href="https://apex.mt-ag.com">
              apex.mt-ag.com
            </a>
          </p>
        </div>
        <div>
          <p className="mb-1 font-semibold">Follow LCT</p>
          <p>
            <a
              className="u-footer-link"
              href="https://twitter.com/LowCodeTesting"
            >
              Twitter
            </a>
          </p>
          <p>
            <a
              className="u-footer-link"
              href="https://www.youtube.com/channel/UCWj_laDAKjgRaw4SjEdVyIA"
            >
              YouTube
            </a>
          </p>
        </div>
      </div>
    </div>
    <div className="mb-8 flex justify-between pt-4">
      <div>{`© ${new Date().getFullYear()} • MT AG`}</div>
      <div className="flex">
        <a href="https://www.mt-ag.com/impressum/" className="u-footer-link">
          Legal Notice
        </a>
        <a href="https://www.mt-ag.com/datenschutz/" className="u-footer-link">
          Data protection declaration
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
