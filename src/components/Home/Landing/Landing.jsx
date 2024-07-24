import { useTranslations } from 'next-intl';
import LandingBackground from '@/components/Shared/LandingBackground/LandingBackground';

import Link from 'next/link';
const Landing = () => {
  const t = useTranslations('home');
  return (
    <main className={style.main}>
      <LandingBackground />
      <section className={style.section}>
        <h1 className={style.heading}>{t('landing.heading')}</h1>
        <p className={style.descreption}>{t('landing.description')}</p>
        <div className={style.controlsContainer}>
          <Link href={'/categories'} className={style.button}>
            {t('landing.see-our-products')}
          </Link>
          <Link href={'/contacts'} className={style.negativeButton}>
            {t('landing.contact-us')}
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Landing;

//* Style
const style = {
  main: `relative m-0 flex h-[60vh] items-center justify-center lg:h-[80vh] lg:w-[calc(100vw-1.1rem)]`,
  section: `z-10 flex flex-col items-center justify-center`,
  heading: `m-2 w-[80%] text-wrap text-center text-3xl font-semibold lg:w-[40%] lg:text-6xl`,
  descreption: `m-2 flex w-fit text-wrap text-center text-dolphine md:w-[40%]`,
  controlsContainer: `flex items-center justify-center gap-5 lg:w-[40%]`,
  button: `button text-center`,
  negativeButton: `negative-button`,
};
