import React from 'react';
import useNewsletterStore from '../../store/newsletterStore';
import NewsletterModal from '../NewsletterModal';
import silicon from './silicon.svg';

export const BlogNewsletterPrompt = () => {
  const { open, setEmail, email } = useNewsletterStore();

  return (
    <div className="">
      <div
        id="blog-newsletter-prompt-container"
        className="relative overflow-hidden rounded-md bg-cyan-300 px-6 py-10 text-cyan-600 shadow-xl dark:bg-cyan-500/90 sm:px-12 sm:py-20"
        style={{
          backgroundImage: `url(${silicon})`,
        }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
        >
          <svg
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 1463 360"
          >
            <path
              className="text-cyan-200 text-opacity-40 dark:text-cyan-500/90"
              fill="currentColor"
              fillOpacity={0.6}
              d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
            />
            <path
              className="text-cyan-400 text-opacity-40 dark:text-cyan-600/50"
              fill="currentColor"
              d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
            />
          </svg>
        </div>
        <div className="relative">
          <div className="sm:text-center">
            <h2
              id="blog-newsletter-prompt-header"
              className="text-3xl font-extrabold tracking-tight text-slate-800 dark:text-cyan-50 sm:text-4xl"
            >
              Get notified when we share news about LCT.
            </h2>
            <span className="mx-auto mt-6 max-w-2xl rounded bg-white/40 px-2 py-1 text-lg text-cyan-800 backdrop-blur dark:bg-slate-800/40 dark:text-cyan-100">
              Subscribe to our Newsletter to get periodic updates about LCT.
            </span>
          </div>
          <form action="#" className="mt-12 sm:mx-auto sm:flex sm:max-w-lg">
            <div className="min-w-0 flex-1">
              <label htmlFor="cta-email" className="sr-only">
                Email address
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="cta-email"
                type="email"
                className="block w-full rounded-md border border-transparent px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-50 focus:ring-offset-2 focus:ring-offset-cyan-300 dark:focus:ring-cyan-200"
                placeholder="Enter your email"
              />
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-3">
              <button
                onClick={() => open()}
                type="button"
                className="block w-full rounded-md border border-transparent bg-cyan-600 px-5 py-3 text-base font-medium text-white shadow hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-offset-2 focus:ring-offset-cyan-300  dark:bg-cyan-400 dark:text-slate-800 dark:hover:bg-cyan-300 dark:focus:ring-cyan-200 sm:px-10"
              >
                Notify me
              </button>
            </div>
          </form>
        </div>
      </div>
      <NewsletterModal />
    </div>
  );
};
