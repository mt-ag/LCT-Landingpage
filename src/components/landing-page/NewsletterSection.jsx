import React from 'react';
import useNewsletterStore from '../../store/newsletterStore';

const NewsletterSection = () => {
  const { open, setEmail, email } = useNewsletterStore();

  return (
    <div className="mx-4 text-center lg:mx-0">
      <div>
        <p className="mt-3 text-base text-zinc-100 sm:mt-5 sm:text-xl lg:text-lg xl:text-2xl">
          No more struggling with complex testing frameworks or extensive test
          code. LCT provides a user-friendly, low-code interface to effortlessly
          create tests for your Oracle APEX Apps.
        </p>
        <div className="mt-10 sm:mt-12">
          <div className="sm:mx-auto sm:max-w-xl lg:mx-auto">
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
                  className="block w-full rounded-md bg-gradient-to-r from-green-200 to-emerald-400 py-3 px-4 font-medium text-gray-900 shadow hover:from-green-400 hover:to-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-hyand-blue"
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
      {/* <div className="mt-12 -mb-16 hidden overflow-hidden sm:-mb-48 lg:relative lg:m-0 lg:block">
        <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
          <ImageGetter
            classes="mt-16 ml-24 select-none  "
            filename="lct-landing-page-preview.png"
            alt=""
            maxWidthPx={500}
          />
        </div>
      </div> */}
    </div>
  );
};

export default NewsletterSection;
