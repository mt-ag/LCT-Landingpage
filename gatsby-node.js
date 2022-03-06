const slugify = require('./src/util/slugify');

exports.createPages = async ({ actions, graphql }) => {
  const contentPagesQuery = await graphql(`
    {
      pages: allMdx(
        filter: { fileAbsolutePath: { glob: "**/content/content-pages/**" } }
      ) {
        nodes {
          frontmatter {
            slug
          }
          id
        }
      }
    }
  `);

  const contentPages = contentPagesQuery.data.pages.nodes;

  contentPages.forEach((page) => {
    actions.createPage({
      path: `/${slugify(page.frontmatter.slug)}`,
      component: require.resolve('./src/templates/contentPageTemplate.jsx'),
      context: {
        id: page.id,
      },
    });
  });

  const blogPagesQuery = await graphql(`
    {
      pages: allMdx(
        filter: { fileAbsolutePath: { glob: "**/content/blog/**" } }
      ) {
        nodes {
          frontmatter {
            slug
          }
          id
        }
      }
    }
  `);

  const blogPages = blogPagesQuery.data.pages.nodes;

  blogPages.forEach((page) => {
    actions.createPage({
      path: `/blog/${slugify(page.frontmatter.slug)}`,
      component: require.resolve('./src/templates/blogPostTemplate.jsx'),
      context: {
        id: page.id,
      },
    });
  });
};
