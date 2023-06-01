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
    {
      name: `og:title`,
      content: `Low Code Testing for Oracle APEX`,
    },
  ];

  return meta;
}

export default getHomeMeta;
