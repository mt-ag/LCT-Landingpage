const filterImage = (images, filename) => {
  const img = images.allImageSharp.edges.find(
    (element) =>
      // Match string after final slash
      element.node.gatsbyImageData.images.fallback.src.split('/').pop() ===
      filename
  );
  return img.node.gatsbyImageData;
};

export default filterImage;
