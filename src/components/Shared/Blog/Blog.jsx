import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import BlogPreview from './BlogPreview/BlogPreview';
import MainBlogPreview from './MainBlogPreview/MainBlogPreview';
import { getBlogs, getRandomBlogs } from '@/lib/api/blogs';
import { getTranslations } from 'next-intl/server';

const Blog = async ({ locale, hasTitle = true }) => {
  const t = await getTranslations('home');
  const { blogs, len } = await getRandomBlogs();
  return (
    <section className={style.section}>
      <div className={style.container}>
        {hasTitle && (
          <div className={style.textContainer}>
            <h2 className={style.heading}>{t('blog.heading')}</h2>

            <Link className={style.seeAll} href='/blog'>
              {t('blog.see-all')}
              &nbsp;
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        )}

        <div className={style.blogsContainer}>
          <MainBlogPreview blog={blogs[0]} locale={locale} />

          <div className={style.blogsPreviewContainer}>
            {blogs.slice(1, 4).map((blog, index) => (
              <BlogPreview blog={blog} key={index} locale={locale} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;

//* Style
const style = {
  section: `mt-10 pb-10`,
  container: `mx-auto w-[90%]`,
  textContainer: `flex w-full items-center justify-between`,
  heading: `py-5 text-4xl lg:text-6xl`,
  seeAll: `negative-button`,
  blogsContainer: `flex w-full flex-col justify-between gap-10 md:flex-row`,
  blogsPreviewContainer: `flex w-full flex-1 gap-5 overflow-scroll no-scrollbar md:flex-col`,
};

// [
//   {
//     imgSrc: '/blogs/blog.png',
//     title: 'Title of the blog post goes here : note this is dummy text',
//     descreption:
//       "Solar energy is revolutionizing the way we power our world. In this blog post, we'll delve into the incredible potential of solar technology, its environmental benefits, and how you can tap into this sustainable energy source for a brighter future.",
//     duration: '7',
//     tags: [, 'Solutions'],
//   },
//   {
//     imgSrc: '/blogs/blog.png',
//     title: 'Title of the blog post goes here : note this is dummy text',
//     descreption:
//       "Solar energy is revolutionizing the way we power our world. In this blog post, we'll delve into the incredible potential of solar technology, its environmental benefits, and how you can tap into this sustainable energy source for a brighter future.",
//     duration: '16',
//     tags: ['Solar Power', 'Solutions'],
//   },
//   {
//     imgSrc: '/blogs/blog.png',
//     title: 'Title of the blog post goes here : note this is dummy text',
//     descreption:
//       "Solar energy is revolutionizing the way we power our world. In this blog post, we'll delve into the incredible potential of solar technology, its environmental benefits, and how you can tap into this sustainable energy source for a brighter future.",
//     duration: '12',
//     tags: ['Solar Power', 'Solutions'],
//   },
//   {
//     imgSrc: '/blogs/blog.png',
//     title: 'Title of the blog post goes here : note this is dummy text',
//     descreption:
//       "Solar energy is revolutionizing the way we power our world. In this blog post, we'll delve into the incredible potential of solar technology, its environmental benefits, and how you can tap into this sustainable energy source for a brighter future.",
//     duration: '15',
//     tags: ['Solar Power', 'Solutions'],
//   },
// ];
