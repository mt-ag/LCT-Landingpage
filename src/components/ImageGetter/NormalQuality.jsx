import { graphql, StaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import filterImage from './filterImage';
import imgPropTypes from './propTypes';

const NormalQuality = ({ filename, classes, alt }) => (
  <StaticQuery
    query={graphql`
      query {
        allImageSharp {
          edges {
            node {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = filterImage(data, filename);
      return <GatsbyImage image={image} className={classes} alt={alt} />;
    }}
  />
);

NormalQuality.propTypes = imgPropTypes;

export default NormalQuality;
