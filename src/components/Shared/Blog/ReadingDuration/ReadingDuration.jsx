import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import rgbDataURL from '@/util/rgbDataUrl';

const ReadingDuration = ({ duration }) => {
  const t = useTranslations('layout');
  const h = useTranslations('home');
  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        <Image
          src={'/logo.svg'}
          alt={`${t('imgsAlt.logo')} image`}
          fill
          style={{ objectFit: 'cover' }}
          sizing='4rem,1rem'
          placeholder='blur'
          blurDataURL={rgbDataURL(237, 255, 238)}
        />
      </div>
      <p className={style.duration}>
        {h('blog.spica-solar') + ' . ' + duration + ' ' + h('blog.min-read')}
      </p>
    </div>
  );
};

export default ReadingDuration;

//* Style
const style = {
  container: `flex items-center`,
  imageContainer: `relative my-3 mr-3 inline-block h-4 w-12`,
  duration: `inline-block text-[10px]`,
};
