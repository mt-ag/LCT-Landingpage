import React, { useState } from 'react';
import Contact from '../components/landing-page/Contact';
import Features from '../components/landing-page/Features';
import InfoHeader from '../components/landing-page/InfoHeader';
import LandingHeader from '../components/landing-page/LandingHeader';
import NewsletterModal from '../components/landing-page/NewsletterModal';
import SEO from '../components/seo';
import '../styles/tailwind.css';

const IndexPage = () => {
  const [email, setEmail] = useState('');
  const [newsletterModalOpen, setNewsletterModalOpen] = useState(false);

  const openModal = () => setNewsletterModalOpen(true);
  const closeModal = () => setNewsletterModalOpen(false);

  return (
    <>
      <SEO title="Home" />
      <div className="bg-gray-900">
        <div className="mx-auto max-w-7xl lg:px-8">
          <LandingHeader />
          <InfoHeader openModal={openModal} email={email} setEmail={setEmail} />
        </div>
      </div>
      <div className="mx-auto w-2/3">
        <Features />
      </div>
      <div className="bg-gradient-to-r from-cyan-300 to-lightBlue-400 ">
        <div className="mx-auto max-w-7xl lg:px-8">
          <Contact />
        </div>
      </div>
      <NewsletterModal
        open={newsletterModalOpen}
        closeModal={closeModal}
        email={email}
        setEmail={setEmail}
      />
    </>
  );
};

export default IndexPage;
