import React, { useEffect, useState } from 'react';
import { CheckCircleIcon, CheckIcon, XIcon } from '@heroicons/react/solid';
import decodeMail from '../../util/decodeMail';
import { RadioGroup } from '@headlessui/react';
import classNames from '../../util/classNames';

const kSep = (number) => {
  const formatter = new Intl.NumberFormat('de-DE', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return formatter.format(number);
};

const noSupportFeatures = ['LCT App and Server', 'Version Updates'];

const supportFeatures = [
  ...noSupportFeatures,
  'Access to our Support Team',
  'Unused hours will sum up for 12 months',
];

const PriceBlock = () => {
  const [sliderVal, setSliderVal] = useState(10);
  const noSupport = sliderVal < 1;
  const features = noSupport ? noSupportFeatures : supportFeatures;

  return (
    <div className={`rounded-3xl bg-white p-8 ring-2 ring-mt-blue/75 xl:p-10`}>
      <div className="flex items-center justify-between gap-x-4">
        <h3 className={`text-lg font-semibold leading-8 text-mt-old-blue`}>
          {noSupport ? 'LCT Usage Fee (no Support)' : 'LCT with Support Hours'}
        </h3>
      </div>
      <p className="mt-4 text-sm leading-6 text-gray-600">
        Get access to LCT with a monthly subscription fee.
      </p>

      <div className="mt-3">
        <p>{sliderVal} hours</p>
        <input
          type="range"
          min="0"
          max="100"
          value={sliderVal}
          onChange={(e) => setSliderVal(e.target.value)}
          class="x-accent-color h-2 w-full cursor-ew-resize appearance-none rounded-full bg-gray-200 disabled:cursor-not-allowed"
        ></input>

        <div class="-mt-1 flex w-full justify-between">
          <span class="text-sm text-gray-600">0</span>
          <span class="text-sm text-gray-600">100</span>
        </div>
      </div>

      <p className="mt-6 flex items-baseline gap-x-1">
        <span className="text-4xl font-bold tracking-tight text-gray-900">
          {`${kSep(500 + sliderVal * 100)} €`}
        </span>
        <span className="text-sm font-semibold leading-6 text-gray-600">
          month
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
        {noSupport && (
          <li key="no-support" className="flex gap-x-3">
            <XIcon
              className="h-6 w-5 flex-none text-gray-400"
              aria-hidden="true"
            />
            "Access to our Support Team"
          </li>
        )}
      </ul>
    </div>
  );
};

const BASIC = 'Basic';
const ADVANCED = 'Advanced';
const EXTENDED = 'Extended';
const wsOptions = [BASIC, ADVANCED, EXTENDED];

const basicWsFeatures = [
  'Exploring LCT: An Introduction',
  'Best Practices in Testing: Guidelines and Methodologies',
  'Interactive Q&A Session',
];

const advancedWsFeatures = [
  'Advanced Testing Strategies',
  'Custom Scenarios: Approaches for Your Specific Needs',
  'Hands-On Experience: Practical LCT Testing',
];

const extendedWsFeatures = [
  'We create and implement authentic test cases for Your Apps',
  'Accelerate your start and benefit from expertly crafted references',
];

const WorkshopBlock = ({}) => {
  const [currWs, setCurrWs] = useState(wsOptions[1]);

  const price = currWs === BASIC ? 2000 : currWs === ADVANCED ? 8000 : 11800;

  const days = currWs === BASIC ? 1 : currWs === ADVANCED ? 2 : 4;

  return (
    <div className={`rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10`}>
      <div className="flex items-center justify-between gap-x-4">
        <h3 className={`text-lg font-semibold leading-8 text-gray-900`}>
          Jump Start Workshop
        </h3>

        <span className="inline-flex items-center rounded-full bg-gray-200 px-2.5 py-0.5 text-xs font-medium text-gray-700">
          Optional
        </span>
      </div>

      <p className="mt-4 text-sm leading-6 text-gray-600">
        Kickstart your LCT journey with a workshop by our team for a swift and
        efficient start.
      </p>

      <RadioGroup value={currWs} onChange={setCurrWs} className="mt-6">
        <RadioGroup.Label className="sr-only">
          Choose a Workshop option
        </RadioGroup.Label>
        <div className="grid grid-cols-3 gap-3">
          {wsOptions.map((option) => (
            <RadioGroup.Option
              key={option}
              value={option}
              className={({ active, checked }) =>
                classNames(
                  active ? 'ring-2 ring-mt-blue ring-offset-2' : '',
                  checked
                    ? 'bg-mt-blue text-white hover:bg-mt-blue/80'
                    : 'bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50',
                  'flex cursor-pointer select-none items-center justify-center rounded-md py-3 px-3 text-sm font-semibold uppercase focus:outline-none sm:flex-1'
                )
              }
            >
              <RadioGroup.Label as="div">{option}</RadioGroup.Label>
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>

      <p className="mt-6 flex items-baseline gap-x-1">
        <span className="text-4xl font-bold tracking-tight text-gray-900">
          {`${kSep(price)} €`}
        </span>
        <span className="text-sm font-semibold leading-6 text-gray-600">
          once
        </span>
      </p>

      <p className="mt-2 text-gray-700">
        Workshop length: <span className="font-semibold">{days} days</span>
      </p>

      <ul
        role="list"
        className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10"
      >
        {basicWsFeatures.map((feature) => (
          <li key={feature} className="flex gap-x-3">
            <CheckCircleIcon
              className="h-6 w-5 flex-none text-mt-green"
              aria-hidden="true"
            />
            {feature}
          </li>
        ))}

        {(currWs === ADVANCED || currWs === EXTENDED) &&
          advancedWsFeatures.map((feature, i) => (
            <li
              key={feature}
              className={`flex gap-x-3 ${
                i === 0 ? 'mt-2 border-t border-gray-300 pt-2' : ''
              }`}
            >
              <CheckCircleIcon
                className="h-6 w-5 flex-none text-mt-green"
                aria-hidden="true"
              />
              {feature}
            </li>
          ))}

        {currWs === EXTENDED &&
          extendedWsFeatures.map((feature, i) => (
            <li
              key={feature}
              className={`flex gap-x-3 ${
                i === 0 ? 'mt-2 border-t border-gray-300 pt-2' : ''
              }`}
            >
              <CheckCircleIcon
                className="h-6 w-5 flex-none text-mt-green"
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

      <div className="my-12 text-center text-xl">
        LCT Installation + Integration Tests. 200 € / hour on avg. 3 days can
        vary.
      </div>

      <div className="mx-auto mt-16 mb-8 max-w-5xl">
        <div className="grid grid-cols-2 justify-center gap-x-12">
          <PriceBlock />

          <WorkshopBlock />
        </div>

        <div className="mt-12 text-center">
          <a
            className="text-gray-700 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-mt-blue focus:ring-offset-2 focus:ring-offset-white"
            href="https://apex.mt-itsolutions.com/ords/f?p=APEXSUPPORT:3:0&p_lang=en"
          >
            We also offer consulting services to help with any APEX related
            questions including testing.
          </a>
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
