import { graphql, StaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

const ImageGetter = ({ filename, classes, alt, backgroundColor }) => {
  const filterImage = (images) =>
    images.allImageSharp.edges.find(
      (element) =>
        // Match string after final slash
        element.node.gatsbyImageData.images.fallback.src.split('/').pop() ===
        filename
    );

  return (
    <StaticQuery
      query={graphql`
        query {
          allImageSharp {
            edges {
              node {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
      `}
      render={(data) => (
        <GatsbyImage
          image={filterImage(data).node.gatsbyImageData}
          className={classes}
          alt={alt}
          backgroundColor={backgroundColor}
        />
      )}
    />
  );
};

ImageGetter.propTypes = {
  filename: PropTypes.string.isRequired,
  classes: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
};

ImageGetter.defaultProps = {
  backgroundColor: 'transparent',
};

export default ImageGetter;
