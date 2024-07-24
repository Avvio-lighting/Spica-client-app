'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUpRightFromSquare,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { useSearchModal } from '../hooks';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const SearchModal = ({ onClose }) => {
  const params = useParams();
  const {
    handleChange,
    inputRef,
    divRef,
    handleClick,
    products,
    loading,
    handleSubmit,
  } = useSearchModal(onClose);
  const t = useTranslations('search');
  return (
    <div className={style.modal} onClick={handleClick}>
      <form className={style.form} onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type='text'
          placeholder='search'
          className={style.searchInput}
          onChange={handleChange}
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className={style.icon}
          type='submit'
        />
      </form>
      <div ref={divRef} className={style.productsContainer}>
        {loading ? (
          <div className={style.spinnerContainer}>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1 }}
              className={style.spinner}
            />
          </div>
        ) : (
          products &&
          (products.length > 0 ? (
            products.map((prod, index) => {
              return (
                <Link
                  key={index}
                  href={`/products/${prod._id}`}
                  className={style.product}
                >
                  {prod.name[params.locale]}
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </Link>
              );
            })
          ) : (
            <p className='text-center'>{t('no-products')}</p>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchModal;

//* Style
const style = {
  modal: `absolute right-0 top-0 z-[150] flex flex-col h-screen w-screen items-center rounded-md bg-[#000000]/[56%] py-2 
  shadow-md backdrop-blur-md`,
  form: `relative flex h-fit w-fit items-center justify-center`,
  searchInput: `z-[102] h-14 w-[20rem] rounded-[200px] px-5 text-lg focus:border-dolphine focus:outline-none focus:ring-0 
  lg:w-[46rem] mt-5 
  border-[1px] border-solid border-dolphine/20`,
  icon: `absolute right-5 mt-5 text-dolphine z-[103]`,
  productsContainer: `custom-scroll-m absolute top-[1.72rem] z-[101] h-[50vh] w-[20rem] overflow-y-auto rounded-b-lg 
  rounded-t-[1.7rem] bg-white p-5 pt-20 lg:w-[46rem]`,
  spinnerContainer: `flex h-full w-full items-center justify-center`,
  spinner: `h-10 w-10 border-4 border-t-emerald border-solid border-lightgray rounded-full`,
  product: `my-2 flex h-12 w-full items-center justify-between rounded-lg p-2 text-sm duration-150 hover:text-emerald 
  hover:shadow-md`,
};
