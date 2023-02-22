import React, { useEffect, useState } from 'react';
import { CheckCircleIcon } from '@heroicons/react/solid';
import decodeMail from '../../util/decodeMail';

const includedFeatures = [
  'Requirements Analysis',
  'Installation',
  'Training',
  'Creation of sample test',
];

const optionalFeatures = [
  'Support during test development',
  'Development of new features tailored to your needs',
];

const Offer = () => {
  const [email, setEmail] = useState('loading...');

  useEffect(() => {
    setTimeout(() => {
      setEmail(decodeMail());
    }, 2000);
  }, [setEmail]);

  return (
    <>
      <div className="pt-12 sm:pt-16 lg:pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-zinc-900 sm:text-4xl lg:text-5xl">
              Our Offer
            </h2>
          </div>
        </div>
      </div>
      <div className="mt-8 pb-16 sm:mt-12 sm:pb-20 lg:pb-28 ">
        <div className="relative">
          <div className="absolute inset-0 h-1/2" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg overflow-hidden rounded-lg bg-white shadow-lg lg:flex lg:max-w-none">
              <div className="flex-1 px-6 py-8 lg:p-12">
                <h3 className="text-2xl font-extrabold text-zinc-900 sm:text-3xl">
                  Basic Package
                </h3>
                <p className="mt-6 text-base text-zinc-500">
                  The basic package includes the installation of LCT in your
                  environment and training for your team on how to get the most
                  out of it.
                </p>
                <div className="mt-8 flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-12">
                  <div className="w-full">
                    <div className="flex items-center">
                      <h4 className="flex-shrink-0 pr-4 text-sm font-semibold uppercase tracking-wider text-sky-600">
                        What&apos;s included
                      </h4>
                      <div className="flex-1 border-t-2 border-zinc-200" />
                    </div>
                    <ul className=" mt-8 grid space-y-5 lg:gap-y-5 lg:space-y-0">
                      {includedFeatures.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start lg:col-span-1"
                        >
                          <div className="flex-shrink-0">
                            <CheckCircleIcon
                              className="h-5 w-5 text-mt-green"
                              aria-hidden="true"
                            />
                          </div>
                          <p className="ml-3 text-sm text-zinc-700">
                            {feature}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-full">
                    <div className="flex items-center">
                      <h4 className="flex-shrink-0 pr-4 text-sm font-semibold uppercase tracking-wider text-sky-600">
                        Optional
                      </h4>
                      <div className="flex-1 border-t-2 border-zinc-200" />
                    </div>
                    <ul className=" mt-8 grid space-y-5 lg:gap-y-5 lg:space-y-0">
                      {optionalFeatures.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start lg:col-span-1"
                        >
                          <div className="flex-shrink-0">
                            <CheckCircleIcon
                              className="h-5 w-5 text-mt-green"
                              aria-hidden="true"
                            />
                          </div>
                          <p className="ml-3 text-sm text-zinc-700">
                            {feature}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="my-8 border-zinc-200 bg-white py-8 px-6 text-center lg:flex lg:flex-shrink-0 lg:flex-col lg:justify-center lg:border-l-2 lg:p-12">
                <div className="rounded-md shadow">
                  <a
                    href={`mailto:${email}`}
                    className="flex items-center justify-center rounded-md border border-transparent bg-mt-green px-12 py-3 text-base font-semibold text-white hover:bg-mt-green/80 focus:outline-none focus:ring-2 focus:ring-mt-darkgreen focus:ring-offset-2 focus:ring-offset-white"
                  >
                    {email === 'loading...' ? email : 'Request Demo'}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offer;
