"use client"
import React from 'react';
import { motion } from 'framer-motion';
const loading = () => {
  return (
    <div className='bg-lightgray absolute right-0 top-0 z-[200] flex h-screen w-screen items-center justify-center'>
      <motion.div
        className='relative'
        style={{
          width: '80px',
          height: '80px',
        }}
      >
        <motion.div
          className='absolute rounded-full bg-[#48C352]'
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className='absolute rounded-full bg-[#EDFFEE]'
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            top: '10px',
            left: '10px',
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
        />
      </motion.div>
    </div>
  );
};

export default loading;
