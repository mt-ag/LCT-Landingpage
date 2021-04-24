import PropTypes from 'prop-types';
import React from 'react';
import ImageGetter from '../ImageGetter';

const InfoHeader = ({ openModal, email, setEmail }) => (
  <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden h-full">
    <div className="lg:grid lg:grid-cols-2 lg:gap-8">
      <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
        <div className="lg:py-24">
          <h2 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-5xl">
            <span className="block">Testing APEX Apps is now</span>
            <span className="py-3 bg-clip-text text-transparent bg-gradient-to-r from-cyan-200 to-lightBlue-400 block">
              as easy as creating them.
            </span>
          </h2>
          <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            Don&apos;t wrangle with testing frameworks and lots of test code
            anymore. LCT offers a Low Code interface for creating tests for your
            Oracle APEX Apps.
          </p>
          <div className="mt-10 sm:mt-12">
            <form action="#" className="sm:max-w-xl sm:mx-auto lg:mx-0">
              <div className="sm:flex">
                <div className="min-w-0 flex-1">
                  <label htmlFor="email-info-header" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-info-header"
                    type="email"
                    placeholder="Enter your email"
                    className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-300"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <button
                    onClick={() => openModal()}
                    type="submit"
                    className="block w-full text-black py-3 px-4 rounded-md shadow bg-gradient-to-r from-cyan-200 to-lightBlue-400 font-medium hover:from-cyan-400 hover:to-lightBlue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lightBlue-400 focus:ring-offset-gray-900"
                  >
                    Stay up to date
                  </button>
                </div>
              </div>
              <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                Subscribe to our Newsletter to get periodic updates about LCT.
              </p>
            </form>
          </div>
        </div>
      </div>
      <div className="hidden lg:block mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative overflow-hidden">
        <div className="h-full mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
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

InfoHeader.propTypes = {
  openModal: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
};

export default InfoHeader;
