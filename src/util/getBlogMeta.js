function getBlogMeta({
  imgSrc,
  imgAlt,
  publishISO,
  tags,
  imgHeight,
  imgWidth,
}) {
  const meta = [
    {
      name: `twitter:image`,
      content: `https://hartenfeller.dev${imgSrc}`,
    },
    {
      name: `twitter:image:alt`,
      content: imgAlt,
    },
    {
      name: `og:image`,
      content: `https://hartenfeller.dev${imgSrc}`,
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
      name: `og:image:alt`,
      content: imgAlt,
    },
    {
      name: `article:published_time`,
      content: publishISO,
    },
    {
      name: `article:author`,
      content: 'Philipp Hartenfeller',
    },
    {
      name: `monetization`,
      content: `$ilp.uphold.com/dhUZx4rikrgf`,
    },
  ];

  tags.forEach((tag) => {
    meta.push({
      name: `article:tag`,
      content: tag,
    });
  });

  return meta;
}

export default getBlogMeta;
