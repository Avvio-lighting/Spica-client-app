import { useTranslations } from 'next-intl';
import Link from 'next/link';

const About = () => {
  const t = useTranslations('home');
  return (
    <section className={style.section}>
      <h2 className={style.heading}>{t('about.heading')}</h2>

      <div className={style.textContainer}>
        <p className={style.descreption}>{t('about.paragraph')}</p>

        <Link className={style.btn} href={'/about'}>
          {t('about.read-more')}
        </Link>
      </div>
    </section>
  );
};

export default About;

//* Style
const style = {
  section: `mx-auto my-16 flex h-fit w-[90%] flex-col items-center gap-1 lg:flex-row lg:items-start`,
  heading: `flex-1 py-5 text-4xl lg:text-6xl`,
  textContainer: `flex flex-1 flex-col items-center lg:w-[40%] lg:items-start`,
  descreption: `w-[80%] text-wrap text-center font-semibold lg:text-left`,
  btn: `button my-7`,
};
