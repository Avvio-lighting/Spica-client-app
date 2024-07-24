import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import rgbDataURL from '@/util/rgbDataUrl';

const WorkDescreption = () => {
  const t = useTranslations('about');
  return (
    <section className={style.section}>
      <div>
        <h1 className={style.heading}>{t('work-descreption.heading')}</h1>
        <p className={style.paragraph}>{t('work-descreption.paragraph-1')}</p>
        <div className={style.valuesContainer}>
          <p>
            <FontAwesomeIcon icon={faCircleCheck} className={style.value} />{' '}
            {t('work-descreption.values.one')}
          </p>
          <p>
            <FontAwesomeIcon icon={faCircleCheck} className={style.value} />{' '}
            {t('work-descreption.values.two')}
          </p>
          <p>
            <FontAwesomeIcon icon={faCircleCheck} className={style.value} />{' '}
            {t('work-descreption.values.three')}
          </p>
          <p>
            <FontAwesomeIcon icon={faCircleCheck} className={style.value} />{' '}
            {t('work-descreption.values.four')}
          </p>
        </div>
        <p className={style.paragraph}>{t('work-descreption.paragraph-2')}</p>
      </div>
      <div className={style.imageContainer}>
        <Image
          src='/work-desc/solar-cell.png'
          alt={t('work-descreption.imageAlt')}
          sizes='90vw , 100vh'
          fill
          placeholder='blur'
          blurDataURL={rgbDataURL(237, 255, 238)}
          style={{ objectFit: 'cover' }}
          className='rounded-lg'
        />
      </div>
    </section>
  );
};

export default WorkDescreption;

//* Style
const style = {
  section: `relative mx-auto flex h-[120vh] w-[90%] flex-col items-center justify-center lg:my-20 lg:h-[70vh] lg:flex-row`,
  heading: `m-2 text-wrap text-3xl font-semibold md:w-[80%] lg:my-2 lg:text-6xl`,
  paragraph: `m-2 flex w-fit text-wrap text-dolphine md:w-[80%]`,
  valuesContainer: `grid grid-cols-2 text-nowrap py-4 lg:flex [&>*]:p-3 [&>*]:font-semibold md:[&>*]:pr-4`,
  value: `text-emerald`,
  imageContainer: `relative h-[100vh] w-[90vw] overflow-hidden rounded-lg lg:h-[30rem] lg:w-[80rem]`,
};
