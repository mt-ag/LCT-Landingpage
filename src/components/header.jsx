import { Link } from 'gatsby';
import React, { useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/outline';
import MTLogo from '../svgs/mt-ag-logo.svg';
import useDarkmodeStore from '../store/useDarkmodeStore';
import '../styles/headerStyles.css';

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
    <header className="sticky top-0 z-50 flex justify-between border-b border-zinc-200 bg-cyan-300/75 p-2 backdrop-blur dark:border-slate-800 dark:bg-slate-800/75 md:p-4 lg:px-8">
      <Link to="/">
        <span className="hidden text-xl font-bold text-zinc-900 dark:text-cyan-300/90 md:block">
          Low Code Testing
        </span>
        <span className="text-xl font-bold text-zinc-900 dark:text-cyan-300/90 md:hidden">
          LCT
        </span>
      </Link>
      <div className="flex">
        <button
          type="button"
          onClick={toggleDarkMode}
          title={`switch to ${isDark ? 'light' : 'dark'} mode`}
          className="mr-6 rounded p-1 text-zinc-700 focus:ring dark:text-slate-400"
        >
          {isDark ? (
            <SunIcon className="h-5 w-5" />
          ) : (
            <MoonIcon className="h-5 w-5" />
          )}
        </button>
        <a href="https://www.mt-ag.com/" className="hidden px-2 lg:block">
          <div>
            <MTLogo className="h-[28px] w-auto text-zinc-800 dark:text-slate-200" />
          </div>
        </a>
      </div>
    </header>
  );
};

export default Header;
