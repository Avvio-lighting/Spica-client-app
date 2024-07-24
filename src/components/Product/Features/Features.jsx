import { useTranslations } from 'next-intl';
import React from 'react';
import Image from 'next/image';
import { API_BASE_URL } from '@/lib/constants';
import rgbDataURL from '@/util/rgbDataUrl';
import AnimatedFromLeft from '@/components/Shared/Animated/AnimatedFromLeft';
const Features = ({ product, locale }) => {
  const t = useTranslations('product');
  return (
    <AnimatedFromLeft>
      <section className={style.section}>
        <h1 className={style.heading}>{t('features')}</h1>
        <div className={style.featsContainer}>
          {product.keyFeatures &&
            product.keyFeatures.map((feat) => {
              return (
                <div className={style.feat} key={feat._id}>
                  <div className={style.imageContainer}>
                    <Image
                      src={`${API_BASE_URL}${feat.image}`}
                      fill
                      placeholder='blur'
                      blurDataURL={rgbDataURL(237, 255, 238)}
                      alt={product.name[locale]}
                      style={{ objectFit: 'cover' }}
                      className='rounded-lg'
                    />
                  </div>
                  <h2 className={style.featText}>{feat.text[locale]}</h2>
                </div>
              );
            })}
        </div>
      </section>
    </AnimatedFromLeft>
  );
};

export default Features;

//* Style
const style = {
  section: `my-10`,
  heading: `text-3xl font-semibold`,
  featsContainer: `flex flex-col justify-between md:flex-row`,
  feat: `flex flex-1 flex-col items-center justify-center`,
  imageContainer: `relative m-5 h-12 w-12`,
  featText: `w-[50%] text-center font-semibold`,
};
