import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import BlogPostList from '../components/blog/BlogPostList';

export const query = graphql`
  query ($tag: String!) {
    posts: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: {
        fileAbsolutePath: { glob: "**/content/blog/**" }
        frontmatter: { tags: { eq: $tag } }
      }
    ) {
      nodes {
        frontmatter {
          title
          date
          formattedDate: date(formatString: "MMMM DD, YYYY")
          description
          slug
          titleImage {
            sharp: childImageSharp {
              gatsbyImageData(width: 250, formats: [AUTO, WEBP, AVIF])
            }
          }
          titleImageAlt
          titleImageSource {
            text
            href
          }
          tags
        }
      }
    }
  }
`;

const BlogTagTemplate = ({ data, pageContext }) => {
  const blogposts = data.posts.nodes;

  const { tag } = pageContext;

  return (
    <Layout>
      <SEO
        title={`Blog | ${tag}`}
        description={`Blogposts tagged with: ${tag}`}
      />
      <div className="flex flex-grow flex-col items-center bg-zinc-50 dark:bg-slate-900">
        <div className="w-full max-w-6xl flex-grow bg-white py-12 shadow dark:bg-slate-800/30 dark:text-zinc-200">
          <div className="text-center">
            <h1 className="brown-header-text text-xl font-extrabold leading-9 sm:text-4xl sm:leading-10 md:text-2xl lg:text-3xl">
              <span>
                Blogposts tagged with:{' '}
                <span className="font-mono text-cyan-600 dark:text-cyan-300">
                  {tag}
                </span>
              </span>
            </h1>
          </div>
          <BlogPostList blogposts={blogposts} />
        </div>
      </div>
    </Layout>
  );
};

BlogTagTemplate.propTypes = {
  data: PropTypes.shape({
    posts: PropTypes.shape({
      // eslint-disable-next-line react/forbid-prop-types
      nodes: PropTypes.object,
    }).isRequired,
  }).isRequired,
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlogTagTemplate;
