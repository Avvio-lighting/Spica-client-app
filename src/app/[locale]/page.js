import { cookies } from 'next/headers';
import Landing from '@/components/Home/Landing/Landing';
import About from '@/components/Home/About/About';
import Innovations from '@/components/Home/Innovations/Innovations';
import Projects from '@/components/Home/Projects/Projects';
import Products from '@/components/Shared/Products/Products';
import ProductsContainer from '@/components/Shared/Products/ProductsContainer/ProductsContainer';
import Blog from '@/components/Shared/Blog/Blog';
import { APP_BASE_URL } from '@/lib/constants';
import Animated from '@/components/Shared/Animated/AnimatedFromBottom';

export const metadata = {
  title: 'Home',
  keywords: [
    'Solar powered lighting luminaires',
    'Outdoor solar street lighting',
    'Solar landscape lighting solutions',
    'Solar integrated poles',
    'High-quality solar lighting products',
    'Industrial design solar lights',
    'Innovative solar lighting solutions',
    'Concise design solar luminaires',
    ' Superior quality solar lights',
    'Custom solar lighting designs',
  ],
  authors: [{ name: 'Spica' }],
  openGraph: {
    title:
      'Spica Solar Lighting: High-Quality Solar Powered Lighting Luminaires',
    description:
      "Discover Spica Solar Lighting's high-quality solar powered lighting luminaires. We specialize in outdoor solar street lighting, solar landscape lighting solutions, and solar integrated poles, known for superior quality and innovative design.",
    url: `${APP_BASE_URL}`,
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
      'Spica Solar Lighting: High-Quality Solar Powered Lighting Luminaires',
    description:
      "Discover Spica Solar Lighting's high-quality solar powered lighting luminaires. We specialize in outdoor solar street lighting, solar landscape lighting solutions, and solar integrated poles, known for superior quality and innovative design.",
    creator: '@spica',
    images: [`${APP_BASE_URL}/logo.svg`],
  },
};

export default function Home() {
  const locale = cookies().get('NEXT_LOCALE').value;
  return (
    <main>
      <Animated>
        <Landing />
      </Animated>

      <Animated>
        <About />
      </Animated>

      <Animated>
        <Innovations />
      </Animated>

      <Animated>
        <Products>
          <ProductsContainer locale={locale} />
        </Products>
      </Animated>
      <Animated>
        <Projects locale={locale} />
      </Animated>
      <Animated>
        <Blog locale={locale} />
      </Animated>
    </main>
  );
}
