/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';

const SEO = ({
  description,
  lang,
  meta,
  title,
  blog = false,
  home = false,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={home ? 'LCT' : title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      <script
        async
        defer
        data-domain="lct.software"
        src="/toolsapi/script.js"
      />
      {blog && (
        <link
          data-title="LCT blog feed"
          href="/blog/feed.xml"
          rel="alternate"
          type="application/atom+xml"
        />
      )}
    </Helmet>
  );
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  blog: false,
  home: false,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  blog: PropTypes.bool,
  home: PropTypes.bool,
};

export default SEO;
