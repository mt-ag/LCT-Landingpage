exports.createPages = async ({ actions, graphql }) => {
  const contentPages = await graphql(`
    {
      pages: allMdx {
        nodes {
          frontmatter {
            slug
          }
          id
        }
      }
    }
  `);

  const pages = contentPages.data.pages.nodes;

  pages.forEach((page) => {
    actions.createPage({
      path: `/${page.frontmatter.slug.replace(/ /g, '-')}`,
      component: require.resolve('./src/templates/contentPageTemplate.jsx'),
      context: {
        id: page.id,
      },
    });
  });
};
