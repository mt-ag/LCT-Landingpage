import React from 'react';
import ImageGetter from '../ImageGetter';
import useNewsletterStore from '../../store/newsletterStore';

const InfoHeader = () => {
  const { open, setEmail, email } = useNewsletterStore();

  return (
    <div className="h-full pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14">
      <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
          <div className="lg:py-24">
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-5xl">
              <span className="block">Testing APEX Apps is now</span>

              <span className="block bg-gradient-to-r from-green-300 to-emerald-500 bg-clip-text py-3 text-transparent">
                as easy as creating them.
              </span>
            </h2>
            <p className="mt-3 text-base text-zinc-100 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Don&apos;t wrangle with testing frameworks and lots of test code
              anymore. LCT offers a Low Code interface for creating tests for
              your Oracle APEX Apps.
            </p>
            <div className="mt-10 sm:mt-12">
              <div className="sm:mx-auto sm:max-w-xl lg:mx-0">
                <div className="sm:flex">
                  <div className="min-w-0 flex-1">
                    <label htmlFor="email-info-header" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email-info-header"
                      type="email"
                      placeholder="Enter your email"
                      className="block w-full rounded-md border-0 px-4 py-3 text-base text-zinc-900 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-300"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <button
                      onClick={() => open()}
                      type="button"
                      className="block w-full rounded-md bg-gradient-to-r from-green-200 to-emerald-400 py-3 px-4 font-medium text-gray-900 shadow hover:from-green-400 hover:to-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-mt-blue"
                    >
                      Stay up to date
                    </button>
                  </div>
                </div>
                <p className="mt-3 text-sm text-zinc-100 sm:mt-4">
                  Subscribe to our Newsletter to get periodic updates about LCT.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 -mb-16 hidden overflow-hidden sm:-mb-48 lg:relative lg:m-0 lg:block">
          <div className="mx-auto h-full max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
            {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
            <ImageGetter
              classes="w-3/4 mt-16 ml-24 select-none"
              filename="lct-landing-page-preview.png"
              alt="LCT frontend as sketch"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoHeader;
