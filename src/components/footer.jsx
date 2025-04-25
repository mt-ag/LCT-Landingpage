import React from 'react';
import { Link } from 'gatsby';
import HyandLogo from '../svgs/hyand_logo_rgb_all_white.svg';
import '../styles/tailwind.css';

const Footer = () => (
  <footer className="grid grid-cols-1 divide-y divide-white/30 py-4 px-4 text-sm font-light text-white md:px-8 md:text-base lg:text-lg xl:text-xl">
    <div className="mt-8 flex justify-between pb-8">
      <a
        href="https://www.hyand.com/"
        className=" mb-2 text-zinc-100 hover:text-zinc-100/75"
        style={{ width: 'fit-content' }}
        aria-label="MT Part of Hyand"
        target="_blank"
        rel="noreferrer"
      >
        <div className="">
          <HyandLogo className="h-[45px] w-auto " />
        </div>
      </a>
    </div>
    <div className="flex justify-between py-4">
      <div>
        <p className="mb-5 mt-3">Hyand Solutions GmbH</p>
        <p className="mb-2">Balcke-Dürr-Allee 9</p>
        <p className="mb-2">40882 Ratingen</p>
        <p className="mt-5 mb-2">Phone: +49 2102 30961-0</p>
        <p className="mb-5">Fax: +49 2102 30961-101</p>
        <p>Info@hyand.com</p>
      </div>
      <div className="grid grid-cols-1 space-y-4 md:grid-cols-2 md:space-y-0 md:space-x-12">
        <div>
          <p className="mb-1 font-semibold">More</p>
          <p>
            <Link className="u-footer-link" to="/blog">
              LCT Blog
            </Link>
          </p>
          <p>
            <a
              className="u-footer-link"
              href="https://apex.hyand.com/"
              target="_blank"
              rel="noreferrer"
            >
              apex.hyand.com
            </a>
          </p>
        </div>
        <div>
          <p className="mb-1 font-semibold">Follow LCT</p>
          <p>
            <a
              className="u-footer-link"
              href="https://twitter.com/LowCodeTesting"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          </p>
          <p>
            <a
              className="u-footer-link"
              href="https://www.youtube.com/channel/UCWj_laDAKjgRaw4SjEdVyIA"
              target="_blank"
              rel="noreferrer"
            >
              YouTube
            </a>
          </p>
        </div>
      </div>
    </div>
    <div className="mb-8 flex justify-between pt-4 text-sm">
      <div className="">{`© ${new Date().getFullYear()} • Hyand Solutions GmbH`}</div>
      <div className="flex">
        <a
          href="https://www.hyand.com/impressum/"
          className="u-footer-link"
          target="_blank"
          rel="noreferrer"
        >
          Legal Notice
        </a>
        <a
          href="https://www.hyand.com/datenschutz/"
          className="u-footer-link"
          target="_blank"
          rel="noreferrer"
        >
          Data protection declaration
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
