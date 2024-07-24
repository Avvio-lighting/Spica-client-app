import Image from 'next/image';
import { useTranslations } from 'next-intl';
import rgbDataURL from '@/util/rgbDataUrl';
const Description = () => {
  const t = useTranslations('about');
  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        <Image
          src='/lines.svg'
          alt='lines'
          fill
          placeholder='blur'
          blurDataURL={rgbDataURL(237, 255, 238)}
          style={{
            objectFit: 'cover',
          }}
        />
        <div className={style.fadeDiv1}></div>
        <div className={style.fadeDiv2}></div>
      </div>
      <div className={style.textContainer}>
        <p className={style.paragraph}>{t('landing.paragraph')}</p>
      </div>
    </div>
  );
};

export default Description;

//* Style
const style = {
  container: `relative mx-auto min-h-[25rem] w-[100%]`,
  imageContainer: `absolute left-0 top-0 h-full w-[100%]`,
  fadeDiv1: `to-transparent pointer-events-none absolute left-0 top-0 h-20 w-full bg-gradient-to-b from-white opacity-80`,
  fadeDiv2: `to-transparent pointer-events-none absolute bottom-0 left-0 h-20 w-full rotate-180 bg-gradient-to-b from-white
   opacity-80`,
  textContainer: `z-10 flex h-[25rem] w-full items-center justify-center text-center text-lg font-semibold text-charcoal`,
  paragraph: `px-4 lg:w-[60%]`,
};
