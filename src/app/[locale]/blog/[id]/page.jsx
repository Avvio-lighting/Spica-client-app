import React from 'react';
import Blog from '@/components/Blogs/Blog/Blog';
import Subscribe from '@/components/Blogs/Subscribe/Subscribe';
import BlogPreview from '@/components/Shared/Blog/Blog';
import AnimatedFromBottom from '@/components/Shared/Animated/AnimatedFromBottom';
import { getBlog } from '@/lib/api/blogs';
import { API_BASE_URL, APP_BASE_URL } from '@/lib/constants';

export async function generateMetadata({ params }) {
  const id = params.id;
  const locale = params.locale;
  const blog = await getBlog(id);
  return {
    title: blog.title[locale],
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
      description: blog.description['en'],
      url: `${APP_BASE_URL}/blog/${id}`,
      siteName: 'Spica',
      images: [
        {
          url: `${API_BASE_URL}${blog.mainImage}`,
          width: 800,
          height: 600,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: blog.title["en"],
      description: blog.description['en'],
      creator: '@spica',
      images: [`${API_BASE_URL}${blog.mainImage}`],
    },
  };
}

const page = ({ params }) => {
  const id = params.id;
  const locale = params.locale;
  return (
    <div>
      <Blog id={id} locale={locale}>
        <Subscribe />
      </Blog>
      <AnimatedFromBottom>
        <BlogPreview locale={locale} hasTitle={false} />
      </AnimatedFromBottom>
    </div>
  );
};

export default page;
