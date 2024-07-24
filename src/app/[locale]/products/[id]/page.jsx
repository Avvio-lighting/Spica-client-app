import Product from '@/components/Product/Product';
import Products from '@/components/Shared/Products/Products';
import ProductsContainer from '@/components/Shared/Products/ProductsContainer/ProductsContainer';
import { getProduct, getProducts } from '@/lib/api/products';
import { APP_BASE_URL } from '@/lib/constants';
import AnimatedFromBottom from '../../../../components/Shared/Animated/AnimatedFromBottom';
import { redirect } from 'next/dist/server/api-utils';
export async function generateMetadata({ params }) {
  const id = params.id;
  const product = await getProduct(id);
  return {
    title: product.name[params.locale],
    keywords: [
      'Solar powered lighting luminaires',
      'Outdoor solar street lighting',
      'Solar landscape lighting solutions',
      'Solar integrated poles',
      'High-quality solar lighting products',
      'Industrial design solar lights',
      'Innovative solar lighting solutions',
      'Concise design solar luminaires',
      'Superior quality solar lights',
      'Custom solar lighting designs',
      'Projects',
      'Work',
      'China',
      'USA',
      'KSA',
      'Mexico',
      'Testimonials',
      product.name[params.locale],
    ],
    authors: [{ name: 'Spica' }],
    openGraph: {
      title:
        'Spica Solar Lighting: High-Quality Solar Powered Lighting Luminaires',
      description:
        "Discover Spica Solar Lighting's high-quality solar powered lighting luminaires. We specialize in outdoor solar street lighting, solar landscape lighting solutions, and solar integrated poles, known for superior quality and innovative design.",
      url: `${APP_BASE_URL}/products/${id}`,
      siteName: 'Spica',
      images: [
        {
          url: `${APP_BASE_URL}/logo.svg`,
          width: 800,
          height: 600,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: product.name[params.locale],
      description: !product.description
        ? 'descreption'
        : product.description[params.locale],
      creator: '@spica',
      images: [`${APP_BASE_URL}/logo.svg`],
    },
  };
}
const ProductPage = async ({ params }) => {
  const locale = params.locale;
  const id = params.id;
  const product = await getProduct(id);
  if (!product) {
    redirect('/');
  }
  const { prods, len } = await getProducts(1, 9, product.category.text['en']);
  return (
    <div>
      <Product product={product} locale={locale} />
      {prods && len > 1 && (
        <AnimatedFromBottom>
          <Products isRelated={true}>
            <ProductsContainer
              products={prods}
              locale={locale}
              activeId={product._id}
            />
          </Products>
        </AnimatedFromBottom>
      )}
    </div>
  );
};

export default ProductPage;
