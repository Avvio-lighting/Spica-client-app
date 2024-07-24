import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { getCategories } from '@/lib/api/products';
import { getTranslations } from 'next-intl/server';
import rgbDataURL from '@/util/rgbDataUrl';

const Footer = async ({ locale }) => {
  const categories = await getCategories(1, 6);
  const t = await getTranslations('layout');
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.infoContainer}>
          <div className={style.logo}>
            <Image
              src='/logo.svg'
              alt={t('imgsAlt.logo')}
              fill
              priority={false}
              placeholder='blur'
              blurDataURL={rgbDataURL(237, 255, 238)}
            />
          </div>
          <p className={style.description}>{t('desc')}</p>
          <Link href='/contacts' className={style.buttom}>
            {t('nav.contact-us')}
            &nbsp;
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>

        <div className={style.navContainer}>
          <div className={style.verticalContainer}>
            <h5 className={style.heading}>{t('pages')}</h5>
            <Link className={style.link} href={'/about'}>
              {t('nav.about')}
            </Link>
            <Link className={style.link} href={'/contacts'}>
              {t('nav.contact-us')}
            </Link>
            <Link className={style.link} href={'/blog'}>
              {t('nav.blog')}
            </Link>
          </div>

          <div className={style.verticalContainer}>
            <h5 className={style.heading}>{t('nav.categories')}</h5>
            {categories.map((cat, index) => (
              <Link
                className={style.link}
                href={`/categories/${encodeURIComponent(cat.text[locale])}`}
                key={index}
              >
                {cat.text[locale]}
              </Link>
            ))}
            <Link className={style.link} href={'/categories'}>
              {t('nav.all-categories')}
            </Link>
          </div>
        </div>
      </div>

      <div className={style.rights}>{t('rights')}</div>
    </footer>
  );
};

export default Footer;

//* Style
const style = {
  footer: `flex min-h-[20rem] flex-col flex-wrap items-center justify-between bg-honeydew`,
  container: `flex flex-col items-center justify-between gap-10 p-5 lg:flex-row lg:gap-44`,
  infoContainer: `flex-1`,
  logo: `relative mb-5 h-20 w-24 lg:h-28 lg:w-36`,
  description: `text-sm text-dolphine`,
  buttom: `button my-4`,
  navContainer: `flex h-fit w-full flex-1 flex-col justify-start gap-10 text-sm text-dolphine lg:flex-row lg:items-center lg:justify-center lg:gap-24 [&>*]:h-[100%]`,
  verticalContainer: `flex flex-col items-start self-baseline [&>*]:py-1.5`,
  heading: `font-semibold text-charcoal`,
  link: `duration-150 hover:text-emerald`,
  rights: `p-1 text-xs text-dolphine`,
};
