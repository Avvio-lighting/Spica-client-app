'use client';
import { API_BASE_URL } from '@/lib/constants';
import rgbDataURL from '@/util/rgbDataUrl';
import Image from 'next/image';
import Link from 'next/link';

import ReadingDuration from '../Shared/Blog/ReadingDuration/ReadingDuration';
import { useBlogs } from './hooks';
import { useTranslations } from 'next-intl';

const Blogs = ({ locale }) => {
  const { blogs, canFetchMore, handleClick } = useBlogs(locale);
  const t = useTranslations('blogs');
  return (
    <>
      <div className={style.container}>
        {blogs.map((blog) => (
          <div className={style.cardContainer} key={blog._id}>
            <div className={style.centerd}>
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
            </div>
            <div>
              <Link href={`/blog/${blog._id}`} className={style.title}>
                {blog.title[locale]}
              </Link>
              <p className={style.descreption}>{blog.description[locale]}</p>
              <ReadingDuration duration={blog.readingDuration} />
            </div>
          </div>
        ))}
      </div>
      {canFetchMore && (
        <button
          className={style.button}
          disabled={!canFetchMore}
          onClick={handleClick}
        >
          {t('more')}
        </button>
      )}
    </>
  );
};

export default Blogs;

//* Style
const style = {
  container: ` w-[90%] min-h-[50vh] mx-auto grid grd-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-20 lg:gap-10 mb-10`,
  cardContainer: `flex flex-col gap-5`,
  centerd: `flex justify-center items-center w-full`,
  imageContainer: `relative h-[200px] w-[99%]  md:h-[244px] md:w-[100%]  lg:h-[284px] lg:w-[384px] overflow-hidden rounded-lg duration-150 `,
  title: `w-[100%] font-semibold duration-150 hover:text-emerald lg:w-[90%] lg:text-lg`,
  descreption: `mt-2 w-[100%] text-wrap text-xs text-dolphine lg:w-[80%] `,
  button: `button mx-auto my-5 disabled:bg-honeydew disabled:text-dolphine`,
};
