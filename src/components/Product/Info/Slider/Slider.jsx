'use client';

import BreadCrumb from '../BreadCrumb/BreadCrumb';
import Image from 'next/image';
import { API_BASE_URL } from '@/lib/constants';
import rgbDataURL from '@/util/rgbDataUrl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { useSlider } from './hooks';
const Slider = ({ product, locale }) => {
  const {
    images,
    currentIndex,
    handlePrevClick,
    handleNextClick,
    handleImageClick,
    thumbnailsContainerRef,
  } = useSlider(product);

  return (
    <div className={style.container}>
      <BreadCrumb
        categoryTitle={product.category.text[locale]}
        productTitle={product.name[locale]}
      />
      <div>
        <div className={style.imagesContainer}>
          <div className={style.mainImage}>
            {images.length > 0 && (
              <Image
                src={`${API_BASE_URL}${images[currentIndex]}`}
                fill
                placeholder='blur'
                blurDataURL={rgbDataURL(237, 255, 238)}
                alt={product.name[locale]}
                style={{ objectFit: 'contain' }}
                className='rounded-lg'
              />
            )}
          </div>

          <button
            className={style.getControlStyle(true)}
            onClick={handlePrevClick}
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button
            className={style.getControlStyle(false)}
            onClick={handleNextClick}
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </button>

          <div
            className={style.thumbnailsContainer}
            ref={thumbnailsContainerRef}
          >
            {images.map((src, index) => {
              return (
                <div
                  onClick={() => {
                    handleImageClick(index);
                  }}
                  className={style.getThumbnailStyle(currentIndex, index)}
                  key={index}
                >
                  <Image
                    src={`${API_BASE_URL}${src}`}
                    fill
                    placeholder='blur'
                    blurDataURL={rgbDataURL(237, 255, 238)}
                    alt={product.name[locale]}
                    style={{ objectFit: 'contain' }}
                    className='rounded-lg'
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Slider;

//* Style
const style = {
  container: `flex-1 lg:w-[50%]`,
  imagesContainer: `relative mx-auto w-[90%]`,
  mainImage: `relative mx-auto h-[350px] w-full overflow-hidden rounded-lg shadow-2xl md:h-[450px] lg:h-[550px]`,
  getControlStyle: (isLeft) => {
    return `absolute ${isLeft ? 'left-5' : 'right-5'} top-[40%] h-8 w-8 -translate-y-[25%] rounded-full border-[1px] 
    border-solid border-dolphine/20 bg-white/70 text-lg shadow-md duration-150 hover:scale-125 hover:bg-white 
    md:h-12 md:w-12 md:text-2xl`;
  },
  thumbnailsContainer: `mx-auto flex  my-10 flex w-full gap-10 overflow-x-scroll no-scrollbar`,
  getThumbnailStyle: (currentIndex, index) => {
    return `relative aspect-square min-w-[150px] overflow-hidden rounded-lg border-[1px] 
    border-solid border-dolphine ${currentIndex == index ? 'blur-sm' : 'shadow-md'} cursor-pointer`;
  },
};
