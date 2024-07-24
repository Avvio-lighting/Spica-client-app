'use client';
import Link from 'next/link';
import AnimatedFromLeft from '../Shared/Animated/AnimatedFromLeft';
import { useSearch } from './hooks';
import { useTranslations } from 'next-intl';

const Search = ({ locale, query }) => {
  const t = useTranslations('search-page');
  const {
    shown,
    setShown,
    canFetchMoreProducts,
    canFetchMoreProjects,
    canFetchMoreBlogs,
    products,
    projects,
    blogs,
    setProductsPage,
    setProjectsPage,
    setBlogsPage,
  } = useSearch(query);

  return (
    <main className={style.main}>
      <div className={style.controlsContainer}>
        <h2 className={style.heading}>{t('heading')}</h2>
        <div className={style.controls}>
          <button
            className={shown == 1 ? style.activeControl : style.control}
            onClick={() => setShown(1)}
          >
            {t('view.all')}
          </button>
          <button
            className={shown == 2 ? style.activeControl : style.control}
            onClick={() => setShown(2)}
          >
            {t('view.products')}
          </button>
          <button
            className={shown == 3 ? style.activeControl : style.control}
            onClick={() => setShown(3)}
          >
            {t('view.projects')}
          </button>
          <button
            className={shown == 4 ? style.activeControl : style.control}
            onClick={() => setShown(4)}
          >
            {t('view.blogs')}
          </button>
        </div>
      </div>

      {shown === 1 || shown === 2 ? (
        <>
          <h3 className={style.subHeading}>{t('view.products')}</h3>
          {products.length ? (
            <ul>
              {products.map((product) => (
                <AnimatedFromLeft key={product._id}>
                  <li className={style.li}>
                    <Link href={`/products/${product._id}`}>
                      <span className={style.title}>
                        {product.name[locale]}
                      </span>
                      <span className={style.description}>
                        {product.description[locale]}
                      </span>
                    </Link>
                  </li>
                </AnimatedFromLeft>
              ))}
            </ul>
          ) : (
            <p className={style.notfound}>{t('notfound.products')}</p>
          )}
          {shown == 2 && canFetchMoreProducts && (
            <button
              className={style.button}
              disabled={!canFetchMoreProducts}
              onClick={() => setProductsPage((prev) => prev + 1)}
            >
              {t('more')}
            </button>
          )}
        </>
      ) : null}

      {shown === 1 || shown === 3 ? (
        <>
          <h3 className={style.subHeading}>{t('view.projects')}</h3>
          {projects.length ? (
            <ul>
              {projects.map((project) => (
                <AnimatedFromLeft key={project._id}>
                  <li className={style.li}>
                    <Link href={`/projects/${project._id}`}>
                      <span className={style.title}>
                        {project.title[locale]}
                      </span>
                      <span className={style.description}>
                        {project.description
                          ? project.description[locale]
                          : 'Dummy descreption'}
                      </span>
                    </Link>
                  </li>
                </AnimatedFromLeft>
              ))}
            </ul>
          ) : (
            <p className={style.notfound}>{t('notfound.projects')}</p>
          )}
          {shown == 3 && canFetchMoreProjects && (
            <button
              className={style.button}
              disabled={!canFetchMoreProjects}
              onClick={() => setProjectsPage((prev) => prev + 1)}
            >
              {t('more')}
            </button>
          )}
        </>
      ) : null}

      {shown === 1 || shown === 4 ? (
        <>
          <h3 className={style.subHeading}>{t('view.blogs')}</h3>
          {blogs.length ? (
            <ul>
              {blogs.map((blog) => (
                <AnimatedFromLeft key={blog._id}>
                  <li className={style.li}>
                    <Link href={`/blog/${blog._id}`}>
                      <span className={style.title}>{blog.title[locale]}</span>
                      <span className={style.description}>
                        {blog.description
                          ? blog.description[locale]
                          : 'Dummy descreption'}
                      </span>
                    </Link>
                  </li>
                </AnimatedFromLeft>
              ))}
            </ul>
          ) : (
            <p className={style.notfound}>{t('notfound.blogs')}</p>
          )}
          {shown == 4 && canFetchMoreBlogs && (
            <button
              className={style.button}
              disabled={!canFetchMoreBlogs}
              onClick={() => setBlogsPage((prev) => prev + 1)}
            >
              {t('more')}
            </button>
          )}
        </>
      ) : null}
    </main>
  );
};

export default Search;

//* Style
const style = {
  controlsContainer: `flex flex-col items-center justify-between lg:flex-row`,
  controls: `flex flex-wrap items-center justify-center gap-2`,
  main: `p-5 min-h-screen md:min-h-[50vh] lg:min-h-screen`,
  heading: `my-5 text-5xl md:text-6xl`,
  subHeading: `my-3 w-[80%] border-b-[1px] border-solid border-b-dolphine/20 text-2xl md:text-3xl font-semibold 
  underline underline-offset-[7px]`,
  li: `group my-2 w-full`,
  title: `block text-lg md:text-2xl font-semibold duration-150 group-hover:text-emerald`,
  description: `block w-[60%] overflow-clip overflow-ellipsis text-nowrap text-sm text-dolphine`,
  activeControl: `relative flex h-10 w-24 items-center justify-center rounded-lg bg-emerald p-3 text-sm 
  text-white duration-150 hover:bg-emerald/70`,
  control: `relative flex h-10 w-24 items-center justify-center rounded-lg border-[1px] border-solid border-emerald 
  p-3 text-sm duration-150 hover:bg-emerald hover:text-white`,
  button: `negative-button mx-auto`,
  notfound: `p-5 text-right font-semibold w-[80%]`,
};
