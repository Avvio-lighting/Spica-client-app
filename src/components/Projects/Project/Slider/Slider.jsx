'use client';
import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
import rgbDataURL from '@/util/rgbDataUrl';
import { API_BASE_URL } from '@/lib/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Slider = ({ images, alt }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    breakpoints: {
      '(min-width: 550px)': {
        slides: { perView: 2, spacing: 50 },
      },
      '(min-width: 1025px)': {
        slides: { perView: 3, spacing: 50 },
      },
    },
    slides: { perView: 1, spacing: 50 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    updated() {
      setCurrentSlide(instanceRef.current.track.details.rel);
    },
  });

  function Arrow(props) {
    return (
      <button
        onClick={props.onClick}
        className={style.getArrowStyle(props)}
        disabled={props.disabled}
      >
        {props.left && <FontAwesomeIcon icon={faAngleLeft} />}
        {!props.left && <FontAwesomeIcon icon={faAngleRight} />}
      </button>
    );
  }

  const totalSlides = Math.ceil(
    (instanceRef.current?.track.details.slides.length || 0) /
      (instanceRef.current?.options.slides.perView || 1)
  );
  const isSingleSlide = totalSlides === 1;

  return (
    <div className={style.container}>
      <div ref={sliderRef} className={style.slider}>
        {images.map((src, index) => (
          <div className={style.slide} key={index}>
            <Image
              src={`${API_BASE_URL}${src}`}
              fill
              placeholder='blur'
              blurDataURL={rgbDataURL(237, 255, 238)}
              alt={alt}
              style={{ objectFit: 'cover' }}
              className='rounded-lg'
            />
          </div>
        ))}
      </div>
      {loaded && instanceRef.current && !isSingleSlide && (
        <>
          <Arrow
            left
            onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
            disabled={currentSlide === 0}
          />
          <Arrow
            onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
            disabled={currentSlide === totalSlides - 1}
          />
        </>
      )}
      {loaded && instanceRef.current && (
        <div className={style.dots}>
          {Array.from({ length: totalSlides }, (_, idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={style.getDotStyle(currentSlide, idx)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Slider;

//* Style
const style = {
  getArrowStatus: (props) => {
    return props.disabled ? ' arrow--disabled' : '';
  },
  getArrowStyle: (props) => {
    return `arrow ${props.left ? 'arrow--left' : 'arrow--right'}${style.getArrowStatus(props)}`;
  },
  container: `relative mx-auto my-20 flex w-[95%] justify-center px-4`,
  slider: `keen-slider w-[90%]`,
  slide: `keen-slider__slide relative h-[500px] overflow-hidden rounded-lg bg-honeydew shadow-md`,
  dots: `absolute -bottom-8 left-1/2 flex -translate-x-1/2 transform space-x-2`,
  getDotStyle: (currentSlide, idx) => {
    return `h-3 w-3 rounded-full ${currentSlide === idx ? 'bg-emerald' : 'bg-dolphine/20'}`;
  },
};
