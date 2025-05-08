import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import VideoShowcase from './VideoShowcase';

const InfoHeader = () => {
  // Query the image once
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "abstrakt_06a.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

  // Set ImageData
  const imageData = data.desktop.childImageSharp.fluid;

  return (
    <BackgroundImage
      Tag="section"
      fluid={imageData}
      backgroundColor="#00476f"
      style={{
        width: '100vw',
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '50vh', // Add this to increase vertical size
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
      className="pt-16 pb-20 sm:pt-24 sm:pb-24 lg:pt-20 lg:pb-32 relative"
    >
      {/* Gradient overlay - fades from transparent to black */}
      <div 
        className="absolute inset-x-0 bottom-0 h-60 pointer-events-none" 
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)',
        }}
      />

      <div className="container relative z-10 mx-auto px-4">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
            <div>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-5xl">
                <span className="block">Testing APEX Apps is now</span>
                <span className="block bg-gradient-to-r from-white to-hyand-green bg-clip-text py-3 text-transparent">
                  as easy as creating them.
                </span>
              </h2>
            </div>
          </div>
          <div className="mx-4 mt-2 md:mt-8 lg:mx-0 lg:mt-0">
            <VideoShowcase />
          </div>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default InfoHeader;