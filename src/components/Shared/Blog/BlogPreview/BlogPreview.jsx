import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ReadingDuration from '../ReadingDuration/ReadingDuration';
import rgbDataURL from '@/util/rgbDataUrl';
import { API_BASE_URL } from '@/lib/constants';

const BlogPreview = ({ blog, locale }) => {
  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        <Image
          src={API_BASE_URL + blog.mainImage}
          alt={`${blog.title[locale]} image`}
          fill
          style={{ objectFit: 'cover' }}
          className='rounded-lg'
          sizes='11rem'
          placeholder='blur'
          blurDataURL={rgbDataURL(237, 255, 238)}
        />
      </div>
      <div>
        <Link href={`/blog/${blog._id}`} className={style.title}>
          {blog.title[locale]}
        </Link>
        <ReadingDuration duration={blog.readingDuration} />
      </div>
    </div>
  );
};

export default BlogPreview;

//* Style
const style = {
  container: `flex min-w-full items-center gap-2`,
  imageContainer: `relative aspect-square w-44 overflow-hidden rounded-lg`,
  title: `w-[100%] font-semibold duration-150 hover:text-emerald lg:w-[90%] lg:text-lg`,
};
