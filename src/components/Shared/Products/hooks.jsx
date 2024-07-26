import { useEffect, useRef } from 'react';

export const useProductsNavigation = (isRelated) => {
  const productsRef = useRef(null);
  useEffect(() => {}, [isRelated]);
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
