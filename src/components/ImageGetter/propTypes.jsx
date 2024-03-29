import PropTypes from 'prop-types';

const imgPropTypes = {
  filename: PropTypes.string.isRequired,
  classes: PropTypes.string,
  alt: PropTypes.string.isRequired,
  maxWidthPx: PropTypes.number,
  sizes: PropTypes.string,
};

export default imgPropTypes;
