'use client';
import Image from 'next/image';
import SearchModal from './SearcModal/SearchModal';
import { useTranslations } from 'next-intl';
import rgbDataURL from '@/util/rgbDataUrl';
import { useSearchButton } from './hooks';
import { useEffect } from 'react';
import { disableScroll, enableScroll } from '@/util/scrollLock';

const Search = () => {
  const t = useTranslations('layout');
  const { open, negateSearchModal, closeSearchModal } = useSearchButton();
  useEffect(() => {
    if (open) {
      disableScroll();
    } else {
      enableScroll();
    }
    return () => {
      enableScroll(); // Cleanup on component unmount
    };
  }, [open]);
  return (
    <div>
      <button
        className='relative hidden h-8 w-8 lg:block'
        onClick={negateSearchModal}
      >
        <Image
          src='/search.svg'
          alt={t('imgsAlt.search')}
          fill
          placeholder='blur'
          blurDataURL={rgbDataURL(237, 255, 238)}
        />
      </button>
      {open && <SearchModal onClose={closeSearchModal} />}
    </div>
  );
};

export default Search;
