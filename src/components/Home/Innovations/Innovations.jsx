'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useRef } from 'react';
import { useScrollAnimation } from './hooks';
import rgbDataURL from '@/util/rgbDataUrl';

const Innovations = () => {
  const t = useTranslations('home');
  const { handleMouseDown, scrollRef } = useScrollAnimation();

  const innovations = [
    {
      imgSrc: '/innov/innov1.svg',
      heading: t('innovations.arr.one.heading'),
      paragraph: t('innovations.arr.one.paragraph'),
    },
    {
      imgSrc: '/innov/innov2.svg',
      heading: t('innovations.arr.two.heading'),
      paragraph: t('innovations.arr.two.paragraph'),
    },
    {
      imgSrc: '/innov/innov3.svg',
      heading: t('innovations.arr.three.heading'),
      paragraph: t('innovations.arr.three.paragraph'),
    },
    {
      imgSrc: '/innov/innov4.svg',
      heading: t('innovations.arr.four.heading'),
      paragraph: t('innovations.arr.four.paragraph'),
    },
    {
      imgSrc: '/innov/innov5.svg',
      heading: t('innovations.arr.five.heading'),
      paragraph: t('innovations.arr.five.paragraph'),
    },
    {
      imgSrc: '/innov/innov6.svg',
      heading: t('innovations.arr.six.heading'),
      paragraph: t('innovations.arr.six.paragraph'),
    },
  ];

  return (
    <section className={style.section}>
      <div className={style.levelOneContainer}>
        {/* Start Heading */}
        <h2 className={style.heading}>
          {t('innovations.heading')}
          <span className={style.pauseText}>Click anywhere to pause</span>
        </h2>
        {/* End Heading */}

        {/* Start Innovations container */}
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          className={style.innovationsContainer}
        >
          {innovations.map((innovation, index) => (
            <div key={index} className={style.innovation.container}>
              <div className={style.innovation.imageContainer}>
                <Image
                  src={innovation.imgSrc}
                  alt={`${innovation.heading} image`}
                  fill
                  style={{ objectFit: 'contain' }}
                  placeholder='blur'
                  blurDataURL={rgbDataURL(237, 255, 238)}
                />
              </div>
              <h3 className={style.innovation.heading}>{innovation.heading}</h3>
              <p className={style.innovation.description}>
                {innovation.paragraph}
              </p>
            </div>
          ))}
        </div>
        {/* End Innovations container */}
      </div>
    </section>
  );
};

export default Innovations;

//* Style
const style = {
  section: `bg-honeydew py-10`,
  levelOneContainer: `mx-auto w-[90%]`,
  heading: `py-5 text-4xl lg:text-6xl`,
  pauseText: `block px-3 text-sm text-dolphine md:hidden`,
  innovationsContainer: `w-[calc(100% * 6)] flex gap-4 overflow-x-scroll no-scrollbar 
  md:grid md:w-auto md:grid-cols-2 md:gap-10 md:overflow-visible lg:grid-cols-3`,
  innovation: {
    container: `min-w-[80%] p-4 md:min-w-0 md:animate-none`,
    imageContainer: `relative h-12 w-12`,
    heading: `mb-3 mt-4 w-[90%] text-xl font-semibold`,
    description: `mt-2 text-sm text-dolphine`,
  },
};
