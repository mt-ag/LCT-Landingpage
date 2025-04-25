import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import NewsletterModal from '../components/NewsletterModal';
import Footer from '../components/footer';
import Contact from '../components/landing-page/Contact';
import Content, {
  blogContentType,
  ytVideoType,
} from '../components/landing-page/Content';
import Features from '../components/landing-page/Features';
import InfoHeader from '../components/landing-page/InfoHeader';
import LandingHeader from '../components/landing-page/LandingHeader';
import NewsletterSection from '../components/landing-page/NewsletterSection';
import Offer from '../components/landing-page/Offer';
import SEO from '../components/seo';
import getHomeMeta from '../util/getHomeMeta';

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
              width: 315
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
                width: 315
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }

    metaImg: allImageSharp(
      filter: { fixed: { originalName: { eq: "lct-website-title-img.jpg" } } }
    ) {
      nodes {
        gatsbyImageData(quality: 95, formats: JPG)
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  const imgData = data.metaImg.nodes[0].gatsbyImageData;
  const meta = getHomeMeta({
    imgSrc: imgData.images.fallback.src,
    imgHeight: imgData.height,
    imgWidth: imgData.width,
  });

  return (
    <div className="flex flex-col bg-hyand-black font-hyand text-white">
      <SEO title="Low Code Testing for Oracle APEX" meta={meta} home />
      <div className="pb-8 lg:pb-0">
        <div className="mx-auto lg:px-8">
          <LandingHeader />
        </div>
        <div className="mx-auto mt-16 xl:w-2/3">
          <InfoHeader />
        </div>
      </div>
      <div className="pt-16">
        <div className="mx-auto max-w-4xl" />
      </div>
      <div>
        <Content allYoutubeVideo={data.allYoutubeVideo} posts={data.posts} />
      </div>
      <div className="mx-auto lg:w-2/3">
        <Features />
      </div>
      <div>
        <Offer />
      </div>
      <div style={{ backgroundColor: '#22282B' }}>
        <div className="mx-auto max-w-7xl lg:px-8">
          <Contact />
        </div>
      </div>
      <NewsletterModal />
      <div>
        <div className="mx-auto max-w-7xl">
          <Footer />
        </div>
      </div>
    </div>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    allYoutubeVideo: ytVideoType.isRequired,
    posts: blogContentType.isRequired,
    metaImg: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          // eslint-disable-next-line react/forbid-prop-types
          gatsbyImageData: PropTypes.object.isRequired,
        }).isRequired
      ).isRequired,
    }).isRequired,
  }).isRequired,
};

export default IndexPage;
