'use client';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import LanguageSwitch from '../../LanguageSwitch/LanguageSwitch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Search from '../../Search/Search';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { useCategories } from '../hooks';
const LargeNav = () => {
  const rawPathName = usePathname();
  const pathName = useMemo(() => rawPathName.split('/'), [rawPathName]);
  const t = useTranslations('layout');
  const locale = pathName[1];
  const categories = useCategories();

  return (
    <div className={style.containerLevel1}>
      <nav className={style.nav}>
        <div className={style.containerLevel2}>
          <Link className={style.getHomeLinkStyle(pathName)} href={`/`}>
            {t('nav.home')}
          </Link>

          <Link
            className={style.getNavLinkStyle(pathName, 'about')}
            href={`/about`}
          >
            {t('nav.about')}
          </Link>

          <Link
            className={style.getNavLinkStyle(pathName, 'projects')}
            href={`/projects`}
          >
            {t('nav.projects')}
          </Link>

          <div className='group relative'>
            <div
              className={style.getNavLinkStyle(pathName, 'categories')}
              href={`/categories`}
            >
              {t('nav.categories')}
              <FontAwesomeIcon icon={faChevronDown} />
            </div>

            <div
              className={style.getCategoriesContainerStyle(categories.length)}
            >
              {categories.map((cat, index) => (
                <Link
                  key={index}
                  href={`/categories/${encodeURIComponent(cat.text[locale])}`}
                  className={style.category + ' ' + style.categoryBorder}
                >
                  {cat.text[locale]}
                </Link>
              ))}
              <Link href={`/categories`} className={style.category}>
                {t('nav.all-categories')}
              </Link>
            </div>
          </div>
          <Link
            className={style.getNavLinkStyle(pathName, 'blog')}
            href={`/blog`}
          >
            {t('nav.blog')}
          </Link>
        </div>

        <div className={style.controls}>
          <Search />
          <Link href='/contacts' className='button'>
            {t('nav.contact-us')}
            &nbsp;
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
          <LanguageSwitch />
        </div>
      </nav>
    </div>
  );
};

export default LargeNav;

//* Style
const style = {
  containerLevel1: `z-[110] hidden lg:block `,
  nav: `flex justify-between`,
  containerLevel2: `flex flex-1 items-center justify-center gap-3 [&>*:hover]:text-emerald [&>*]:w-fit [&>*]:px-2 [&>*]:font-semibold [&>*]:duration-150`,
  getHomeLinkStyle: (pathName) => {
    return !pathName[2]
      ? 'border-b-solid border-b-[1px] border-b-emerald text-emerald'
      : '';
  },
  getNavLinkStyle: (pathName, value) => {
    return pathName[2] && pathName[2] == value
      ? 'border-b-solid border-b-[1px] border-b-emerald text-emerald text-nowrap flex cursor-pointer items-center gap-1'
      : 'text-nowrap flex cursor-pointer items-center gap-1';
  },
  getCategoriesContainerStyle: (length) => {
    const height = 5 * length;
    return `absolute -translate-x-[15%] -bottom-[${height}rem] -left-[50%] hidden h-fit w-64 flex-col rounded-xl bg-white text-sm shadow-lg duration-150 group-hover:flex`;
  },
  category: `w-full overflow-clip overflow-ellipsis rounded-t-xl p-5 text-dolphine duration-150 hover:bg-honeydew hover:text-emerald`,
  categoryBorder: `border-b-[0.25px] border-solid border-b-dolphine`,
  controls: `flex flex-1 items-center justify-center gap-5 p-5`,
};
