'use client';
import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
const AnimatedFromLeft = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);
  return (
    <div ref={ref} className='overflow-hidden'>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
        initial='hidden'
        animate={mainControls}
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.3 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AnimatedFromLeft;
