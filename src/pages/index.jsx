import React from 'react';
import Contact from '../components/landing-page/Contact';
import Features from '../components/landing-page/Features';
import InfoHeader from '../components/landing-page/InfoHeader';
import Footer from '../components/footer';
import LandingHeader from '../components/landing-page/LandingHeader';
import NewsletterModal from '../components/NewsletterModal';
import SEO from '../components/seo';
import Offer from '../components/landing-page/Offer';
import Content from '../components/landing-page/Content';

const IndexPage = () => (
  <div className="bg-zinc-200">
    <SEO title="Home" />
    <div className="bg-zinc-900 pb-8 lg:pb-0">
      <div className="mx-auto max-w-7xl lg:px-8">
        <LandingHeader />
        <InfoHeader />
      </div>
    </div>
    <div className="mx-auto lg:w-2/3">
      <Features />
    </div>
    <div className="bg-zinc-900" w>
      <div className="mx-auto lg:w-2/3">
        <Content />
      </div>
    </div>
    <div className="bg-gradient-to-b from-zinc-100 to-white">
      <Offer />
    </div>
    <div className="bg-gradient-to-r from-cyan-300 to-sky-400 ">
      <div className="mx-auto max-w-7xl lg:px-8">
        <Contact />
      </div>
    </div>
    <NewsletterModal />
    <Footer />
  </div>
);

export default IndexPage;
