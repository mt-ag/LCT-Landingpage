import { graphql, StaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import filterImage from './filterImage';
import imgPropTypes from './propTypes';

const HighQuality = ({
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
                quality: 80
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
          sizes={sizes}
        />
      );
    }}
  />
);

HighQuality.propTypes = imgPropTypes;

export default HighQuality;
