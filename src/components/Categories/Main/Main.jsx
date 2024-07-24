import React from 'react';
import dynamic from 'next/dynamic';
const Sidebar = dynamic(() => import('./Sidebar/Sidebar'), { ssr: false });
const Products = dynamic(() => import('./Products/Products'), { ssr: false });
import AnimatedFromLeft from '@/components/Shared/Animated/AnimatedFromLeft';

const Main = ({ locale, category }) => {
  return (
    <main className='mb-20 flex w-[99vw] flex-col md:flex-row'>
      <AnimatedFromLeft>
        <Sidebar locale={locale} />
      </AnimatedFromLeft>
      <Products locale={locale} category={category} />
    </main>
  );
};

export default Main;
