const siteUrl = `https://lct.software`;

function getHomeMeta({ imgSrc, imgHeight, imgWidth }) {
  const meta = [
    {
      name: `twitter:image`,
      content: `${siteUrl}${imgSrc}`,
    },
    {
      name: `og:image`,
      content: `${siteUrl}${imgSrc}`,
    },
    {
      name: `og:image:width`,
      content: imgWidth,
    },
    {
      name: `og:image:height`,
      content: imgHeight,
    },
  ];

  return meta;
}

export default getHomeMeta;
