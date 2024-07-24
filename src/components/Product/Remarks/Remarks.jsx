import AnimatedFromRight from '@/components/Shared/Animated/AnimatedFromRight';
import { API_BASE_URL } from '@/lib/constants';
import rgbDataURL from '@/util/rgbDataUrl';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

const Remarks = ({ product, locale }) => {
  const image = product.images[2] ?? product.mainImage;
  const poleBody = product.REMARKS?.['Pole Body']?.[locale] || null;
  const poleHeight = product.REMARKS?.['Pole Hight']?.[locale] || null;
  const perDay = product.REMARKS?.['Lighting up per day']?.[locale] || null;
  const rainy = product.REMARKS?.['Rainy day']?.[locale] || null;
  const ip = product.REMARKS?.['IP Rating'] || null;
  const mip = product.REMARKS?.['Mechanical impact protection'] || null;
  const temperature =
    product.REMARKS?.['Operating temperature']?.[locale] || null;
  const humadity = product.REMARKS?.['Maximum air humidity'] || null;
  const warranty = product.REMARKS?.Warranty?.[locale] || null;

  const t = useTranslations('product');
  return (
    <AnimatedFromRight>
      <section className={style.section}>
        <div className={style.textContainer}>
          <h1 className={style.heading}>{t('remarks.heading')}</h1>
          <ul className={style.ul}>
            {poleBody && (
              <li
                className={style.li}
              >{`${t('remarks.pole-body')} : ${poleBody}`}</li>
            )}
            {poleHeight && (
              <li
                className={style.li}
              >{`${t('remarks.pole-height')} : ${poleHeight}`}</li>
            )}
            {perDay && (
              <li
                className={style.li}
              >{`${t('remarks.perday')} : ${perDay}`}</li>
            )}
            {rainy && (
              <li className={style.li}>{`${t('remarks.rainy')} : ${rainy}`}</li>
            )}
            {ip && <li className={style.li}>{`${t('remarks.ip')} : ${ip}`}</li>}
            {mip && (
              <li className={style.li}>{`${t('remarks.mip')} : ${mip}`}</li>
            )}
            {temperature && (
              <li
                className={style.li}
              >{`${t('remarks.temperature')} : ${temperature}`}</li>
            )}
            {humadity && (
              <li
                className={style.li}
              >{`${t('remarks.humadity')} : ${humadity}`}</li>
            )}

            {warranty && (
              <li
                className={style.li}
              >{`${t('remarks.warranty')} : ${warranty}`}</li>
            )}
          </ul>
        </div>

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
      </section>
    </AnimatedFromRight>
  );
};

export default Remarks;

//* Style
const style = {
  section: `my-10 flex w-full flex-col justify-between gap-10 md:flex-row`,
  textContainer: `md:flex-1`,
  heading: `text-3xl font-semibold`,
  ul: `m-6 list-disc font-semibold`,
  li: `p-2`,
  imageContainer: `relative h-[550px] w-full overflow-hidden rounded-lg shadow-md md:flex-1`,
};
