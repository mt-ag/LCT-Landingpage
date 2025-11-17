import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ArrowRightIcon } from '@heroicons/react/solid';
import slugify from '../../util/slugify';

const BlogPostList = ({ blogposts }) => (
  <div className="mx-4 mt-4 divide-y divide-zinc-200 dark:divide-slate-700/80 md:mx-16 md:mt-12">
    {blogposts.map(({ frontmatter }) => (
      <Link
        key={frontmatter.slug}
        to={`/blog/${slugify(frontmatter.slug)}`}
        className="inline-flex w-full items-center rounded-md transition-colors hover:bg-zinc-100 focus:outline-none focus:ring focus:ring-hyand-blue/50 dark:hover:bg-slate-700/70"
      >
        <div className="flex flex-wrap space-x-3 py-4 md:flex-nowrap">
          <div className="mx-auto p-2">
            <GatsbyImage
              image={frontmatter.titleImage.sharp.gatsbyImageData}
              className="w-[250px] max-w-[250px] rounded"
              alt={frontmatter.titleImageAlt}
            />
          </div>
          <div className="flex flex-col p-2 md:flex-grow">
            <h2 className="title-font mb-2 text-2xl font-medium text-black dark:text-white">
              {frontmatter.title}
            </h2>
            <p className="flex-grow leading-relaxed text-black dark:text-white">
              {frontmatter.description}
            </p>
            <div className="flex items-center">
              <time dateTime={frontmatter.date}>
                {frontmatter.formattedDate}
              </time>
              <span className="mx-2 text-xl text-black dark:text-white">
                •
              </span>
              <span className="inline-flex items-center text-hyand-blue dark:text-hyand-blue">
                Read
                <ArrowRightIcon className="ml-2 h-4 w-4 " />
              </span>
            </div>
          </div>
        </div>
      </Link>
    ))}
  </div>
);

BlogPostList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  blogposts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BlogPostList;
