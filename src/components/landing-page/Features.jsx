import PropTypes from 'prop-types';
import React from 'react';
import Metadata from '../../svgs/lct-metadata-driven.svg';
import MultiBrowser from '../../svgs/lct-multi-browser.svg';

const FeatureDisplay = ({ reverse = false, svgComp, header, body }) => (
  <div className={`flex gap-x-12 ${reverse ? 'flex-row-reverse' : 'flex-row'}`}>
    <div className="flex-1">{svgComp}</div>
    <div className="flex-1 m-auto w-5/6">
      <h3 className="font-semibold text-gray-800 text-2xl">{header}</h3>
      <p className="mt-2 text-base text-gray-600">{body}</p>
    </div>
  </div>
);

FeatureDisplay.propTypes = {
  reverse: PropTypes.bool,
  svgComp: PropTypes.element.isRequired,
  header: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

FeatureDisplay.defaultProps = {
  reverse: false,
};

const Features = () => (
  <>
    <div className="pt-8 pb-16 lg:pt-16 lg:pb-32">
      <div className="pb-8 lg:pb-16">
        <h2 className="text-gray-900 text-center text-3xl lg:text-5xl tracking-tight font-extrabold">
          An APEX App to test APEX Apps
        </h2>
      </div>
      <div className="grid gap-y-16">
        <FeatureDisplay
          svgComp={<Metadata className="w-full max-h-124" />}
          header="Don't write any test code"
          body="LCT offers a Low Code interface to design your tests. It accesses your
          Applications metadata and lets and offers user friendly test definition
          wizards with it."
        />
        <FeatureDisplay
          svgComp={<MultiBrowser className="w-full max-h-124" />}
          reverse
          header="Test multiple engines"
          body="Do you test every new feature with every browser? If not then this is now much easier to do!"
        />
      </div>
    </div>
  </>
);

export default Features;
