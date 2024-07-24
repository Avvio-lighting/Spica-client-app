import AnimatedFromBottom from '@/components/Shared/Animated/AnimatedFromBottom';
import Landing from '@/components/Blogs/Landing/Landing';
import Blog from '@/components/Shared/Blog/Blog';
import Blogs from '@/components/Blogs/Blogs';
import Subscribe from '../../../components/Blogs/Subscribe/Subscribe';
import { cookies } from 'next/headers';
import AnimatedFromLeft from '@/components/Shared/Animated/AnimatedFromLeft';
import { APP_BASE_URL } from '@/lib/constants';
export const metadata = {
  title: 'Blog',
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
    'Info',
    'Read',
    'What',
    'Why',
    'When',
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
      'Spica Solar Lighting: High-Quality Solar Powered Lighting Luminaires, Order Now!',
    description:
      "Discover Spica Solar Lighting's high-quality solar powered lighting luminaires. We specialize in outdoor solar street lighting, solar landscape lighting solutions, and solar integrated poles, known for superior quality and innovative design.",
    creator: '@spica',
    images: [`${APP_BASE_URL}/blogs/blog.png`],
  },
};

const BlogPage = ({ params }) => {
  const locale = params.locale;
  const email = cookies().get('email') ? cookies().get('email').value : null;
  const name = cookies().get('name') ? cookies().get('name').value : null;

  return (
    <div>
      <AnimatedFromBottom>
        <Landing />
      </AnimatedFromBottom>
      <AnimatedFromBottom>
        <Blog locale={locale} hasTitle={false} />
      </AnimatedFromBottom>
      <AnimatedFromLeft>
        <Subscribe email={email} name={name} />
      </AnimatedFromLeft>
      <AnimatedFromBottom>
        <Blogs locale={locale} />
      </AnimatedFromBottom>
    </div>
  );
};

export default BlogPage;
