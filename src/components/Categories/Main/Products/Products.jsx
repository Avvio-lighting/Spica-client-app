'use client';
import { useTranslations } from 'next-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGripVertical,
  faGrip,
  faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import { API_BASE_URL } from '@/lib/constants';
import rgbDataURL from '@/util/rgbDataUrl';
import AnimatedFromRight from '../../../Shared/Animated/AnimatedFromRight';
import { useProducts } from './hooks';

const Products = ({ locale, category }) => {
  const t = useTranslations('home');
  const l = useTranslations('categories');
  const {
    isSmallScreen,
    view,
    setView,
    products,
    canFetchMore,
    handleLoadMore,
    sort,
    handleSort,
  } = useProducts(locale, category);

  return (
    <section className={style.section}>
      <div className={style.viewContainer}>
        <select
          onChange={handleSort}
          className={style.select}
          defaultValue={sort}
        >
          <option className={style.option} value='name'>
            A-Z
          </option>
          <option className={style.option} value='-name'>
            Z-A
          </option>
        </select>
        {!isSmallScreen && (
          <>
            <button
              className={style.viewControl}
              onClick={() => {
                setView(1);
              }}
            >
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
            <button
              className={style.viewControl}
              onClick={() => {
                setView(2);
              }}
            >
              <FontAwesomeIcon icon={faGripVertical} />
            </button>
            <button
              className={style.viewControl}
              onClick={() => {
                setView(3);
              }}
            >
              <FontAwesomeIcon icon={faGrip} />
            </button>
          </>
        )}
      </div>

      <AnimatedFromRight>
        <div className={style.getGridStyle(view)}>
          {[...products].map((product, index) => (
            <article className={style.article(view)} key={index}>
              <div className={style.imageContainer}>
                <Image
                  src={
                    product.mainImage
                      ? API_BASE_URL + product.mainImage
                      : '/prods/prod.png'
                  }
                  alt={product.name[locale]}
                  fill
                  style={{ objectFit: 'contain' }}
                  className='rounded-lg'
                  sizes='100%'
                  placeholder='blur'
                  blurDataURL={rgbDataURL(237, 255, 238)}
                />
              </div>

              <div className={style.card}>
                <div className={style.textContainer}>
                  <h3 className={style.title}>{product.name[locale]}</h3>
                  <p className={style.flux}>
                    Luminous Flux - {product['Luminous Flux *(lm)']}
                    {product['LED LUMINAIRE']['Luminous Flux *(lm)'][0] + ' '}
                    {product['LED LUMINAIRE']['Luminous Flux *(lm)'].length >
                      1 &&
                      '- ' +
                        product['LED LUMINAIRE']['Luminous Flux *(lm)'][
                          product['LED LUMINAIRE']['Luminous Flux *(lm)']
                            .length - 1
                        ]}
                  </p>
                </div>

                <div className={style.control}>
                  <Link
                    href={`/products/${product._id}`}
                    className='relative h-8 w-8'
                  >
                    <Image
                      src='/prods/see-product.svg'
                      alt={t('latest-products.see-product')}
                      fill
                      placeholder='blur'
                      blurDataURL={rgbDataURL(237, 255, 238)}
                      style={{ objectFit: 'contain' }}
                    />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </AnimatedFromRight>
      {canFetchMore && (
        <button
          onClick={handleLoadMore}
          disabled={!canFetchMore}
          className={style.button}
        >
          {l('show-more')}
        </button>
      )}
    </section>
  );
};

export default Products;

//* Style
const style = {
  section: `lg:py-10 md:w-[70%]`,
  viewContainer: `mb-10 flex w-full justify-end gap-1 px-10`,
  viewControl: `h-12 w-12 rounded-md bg-dolphine/10 p-1 duration-150 hover:bg-dolphine/50`,
  article: (view) => {
    return `relative ${view === 1 ? `w-[300px] h-[400px] mx-auto` : view === 2 ? 'md:w-[200px] md:h-[250px] lg:w-[300px] lg:h-[400px] mx-auto' : ''} shadow-md rounded-lg group border-[1.5px] border-solid border-lightgray overflow-hidden flex justify-center items-center`;
  },
  imageContainer: `relative h-[350px] w-[300px] md:h-[250px] md:w-[200px] lg:w-[300px] lg:h-[350px] aspect-square overflow-hidden p-10 group-hover:scale-110  duration-150 rounded-lg `,
  card: `absolute bottom-5 left-[50%] flex h-[100px] w-[95%]  flex-col duration-[350ms] 
  gap-1 rounded-lg border-[1px] border-solid border-emerald bg-white shadow-md translate-x-full group-hover:-translate-x-[50%]`,
  textContainer: `flex w-[100%] flex-col justify-center p-1 px-5 text-center`,
  title: `w-[100%] overflow-hidden overflow-ellipsis text-nowrap font-semibold`,
  flux: `text-xs text-dolphine  overflow-hidden overflow-ellipsis text-nowrap`,
  control: `flex h-12 items-center justify-center px-1`,
  button: `button mx-auto my-5 disabled:bg-honeydew disabled:text-dolphine`,
  getGridStyle: (view) => {
    return `grid w-full px-5 transition-all duration-500 ${view === 3 ? 'mx-auto w-[90%] grid-cols-3 gap-2' : view === 2 ? 'mx-auto w-[90%] grid-cols-2 gap-2' : 'lg::w-[50%] mx-auto w-[90%] grid-cols-1 gap-10'}`;
  },
  select: `h-12 w-full p-2 md:w-20 rounded-lg border-[0.25px] border-solid border-dolphine/30 bg-dolphine/10 font-semibold ring-emerald focus:outline-none focus:ring-1`,
  option: `w-full rounded-lg px-4 py-2 font-semibold`,
};
