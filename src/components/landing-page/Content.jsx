import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const Content = ({ allYoutubeVideo, posts }) => (
  <div className="pb-16 lg:pb-32">
    <div className="h-[600px] w-full pt-4 md:h-[400px] lg:pt-8" />
    <div className="mx-6 mt-[-600px]  md:mt-[-400px]">
      <h2 className="mx-auto mb-12 w-5/6 text-center text-2xl font-extrabold tracking-tight text-white lg:w-full lg:text-5xl">
        More about LCT from the Team
      </h2>
      <div className="mx-auto grid max-w-[1000px] grid-cols-1 gap-y-8 px-0 md:grid-cols-2 md:gap-x-8 md:gap-y-0 md:px-8 lg:gap-x-16">
        <div className="w-full rounded-lg bg-black p-4 shadow-md border-2 border-hyand-blue">
          <h3 className="mb-5 text-xl font-medium text-white">Videos</h3>
          <ul>
            {allYoutubeVideo.nodes.map((video) => (
              <li key={video.videoId}>
                <a
                  href={`https://www.youtube.com/watch?v=${video.videoId}`}
                  target="_blank"
                  rel="noopener"
                  className="my-1 grid grid-cols-2 items-center gap-y-4 space-x-4 rounded px-2 py-1 transition-colors duration-150 ease-in-out hover:ring-1 hover:ring-hyand-blue focus:outline-none focus:ring-1 focus:ring-hyand-blue"
                >
                  <div className="">
                    <GatsbyImage
                      image={video.localThumbnail.sharp.gatsbyImageData}
                      alt=""
                      className="aspect-video rounded"
                    />
                  </div>
                  <div className="text-slate-700">
                    <span className="text-base font-semibold text-white">
                      {video.title}
                    </span>
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
              className="rounded px-2 py-1 text-slate-700 text-white underline hover:text-hyand-blue focus:outline-none focus:ring-1 focus:ring-hyand-blue"
            >
              Subscribe to our channel
            </a>
          </div>
        </div>
        <div className="w-full rounded-lg bg-black border-2 border-hyand-blue p-4 shadow-md">
          <h3 className="mb-5 text-xl font-medium text-white">Blog</h3>
          <ul>
            {posts.nodes.map((post) => (
              <li key={post.frontmatter.slug}>
                <Link
                  to={`/blog/${post.frontmatter.slug}`}
                  className="my-1 grid grid-cols-2 items-center gap-y-4 space-x-4 rounded px-2 py-1 transition-colors duration-150 ease-in-out hover:ring-1 hover:ring-hyand-blue focus:outline-none focus:ring-1 focus:ring-mt-blue"
                >
                  <div className="">
                    <GatsbyImage
                      image={post.frontmatter.titleImage.sharp.gatsbyImageData}
                      alt=""
                      className="aspect-video rounded"
                    />
                  </div>
                  <div className="text-slate-700">
                    <span className="text-base font-semibold text-white">
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
              className="rounded px-2 py-1 text-slate-700 text-white underline hover:text-hyand-blue focus:outline-none focus:ring-1 focus:ring-hyand-blue"
            >
              All Posts
            </Link>
          </div>
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
