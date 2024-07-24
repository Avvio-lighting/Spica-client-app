'use client';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowDown } from '@fortawesome/free-solid-svg-icons';
import { useTranslations } from 'next-intl';
import FormModal from './FormModal/FormModal';
import { disableScroll, enableScroll } from '@/util/scrollLock';
const DataSheet = ({ product }) => {
  const [isOpen, setOpen] = useState(false);
  const t = useTranslations('product');
  useEffect(() => {
    if (isOpen) {
      disableScroll();
    } else {
      enableScroll();
    }
    return () => {
      enableScroll(); // Cleanup on component unmount
    };
  }, [isOpen]);
  return (
    <>
      <button
        className={style.button}
        onClick={() => {
          setOpen(true);
        }}
      >
        {t('info.download')} &nbsp; <FontAwesomeIcon icon={faCloudArrowDown} />
      </button>
      {isOpen && (
        <FormModal
          product={product}
          onClose={() => {
            setOpen(false);
          }}
        />
      )}
    </>
  );
};

export default DataSheet;

//* Style
const style = {
  button: `relative flex h-10 w-full items-center justify-center rounded-lg border-[1.5px] border-solid 
  border-emerald px-3 py-5 font-semibold text-emerald duration-150 hover:bg-emerald hover:text-white`,
};
