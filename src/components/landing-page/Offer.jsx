import React, { useEffect, useState } from 'react';
import { CheckCircleIcon, CheckIcon, XIcon } from '@heroicons/react/solid';
import decodeMail from '../../util/decodeMail';

const kSep = (number) => {
  const formatter = new Intl.NumberFormat('de-DE', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return formatter.format(number);
};

const PriceBlock = ({
  primary = false,
  optional = false,
  supportPrice = false,
  title,
  desc,
  price,
  features,
  notFeatures = [],
  priceSuffix,
}) => {
  const [sliderVal, setSliderVal] = useState(10);

  return (
    <div
      className={`rounded-3xl p-8 xl:p-10 ${
        primary ? 'ring-2 ring-mt-blue/75' : 'ring-1 ring-gray-200'
      }`}
    >
      <div className="flex items-center justify-between gap-x-4">
        <h3
          className={`text-lg font-semibold leading-8 ${
            primary ? 'text-mt-old-blue' : 'text-gray-900'
          }`}
        >
          {title}
        </h3>
        {optional && (
          <span className="inline-flex items-center rounded-full bg-gray-200 px-2.5 py-0.5 text-xs font-medium text-gray-700">
            Optional
          </span>
        )}
      </div>
      <p className="mt-4 text-sm leading-6 text-gray-600">{desc}</p>
      {supportPrice && (
        <div className="mt-3">
          <p>{sliderVal} hours</p>
          <input
            type="range"
            min="1"
            max="100"
            value={sliderVal}
            onChange={(e) => setSliderVal(e.target.value)}
            class="x-accent-color h-2 w-full cursor-ew-resize appearance-none rounded-full bg-gray-200 disabled:cursor-not-allowed"
          ></input>

          <div class="-mt-1 flex w-full justify-between">
            <span class="text-sm text-gray-600">1</span>
            <span class="text-sm text-gray-600">100</span>
          </div>
        </div>
      )}
      <p className="mt-6 flex items-baseline gap-x-1">
        <span className="text-4xl font-bold tracking-tight text-gray-900">
          {supportPrice ? `${kSep(500 + sliderVal * 100)} €` : price}
        </span>
        <span className="text-sm font-semibold leading-6 text-gray-600">
          {priceSuffix}
        </span>
      </p>
      <ul
        role="list"
        className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10"
      >
        {features.map((feature) => (
          <li key={feature} className="flex gap-x-3">
            <CheckCircleIcon
              className="h-6 w-5 flex-none text-mt-green"
              aria-hidden="true"
            />
            {feature}
          </li>
        ))}
        {notFeatures.map((feature) => (
          <li key={feature} className="flex gap-x-3">
            <XIcon
              className="h-6 w-5 flex-none text-gray-400"
              aria-hidden="true"
            />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

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
              Pricing
            </h2>
          </div>
        </div>
      </div>
      <div className="mx-12 mt-16 mb-8">
        <div className="grid grid-cols-3 gap-x-12">
          <PriceBlock
            title="Usage Fee"
            desc="Monthly usage free to get access to LCT and receive updates. No support included."
            price="500 €"
            priceSuffix="/month"
            features={['LCT App and Server', 'Version Updates']}
            notFeatures={['Access to our Support Team']}
          />
          <PriceBlock
            primary
            supportPrice
            title="LCT with Support Hours"
            desc="Get LCT with updates and access to our support team."
            price="1.000 €"
            priceSuffix="/month"
            features={[
              'LCT App and Server',
              'Version Updates',
              'Access to our Support Team',
              'Unused hours will sum up for 12 months',
            ]}
          />
          <PriceBlock
            optional
            title="Jump Start"
            desc="Monthly support contingent 10 hours (unused hours will sum up for 12 months)"
            price="11.800 €"
            priceSuffix="once"
            features={['Installation and Setup', 'Workshop']}
          />
        </div>

        <div className="mt-16 mb-24 flex">
          <a
            href={`mailto:${email}`}
            className="mx-auto rounded-md border border-transparent bg-mt-green px-12 py-3 text-base font-semibold text-white hover:bg-mt-green/80 focus:outline-none focus:ring-2 focus:ring-mt-darkgreen focus:ring-offset-2 focus:ring-offset-white"
          >
            {email === 'loading...'
              ? email
              : 'Get in contact or request a Demo'}
          </a>
        </div>
      </div>
    </>
  );
};

export default Offer;
