import Image from 'next/image';
import { useTranslations } from 'next-intl';
import rgbDataURL from '@/util/rgbDataUrl';

const LandingBackground = () => {
  const t = useTranslations('landingbg');

  return (
    <div className={style.container}>
      <div className={style.images[0].containerLevel1}>
        <div className={style.images[0].containerLevel2}>
          <Image
            src='/landing/solar-cell-1.png'
            alt={t('imagesAlt.one')}
            sizes='(max-width: 768px) 112px, 176px'
            fill
            placeholder='blur'
            blurDataURL={rgbDataURL(237, 255, 238)}
          />
        </div>
      </div>

      <div className={style.images[1].containerLevel1}>
        <div className={style.images[1].containerLevel2}>
          <Image
            src='/landing/solar-cell-2.png'
            alt={t('imagesAlt.two')}
            sizes='(max-width: 768px) 144px, 208px'
            fill
            placeholder='blur'
            blurDataURL={rgbDataURL(237, 255, 238)}
          />
        </div>
      </div>

      <div className={style.images[2].containerLevel1}>
        <div className={style.images[2].containerLevel2}>
          <Image
            src='/landing/solar-cell-3.png'
            alt={t('imagesAlt.three')}
            sizes='208px'
            fill
            placeholder='blur'
            blurDataURL={rgbDataURL(237, 255, 238)}
          />
        </div>
      </div>

      <div className={style.images[3].containerLevel1}>
        <div className={style.images[3].containerLevel2}>
          <Image
            src='/landing/solar-cell-4.png'
            alt={t('imagesAlt.four')}
            sizes='320px'
            fill
            placeholder='blur'
            blurDataURL={rgbDataURL(237, 255, 238)}
          />
        </div>
      </div>

      <div className={style.fade}></div>
    </div>
  );
};

export default LandingBackground;

//* Style
const style = {
  images: [
    {
      containerLevel1: `absolute right-0 top-0`,
      containerLevel2: `relative h-44 w-28 md:h-64 md:w-44`,
    },
    {
      containerLevel1: `absolute bottom-2 left-0 md:top-[20%]`,
      containerLevel2: `relative h-44 w-36 md:h-72 md:w-52`,
    },
    {
      containerLevel1: `absolute bottom-0 right-[10%] hidden lg:block`,
      containerLevel2: `relative h-52 w-52`,
    },
    {
      containerLevel1: `absolute bottom-0 left-[5%] hidden lg:block`,
      containerLevel2: `relative h-28 w-80`,
    },
  ],
  fade: `absolute bottom-0 hidden h-28 w-full bg-gradient-to-t from-white to-white/0 lg:block`,
  container: `absolute left-0 h-full w-full`,
};
