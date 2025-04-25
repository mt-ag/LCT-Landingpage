import { Link } from 'gatsby';
import React, { useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/outline';
import HyandLogoWhite from '../svgs/hyand_logo_rgb_all_white.svg';
import HyandLogoPos from '../svgs/hyand_logo_rgb_pos.svg';
import LCTLogo from '../svgs/lct-logo.svg';
import useDarkmodeStore from '../store/useDarkmodeStore';
import '../styles/headerStyles.css';
import classNames from '../util/classNames';

let themeInitialized = false;

const Header = () => {
  const { isDark, toggleDarkMode, apply } = useDarkmodeStore();

  useEffect(() => {
    if (!themeInitialized) {
      apply();
      themeInitialized = true;
    }
  });

  return (
    <header className="sticky top-0 z-50 flex justify-between bg-white px-1 backdrop-blur dark:bg-hyand-black md:p-3 lg:px-4">
      <div className="flex items-center space-x-5">
        <Link
          className="px-2 py-1 font-bold text-black transition-colors dark:text-white dark:hover:text-hyand-blue dark:focus:text-hyand-blue"
          to="/"
        >
          <div className="flex items-center">
            <LCTLogo className="mr-2 h-[32px] w-auto" />
            <span className="hidden text-xl md:block">Low Code Testing</span>
            <span className="text-xl md:hidden">LCT</span>
          </div>
        </Link>
        <Link
          to="/blog"
          className="px-2 py-1 text-black transition-colors dark:text-white dark:hover:text-hyand-blue"
        >
          /blog
        </Link>
        <a
          href="https://www.youtube.com/@lct-apex"
          target="_blank"
          rel="noreferrer"
          className="px-2 py-1 text-black transition-colors dark:text-white dark:hover:text-hyand-blue"
        >
          /videos
        </a>
      </div>
      <div className="flex items-center">
        <button
          type="button"
          onClick={toggleDarkMode}
          title={`switch to ${isDark ? 'light' : 'dark'} mode`}
          className={classNames(
            'mr-6 px-2 py-1 text-black hover:text-hyand-blue focus:text-hyand-blue',
            'transition-colors duration-300 dark:text-white dark:hover:text-hyand-blue dark:focus:text-hyand-blue'
          )}
        >
          {isDark ? (
            <SunIcon className="h-5 w-5" />
          ) : (
            <MoonIcon className="h-5 w-5" />
          )}
        </button>
        <a
          href="https://www.hyand.com/"
          className="hidden px-2 focus:outline-none focus:ring focus:ring-cyan-500/50 lg:block"
          aria-label="MT Part of Hyand"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            {isDark ? (
              <HyandLogoWhite className="h-[24px] w-auto" />
            ) : (
              <HyandLogoPos className="h-[24px] w-auto" />
            )}
          </div>
        </a>
      </div>
    </header>
  );
};

export default Header;
