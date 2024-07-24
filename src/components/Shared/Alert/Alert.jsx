'use client';
import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useCookies } from 'next-client-cookies';

const Alert = () => {
  const cookies = useCookies();
  const alert = cookies.get('alert');
  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => {
        cookies.remove('alert');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [alert, cookies]);
  return (
    <>
      {alert && (
        <div className={style.container}>
          <div>
            <FontAwesomeIcon icon={faBell} className={style.bell} /> {alert}
          </div>
          <FontAwesomeIcon
            className={style.xmark}
            icon={faXmark}
            onClick={() => {
              cookies.remove('alert');
            }}
          />
        </div>
      )}
    </>
  );
};

export default Alert;

//* Style
const style = {
  container: `md:text-md sticky mx-auto top-[10%] z-[500] flex h-[10vh] w-[70vw]
   items-center justify-between rounded-lg border-[0.25px] border-solid border-dolphine bg-white 
   p-3 text-sm shadow-md md:top-[5%] md:h-[5vh] md:w-[50vw] lg:right-10 lg:top-[10%] lg:h-[10vh] lg:w-[30vw]`,
  bell: `px-2 text-lg text-emerald`,
  xmark: `cursor-pointer hover:text-emerald`,
};
