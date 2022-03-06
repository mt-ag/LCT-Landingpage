/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { CalendarIcon, ClockIcon, TagIcon } from '@heroicons/react/solid';
import Layout from '../components/layout';
import SEO from '../components/seo';
import '../styles/blog.css';
import getBlogMeta from '../util/getBlogMeta';

export const query = graphql`
  query ($id: String!) {
    content: mdx(id: { eq: $id }) {
      frontmatter {
        title
        date
        formattedDate: date(formatString: "MMMM DD, YYYY")
        description
        titleImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        fixedTitleImage: titleImage {
          childImageSharp {
            gatsbyImageData(layout: FIXED)
          }
        }
        titleImageAlt
        titleImageSource {
          text
          href
        }
        tags
      }
      body
      timeToRead
    }
  }
`;

const BlogPostTemplate = ({ data }) => {
  const { content } = data;
  const { body, frontmatter, timeToRead } = content;
  const {
    title,
    date,
    formattedDate,
    description,
    titleImage,
    fixedTitleImage,
    titleImageAlt,
    titleImageSource,
    tags,
  } = frontmatter;

  const meta = getBlogMeta({
    imgSrc: fixedTitleImage.childImageSharp.gatsbyImageData.images.fallback.src,
    imgAlt: titleImageAlt,
    publishISO: date,
    tags,
    imgWidth: fixedTitleImage.childImageSharp.gatsbyImageData.width,
    imgHeight: fixedTitleImage.childImageSharp.gatsbyImageData.height,
  });

  return (
    <Layout>
      <SEO title={title} description={description} meta={meta} />
      <div className="bg-zinc-50">
        <article className="m-auto flex max-w-[70%] flex-row-reverse bg-white px-8 pt-12 pb-6 shadow">
          <div className="flex-grow border-l border-zinc-200 pl-6">
            <div className="prose lg:prose-lg">
              <div className="flex items-center">
                <CalendarIcon className="mr-3 h-5 w-5 text-zinc-400" />
                <time dateTime={date}>{formattedDate}</time>
              </div>
              <div className="flex items-center">
                <ClockIcon className="mr-3 h-5 w-5 text-zinc-400" />
                {timeToRead} min
              </div>
              <div className="flex">
                <TagIcon className="mr-3 mt-2 h-5 w-5 text-zinc-400" />
                <ul>
                  {tags.map((tag) => (
                    <li className="!m-0">
                      <Link to={`/blog/tag/${tag}`} key={tag}>
                        {tag}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="prose prose-zinc mr-6 prose-img:rounded-md lg:prose-xl">
            <header className="mb-6">
              <h1 className="font-bold-header text-2xl font-bold tracking-tight text-zinc-900 lg:text-5xl">
                {title}
              </h1>
            </header>
            <main className="">
              <div className="my-4 text-zinc-800">{description}</div>
              <GatsbyImage
                image={titleImage.childImageSharp.gatsbyImageData}
                className="h-100 object-cover"
                alt={titleImageAlt}
              />
              {titleImageSource.text && titleImageSource.href ? (
                <div className="text-base">
                  <a href={titleImageSource.href} className="text-zinc-500">
                    [Source: {titleImageSource.text}]
                  </a>
                </div>
              ) : null}
              <MDXProvider>
                <MDXRenderer>{body}</MDXRenderer>
              </MDXProvider>
            </main>
          </div>
        </article>
      </div>
    </Layout>
  );
};

BlogPostTemplate.propTypes = {
  data: PropTypes.shape({
    content: PropTypes.shape({
      body: PropTypes.string.isRequired,
      timeToRead: PropTypes.number.isRequired,
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        titleImage: PropTypes.object.isRequired,
        fixedTitleImage: PropTypes.object.isRequired,
        titleImageSource: PropTypes.shape({
          text: PropTypes.string,
          href: PropTypes.string,
        }),
        date: PropTypes.string.isRequired,
        formattedDate: PropTypes.string.isRequired,
        titleImageAlt: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string),
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default BlogPostTemplate;
