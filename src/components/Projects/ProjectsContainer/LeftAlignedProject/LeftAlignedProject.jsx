import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { API_BASE_URL } from '@/lib/constants';
import rgbDataURL from '@/util/rgbDataUrl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import AnimatedFromLeft from '@/components/Shared/Animated/AnimatedFromLeft';

const LeftAlignedProject = ({ project, locale }) => {
  const t = useTranslations('projects');
  return (
    <AnimatedFromLeft>
      <section className={style.section}>
        <div className={style.imageContainerLevel1}>
          <div className={style.imageContainerLevel2}>
            <Image
              src={
                project.mainImage
                  ? API_BASE_URL + project.mainImage
                  : '/prods/prod.png'
              }
              fill
              placeholder='blur'
              blurDataURL={rgbDataURL(237, 255, 238)}
              alt={project.title[locale]}
              style={{ objectFit: 'cover' }}
              className='rounded-lg'
            />
          </div>
        </div>
        <div className={style.textContainer}>
          <h2 className={style.heading}>{project.title[locale]}</h2>
          <p className={style.descreption}>
            {project.description
              ? project.descreption[locale]
              : ` Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Quo cum inventore corporis dignissimos nesciunt vero
          odio aut vitae repudiandae ipsa nostrum, perferendis omnis. Commodi
          architecto, facilis accusamus facere beatae distinctio.`}
          </p>
          <Link className={style.learnMore} href={`/projects/${project._id}`}>
            {t('learn-more')} &nbsp; <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </section>
    </AnimatedFromLeft>
  );
};

export default LeftAlignedProject;

//* Style
const style = {
  section: `mx-auto my-3 flex h-fit w-screen flex-col-reverse justify-evenly gap-10 px-10 md:w-[90%] md:flex-row`,
  textContainer: `flex flex-col justify-center gap-5 md:gap-10`,
  heading: `text-2xl md:text-4xl font-semibold md:w-[70%]`,
  descreption: `text-dolphine md:w-[80%]`,
  learnMore: `negative-button`,
  imageContainerLevel1: `flex h-fit w-full items-center justify-center py-5`,
  imageContainerLevel2: `relative h-[450px] w-[600px] overflow-hidden rounded-lg md:h-[450px] md:w-[390px]`,
};
