import { graphql, StaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';
import useImagePreview from '../../store/useImagePreview';

const BlogImageGetter = ({ filename, alt }) => {
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
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
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
          className="xxl:w-3/4 m-auto my-12 mx-auto block h-auto w-full cursor-zoom-in"
          style={{
            maxWidth: `${filterImage(data).node.original.width}px`,
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
};

export default BlogImageGetter;