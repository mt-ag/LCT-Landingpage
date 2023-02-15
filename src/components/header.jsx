import { Link } from 'gatsby';
import React, { useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/outline';
import MTLogo from '../svgs/mt-logo.svg';
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
    <header className="sticky top-0 z-50 flex justify-between border-b border-zinc-200 bg-mt-blue px-1 backdrop-blur dark:border-slate-800 dark:bg-slate-800/75 md:p-3 lg:px-4">
      <div className="flex items-center space-x-5">
        <Link
          className="rounded px-2 py-1 font-bold text-zinc-200 transition-colors hover:bg-mt-old-blue/50 focus:outline-none focus:ring focus:ring-cyan-500/50 dark:text-cyan-200 dark:hover:bg-slate-700/70"
          to="/"
        >
          <div className="flex items-center">
            <LCTLogo className="mr-2 h-[32px] w-auto" />
            <span className="hidden text-xl md:block ">Low Code Testing</span>
            <span className="text-xl md:hidden">LCT</span>
          </div>
        </Link>
        <Link
          to="/blog"
          className="rounded px-2 py-1 text-slate-300 transition-colors hover:bg-mt-old-blue/50 focus:outline-none focus:ring focus:ring-cyan-500/50 dark:hover:bg-slate-700/70"
        >
          Blog
        </Link>
        <a
          href="https://www.youtube.com/@lct-apex"
          target="_blank"
          rel="noopener"
          className="rounded px-2 py-1 text-slate-300 transition-colors hover:bg-mt-old-blue/50 focus:outline-none focus:ring focus:ring-cyan-500/50 dark:hover:bg-slate-700/70"
        >
          Videos
        </a>
      </div>
      <div className="flex items-center">
        <button
          type="button"
          onClick={toggleDarkMode}
          title={`switch to ${isDark ? 'light' : 'dark'} mode`}
          className={classNames(
            'mr-6 rounded px-2 py-1  text-slate-400 hover:bg-mt-old-blue/50 focus:outline-none focus:ring focus:ring-cyan-500/50 dark:hover:bg-slate-700/70',
            'transition-colors duration-300 hover:text-indigo-300 dark:hover:text-amber-400'
          )}
        >
          {isDark ? (
            <SunIcon className="h-5 w-5" />
          ) : (
            <MoonIcon className="h-5 w-5" />
          )}
        </button>
        <a
          href="https://www.mt-itsolutions.com/"
          className="hidden px-2 focus:outline-none focus:ring focus:ring-cyan-500/50 lg:block"
          aria-label="MT AG"
        >
          <div>
            <MTLogo className="h-[28px] w-auto " />
          </div>
        </a>
      </div>
    </header>
  );
};

export default Header;
