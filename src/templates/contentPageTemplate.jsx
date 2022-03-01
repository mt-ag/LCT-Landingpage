import React from 'react';
import PropTypes from 'prop-types';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

export const query = graphql`
  query ($id: String!) {
    content: mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
      body
      id
      fileAbsolutePath
    }
  }
`;

const ContentPageTemplate = ({ data }) => {
  const { content } = data;
  const { body, frontmatter } = content;
  const { title } = frontmatter;

  return (
    <Layout>
      <SEO title={title} />
      <article className="pt-5 pb-12 md:w-3/4 lg:w-2/3 m-auto px-4 lg:px-8 bg-white shadow">
        <header className="mb-16">
          <h1 className="text-zinc-900 text-2xl lg:text-5xl tracking-tight font-extrabold">
            {title}
          </h1>
        </header>
        <main className="prose lg:prose-xl prose-cyan">
          <MDXProvider>
            <MDXRenderer>{body}</MDXRenderer>
          </MDXProvider>
        </main>
      </article>
    </Layout>
  );
};

ContentPageTemplate.propTypes = {
  data: PropTypes.shape({
    content: PropTypes.shape({
      body: PropTypes.string.isRequired,
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default ContentPageTemplate;
