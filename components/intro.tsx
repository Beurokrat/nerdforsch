import Container from './container';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const Intro = () => {
  const el = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (el.current) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to('.aboutTitle', {
        xPercent: -100,
        scrollTrigger: {
          trigger: el.current,
          start: 'top 50%',
          end: 'bottom top',
          scrub: 1.5,
        },
      });
    }
  }, []); // Run the animation on initial mount
  return (
    <section ref={el} className='bg-black text-gray-200 overflow-hidden'>
      <Container>
        <div className='h-screen sm:pt-20 grid grid-cols-1 grid-rows-3 gap-4'>
          
          <div className='h-full row-start-1 row-span-2'>
            <h3 className='sm:p-10 md:p-20 sm:text-2xl md:text-5xl tracking-wider md:pr-8'>
            <br></br>
              " We integrate different perspectives, collaborate with one another,
              and challenge ourselves to think outside<b className='text-yellow-400'> the box</b>. our focus is on
              producing digital solutions that not only meet but exceed our
              clients’ expectations.." 🚀
            </h3>
          </div>
          <div className='row-start-3'>
            <div className='w-full px-4'>
              <h2 className='aboutTitle sm:text-6xl font-bold tracking-tighter whitespace-nowrap font-archia '>
                <span >#innovation </span>
                <span >#CreativeMarketing </span>
                <span >#Collaboration </span>
                <span >#Trending </span>
                <span >#CreativeMarketing </span>
                <span >#Collaboration </span>
                <span >#innovation </span>
                <span >#CreativeMarketing </span>
                <span >#Collaboration </span>
                <span >#innovation </span>
                <span >#CreativeMarketing </span>
                <span >#Collaboration </span>
                <span >#Trending </span>
                <span >#CreativeMarketing </span>
                <span >#Collaboration </span>
                <span >#innovation </span>
                <span >#CreativeMarketing </span>
                <span >#Collaboration </span>
              </h2>
              
            </div>
          </div>
          {/* <div className='row-start-3'>
            <div className='w-full px-4'>
              <h2 className='aboutTitle sm:text-4xl font-bold tracking-tighter whitespace-nowrap font-archia '>
                <span >/ innovation /</span>
                <span >/ Creative Marketing /</span>
                <span >/ Collaboration /</span>
                <span >/ Trending /</span>
                <span >/ Creative Marketing</span>
                <span >/ Collaboration /</span>
                <span >/ innovation /</span>
                <span >/ Creative Marketing /</span>
                <span >/ Collaboration /</span>
                <span >/ innovation /</span>
                <span >/ Creative Marketing /</span>
                <span >/ Collaboration /</span>
                <span >/ Trending /</span>
                <span >/ Creative Marketing</span>
                <span >/ Collaboration /</span>
                <span >/ innovation /</span>
                <span >/ Creative Marketing /</span>
                <span >/ Collaboration /</span>
              </h2>
              <h2 className='aboutTitle sm:text-4xl font-bold tracking-tighter whitespace-nowrap font-archia '>
                <span >/ Trending /</span>
                <span >/ Creative Marketing /</span>
                <span >/ Collaboration /</span>
                <span >/ innovation /</span>
                <span >/ Collaboration /</span>
                <span >/ innovation /</span>
                <span >/ Creative Marketing</span>
                <span >/ Collaboration /</span>
                <span >/ Creative Marketing /</span>
                <span >/ Trending /</span>
                <span >/ Creative Marketing /</span>
                <span >/ Collaboration /</span>
                <span >/ innovation /</span>
                <span >/ Collaboration /</span>
                <span >/ innovation /</span>
                <span >/ Creative Marketing</span>
                <span >/ Collaboration /</span>
                <span >/ Creative Marketing /</span>
              </h2>
              <h2 className='aboutTitle sm:text-4xl font-bold tracking-tighter whitespace-nowrap font-archia '>
                <span >/ Trending /</span>
                <span >/ Creative Marketing /</span>
                <span >/ Collaboration /</span>
                <span >/ innovation /</span>
                <span >/ innovation /</span>
                <span >/ Collaboration /</span>
                <span >/ Collaboration /</span>
                <span >/ Creative Marketing</span>
                <span >/ Creative Marketing /</span>
                <span >/ Trending /</span>
                <span >/ Creative Marketing /</span>
                <span >/ Collaboration /</span>
                <span >/ innovation /</span>
                <span >/ innovation /</span>
                <span >/ Collaboration /</span>
                <span >/ Collaboration /</span>
                <span >/ Creative Marketing</span>
                <span >/ Creative Marketing /</span>
              </h2>
            </div>
          </div> */}
        </div>
      </Container>
    </section>
  );
};

export default Intro;
