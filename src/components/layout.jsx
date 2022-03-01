import PropTypes from 'prop-types';
import React from 'react';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => (
  <div className="flex min-h-screen flex-col">
    <Header />
    <div className="flex-grow">
      <main>{children}</main>
    </div>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
