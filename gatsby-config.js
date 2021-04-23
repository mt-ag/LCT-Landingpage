module.exports = {
  siteMetadata: {
    title: `Low Code Testing`,
    description: `Testing APEX Apps is now as easy as creating them.`,
    author: `@MT_AG_`,
    siteUrl: `https://lct.software`,
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
        icon: `src/images/lct-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://lct.software/`,
      },
    },
    `gatsby-plugin-sitemap`,
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
  ],
};
