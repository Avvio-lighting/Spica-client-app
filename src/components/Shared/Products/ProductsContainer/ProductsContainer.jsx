import { getRandomProducts } from '@/lib/api/products';
import { API_BASE_URL } from '@/lib/constants';
import rgbDataURL from '@/util/rgbDataUrl';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
const ProductsContainer = async ({ locale, products = null }) => {
  if (!products) {
    const { prods } = await getRandomProducts();
    products = prods;
  }

  const t = await getTranslations('home');
  return (
    <>
      {products.map((product) => (
        <article className={style.article} key={product._id}>
          <div className={style.imageContainer}>
            <Image
              src={
                product.mainImage
                  ? API_BASE_URL + product.mainImage
                  : '/prods/prod.png'
              }
              alt={product.name}
              fill
              style={{ objectFit: 'contain' }}
              className='rounded-lg'
              sizes='90%'
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
                {product['LED LUMINAIRE']['Luminous Flux *(lm)'].length > 1 &&
                  '- ' +
                    product['LED LUMINAIRE']['Luminous Flux *(lm)'][
                      product['LED LUMINAIRE']['Luminous Flux *(lm)'].length - 1
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
                  style={{ objectFit: 'contain' }}
                  placeholder='blur'
                  blurDataURL={rgbDataURL(237, 255, 238)}
                />
              </Link>
            </div>
          </div>
        </article>
      ))}
    </>
  );
};

export default ProductsContainer;

//* Style
const style = {
  article: `relative min-w-[350px] min-h-[500px] shadow-md rounded-lg group border-[1.5px] border-solid border-lightgray overflow-hidden flex justify-center items-center`,
  imageContainer: `relative h-[350px] w-[350px] aspect-square overflow-hidden p-10 group-hover:scale-110  duration-150 rounded-lg `,
  card: `absolute bottom-5 left-[50%] flex h-[100px] w-[95%]  flex-col duration-[350ms] 
  gap-1 rounded-lg border-[1px] border-solid border-emerald bg-white shadow-md translate-x-full group-hover:-translate-x-[50%]`,
  textContainer: `flex w-[100%] flex-col justify-center p-1 px-5 text-center`,
  title: `w-[100%] overflow-hidden overflow-ellipsis text-nowrap font-semibold`,
  flux: `text-xs text-dolphine  overflow-hidden overflow-ellipsis text-nowrap`,
  control: `flex h-12 items-center justify-center px-1`,
};
