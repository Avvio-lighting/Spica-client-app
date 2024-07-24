import Image from 'next/image';
import SearchMobile from './Search/SearchMobile';
import LargeNav from './Nav/LargeNav/LargeNav';
import MobileNav from './Nav/MobileNav/MobileNav';
import { useTranslations } from 'next-intl';
import rgbDataURL from '@/util/rgbDataUrl';
import Link from 'next/link';
const Header = () => {
  const t = useTranslations('layout');
  return (
    <header className={style.header}>
      <Link href='/'>
        <div className={style.logo}>
          <Image
            src='/logo.svg'
            alt={t('imgsAlt.logo')}
            fill
            placeholder='blur'
            blurDataURL={rgbDataURL(237, 255, 238)}
          />
        </div>
      </Link>
      <div className={style.navContainer}>
        <SearchMobile />
        <LargeNav />
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;

//* Style

const style = {
  header: `mx-auto flex h-20 w-[90%] items-center justify-between px-5 py-4`,
  logo: `relative h-12 w-14 lg:h-20 lg:w-24 hover:scale-110`,
  navContainer: `flex items-center justify-center gap-3`,
};
