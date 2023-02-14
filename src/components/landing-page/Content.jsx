import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const Content = ({ allYoutubeVideo, posts }) => (
  <div className="mt-4 mb-16 lg:mt-8 lg:mb-32">
    <h2 className="mx-auto mb-12 w-5/6 text-center text-2xl font-extrabold tracking-tight text-white lg:w-full lg:text-5xl">
      LCT in Action
    </h2>
    <div className="mx-auto grid max-w-[1000px] grid-cols-1 gap-y-8 px-0 md:grid-cols-2 md:gap-x-8 md:gap-y-0 md:px-8 lg:gap-x-16">
      <div className="w-full rounded-lg bg-white p-4 shadow-md shadow-sky-500/50">
        <h3 className="mb-5 text-xl font-medium text-black">Videos</h3>
        <ul>
          {allYoutubeVideo.nodes.map((video) => (
            <li key={video.videoId}>
              <a
                href={`https://www.youtube.com/watch?v=${video.videoId}`}
                target="_blank"
                rel="noopener"
                className="my-1 grid grid-cols-2 items-center gap-y-4 space-x-4 rounded py-1 px-2 transition-colors duration-150 ease-in-out hover:bg-sky-100 focus:outline-none focus:ring-1 focus:ring-mt-blue"
              >
                <div className="">
                  <GatsbyImage
                    image={video.localThumbnail.sharp.gatsbyImageData}
                    alt=""
                    className="aspect-video rounded"
                  />
                </div>
                <div className="text-slate-700">
                  <span className="text-base font-semibold">{video.title}</span>
                  <time
                    dateTime={video.date}
                    className="mt-1 block text-sm text-slate-500"
                  >
                    {video.formattedDate}
                  </time>
                </div>
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-5 text-center">
          <a
            href="https://www.youtube.com/@lct-apex"
            className="rounded px-2 py-1 text-slate-700 underline hover:text-mt-blue/70 focus:outline-none focus:ring-1 focus:ring-mt-old-blue"
          >
            Subscribe to our channel
          </a>
        </div>
      </div>
      <div className="w-full rounded-lg bg-white p-4 shadow-md shadow-sky-500/50 ">
        <h3 className="mb-5 text-xl font-medium text-black">Blog</h3>
        <ul>
          {posts.nodes.map((post) => (
            <li key={post.frontmatter.slug}>
              <Link
                to={`/blog/${post.frontmatter.slug}`}
                className="my-1 grid grid-cols-2 items-center gap-y-4 space-x-4 rounded py-1 px-2 transition-colors duration-150 ease-in-out hover:bg-sky-100 focus:outline-none focus:ring-1 focus:ring-mt-blue"
              >
                <div className="">
                  <GatsbyImage
                    image={post.frontmatter.titleImage.sharp.gatsbyImageData}
                    alt=""
                    className="aspect-video rounded"
                  />
                </div>
                <div className="text-slate-700">
                  <span className="text-base font-semibold">
                    {post.frontmatter.title}
                  </span>
                  <time
                    dateTime={post.frontmatter.date}
                    className="mt-1 block text-sm text-slate-500"
                  >
                    {post.frontmatter.formattedDate}
                  </time>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-5 text-center">
          <Link
            to="/blog"
            className="rounded px-2 py-1 text-slate-700 underline hover:text-mt-blue/70 focus:outline-none focus:ring-1 focus:ring-mt-old-blue"
          >
            All Posts
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export const ytVideoType = PropTypes.shape({
  nodes: PropTypes.arrayOf(
    PropTypes.shape({
      publishedAt: PropTypes.string.isRequired,
      formattedDate: PropTypes.string.isRequired,
      privacyStatus: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      videoId: PropTypes.string.isRequired,
      // eslint-disable-next-line react/forbid-prop-types
      localThumbnail: PropTypes.object.isRequired,
    })
  ),
});

export const blogContentType = PropTypes.shape({
  nodes: PropTypes.arrayOf(
    PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        formattedDate: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        // eslint-disable-next-line react/forbid-prop-types
        titleImage: PropTypes.object.isRequired,
      }).isRequired,
    })
  ),
});

Content.propTypes = {
  allYoutubeVideo: ytVideoType.isRequired,
  posts: blogContentType.isRequired,
};

export default Content;
