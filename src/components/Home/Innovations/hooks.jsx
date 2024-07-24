import { useEffect, useState, useRef } from 'react';

export const useScrollAnimation = () => {
  const [isMouseDown, setMouseDown] = useState(false);
  const scrollSpeed = 2;
  let mouseDownTimeOut = null;
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;

    const handleScroll = () => {
      if (container.scrollWidth > container.clientWidth) {
        container.scrollLeft += scrollSpeed;
        if (
          container.scrollLeft >=
          container.scrollWidth - container.clientWidth
        ) {
          container.scrollLeft = 0;
        }
      }
    };

    let intervalId = null;
    if (window.innerWidth < 768 && !isMouseDown) {
      intervalId = setInterval(() => {
        if (window.visualViewport.width < 768) {
          handleScroll();
        }
      }, 16); // Roughly 60 frames per second
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isMouseDown, scrollRef]);

  const handleMouseDown = () => {
    setMouseDown((prev) => !prev);
    if (mouseDownTimeOut) clearTimeout(mouseDownTimeOut);

    mouseDownTimeOut = setTimeout(() => {
      setMouseDown(false);
    }, 5000);
  };

  return { isMouseDown, handleMouseDown, scrollRef };
};
