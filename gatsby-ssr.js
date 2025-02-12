const React = require('react')

exports.onRenderBody = ({ setPostBodyComponents }) => {
setPostBodyComponents([

  // If you want to load an external script:
  React.createElement('script', {
    defer: true,
    'data-project': '67ac5fa1ff3be229dde663f1',
    'data-host': 'producer.kai-donato.de',
    'data-port': '443',
    'data-secure': 'true',
    src: 'https://cdn.jsdelivr.net/gh/litlyx/litlyx-js/browser/litlyx.js'
  })
])
}