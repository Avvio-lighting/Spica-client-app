import { getProduct } from '@/lib/api/products';

import Info from './Info/Info';
import { getTranslations } from 'next-intl/server';
import Features from './Features/Features';
import LedLuminare from './LedLuminare/LedLuminare';
import SolarModule from './SolarModule/SolarModule';
import Remarks from './Remarks/Remarks';
import Battery from './Battery/Battery';
import AnimatedFromBottom from '../Shared/Animated/AnimatedFromBottom';
const Product = async ({ product, locale }) => {
  const t = await getTranslations('product');
  return (
    <main className='mx-auto w-[90%]'>
      <AnimatedFromBottom>
        <Info product={product} locale={locale} />
      </AnimatedFromBottom>

      <div className={style.productInfoContainer}>
        <h2 className={style.productInfoText}>{t('product-info')}</h2>
      </div>

      <Features product={product} locale={locale} />

      <LedLuminare product={product} locale={locale} />

      <SolarModule product={product} locale={locale} />

      <Remarks product={product} locale={locale} />

      <Battery product={product} locale={locale} />
    </main>
  );
};

export default Product;

//* Style
const style = {
  productInfoContainer: `mx-auto my-4 h-6 w-full border-b-[2px] border-solid border-b-dolphine/20`,
  productInfoText: `font-semibold underline underline-offset-[5px]`,
};
