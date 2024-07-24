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
    setImages([...product.images]);
  }, [product.images]);
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
