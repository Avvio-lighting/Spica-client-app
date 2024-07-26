import dynamic from 'next/dynamic';
import { cookies } from 'next/headers';
import Landing from '@/components/Contacts/Landing/Landing';
import OfficeInfo from '@/components/Contacts/OfficeInfo/OfficeInfo';
import ContactUsForm from '@/components/Contacts/ContactUsForm/ContactUsForm';
import { APP_BASE_URL } from '@/lib/constants';
import AnimatedFromRight from '@/components/Shared/Animated/AnimatedFromRight';
import AnimatedFromBottom from '../../../components/Shared/Animated/AnimatedFromBottom';
const Map = dynamic(() => import('@/components/Contacts/OfficeInfo/Map/Map'), {
  ssr: false,

  loading: () => <p>Loading...</p>,
});

export const metadata = {
  title: 'Contact Us',
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
    'Order solar cells',
    'Bye solar cells',
    'Contact Us',
    'Order',
    'Complaint',
    'Report',
  ],
  authors: [{ name: 'Spica' }],
  openGraph: {
    title:
      'Spica Solar Lighting: High-Quality Solar Powered Lighting Luminaires',
    description:
      "Discover Spica Solar Lighting's high-quality solar powered lighting luminaires. We specialize in outdoor solar street lighting, solar landscape lighting solutions, and solar integrated poles, known for superior quality and innovative design.",
    url: `${APP_BASE_URL}/contacts`,
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

const Contacts = () => {
  const name = cookies().get('name') ? cookies().get('name').value : null;
  const email = cookies().get('email') ? cookies().get('email').value : null;

  return (
    <div>
      <AnimatedFromBottom>
        <Landing />
      </AnimatedFromBottom>
      <OfficeInfo>
        <AnimatedFromRight>
          <Map />
        </AnimatedFromRight>
      </OfficeInfo>
      <AnimatedFromBottom>
        <ContactUsForm name={name} email={email} />
      </AnimatedFromBottom>
    </div>
  );
};

export default Contacts;
