import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ArrowRightIcon } from '@heroicons/react/solid';
import Layout from '../components/layout';
import SEO from '../components/seo';
import slugify from '../util/slugify';

export const query = graphql`
  query ($tag: String!) {
    posts: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { tags: { eq: $tag } } }
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

const BlogTagTemplate = ({ data, pageContext }) => {
  const blogposts = data.posts.nodes;

  const { tag } = pageContext;

  return (
    <Layout>
      <SEO
        title={`Blog | ${tag}`}
        description={`Blogposts tagged with: ${tag}`}
      />
      <div className="flex flex-grow flex-col items-center bg-zinc-50">
        <div className="w-full max-w-6xl flex-grow bg-white py-12 shadow">
          <div className="text-center">
            <h1 className="brown-header-text text-3xl font-extrabold leading-9 sm:text-4xl sm:leading-10">
              <span>
                Blogposts tagged with:{' '}
                <span className="font-mono text-cyan-600">{tag}</span>
              </span>
            </h1>
          </div>
          <div className="mx-16 mt-12 divide-y divide-zinc-200">
            {blogposts.map(({ frontmatter }) => (
              <div className="flex flex-wrap space-x-3 py-4 md:flex-nowrap">
                <div className="p-2">
                  <GatsbyImage
                    image={frontmatter.titleImage.sharp.gatsbyImageData}
                    className="max-w-[250px] rounded"
                    alt={frontmatter.titleImageAlt}
                  />
                </div>
                <div className="flex flex-col p-2 md:flex-grow">
                  <h2 className="title-font mb-2 text-2xl font-medium text-zinc-900">
                    {frontmatter.title}
                  </h2>
                  <p className="flex-grow leading-relaxed text-zinc-800">
                    {frontmatter.description}
                  </p>
                  <div className="flex items-center">
                    <date>{frontmatter.formattedDate}</date>
                    <span className="mx-2 text-xl text-zinc-600">•</span>
                    <Link
                      to={`/blog/${slugify(frontmatter.slug)}`}
                      className="inline-flex items-center rounded px-2 py-1 text-cyan-600 focus:ring focus:ring-cyan-300/50"
                    >
                      Read
                      <ArrowRightIcon className="ml-2 h-4 w-4 " />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
