import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import BlogPostList from '../components/blog/BlogPostList';

export const query = graphql`
  query {
    posts: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fileAbsolutePath: { glob: "**/content/blog/**" } }
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
              gatsbyImageData(
                width: 250
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
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

const BlogPage = ({ data }) => {
  const blogposts = data.posts.nodes;

  return (
    <Layout>
      <SEO title="Blog" description="LCT Blogposts" />
      <div className="flex flex-grow flex-col items-center bg-zinc-50 dark:bg-slate-900">
        <div className="w-full max-w-6xl flex-grow bg-white py-12 shadow dark:bg-slate-800/30 dark:text-zinc-200">
          <div className="text-center">
            <h1 className="brown-header-text text-xl font-extrabold leading-9 sm:text-2xl sm:leading-10 md:text-3xl">
              Blog
            </h1>
          </div>
          <BlogPostList blogposts={blogposts} />
        </div>
      </div>
    </Layout>
  );
};

BlogPage.propTypes = {
  data: PropTypes.shape({
    posts: PropTypes.shape({
      // eslint-disable-next-line react/forbid-prop-types
      nodes: PropTypes.arrayOf(PropTypes.object).isRequired,
    }).isRequired,
  }).isRequired,
};

export default BlogPage;
