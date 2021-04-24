import PropTypes from 'prop-types';
import React from 'react';
import HighQuality from './HighQuality';
import NormalQuality from './NormalQuality';
import imgPropTypes from './propTypes';

const ImageGetter = ({ filename, classes, alt, quality = 'normal' }) => {
  if (quality === 'normal') {
    return <NormalQuality filename={filename} classes={classes} alt={alt} />;
  }

  return <HighQuality filename={filename} classes={classes} alt={alt} />;
};

ImageGetter.propTypes = {
  quality: PropTypes.string,
  ...imgPropTypes,
};

ImageGetter.defaultProps = {
  quality: 'normal',
};

export default ImageGetter;
