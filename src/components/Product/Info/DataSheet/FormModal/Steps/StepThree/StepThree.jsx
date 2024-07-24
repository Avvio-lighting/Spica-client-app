import { API_BASE_URL } from '@/lib/constants';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const StepThree = ({ product, close }) => {
  const t = useTranslations('datasheet');

  return (
    <div className={style.container}>
      <h1 className={style.heading}>{t('step-three.success')}</h1>
      <FontAwesomeIcon icon={faEnvelope} className={style.icon} />
      <div className={style.controlsContainer}>
        <Link
          target='_blank'
          href={`${API_BASE_URL}${product.dataSheet}`}
          className={style.home}
        >
          {t('step-three.open')}
        </Link>
        <Link href={'/'} className={style.home}>
          {t('step-three.home')}
        </Link>

        <button className={style.close} onClick={close}>
          {t('step-three.close')}
        </button>
      </div>
    </div>
  );
};

export default StepThree;

//* Style
const style = {
  icon: `text-[8rem] text-white`,
  container: `bg-lightgray m-5 flex h-fit w-full flex-col items-center justify-between gap-5 rounded-lg p-5 md:m-0 md:w-[60%] lg:w-[40%]`,
  heading: `text-center text-4xl font-semibold`,
  controlsContainer: `flex w-full flex-col items-center gap-2`,
  close: `relative flex h-10 w-[92%] items-center justify-center rounded-lg border-[1.5px] border-solid border-dolphine px-3
   py-5 font-semibold text-charcoal duration-150 hover:bg-dolphine hover:text-white`,
  home: ' relative flex h-10 w-[92%] items-center justify-center rounded-lg border-[1.5px] border-solid border-emerald px-3 py-5 font-semibold text-emerald duration-150 hover:bg-emerald hover:text-white',
};
