import { useEffect, useRef, useState } from 'react';
export const useSlider = (product) => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const thumbnailsContainerRef = useRef(null);

  useEffect(() => {
    if (thumbnailsContainerRef.current) {
      const currentThumbnail =
        thumbnailsContainerRef.current.children[currentIndex];
      if (currentThumbnail) {
        currentThumbnail.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center',
        });
      }
    }
  }, [currentIndex]);
  useEffect(() => {
    const rearrangeImages = (images, mainImage) => {
      return images.reduce(
        (acc, image) => {
          if (image === mainImage) {
            acc.main.push(image);
          } else {
            acc.rest.push(image);
          }
          return acc;
        },
        { main: [], rest: [] }
      );
    };

    const { main, rest } = rearrangeImages(product.images, product.mainImage);
    setImages([...main, ...rest]);
  }, [product.images, product.mainImage]);

  useEffect(() => {}, [images.length]);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleImageClick = (index) => {
    setCurrentIndex(index);
  };

  return {
    images,
    currentIndex,
    handlePrevClick,
    handleNextClick,
    handleImageClick,
    thumbnailsContainerRef,
  };
};
