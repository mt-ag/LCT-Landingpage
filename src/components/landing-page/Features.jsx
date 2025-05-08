import PropTypes from 'prop-types';
import React from 'react';
import LiveLogGif from '../../gifs/lct-live-log-demo.gif';
import ImageGetter from '../ImageGetter';

const FeatureDisplay = ({ reverse = false, imgComp, header, body }) => (
  <div
    className={`flex flex-col gap-x-12 mb-20 ${
      reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
    }`}
  >
    <div className="mx-auto max-h-124 w-2/3 max-w-[500px] flex-1 lg:w-full">
      {imgComp}
    </div>
    <div className="mx-auto mt-4 w-5/6 flex-1 lg:my-auto">
      <h3 className="text-6xl font-thin lg:text-6xl">
        {header}
      </h3>
      <p className="mt-2 text-base lg:text-l">{body}</p>
    </div>
  </div>
);

FeatureDisplay.propTypes = {
  reverse: PropTypes.bool,
  imgComp: PropTypes.element.isRequired,
  header: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

FeatureDisplay.defaultProps = {
  reverse: false,
};

const Features = () => (
  <div className="mb-16 mt-8 lg:mb-32 lg:mt-16">
    <div className="pb-8 lg:pb-16 mb-25">
      <h2 className="mx-auto w-5/6 text-center text-6xl font-light tracking-tight text-white lg:w-full lg:text-6xl">
        Features      
      </h2>
    </div>
    <div className="mx-auto grid max-w-7xl gap-y-16">
      <FeatureDisplay
        imgComp={ 
        <ImageGetter
          filename="lct-metadata-driven-dark.png"
          classes="block"
          alt=""
          quality="high"
          sizes="65vw"
        />
        }
        header="No coding required"
        body="LCT provides an intuitive Low Code interface for designing Oracle APEX tests. By accessing your APEX application metadata, our user-friendly test definition wizards simplify the test creation process."
      />
      <FeatureDisplay
        imgComp={
          <ImageGetter
            filename="apex_puzzle_lct.png"
            classes="block"
            alt=""
            quality="high"
            sizes="65vw"
          />
        }
        reverse
        header="Tailored to Oracle APEX"
        body="Effortlessly interact with APEX applications using our user-friendly interfaces tailored to specific APEX components. We also ensure that your tests remain functional and compatible even after Oracle APEX upgrades."
      />
      <FeatureDisplay
        imgComp={
          <ImageGetter
            filename="lct-multi-browser-dark.png"
            classes="block"
            alt="LCT supports Browsers like Edge, Firefox, Safari and Chrome"
            quality="high"
            sizes="65vw"
          />
        }
        header="Test thoroughly"
        body="Are you testing each new feature across all browsers? If not, we've made it much easier for you! Run your tests using multiple engines and rapidly identify any browser-specific issues that may arise."
      />
      <FeatureDisplay
        imgComp={
          <ImageGetter
            filename="lct-regressions-feature-dark.png"
            classes="block"
            alt=""
            quality="high"
            sizes="65vw"
          />
        }
        header="Automatically Detect Regressions"
        body="Automate your test scheduling and receive instant notifications on any regression issues. Minimize risks associated with Oracle APEX upgrades and new feature implementations."
        reverse
      />
      <FeatureDisplay
        imgComp={<img src={LiveLogGif} alt="test output log" className="border-2 border-hyand-blue rounded-md"/>}
        header="Extensive Reporting"
        body="From screenshots and detailed log files to comprehensive error messages - LCT is designed to provide as much information as possible. You can even follow the test execution in real-time via our LiveLog!"
      />
    </div>
  </div>
);

export default Features;
