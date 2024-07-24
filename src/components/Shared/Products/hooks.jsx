import { useRef } from 'react';

export const useProductsNavigation = () => {
  const productsRef = useRef(null);

  // scrollers handlers
  const scrollLeft = () => {
    if (productsRef.current) {
      productsRef.current.scrollLeft -= 200;
    }
  };

  const scrollRight = () => {
    if (productsRef.current) {
      productsRef.current.scrollLeft += 200;
    }
  };

  return { productsRef, scrollLeft, scrollRight };
};
