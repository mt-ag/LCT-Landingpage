import { graphql, StaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import filterImage from './filterImage';
import imgPropTypes from './propTypes';

const NormalQuality = ({
  filename,
  classes,
  alt,
  maxWidthPx,
  sizes = undefined,
}) => (
  <StaticQuery
    query={graphql`
      query {
        allImageSharp {
          edges {
            node {
              gatsbyImageData(
                layout: CONSTRAINED
                formats: [AUTO, WEBP, AVIF]
                breakpoints: [500, 650, 825, 1500]
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
          sizes={sizes}
        />
      );
    }}
  />
);

NormalQuality.propTypes = imgPropTypes;

export default NormalQuality;
