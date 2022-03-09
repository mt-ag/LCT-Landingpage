/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ArrowUpIcon } from '@heroicons/react/solid';
import slugify from '../util/slugify';

import Layout from '../components/layout';
import SEO from '../components/seo';
import '../styles/blog.css';
import getBlogMeta from '../util/getBlogMeta';
import { AuthorDisplay, PostStats } from '../components/blog';

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
        authors
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
    authors,
  } = frontmatter;

  const meta = getBlogMeta({
    imgSrc: fixedTitleImage.childImageSharp.gatsbyImageData.images.fallback.src,
    imgAlt: titleImageAlt,
    publishISO: date,
    tags,
    imgWidth: fixedTitleImage.childImageSharp.gatsbyImageData.width,
    imgHeight: fixedTitleImage.childImageSharp.gatsbyImageData.height,
  });

  const titleId = slugify(title);

  return (
    <Layout>
      <SEO title={title} description={description} meta={meta} />
      <div className="flex flex-grow bg-zinc-50">
        <article className="m-auto flex flex-row-reverse bg-white px-8 pt-12 pb-6 shadow">
          <div className="w-[330px] flex-grow border-l border-zinc-200 pl-6">
            <div className="prose flex h-full flex-col lg:prose-lg">
              <div className="flex-grow">
                <PostStats
                  date={date}
                  formattedDate={formattedDate}
                  timeToRead={timeToRead}
                  tags={tags}
                />

                <div className="mt-16">
                  <AuthorDisplay authors={authors} />
                </div>
              </div>
              <div className="">
                <a
                  href={`#${titleId}`}
                  className="flex items-center text-zinc-500"
                >
                  <ArrowUpIcon className="mr-3 h-5 w-5" />
                  Back to top
                </a>
              </div>
            </div>
          </div>

          <div className="prose prose-zinc mr-6 prose-img:rounded-md lg:prose-xl">
            <header className="mb-6">
              <h1
                className="scroll-mt-32 font-bold-header text-2xl font-bold tracking-tight text-zinc-900 lg:text-5xl"
                id={titleId}
              >
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
        authors: PropTypes.arrayOf(PropTypes.string),
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default BlogPostTemplate;
