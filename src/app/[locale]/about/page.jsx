import { cookies } from 'next/headers';
import WorkDescreption from '@/components/About/WorkDescreption/WorkDescription';
import Landing from '@/components/About/Landing/Landing';
import Products from '@/components/Shared/Products/Products';
import ProductsContainer from '@/components/Shared/Products/ProductsContainer/ProductsContainer';
import Blog from '@/components/Shared/Blog/Blog';
import Description from '@/components/About/Description/Description';
import { APP_BASE_URL } from '@/lib/constants';
import AnimatedFromBottom from '../../../components/Shared/Animated/AnimatedFromBottom';

export const metadata = {
  title: 'About',
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
  ],
  authors: [{ name: 'Spica' }],
  openGraph: {
    title:
      'Spica Solar Lighting: High-Quality Solar Powered Lighting Luminaires',
    description:
      "Discover Spica Solar Lighting's high-quality solar powered lighting luminaires. We specialize in outdoor solar street lighting, solar landscape lighting solutions, and solar integrated poles, known for superior quality and innovative design.",
    url: `${APP_BASE_URL}/about`,
    siteName: 'Spica',
    images: [
      {
        url: `${APP_BASE_URL}/blogs/blog.png`,
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
    images: [`${APP_BASE_URL}/blogs/blog.png`],
  },
};
const About = () => {
  const locale = cookies().get('NEXT_LOCALE').value;
  return (
    <div>
      <AnimatedFromBottom>
        <Landing />
      </AnimatedFromBottom>
      <AnimatedFromBottom>
        <Description />
      </AnimatedFromBottom>
      <AnimatedFromBottom>
        <WorkDescreption />
      </AnimatedFromBottom>
      <AnimatedFromBottom>
        <Products>
          <ProductsContainer locale={locale} />
        </Products>
      </AnimatedFromBottom>
      <AnimatedFromBottom>
        <Blog />
      </AnimatedFromBottom>
    </div>
  );
};

export default About;
