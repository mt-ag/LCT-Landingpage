const siteUrl = `https://lct.software`;
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

if (!process.env.YT_API_KEY) {
  throw new Error('YT_API_KEY env is not defined');
}

module.exports = {
  siteMetadata: {
    title: `Low Code Testing for Oracle APEX`,
    description: `Testing Oracle APEX Apps is now as easy as creating them.`,
    author: `@LowCodeTesting`,
    siteUrl,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Low Code Testing`,
        short_name: `LCT`,
        start_url: `/`,
        background_color: `#38BDF8`,
        theme_color: `#38BDF8`,
        display: `minimal-ui`,
        icon: `src/images/LCT_Logo_pur_hyand.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://lct.software/`,
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
        }`,
        resolveSiteUrl: () => siteUrl,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svgs/,
          options: {
            props: {
              height: '100%',
            },
          },
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) =>
              allMdx.edges.map((edge) => ({
                title: edge.node.frontmatter.title,
                description: edge.node.frontmatter.description,
                date: edge.node.frontmatter.date,
                url: `${site.siteMetadata.siteUrl}/${edge.node.slug}`,
                guid: `${site.siteMetadata.siteUrl}/${edge.node.slug}`,
                enclosure: {
                  url:
                    site.siteMetadata.siteUrl +
                    edge.node.frontmatter.titleImage.childImageSharp.fixed.src,
                  type: 'image/jpeg',
                  length: null,
                },
              })),
            query: `
              {
                allMdx(
                  sort: {fields: frontmatter___date, order: DESC}
                  filter: {fileAbsolutePath: {glob: "**/content/blog/**"}}
                ) {
                  edges {
                    node {
                      frontmatter {
                        title
                        description
                        date
                        titleImage {
                          childImageSharp {
                            fixed(toFormat: JPG, jpegQuality: 50) {
                              src
                            }
                          }
                        }
                      }
                      slug
                    }
                  }
                }
              }            
            `,
            output: '/blog/feed.xml',
            title: 'LCT Blog',
          },
        ],
      },
    },
    'gatsby-plugin-uninline-styles',
    {
      resolve: `gatsby-source-youtube-v3`,
      options: {
        channelId: ['UCWj_laDAKjgRaw4SjEdVyIA'],
        apiKey: process.env.YT_API_KEY, // Optional for public requests
        maxVideos: 10, // Defaults to 50
      },
    },
  ],
};
