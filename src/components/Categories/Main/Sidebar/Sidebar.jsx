'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useSidebar } from './hooks';

const Sidebar = ({ locale }) => {
  const t = useTranslations('categories');
  const { isSmallScreen, containerRef, params, categories, router } =
    useSidebar(locale);

  return !isSmallScreen ? (
    <aside>
      <h1 className={style.heading}>{t('sidebar.categories')}</h1>
      <div className={style.container} ref={containerRef}>
        <Link href={`/categories`} className={style.getLargeAllStyle(params)}>
          {t('sidebar.all-categories')}
        </Link>
        {[...categories].map((category, index) => (
          <Link
            href={`/categories/${encodeURIComponent(category.text[locale])}`}
            key={index}
            className={style.getLargeOptionStyle(params, category)}
          >
            {category.text[locale]}
          </Link>
        ))}
      </div>
    </aside>
  ) : (
    <aside className={style.smallAside}>
      <select
        className={style.select}
        value={params.slug ? decodeURIComponent(params.slug) : ''}
        onChange={(e) => {
          router.push(`/categories/${encodeURIComponent(e.target.value)}`);
        }}
      >
        <option value={``} className={style.getAllStyle(params)}>
          {t('sidebar.all-categories')}
        </option>
        {[...categories].map((category, index) => (
          <option
            key={index}
            value={`${category.text[locale]}`}
            className={style.getOptionStyle(params, category)}
          >
            {category.text[locale]}
          </option>
        ))}
      </select>
    </aside>
  );
};

export default Sidebar;

//* Style
const style = {
  heading: `p-5 text-4xl font-semibold`,
  container: `custom-scroll-left relative flex h-screen w-[30vw] flex-col items-end overflow-y-scroll px-5 text-left 
  text-dolphine`,
  getLargeAllStyle: (params) => {
    return `w-full rounded-lg px-4 py-2 font-semibold ${
      !params.slug
        ? 'sticky top-0 border-[0.25px] border-solid border-dolphine/20 bg-honeydew text-emerald'
        : 'bg-white duration-150 hover:bg-honeydew hover:text-emerald'
    }`;
  },
  getLargeOptionStyle: (params, category) => {
    return `w-full rounded-lg px-4 py-2 font-semibold ${
      params.slug && decodeURIComponent(params.slug) === category.text['en']
        ? 'sticky top-0 border-[0.25px] border-solid border-dolphine/20 bg-honeydew text-emerald'
        : 'bg-white duration-150 hover:bg-honeydew hover:text-emerald'
    }`;
  },
  smallAside: `mx-auto my-5 h-[8vh] w-[90%]`,
  select: `p-2 h-full w-full rounded-lg border-[0.25px] border-solid border-dolphine/30 
  bg-dolphine/10 font-semibold ring-emerald focus:outline-none focus:ring-1`,
  getOptionStyle: (params, category) => {
    return `w-full rounded-lg px-4 py-2 font-semibold ${
      params.slug && decodeURIComponent(params.slug) === category.text['en']
        ? 'bg-honeydew text-emerald'
        : ''
    }`;
  },
  getAllStyle: (params) => {
    return `w-full rounded-lg px-4 py-2 font-semibold ${
      !params.slug ? 'bg-honeydew text-emerald' : ''
    }`;
  },
};
