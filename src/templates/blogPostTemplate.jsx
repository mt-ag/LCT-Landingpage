/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ArrowUpIcon, RssIcon } from '@heroicons/react/solid';
import slugify from '../util/slugify';
import Layout from '../components/layout';
import SEO from '../components/seo';
import '../styles/blog.css';
import getBlogMeta from '../util/getBlogMeta';
import {
  AuthorDisplay,
  PostStats,
} from '../components/blog';
import Codemirror from '../components/blog/Codemirror';
import BlogImageGetter from '../components/blog/BlogImageGetter';
import BlogImagePopup from '../components/blog/BlogImagePopup';
import YouTubeEmbed from '../components/blog/YouTubeEmbed';
import BlogGifGetter from '../components/blog/BlogGifGetter';

const components = {
  // eslint-disable-next-line react/prop-types
  Image: ({ filename, alt, maxWidthPx }) => (
    <BlogImageGetter filename={filename} alt={alt} maxWidthPx={maxWidthPx} />
  ),
  // eslint-disable-next-line react/prop-types
  pre: ({ children }) => children, // handled by code
  code: Codemirror,
  YouTube: YouTubeEmbed,
  // eslint-disable-next-line react/prop-types
  BlogGif: ({ filename, alt }) => (
    <BlogGifGetter
      filename={filename}
      alt={alt}
      classes="object-contain my-12 mx-auto shadow-md xxl:w-3/4"
    />
  ),
};

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
            gatsbyImageData(
              layout: CONSTRAINED
              width: 825
              formats: [AUTO, WEBP, AVIF]
              breakpoints: [500, 650, 825]
            )
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
    authors,
  });

  const titleId = slugify(title);

  return (
    <Layout>
      <SEO title={title} description={description} meta={meta} blog />
      <div className="flex flex-grow bg-zinc-50 dark:bg-slate-900">
        <article className="m-auto flex-row-reverse bg-white px-2 pb-6 pt-4 shadow dark:bg-slate-800/30 lg:flex lg:px-8 lg:pt-12">
          <div className="flex-grow border-zinc-200 dark:border-slate-700/40 lg:w-[330px] lg:border-l lg:pl-6">
            <div className="prose prose-slate mb-5 flex h-full flex-col px-2 dark:prose-invert lg:prose-lg dark:prose-p:text-slate-300 dark:prose-li:text-slate-300 md:px-4 lg:mb-0 lg:px-0">
              <div className="flex-grow text-zinc-700 dark:text-slate-300">
                <PostStats
                  date={date}
                  formattedDate={formattedDate}
                  timeToRead={timeToRead}
                  tags={tags}
                />

                <div className="mt-6 lg:mt-16">
                  <AuthorDisplay authors={authors} />
                </div>
              </div>
              <div className="hidden space-y-5 lg:block">
                <a href="/blog/feed.xml" className="flex items-center">
                  <RssIcon className="mr-3 h-5 w-5" />
                  RSS Feed
                </a>
                <a href={`#${titleId}`} className="flex items-center">
                  <ArrowUpIcon className="mr-3 h-5 w-5" />
                  Back to top
                </a>
              </div>
            </div>
          </div>

          <div className="prose prose-slate px-2 dark:prose-invert lg:prose-xl prose-img:rounded-md prose-img:border prose-img:border-slate-200 dark:prose-p:text-slate-300 dark:prose-li:text-slate-300 dark:prose-tr:text-slate-300 dark:prose-img:border-slate-600/50 md:px-4 lg:mr-6 lg:px-0">
            <header className="mb-6">
              <h1
                className="scroll-mt-32 font-bold-header text-2xl font-bold tracking-tight text-zinc-900 dark:text-cyan-400 lg:text-5xl"
                id={titleId}
              >
                {title}
              </h1>
            </header>
            <main className="">
              <div className="my-4 text-zinc-800 dark:text-zinc-200">
                {description}
              </div>
              <GatsbyImage
                image={titleImage.childImageSharp.gatsbyImageData}
                className="max-h-96 object-cover"
                alt={titleImageAlt}
              />
              {titleImageSource.text && titleImageSource.href ? (
                <div className="text-base">
                  <a
                    href={titleImageSource.href}
                    className="text-zinc-500 dark:text-slate-300/70"
                  >
                    [Source: {titleImageSource.text}]
                  </a>
                </div>
              ) : null}
              <MDXProvider components={components}>
                <MDXRenderer>{body}</MDXRenderer>
              </MDXProvider>
            </main>
          </div>
        </article>
      </div>
      <BlogImagePopup />
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
