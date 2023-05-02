import PropTypes from 'prop-types';
import React from 'react';
import HighQuality from './HighQuality';
import NormalQuality from './NormalQuality';
import imgPropTypes from './propTypes';

const ImageGetter = ({
  filename,
  classes,
  alt,
  quality = 'normal',
  maxWidthPx,
}) => {
  if (quality === 'normal') {
    return (
      <NormalQuality
        filename={filename}
        classes={classes}
        alt={alt}
        maxWidthPx={maxWidthPx}
      />
    );
  }

  return (
    <HighQuality
      filename={filename}
      classes={classes}
      alt={alt}
      maxWidthPx={maxWidthPx}
    />
  );
};

ImageGetter.propTypes = {
  quality: PropTypes.string,
  ...imgPropTypes,
};

ImageGetter.defaultProps = {
  quality: 'normal',
  maxWidthPx: undefined,
};

export default ImageGetter;
