import AnimatedFromLeft from '@/components/Shared/Animated/AnimatedFromLeft';
import { API_BASE_URL } from '@/lib/constants';
import rgbDataURL from '@/util/rgbDataUrl';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

const Battery = ({ product, locale }) => {
  const image = product.images[1] ?? product.mainImage;

  const location = product.BATTERY?.Location?.[locale] || null;
  const tech = product.BATTERY?.Technology?.[locale] || null;
  const capacity = product.BATTERY?.['Capacity'] || null;
  const volt = product.BATTERY?.['Nominal voltage'] || null;
  const life = product.BATTERY?.Lifespan?.[locale] || null;

  const t = useTranslations('product');
  return (
    <AnimatedFromLeft>
      <section className={style.section}>
        <div className={style.imageContainer}>
          <Image
            src={`${API_BASE_URL}${image}`}
            fill
            placeholder='blur'
            blurDataURL={rgbDataURL(237, 255, 238)}
            alt={product.name}
            style={{ objectFit: 'contain' }}
            className='rounded-lg'
          />
        </div>
        <div className={style.textContainer}>
          <h1 className={style.heading}>{t('battery.heading')}</h1>
          <ul className={style.ul}>
            {location && (
              <li
                className={style.li}
              >{`${t('battery.location')} : ${location}`}</li>
            )}
            {tech && (
              <li className={style.li}>{`${t('battery.tect')} : ${tech}`}</li>
            )}

            {capacity && (
              <li className={style.li}>
                <h3>{`${t('battery.capacity')} - ${t('battery.volt')}`}</h3>
                <ul className={style.ul}>
                  {capacity.map((c, index) => (
                    <li key={index}>{`${c} - ${volt[index]}`}</li>
                  ))}
                </ul>
              </li>
            )}
            {life && (
              <li
                className={style.li}
              >{`${t('battery.lifespan')} : ${life}`}</li>
            )}
          </ul>
        </div>
      </section>
    </AnimatedFromLeft>
  );
};

export default Battery;

//* Style
const style = {
  section: `my-10 flex w-full flex-col-reverse justify-between gap-10 md:flex-row`,
  textContainer: `md:flex-1`,
  heading: `text-3xl font-semibold`,
  ul: `m-4 list-disc font-semibold`,
  li: `p-2`,
  imageContainer: `relative h-[550px] w-full overflow-hidden rounded-lg shadow-md md:flex-1`,
};
