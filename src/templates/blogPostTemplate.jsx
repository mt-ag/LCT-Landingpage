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
import ImageGetter from '../components/ImageGetter';

const components = {
  // eslint-disable-next-line react/prop-types
  Image: ({ filename, alt }) => <ImageGetter filename={filename} alt={alt} />,
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
      <div className="flex flex-grow bg-zinc-50 dark:bg-slate-900">
        <article className="m-auto flex-row-reverse bg-white px-2 pt-4 pb-6 shadow dark:bg-slate-800/30 lg:flex lg:px-8 lg:pt-12">
          <div className="flex-grow border-zinc-200 dark:border-slate-700/40 lg:w-[330px] lg:border-l lg:pl-6">
            <div className="prose prose-slate mb-5 flex h-full flex-col dark:prose-invert dark:prose-p:text-slate-300 dark:prose-li:text-slate-300 lg:prose-lg lg:mb-0">
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
              <div className="hidden lg:visible">
                <a href={`#${titleId}`} className="flex items-center">
                  <ArrowUpIcon className="mr-3 h-5 w-5" />
                  Back to top
                </a>
              </div>
            </div>
          </div>

          <div className="prose prose-slate mr-6 prose-img:rounded-md dark:prose-invert dark:prose-p:text-slate-300 dark:prose-li:text-slate-300 dark:prose-tr:text-slate-300 lg:prose-xl">
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
              <MDXProvider components={components}>
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
