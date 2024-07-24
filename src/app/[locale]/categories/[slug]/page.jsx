import Main from '@/components/Categories/Main/Main';
import { APP_BASE_URL } from '@/lib/constants';

export async function generateMetadata({ params }) {
  const slug = decodeURIComponent(params.slug);
  return {
    title: slug,
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
      slug,
    ],
    authors: [{ name: 'Spica' }],
    openGraph: {
      title:
        'Spica Solar Lighting: High-Quality Solar Powered Lighting Luminaires',
      description:
        "Discover Spica Solar Lighting's high-quality solar powered lighting luminaires. We specialize in outdoor solar street lighting, solar landscape lighting solutions, and solar integrated poles, known for superior quality and innovative design.",
      url: `${APP_BASE_URL}/categories/${slug}`,
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
      title: slug,
      description:
        "Discover Spica Solar Lighting's high-quality solar powered lighting luminaires. We specialize in outdoor solar street lighting, solar landscape lighting solutions, and solar integrated poles, known for superior quality and innovative design.",
      creator: '@spica',
      images: [`${APP_BASE_URL}/logo.svg`],
    },
  };
}

const Category = ({ params }) => {
  return (
    <div>
      <Main locale={params.locale} category={params.slug} />
    </div>
  );
};

export default Category;
