'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useActiveProject, useProjects } from './hooks';
import rgbDataURL from '@/util/rgbDataUrl';

const Projects = ({ locale }) => {
  const projects = useProjects();
  const { activeIndex, setActiveIndex, activeImage } =
    useActiveProject(projects);
  const t = useTranslations('home');

  return (
    <section className={style.section}>
      <div className={style.levelOneContainer}>
        <div className={style.levelTwoContainer}>
          <div className={style.levelThreeContainer}>
            <h2 className={style.heading}>{t('projects.heading')}</h2>
            <h3 className={style.subHeading}>{t('projects.sub-heading')}</h3>

            <div className={style.projectsContainer}>
              {projects.map((project, index) => {
                return (
                  <div key={project._id}>
                    <h4
                      className={style.project.getHeading(activeIndex, index)}
                      onClick={() => {
                        setActiveIndex(index);
                      }}
                    >
                      {project.title[locale]}
                    </h4>

                    <div
                      className={style.project.getAnimatedDev(
                        activeIndex,
                        index
                      )}
                    ></div>
                    <h6
                      className={style.project.getDescreption(
                        activeIndex,
                        index
                      )}
                    >
                      {project.description
                        ? project.description[locale]
                        : `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad deleniti earum in reiciendis officia architecto laudantium deserunt blanditiis cum ipsa quam amet, tempore et, iste obcaecati? Eaque dicta sapiente labore.`}
                    </h6>
                    {activeImage && activeIndex === index && (
                      <div className={style.project.imageContainerSm}>
                        <Image
                          src={activeImage}
                          alt='Project image'
                          fill
                          style={{
                            objectFit: 'cover',
                          }}
                          placeholder='blur'
                          blurDataURL={rgbDataURL(237, 255, 238)}
                          className='rounded-lg'
                          sizes='(max-width: 640px) 100%, 30rem'
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {activeImage && (
            <div className={style.project.imageContainerLg}>
              <Image
                src={activeImage}
                alt='Project image'
                fill
                style={{
                  objectFit: 'cover',
                }}
                className='rounded-lg'
                placeholder='blur'
                blurDataURL={rgbDataURL(237, 255, 238)}
                sizes='(max-width: 640px) 100%, 40rem , 40%'
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;

//* Style
const style = {
  section: `py-10`,
  levelOneContainer: `mx-auto w-[90%]`,
  levelTwoContainer: `flex flex-col items-center py-5 lg:flex-row lg:justify-between lg:gap-10`,
  levelThreeContainer: `w-100% lg:w-[50%]`,
  heading: `pb-3 pt-5 text-4xl lg:text-6xl`,
  subHeading: `px-2 text-sm text-dolphine`,
  projectsContainer: `mt-10`,
  project: {
    getHeading: (activeIndex, index) => {
      return `${
        activeIndex === index
          ? 'w-[100%] scale-110 pl-5 font-semibold lg:underline-offset-[12px]'
          : 'text-dolphine'
      } 
        cursor-pointer pb-2 pt-3 text-2xl duration-150`;
    },

    getAnimatedDev: (activeIndex, index) => {
      return `${activeIndex === index ? 'mb-2 h-[2px] animate-decrease-width bg-charcoal lg:w-[30%]' : ''} `;
    },

    getDescreption: (activeIndex, index) => {
      return `${activeIndex === index ? 'block' : 'lg:hidden'} w-[100%] pb-5 text-sm text-dolphine duration-150 lg:w-[50%]`;
    },

    imageContainerSm: `relative h-[30rem] w-[100%] overflow-hidden rounded-lg duration-150 lg:hidden lg:w-0`,
    imageContainerLg: `relative hidden h-[35rem] w-[100%] overflow-hidden rounded-lg lg:block lg:w-[40%]`,
  },
};
