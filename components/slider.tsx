import Container from './container';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';


const Slider = () => {
  const sliderRef = useRef(null);
  let currentIndex = 0;

  const fadeInSlide = (index, slides) => {
    gsap.to(slides[index], {
      opacity: 1,
      duration: 0.5,
      ease: 'power1.inOut',
    });
  };

  const fadeOutSlide = (index, slides) => {
    gsap.to(slides[index], {
      opacity: 0,
      duration: 0.5,
      ease: 'power1.inOut',
    });
  };

  const nextSlide = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const slides = slider.querySelectorAll('.slide');
    const slideCount = slides.length;

    fadeOutSlide(currentIndex, slides);
    currentIndex = (currentIndex + 1) % slideCount;
    fadeInSlide(currentIndex, slides);
  };

  const prevSlide = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const slides = slider.querySelectorAll('.slide');
    const slideCount = slides.length;

    fadeOutSlide(currentIndex, slides);
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
    fadeInSlide(currentIndex, slides);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const slides = slider.querySelectorAll('.slide');
    const slideCount = slides.length;

    gsap.set(slides, { opacity: 0 });
    gsap.set(slides[currentIndex], { opacity: 1 });

    const resizeHandler = () => {
      // Handle any resizing logic if needed
    };

    window.addEventListener('resize', resizeHandler);
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);
  return (
    <section className='sliderBg text-gray-200 overflow-hidden'>
      <Container>
        <div className='flex flex-col'>
          <div className='h-fit flex flex-row w-full justify-between '>
            <h4 className='mt-5 md:text-left sm:text-sm md:text-2xl'>
              ABOUT US
            </h4>
            <h4 className='mt-5 md:text-left sm:text-sm md:text-2xl text-right'>
              ESTD. 2023
            </h4>
          </div>
          <div className='sm:mt-10 slider flex justify-center' ref={sliderRef}>
            <div className='md:m-5 md:w-1/2 flex justify-center flex-col relative'>
              <div className='w-full slide absolute top-0 left-0'>
                <h4 className='md:mt-5 md:text-left sm:text-center sm:text-lg md:text-2xl'>
                  STEP 1
                </h4>
                <h3 className='m-10 sm:text-3xl mt-5 font-semi-bold text-center'>
                  Featuring new era of{' '}
                  <span className='pixel-font font-normal'>
                    offline advertising.
                  </span>
                </h3>
                <div className='mt-10 mb-6 w-full flex justify-center'>
                  <iframe src='https://lottie.host/embed/0b268750-b9aa-4873-9824-325f2860f5df/N4dN131tkJ.json'></iframe>
                </div>
                <p className='md:m-10 pr-8 pl-8 sm:text-base md:text-lg text-center'>
                  It's like traditional billboards, but our ads move! We put
                  high-res LED screens on trucks or trailers that showcase
                  eye-catching ads on the go.
                </p>
              </div>
              <div className='w-full slide'>
                <h4 className='mt-5 md:text-left sm:text-center sm:text-lg md:text-2xl'>
                  STEP 2
                </h4>
                <h3 className='m-10 sm:text-3xl mt-5 font-semi-bold text-center'>
                  Reach{' '}
                  <span className='pixel-font font-normal'>
                    target audience{' '}
                  </span>
                  with eye catching tech.
                </h3>
                <div className='mt-10 w-full flex justify-center'>
                  <iframe src='https://lottie.host/embed/b92c9b73-a66c-41e2-8316-0839ade0adab/WjYlh7uyrd.json'></iframe>
                </div>
                <p className='md:m-10 pr-8 pl-8 sm:text-base md:text-lg text-center'>
                  We offer top-notch visibility, dynamic content,
                  cost-effectiveness, brand exposure, geo-targeting,
                  multi-location campaigns, and even exclusivity. It's a smart
                  way to stand out!
                </p>
              </div>
              <div className='w-full slide absolute top-0 left-0'>
                <h4 className='mt-5 md:text-left sm:text-center sm:text-lg md:text-2xl'>
                  STEP 3
                </h4>
                <h3 className='m-10 sm:text-3xl mt-5 font-semi-bold text-center'>
                  Highly effective and high{' '}
                  <span className='pixel-font font-normal'>
                    {' '}
                    conversion rates
                  </span>
                  .
                </h3>
                <div className='mt-10 w-full flex justify-center'>
                  <iframe src='https://lottie.host/embed/bdc55841-4b5e-42b4-b26d-c4240932c806/1R5ptStbtm.json'></iframe>
                </div>
                <p className='md:m-10 pr-8 pl-8 sm:text-base md:text-lg text-center'>
                  From static images and videos to animations, slideshows,
                  countdowns, and QR codes, we've got plenty of creative options
                  to engage your audience.
                </p>
              </div>
          <div
            className='sm:m-8 bg-gray-800 flex rounded-lg'
            style={{ zIndex: '20' }}
          >
            <button
              className='pixel-font md:text-2xl mx-auto md:pd-4 p-1 pr-3 pl-3'
              onClick={() => prevSlide()}
            >
              Prev
            </button>
            <button
              className='pixel-font md:text-2xl mx-auto md:pd-4 p-1 pr-3 pl-3'
              onTouchStart={() => nextSlide()}
              onClick={() => nextSlide()}
            >
              Next
            </button>
          </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Slider;
