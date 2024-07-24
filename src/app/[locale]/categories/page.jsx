import Main from '@/components/Categories/Main/Main';
import { APP_BASE_URL } from '@/lib/constants';

export const metadata = {
  title: 'Categories',
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
    'Categories',
    'Products',
    'Flux',
    'Volt',
    'Watt',
    'Price',
    'US Dollars',
  ],
  authors: [{ name: 'Spica' }],
  openGraph: {
    title:
      'Spica Solar Lighting: High-Quality Solar Powered Lighting Luminaires',
    description:
      "Discover Spica Solar Lighting's high-quality solar powered lighting luminaires. We specialize in outdoor solar street lighting, solar landscape lighting solutions, and solar integrated poles, known for superior quality and innovative design.",
    url: `${APP_BASE_URL}/categories`,
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
    title:
      'Spica Solar Lighting: High-Quality Solar Powered Lighting Luminaires, Order Now!',
    description:
      "Discover Spica Solar Lighting's high-quality solar powered lighting luminaires. We specialize in outdoor solar street lighting, solar landscape lighting solutions, and solar integrated poles, known for superior quality and innovative design.",
    creator: '@spica',
    images: [`${APP_BASE_URL}/logo.svg`],
  },
};

const Categories = ({ params }) => {
  return (
    <div>
      <Main locale={params.locale} />
    </div>
  );
};

export default Categories;
