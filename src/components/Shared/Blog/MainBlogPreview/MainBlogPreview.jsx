import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ReadingDuration from '../ReadingDuration/ReadingDuration';
import rgbDataURL from '@/util/rgbDataUrl';
import { API_BASE_URL } from '@/lib/constants';
import { useTranslations } from 'next-intl';

function MainBlogPreview({ blog, locale }) {
  const t = useTranslations('home');
  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        <Image
          src={API_BASE_URL + blog.mainImage}
          alt={`${blog.title[locale]} image`}
          fill
          style={{ objectFit: 'cover' }}
          sizes='(max-width:768px) 90vw,20rem , (max-width:1024px) 40vw,29rem ,  50vw , 29rem'
          className='rounded-lg'
          placeholder='blur'
          blurDataURL={rgbDataURL(237, 255, 238)}
        />
      </div>
      <div className={style.tagsContainer}>
        <div className={style.tag}>{t('blog.tags.1')}</div>
        <div className={style.tag}>{t('blog.tags.2')}</div>
        <div className={style.tag}>{t('blog.tags.3')}</div>
      </div>

      <h2 className={style.title}>
        <Link href={`/blog/${blog._id}`}>{blog.title[locale]}</Link>
      </h2>
      <p className={style.descreption}>{blog.description[locale]}</p>

      <ReadingDuration duration={blog.readingDuration} />
    </div>
  );
}

export default MainBlogPreview;

//* Style
const style = {
  container: `w-[100%] flex-1 lg:max-w-[60%]`,
  imageContainer: `relative h-[20rem] w-[90vw] overflow-hidden rounded-lg md:h-[25rem] md:w-[50vw] lg:h-[29rem] lg:w-[50vw]`,
  tagsContainer: `mt-3 flex h-fit w-[80%] gap-2`,
  tag: `relative flex h-10 w-24 items-center justify-center rounded-[200px] border-[1px] border-solid border-emerald px-2 py-1 
  text-xs font-semibold duration-150 hover:bg-emerald hover:text-white`,
  title: `mb-3 mt-5 w-[100%] text-wrap text-2xl font-semibold duration-150 hover:text-emerald lg:w-[90%] lg:text-3xl`,
  descreption: `mt-2 w-[100%] text-wrap text-xs text-dolphine lg:w-[80%] lg:text-sm`,
};
