import AnimatedFromLeft from '@/components/Shared/Animated/AnimatedFromLeft';
import { API_BASE_URL } from '@/lib/constants';
import rgbDataURL from '@/util/rgbDataUrl';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

const SolarModule = ({ product, locale }) => {
  const image = product.images[1] ?? product.mainImage;
  const tech = product['SOLAR MODULE']?.Technology?.[locale] || null;
  const power = product['SOLAR MODULE']?.['Power (W)'] || null;
  const volt = product['SOLAR MODULE']?.Voltage || null;
  const life = product['SOLAR MODULE']?.Lifespan?.[locale] || null;

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
          <h1 className={style.heading}>{t('solar-module.heading')}</h1>
          <ul className={style.ul}>
            {tech && (
              <li
                className={style.li}
              >{`${t('solar-module.brand')} : ${tech}`}</li>
            )}

            <li className={style.li}>
              <h3>{`${t('solar-module.power')} - ${t('solar-module.voltage')}`}</h3>
              <ul className={style.ul}>
                {power.map((p, index) => (
                  <li
                    key={index}
                  >{`${p}W - ${volt ? volt[index] ?? 'N/A' : 'N/A'}`}</li>
                ))}
              </ul>
            </li>
            {life && (
              <li
                className={style.li}
              >{`${t('solar-module.lifespan')} : ${life} `}</li>
            )}
          </ul>
        </div>
      </section>
    </AnimatedFromLeft>
  );
};

export default SolarModule;

//* Style
const style = {
  section: `my-10 flex w-full flex-col-reverse justify-between gap-10 md:flex-row`,
  textContainer: `md:flex-1`,
  heading: `text-3xl font-semibold`,
  ul: `m-4 list-disc font-semibold`,
  li: `p-2`,
  imageContainer: `relative h-[550px] w-full overflow-hidden rounded-lg shadow-md md:flex-1`,
};
