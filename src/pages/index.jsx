import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Footer from '../components/footer';
import Contact from '../components/landing-page/Contact';
import Content, {
  blogContentType,
  ytVideoType,
} from '../components/landing-page/Content';
import Features from '../components/landing-page/Features';
import InfoHeader from '../components/landing-page/InfoHeader';
import LandingHeader from '../components/landing-page/LandingHeader';
import Offer from '../components/landing-page/Offer';
import NewsletterModal from '../components/NewsletterModal';
import SEO from '../components/seo';
import VideoShowcase from '../components/landing-page/VideoShowcase';

export const query = graphql`
  {
    allYoutubeVideo(
      filter: { privacyStatus: { eq: "public" } }
      sort: { fields: publishedAt, order: DESC }
      limit: 4
    ) {
      nodes {
        publishedAt
        formattedDate: publishedAt(formatString: "MMMM DD, YYYY")
        privacyStatus
        title
        videoId
        localThumbnail {
          sharp: childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
    posts: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fileAbsolutePath: { glob: "**/content/blog/**" } }
      limit: 4
    ) {
      nodes {
        frontmatter {
          title
          date
          formattedDate: date(formatString: "MMMM DD, YYYY")
          slug
          titleImage {
            sharp: childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => (
  <div className="flex flex-col bg-zinc-200 font-mt">
    <SEO title="Home" />
    <div className="bg-mt-blue pb-8 lg:pb-0">
      <div className="mx-auto max-w-7xl lg:px-8">
        <LandingHeader />
        <InfoHeader />
      </div>
    </div>
    <div className="bg-gradient-to-b from-mt-blue to-mt-old-blue">
      <VideoShowcase />
    </div>
    <div className="">
      <Content allYoutubeVideo={data.allYoutubeVideo} posts={data.posts} />
    </div>
    <div className="mx-auto lg:w-2/3">
      <Features />
    </div>
    <div className="bg-gradient-to-b from-zinc-100 to-white">
      <Offer />
    </div>
    <div className="bg-gradient-to-b from-zinc-200 to-zinc-100">
      <div className="mx-auto max-w-7xl lg:px-8">
        <Contact />
      </div>
    </div>
    <NewsletterModal />
    <Footer />
  </div>
);

IndexPage.propTypes = {
  data: PropTypes.shape({
    allYoutubeVideo: ytVideoType.isRequired,
    posts: blogContentType.isRequired,
  }).isRequired,
};

export default IndexPage;
