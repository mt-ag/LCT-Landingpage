import { graphql, StaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import filterImage from './filterImage';
import imgPropTypes from './propTypes';

const NormalQuality = ({ filename, classes, alt, maxWidthPx }) => (
  <StaticQuery
    query={graphql`
      query {
        allImageSharp {
          edges {
            node {
              gatsbyImageData(
                layout: CONSTRAINED
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = filterImage(data, filename);
      return (
        <GatsbyImage
          image={image}
          className={classes}
          alt={alt}
          style={maxWidthPx ? { maxWidth: maxWidthPx } : undefined}
        />
      );
    }}
  />
);

NormalQuality.propTypes = imgPropTypes;

export default NormalQuality;
