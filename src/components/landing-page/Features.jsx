import PropTypes from 'prop-types';
import React from 'react';
import Metadata from '../../svgs/lct-metadata-driven.svg';
import ImageGetter from '../ImageGetter';

const FeatureDisplay = ({
  reverse = false,
  svgComp,
  imageName,
  header,
  body,
}) => (
  <div
    className={`flex gap-x-12 flex-col ${
      reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
    }`}
  >
    <div className="flex-1 max-h-124 mx-auto w-2/3 lg:w-full">
      {svgComp || (
        <ImageGetter
          filename={imageName}
          classes="block"
          alt="test"
          quality="high"
        />
      )}
    </div>
    <div className="flex-1 w-5/6 mx-auto mt-4 lg:my-auto">
      <h3 className="font-semibold text-gray-800 text-2xl">{header}</h3>
      <p className="mt-2 text-base text-gray-600">{body}</p>
    </div>
  </div>
);

FeatureDisplay.propTypes = {
  reverse: PropTypes.bool,
  svgComp: PropTypes.element,
  imageName: PropTypes.string,
  header: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

FeatureDisplay.defaultProps = {
  reverse: false,
  svgComp: null,
  imageName: null,
};

const Features = () => (
  <>
    <div className="mt-8 mb-16 lg:mt-16 lg:mb-32">
      <div className="pb-8 lg:pb-16">
        <h2 className="text-gray-900 text-center mx-auto w-5/6 lg:w-full text-2xl lg:text-5xl tracking-tight font-extrabold">
          An APEX App to test APEX Apps
        </h2>
      </div>
      <div className="grid gap-y-16">
        <FeatureDisplay
          svgComp={<Metadata className="w-full" />}
          header="Don't write any test code"
          body="LCT offers a Low Code interface to design your tests. It accesses your
          Applications metadata and lets and offers user friendly test definition
          wizards with it."
        />
        <FeatureDisplay
          imageName="lct-multi-browser.png"
          reverse
          header="Test multiple engines"
          body="Do you test every new feature with every browser? If not then this is now much easier to do!"
        />
      </div>
    </div>
  </>
);

export default Features;
