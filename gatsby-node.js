const slugify = require('./src/util/slugify');

const tagSet = new Set();

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
            tags
          }
          id
        }
      }
    }
  `);

  const blogPages = blogPagesQuery.data.pages.nodes;

  blogPages.forEach((page) => {
    page.frontmatter.tags.forEach((tag) => tagSet.add(tag));

    actions.createPage({
      path: `/blog/${slugify(page.frontmatter.slug)}`,
      component: require.resolve('./src/templates/blogPostTemplate.jsx'),
      context: {
        id: page.id,
      },
    });

    tagSet.forEach((tag) => {
      actions.createPage({
        path: `/blog/tags/${slugify(tag)}`,
        component: require.resolve('./src/templates/blogTagTemplate.jsx'),
        context: {
          tag,
        },
      });
    });
  });
};
