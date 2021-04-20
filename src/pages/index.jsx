import React from 'react';
import Contact from '../components/landing-page/Contact';
import InfoHeader from '../components/landing-page/InfoHeader';
import LandingHeader from '../components/landing-page/LandingHeader';
import SEO from '../components/seo';
import '../styles/tailwind.css';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl lg:px-8">
        <LandingHeader />
        <InfoHeader />
      </div>
    </div>
    <div className="h-72" />
    <div className="bg-gradient-to-r from-cyan-300 to-lightBlue-400 ">
      <div className="mx-auto max-w-7xl lg:px-8">
        <Contact />
      </div>
    </div>
  </>
);

export default IndexPage;
