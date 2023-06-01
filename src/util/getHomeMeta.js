function getHomeMeta({ imgSrc, imgHeight, imgWidth }) {
  const meta = [
    {
      name: `twitter:image`,
      content: `${imgSrc}`,
    },
    {
      name: `og:image`,
      content: `${imgSrc}`,
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
