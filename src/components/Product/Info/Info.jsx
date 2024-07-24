import React from 'react';
import Slider from './Slider/Slider';
import Descreption from './Descreption/Descreption';

const Info = ({ product, locale }) => {
  return (
    <section className='flex w-full flex-col justify-between gap-10 lg:flex-row'>
      <Slider product={product} locale={locale} />
      <Descreption product={product} locale={locale} />
    </section>
  );
};

export default Info;
