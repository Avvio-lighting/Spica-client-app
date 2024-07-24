'use client';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import LanguageSwitch from '../../LanguageSwitch/LanguageSwitch';
import { useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getCategories } from '@/lib/api/products';
import { useParams, usePathname } from 'next/navigation';

import {
  faArrowRight,
  faBars,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin,
  faFacebookF,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { useCategories, useMobileNav } from '../hooks';

const MobileNav = () => {
  const { open, closeNav, negateNav } = useMobileNav();
  const params = useParams();
  const locale = params.locale;
  const categories = useCategories();
  const t = useTranslations('layout');

  return (
    <div className='cursor-pointer lg:hidden'>
      <FontAwesomeIcon
        icon={open ? faXmark : faBars}
        className='relative h-5 w-5 opacity-80 md:h-6 md:w-6'
        onClick={negateNav}
      />

      {open && (
        <div className={style.containerLevel1}>
          <div className={style.containerLevel2} />
          <nav className={style.nav}>
            <div className={style.containerLevel3}>
              <div className={style.containerLevel4}>
                <Link href={'/'} onClick={closeNav}>
                  {t('nav.home')}
                </Link>

                <Link href={'/about'} onClick={closeNav}>
                  {t('nav.about')}
                </Link>

                <Link href={'/projects'} onClick={closeNav}>
                  {t('nav.projects')}
                </Link>

                <div className='group relative'>
                  {t('nav.categories')}
                  <div className={style.categoriesContainer}>
                    {categories.map((cat, index) => (
                      <Link
                        onClick={closeNav}
                        key={index}
                        href={`/categories/${encodeURIComponent(cat.text[locale])}`}
                        className={style.category}
                      >
                        {cat.text[locale]}
                      </Link>
                    ))}
                    <Link
                      onClick={closeNav}
                      href={`/categories`}
                      className={style.category}
                    >
                      {t('nav.all-categories')}
                    </Link>
                  </div>
                </div>

                <Link href={'/blog'} onClick={closeNav}>
                  {t('nav.blog')}
                </Link>
              </div>

              <div className={style.controls}>
                <Link
                  href='/contacts'
                  className='button'
                  onClick={() => setOpen(false)}
                >
                  {t('nav.contact-us')}
                  &nbsp;
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
                <LanguageSwitch />
              </div>
            </div>
          </nav>
          <div className={style.social}>
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;

// * Style
const style = {
  containerLevel1: `absolute left-0 top-[calc(5rem)] z-[100] h-[calc(100vh-5rem)] w-screen bg-white shadow-md`,
  containerLevel2: `z-10 h-[1px] w-screen bg-charcoal`,
  nav: `relative flex flex-col justify-between`,
  containerLevel3: `flex flex-1 flex-col justify-between`,
  containerLevel4: `w flex h-[50%] flex-1 flex-col px-8 first:pt-16 [&>*:hover]:text-emerald [&>*]:px-1 [&>*]:pb-4 [&>*]:font-semibold [&>*]:duration-150`,
  categoriesContainer: `flex h-fit w-64 flex-col rounded-xl bg-white duration-150`,
  category: `w-full flex-1 overflow-hidden overflow-ellipsis text-nowrap rounded-xl px-5 py-1 text-sm text-dolphine duration-150 hover:bg-honeydew hover:text-emerald`,
  controls: `flex w-fit flex-1 gap-5 p-5`,
  social: `absolute -bottom-0 right-0 flex flex-1 items-end justify-end gap-5 p-5 text-2xl [&>*:hover]:text-emerald [&>*]:cursor-pointer [&>*]:duration-150`,
};
