import { Link } from 'gatsby';
import React, { useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/outline';
import MTLogo from '../svgs/mt-ag-logo.svg';
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
    <header className="sticky top-0 z-50 flex justify-between border-b border-zinc-200 bg-cyan-300/75 px-1 backdrop-blur dark:border-slate-800 dark:bg-slate-800/75 md:p-3 lg:px-4">
      <div className="flex items-center space-x-5">
        <Link
          className="rounded px-2 py-1 font-bold text-zinc-900 transition-colors hover:bg-cyan-100/50 focus:outline-none focus:ring focus:ring-cyan-500/50 dark:text-cyan-200 dark:hover:bg-slate-700/70"
          to="/"
        >
          <span className="hidden text-xl md:block ">Low Code Testing</span>
          <span className="text-xl md:hidden">LCT</span>
        </Link>
        <Link
          to="/blog"
          className="rounded px-2 py-1 text-slate-700 transition-colors hover:bg-cyan-100/50 focus:outline-none focus:ring focus:ring-cyan-500/50 dark:text-slate-300 dark:hover:bg-slate-700/70"
        >
          Blog
        </Link>
      </div>
      <div className="flex items-center">
        <button
          type="button"
          onClick={toggleDarkMode}
          title={`switch to ${isDark ? 'light' : 'dark'} mode`}
          className={classNames(
            'mr-6 rounded px-2 py-1 text-zinc-700 hover:bg-cyan-100/50 focus:outline-none focus:ring focus:ring-cyan-600/50 dark:text-slate-400 dark:hover:bg-slate-700/70',
            'transition-colors duration-300 hover:text-indigo-600 dark:hover:text-amber-400'
          )}
        >
          {isDark ? (
            <SunIcon className="h-5 w-5" />
          ) : (
            <MoonIcon className="h-5 w-5" />
          )}
        </button>
        <a
          href="https://www.mt-ag.com/"
          className="hidden px-2 lg:block"
          aria-label="MT AG"
        >
          <div>
            <MTLogo className="h-[28px] w-auto text-zinc-800 dark:text-slate-200" />
          </div>
        </a>
      </div>
    </header>
  );
};

export default Header;
