'use client';

import { useTranslations } from 'next-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useProductsNavigation } from './hooks';

const Products = ({ children, isRelated=false }) => {
  const t = useTranslations('home');
  const { productsRef, scrollLeft, scrollRight } = useProductsNavigation();

  return (
    <section className={style.section}>
      <div className={style.container}>
        <div className={style.textContainer}>
          <div className={style.headingContainer}>
            <h2 className={style.heading}>{!isRelated ? t('latest-products.heading') : t('latest-products.related')}</h2>

            <div className={style.controls}>
              <button onClick={scrollLeft}>
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              <button onClick={scrollRight}>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
        {!isRelated &&   <h3 className={style.subHeading}>
            {t('latest-products.sub-heading')}
          </h3>}
        </div>

        <div ref={productsRef} className={style.productsContainer}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Products;

//* Style
const style = {
  section: `py-10`,
  container: `mx-auto w-[90%]`,
  textContainer: `py-5`,
  headingContainer: `flex w-full items-center justify-between`,
  heading: `pb-3 pt-5 text-4xl lg:text-6xl`,
  controls: `hidden justify-between text-xl md:flex md:w-[8%] lg:w-[4%] [&>*:hover]:text-emerald [&>*]:duration-150`,
  subHeading: `px-2 text-sm text-dolphine`,
  productsContainer: `flex w-full flex-nowrap gap-5 h-fit py-5 overflow-x-scroll no-scrollbar`,
};
