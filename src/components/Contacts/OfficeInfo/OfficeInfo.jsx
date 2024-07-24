'use client';
import AnimatedFromLeft from '@/components/Shared/Animated/AnimatedFromLeft';
import rgbDataURL from '@/util/rgbDataUrl';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
const OfficeInfo = ({ children }) => {
  const t = useTranslations('contacts');
  return (
    <AnimatedFromLeft>
      <section className={style.container}>
        <div className={style.containerLevel2}>
          <h1 className={style.heading}>{t('office-details.heading')}</h1>

          <div className={style.textContainer}>
            <div>
              <div className={style.imageContainer}>
                <Image
                  src='/office-details/mail.png'
                  alt={t('office-details.imagesAlt.email')}
                  sizes='3rem , 3rem'
                  fill
                  style={{ objectFit: 'cover' }}
                  className='rounded-lg'
                  placeholder='blur'
                  blurDataURL={rgbDataURL(237, 255, 238)}
                />
              </div>
              <h3 className={style.sectionHeading}>
                {t('office-details.email.heading')}
              </h3>
              <p className={style.paragraph}>
                {t('office-details.email.paragraph')}
              </p>
              <p className={style.value + ' hover:text-emerald'}>
                <a href={`mailto:${t('office-details.email.value')}`}>
                  {t('office-details.email.value')}
                </a>
              </p>
            </div>

            <div>
              <div className={style.imageContainer}>
                <Image
                  src='/office-details/phone.png'
                  alt={t('office-details.imagesAlt.phone')}
                  sizes='3rem , 3rem'
                  fill
                  style={{ objectFit: 'cover' }}
                  className='rounded-lg'
                  placeholder='blur'
                  blurDataURL={rgbDataURL(237, 255, 238)}
                />
              </div>
              <h3 className={style.sectionHeading}>
                {t('office-details.phone.heading')}
              </h3>
              <p className={style.paragraph}>
                {t('office-details.phone.paragraph')}
              </p>
              <p className={style.value}>{t('office-details.phone.value')}</p>
            </div>

            <div>
              <div className={style.imageContainer}>
                <Image
                  src='/office-details/location.png'
                  alt={t('office-details.imagesAlt.location')}
                  sizes='3rem , 3rem'
                  fill
                  style={{ objectFit: 'cover' }}
                  className='rounded-lg'
                  placeholder='blur'
                  blurDataURL={rgbDataURL(237, 255, 238)}
                />
              </div>
              <h3 className={style.sectionHeading}>
                {t('office-details.address.heading')}
              </h3>
              <p className={style.paragraph}>
                {t('office-details.address.paragraph')}
              </p>
              <p className={style.value}>{t('office-details.address.value')}</p>
            </div>
          </div>
        </div>

        <div className={style.mapContainer}>{children}</div>
      </section>
    </AnimatedFromLeft>
  );
};

export default OfficeInfo;

//* Style
const style = {
  container: `relative mx-auto my-10 flex h-[170vh] w-[90%] flex-col items-center justify-center md:my-5 
  md:h-[110vh] lg:my-20 lg:h-[100vh] lg:flex-row`,
  containerLevel2: `flex-1`,
  heading: `mx-2 my-5 text-wrap py-5 text-3xl font-semibold lg:my-2 lg:text-6xl`,
  textContainer: `m-2 w-[70%]`,
  mapContainer: `relative h-fit w-[90vw] flex-1 overflow-hidden rounded-lg lg:w-[25vw]`,
  imageContainer: `relative h-12 w-12 overflow-hidden rounded-lg`,
  sectionHeading: `py-2 text-xl font-semibold`,
  paragraph: `text-sm text-dolphine`,
  value: `py-4 font-semibold`,
};
