'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

const LanguageSwitch = () => {
  const t = useTranslations('layout');
  const [open, setOpen] = useState(false);
  const pathName = usePathname();
  const router = useRouter();
  const locale = pathName.split('/')[1];
  const handleFlagClick = (locale) => {
    const newPath = pathName.replace(/^\/(en|de|fr|es)/, `/${locale}`);
    router.push(newPath);
    router.refresh();
    setOpen(false);
  };

  return (
    <div className='relative'>
      <button
        className='relative h-8 w-8 duration-150 hover:scale-125'
        onClick={() => setOpen((prev) => !prev)}
      >
        <Image
          src={`/${locale}.png`}
          alt={t('imgsAlt.change-lang')}
          fill
          sizes='2rem'
        />
      </button>
      {open && (
        <div className='absolute top-full z-[60] flex gap-3 rounded-lg bg-honeydew px-2 py-5 shadow-md shadow-dolphine lg:-left-1/2 lg:translate-x-[18%] lg:flex-col'>
          <div
            className='relative h-8 w-8 cursor-pointer duration-150 hover:scale-125'
            onClick={() => handleFlagClick('en')}
          >
            <Image src='/en.png' alt={t('imgsAlt.en')} fill sizes='2rem' />
          </div>

          <div
            className='relative h-8 w-8 cursor-pointer duration-150 hover:scale-125'
            onClick={() => handleFlagClick('es')}
          >
            <Image src='/es.png' alt={t('imgsAlt.es')} fill sizes='2rem' />
          </div>

          <div
            className='relative h-8 w-8 cursor-pointer duration-150 hover:scale-125'
            onClick={() => handleFlagClick('de')}
          >
            <Image src='/de.png' alt={t('imgsAlt.de')} fill sizes='2rem' />
          </div>

          <div
            className='relative h-8 w-8 cursor-pointer duration-150 hover:scale-125'
            onClick={() => handleFlagClick('fr')}
          >
            <Image src='/fr.png' alt={t('imgsAlt.fr')} fill sizes='2rem' />
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitch;
