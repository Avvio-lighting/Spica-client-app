import { getProject } from '@/lib/api/projects';
import rgbDataURL from '@/util/rgbDataUrl';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import React from 'react';
import Slider from './Slider/Slider';
import AnimatedFromBottom from '@/components/Shared/Animated/AnimatedFromBottom';
import AnimatedFromLeft from '@/components/Shared/Animated/AnimatedFromLeft';

const Project = async ({ id, locale }) => {
  const project = await getProject(id);
  const t = await getTranslations('project');
  const images = [];
  while (images.length < 6) {
    images.push(...project.images);
  }
  return (
    <AnimatedFromBottom>
      <main>
        <div className={style.textContainer}>
          <h1 className={style.heading}>{project.title[locale]}</h1>
          <p className={style.subHeading}>{t('descreption')}</p>
        </div>
        <div className={style.imageContainer}>
          <Image
            src={'/projs/landing.png'}
            fill
            placeholder='blur'
            blurDataURL={rgbDataURL(237, 255, 238)}
            alt={project.title}
            style={{ objectFit: 'cover' }}
          />
        </div>

        <AnimatedFromLeft>
          <Slider alt={project.title[locale]} images={images} />
        </AnimatedFromLeft>

        <AnimatedFromBottom>
          <div className={style.descreptionContainer}>
            {project.description
              ? project.description[locale]
              : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel magni eos sit praesentium non, sed eveniet qui repellendus omnis ut est unde maiores dolorem, numquam voluptatem. Nisi ad accusantium et. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel magni eos sit praesentium non, sed eveniet qui repellendus omnis ut est unde maiores dolorem, numquam voluptatem. Nisi ad accusantium et. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel magni eos sit praesentium non, sed eveniet qui repellendus omnis ut est unde maiores dolorem, numquam voluptatem. Nisi ad accusantium et.'}
          </div>
        </AnimatedFromBottom>
      </main>
    </AnimatedFromBottom>
  );
};

export default Project;

//* Style
const style = {
  textContainer: `mx-auto my-5 flex w-[90%] flex-col gap-10 md:flex-row lg:my-20`,
  heading: `flex-1 text-5xl font-semibold md:text-6xl`,
  subHeading: `flex-1 text-dolphine`,
  imageContainer: `relative mx-auto my-5 h-[300px] w-[99vw] lg:h-[400px]`,
  descreptionContainer: `mx-auto my-10 w-[90%] text-xl`,
};
