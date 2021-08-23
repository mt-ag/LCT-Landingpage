import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/solid';

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

const Offer = () => (
  <>
    <div className="pt-12 sm:pt-16 lg:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Our Offer
          </h2>
        </div>
      </div>
    </div>
    <div className="mt-8 pb-16 sm:mt-12 sm:pb-20 lg:pb-28 ">
      <div className="relative">
        <div className="absolute inset-0 h-1/2" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
            <div className="flex-1 px-6 py-8 lg:p-12">
              <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                Basic Package
              </h3>
              <p className="mt-6 text-base text-gray-500">
                The basic package includes the installation of LCT in your
                environment and training for your team on how to get the most
                out of it.
              </p>
              <div className="mt-8 flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-12">
                <div className="w-full">
                  <div className="flex items-center">
                    <h4 className="flex-shrink-0 pr-4 text-sm tracking-wider font-semibold uppercase text-sky-600">
                      What&apos;s included
                    </h4>
                    <div className="flex-1 border-t-2 border-gray-200" />
                  </div>
                  <ul className=" mt-8 space-y-5 grid lg:space-y-0 lg:gap-y-5">
                    {includedFeatures.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start lg:col-span-1"
                      >
                        <div className="flex-shrink-0">
                          <CheckCircleIcon
                            className="h-5 w-5 text-green-400"
                            aria-hidden="true"
                          />
                        </div>
                        <p className="ml-3 text-sm text-gray-700">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full">
                  <div className="flex items-center">
                    <h4 className="flex-shrink-0 pr-4 text-sm tracking-wider font-semibold uppercase text-sky-600">
                      Optional
                    </h4>
                    <div className="flex-1 border-t-2 border-gray-200" />
                  </div>
                  <ul className=" mt-8 space-y-5 grid lg:space-y-0 lg:gap-y-5">
                    {optionalFeatures.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start lg:col-span-1"
                      >
                        <div className="flex-shrink-0">
                          <CheckCircleIcon
                            className="h-5 w-5 text-green-400"
                            aria-hidden="true"
                          />
                        </div>
                        <p className="ml-3 text-sm text-gray-700">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
              <div className="rounded-md shadow">
                <a
                  href="mailto:Kai.Donato@mt-ag.com"
                  className="flex items-center justify-center px-12 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 focus:ring-offset-white focus:outline-none"
                >
                  Request Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Offer;
