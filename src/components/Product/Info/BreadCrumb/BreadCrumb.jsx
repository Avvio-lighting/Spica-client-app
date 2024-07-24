import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
const BreadCrumb = ({ categoryTitle, productTitle }) => {
  const t = useTranslations('product');
  return (
    <div className='items start mx-auto my-1 flex h-10 w-[90%] justify-start text-xs md:items-center md:text-sm'>
      <Link className={style.text + ' ' + style.link} href={'/'}>
        {t('bread-crumb.home')}
      </Link>
      <FontAwesomeIcon icon={faAngleRight} className={style.icon} />{' '}
      <Link className={style.text + ' ' + style.link} href={'/categories'}>
        Categories
      </Link>
      <FontAwesomeIcon icon={faAngleRight} className={style.icon} />{' '}
      <Link
        className={style.text + ' ' + style.link}
        href={`/categories/${encodeURIComponent(categoryTitle)}`}
      >
        {t('bread-crumb.category')}
      </Link>
      <FontAwesomeIcon icon={faAngleRight} className={style.icon} />
      <span className={style.text + ' ' + style.product}>{productTitle}</span>
    </div>
  );
};

export default BreadCrumb;

//* Style
const style = {
  container: ``,
  text: `px-2 text-dolphine text-nowrap overflow-hidden overflow-ellipsis`,
  link: `hover:text-emerald duration-150`,
  product: `font-semibold`,
  icon: `text-dolphine`,
};
