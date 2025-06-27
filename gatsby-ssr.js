const React = require('react');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

exports.onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    // If you want to load an external script:
    React.createElement('script', {
      defer: true,
      'data-project': process.env.TRACKER_KEY,
      'data-host': process.env.TRACKER_HOST,
      'data-port': '443',
      'data-secure': 'true',
      src: 'https://cdn.jsdelivr.net/gh/litlyx/litlyx-js/browser/litlyx.js',
    }),
  ]);
};
