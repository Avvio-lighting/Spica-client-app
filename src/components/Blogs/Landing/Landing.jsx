import LandingBackground from '@/components/Shared/LandingBackground/LandingBackground';
import { useTranslations } from 'next-intl';
const Landing = () => {
  const t = useTranslations('blogs');
  return (
    <main className={style.main}>
      <LandingBackground />
      <section className={style.section}>
        <h1 className={style.heading}>{t('heading')}</h1>
      </section>
    </main>
  );
};

export default Landing;

//* Style
const style = {
  main: `relative m-0 flex h-[60vh] items-center justify-center md:h-[35vh] lg:h-[80vh] lg:w-[calc(100vw-1.1rem)]`,
  section: `z-10 flex flex-col items-center justify-center`,
  heading: `m-2 w-[80%] text-wrap text-center text-3xl font-semibold lg:w-[70%] lg:text-6xl`,
};
