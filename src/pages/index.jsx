import React, { useState } from 'react';
import Contact from '../components/landing-page/Contact';
import Features from '../components/landing-page/Features';
import InfoHeader from '../components/landing-page/InfoHeader';
import Footer from '../components/footer';
import LandingHeader from '../components/landing-page/LandingHeader';
import NewsletterModal from '../components/landing-page/NewsletterModal';
import SEO from '../components/seo';
import Offer from '../components/landing-page/Offer';

const IndexPage = () => {
  const [email, setEmail] = useState('');
  const [newsletterModalOpen, setNewsletterModalOpen] = useState(false);

  const openModal = () => setNewsletterModalOpen(true);
  const closeModal = () => setNewsletterModalOpen(false);

  return (
    <div className="bg-zinc-200">
      <SEO title="Home" />
      <div className="bg-zinc-900 pb-8 lg:pb-0">
        <div className="mx-auto max-w-7xl lg:px-8">
          <LandingHeader />
          <InfoHeader openModal={openModal} email={email} setEmail={setEmail} />
        </div>
      </div>
      <div className="mx-auto lg:w-2/3">
        <Features />
      </div>
      <div className="bg-gradient-to-b from-zinc-100 to-white">
        <Offer />
      </div>
      <div className="bg-gradient-to-r from-cyan-300 to-sky-400 ">
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
      <Footer />
    </div>
  );
};

export default IndexPage;
