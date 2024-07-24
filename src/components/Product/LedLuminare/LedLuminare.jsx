import AnimatedFromRight from '@/components/Shared/Animated/AnimatedFromRight';
import { API_BASE_URL } from '@/lib/constants';
import rgbDataURL from '@/util/rgbDataUrl';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

const LedLuminare = ({ product, locale }) => {
  const image = product.images[0] ?? product.mainImage;
  const models = product['LED LUMINAIRE']?.Model || null;
  const powers = product['LED LUMINAIRE']?.Power || null;
  const fluxes = product['LED LUMINAIRE']?.['Luminous Flux *(lm)'] || null;
  const size = product['LED LUMINAIRE']?.Size || null;
  const ler =
    product['LED LUMINAIRE']?.['Real Luminaire Efficacy']?.[locale] || null;
  const light =
    product['LED LUMINAIRE']?.['Light Distribution']?.[locale] || null;
  const cct = product['LED LUMINAIRE']?.CCT?.[locale] || null;
  const lcm =
    product['LED LUMINAIRE']?.['LED Chip Manufacturer']?.[locale] || null;
  const watt = product['LED LUMINAIRE']?.Wattage || null;

  const t = useTranslations('product');
  return (
    <AnimatedFromRight>
      <section className={style.section}>
        <div className={style.textContainer}>
          <h1 className={style.heading}>{t('led-luminare.heading')}</h1>
          <ul className={style.ul}>
            <li className={style.li}>
              <h2>{`${t('led-luminare.model')}`}</h2>
              <div className={style.models.container}>
                {models.map((model, index) => {
                  return (
                    <div className={style.models.modelGroup} key={index}>
                      <div className={style.models.model}>{model}</div>
                      <div className={style.models.popUp}>
                        <div>
                          {`${t('led-luminare.power')} - ${powers ? powers[index] ?? 'N/A' : 'N/A'}`}
                        </div>
                        <div>
                          {`${t('led-luminare.flux')} - ${fluxes ? fluxes[index] ?? 'N/A' : 'N/A'}`}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </li>
            {watt && (
              <li className={style.li}>
                <h3>{`${t('led-luminare.watt')} `}</h3>
                <ul className={style.ul}>
                  {watt.map((wat, index) => (
                    <li key={index}>{`${wat} `}</li>
                  ))}
                </ul>
              </li>
            )}
            {ler && (
              <li
                className={style.li}
              >{`${t('led-luminare.ler')} : ${ler}`}</li>
            )}
            {light && (
              <li
                className={style.li}
              >{`${t('led-luminare.light')} : ${light}`}</li>
            )}
            {cct && (
              <li
                className={style.li}
              >{`${t('led-luminare.cct')} : ${cct}`}</li>
            )}
            {lcm && (
              <li
                className={style.li}
              >{`${t('led-luminare.lcm')} : ${lcm}`}</li>
            )}
            {size && (
              <li
                className={style.li}
              >{`${t('led-luminare.size')} : ${size}`}</li>
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

export default LedLuminare;

//* Style
const style = {
  section: `my-10 flex w-full flex-col justify-between gap-10 md:flex-row`,
  textContainer: `md:flex-1`,
  heading: `text-3xl font-semibold`,
  ul: `m-6 list-disc font-semibold`,
  li: `p-2`,
  models: {
    container: `grid grid-cols-2 gap-1 font-semibold md:gap-3 lg:grid-cols-4 mx-3`,
    modelGroup: `group relative`,
    model: `relative flex h-10 w-28 items-center justify-center rounded-lg border-[1px] border-solid border-emerald p-2
     text-xs duration-150 hover:bg-emerald hover:text-white`,
    popUp: `absolute -top-[130%] left-[40%] mx-3 hidden w-fit -translate-x-1/2 text-nowrap rounded-lg border-[1px] 
     border-solid border-dolphine/20 bg-white p-1 text-center text-sm text-dolphine shadow-md duration-150 
     group-hover:block`,
  },
  imageContainer: `relative h-[550px] w-full overflow-hidden rounded-lg shadow-md md:flex-1`,
};
