import { graphql, StaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';
import useImagePreview from '../../store/useImagePreview';

const BlogImageGetter = ({ filename, alt, maxWidthPx }) => {
  const { open } = useImagePreview();

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
                gatsbyImageData(
                  layout: CONSTRAINED
                  width: 825
                  formats: [AUTO, WEBP, AVIF]
                  breakpoints: [500, 650, 825]
                  quality: 80
                )
                original {
                  height
                  width
                  src
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <button
          type="button"
          className="xxl:w-3/4 m-auto mx-auto my-12 block h-auto w-full cursor-zoom-in "
          style={{
            maxWidth: maxWidthPx
              ? `${maxWidthPx}px`
              : `${filterImage(data).node.original.width}px`,
          }}
          onClick={() => {
            open({
              imgSrc: filterImage(data).node.original.src,
              alt,
              width: filterImage(data).node.original.width,
              height: filterImage(data).node.original.height,
            });
          }}
        >
          <GatsbyImage
            image={filterImage(data).node.gatsbyImageData}
            alt={alt}
          />
        </button>
      )}
    />
  );
};

BlogImageGetter.propTypes = {
  filename: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  maxWidthPx: PropTypes.number,
};

BlogImageGetter.defaultProps = {
  maxWidthPx: null,
};

export default BlogImageGetter;
