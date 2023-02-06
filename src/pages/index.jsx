import React from 'react';
import Contact from '../components/landing-page/Contact';
import Features from '../components/landing-page/Features';
import InfoHeader from '../components/landing-page/InfoHeader';
import Footer from '../components/footer';
import LandingHeader from '../components/landing-page/LandingHeader';
import NewsletterModal from '../components/NewsletterModal';
import SEO from '../components/seo';
import Offer from '../components/landing-page/Offer';

const IndexPage = () => (
  <div className="bg-zinc-200 font-mt">
    <SEO title="Home" />
    <div className="bg-mt-old-blue pb-8 lg:pb-0">
      <div className="mx-auto max-w-7xl lg:px-8">
        <LandingHeader />
        <InfoHeader />
      </div>
    </div>
    <div className="mx-auto lg:w-2/3">
      <Features />
    </div>
    <div className="bg-gradient-to-b from-zinc-100 to-white">
      <Offer />
    </div>
    <div className="bg-gradient-to-b from-zinc-200 to-zinc-100">
      <div className="mx-auto max-w-7xl lg:px-8">
        <Contact />
      </div>
    </div>
    <NewsletterModal />
    <Footer />
  </div>
);

export default IndexPage;
