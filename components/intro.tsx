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
    <section ref={el} className='bg-black text-gray-300 overflow-hidden'>
      <Container>
        <div className='h-screen sm:pt-20 grid grid-cols-1 grid-rows-3 gap-4'>
          
          <div className='h-full row-start-1 row-span-2'>
            <h3 className='pt-10 sm:text-4xl md:text-6xl tracking-wider font-medium md:pr-8'>
              We integrate different perspectives, collaborate with one another,
              and challenge ourselves to think outside the box. our focus is on
              producing digital solutions that not only meet but exceed our
              clients’ expectations.
            </h3>
          </div>
          <div className='row-start-3'>
            <div className='w-full px-4'>
              <h2 className='aboutTitle sm:text-4xl font-bold tracking-tighter whitespace-nowrap font-archia '>
                <span className='text-red-400'>/ innovation /</span>
                <span className='text-blue-400'>/ Creative Marketing /</span>
                <span className='text-green-400'>/ Collaboration /</span>
                <span className='text-red-400'>/ Trending /</span>
                <span className='text-yellow-400'>/ Creative Marketing</span>
                <span className='text-green-400'>/ Collaboration /</span>
                <span className='text-red-400'>/ innovation /</span>
                <span className='text-yellow-400'>/ Creative Marketing /</span>
                <span className='text-green-400'>/ Collaboration /</span>
                <span className='text-red-400'>/ innovation /</span>
                <span className='text-blue-400'>/ Creative Marketing /</span>
                <span className='text-green-400'>/ Collaboration /</span>
                <span className='text-red-400'>/ Trending /</span>
                <span className='text-yellow-400'>/ Creative Marketing</span>
                <span className='text-green-400'>/ Collaboration /</span>
                <span className='text-red-400'>/ innovation /</span>
                <span className='text-yellow-400'>/ Creative Marketing /</span>
                <span className='text-green-400'>/ Collaboration /</span>
              </h2>
              <h2 className='aboutTitle sm:text-4xl font-bold tracking-tighter whitespace-nowrap font-archia '>
                <span className='text-red-400'>/ Trending /</span>
                <span className='text-blue-400'>/ Creative Marketing /</span>
                <span className='text-yellow-400'>/ Collaboration /</span>
                <span className='text-red-400'>/ innovation /</span>
                <span className='text-purple-400'>/ Collaboration /</span>
                <span className='text-red-400'>/ innovation /</span>
                <span className='text-blue-400'>/ Creative Marketing</span>
                <span className='text-green-400'>/ Collaboration /</span>
                <span className='text-blue-400'>/ Creative Marketing /</span>
                <span className='text-red-400'>/ Trending /</span>
                <span className='text-blue-400'>/ Creative Marketing /</span>
                <span className='text-yellow-400'>/ Collaboration /</span>
                <span className='text-red-400'>/ innovation /</span>
                <span className='text-purple-400'>/ Collaboration /</span>
                <span className='text-red-400'>/ innovation /</span>
                <span className='text-blue-400'>/ Creative Marketing</span>
                <span className='text-green-400'>/ Collaboration /</span>
                <span className='text-blue-400'>/ Creative Marketing /</span>
              </h2>
              <h2 className='aboutTitle sm:text-4xl font-bold tracking-tighter whitespace-nowrap font-archia '>
                <span className='text-red-400'>/ Trending /</span>
                <span className='text-orange-400'>/ Creative Marketing /</span>
                <span className='text-yellow-400'>/ Collaboration /</span>
                <span className='text-orange-400'>/ innovation /</span>
                <span className='text-yellow-400'>/ innovation /</span>
                <span className='text-purple-400'>/ Collaboration /</span>
                <span className='text-orange-400'>/ Collaboration /</span>
                <span className='text-blue-400'>/ Creative Marketing</span>
                <span className='text-red-400'>/ Creative Marketing /</span>
                <span className='text-red-400'>/ Trending /</span>
                <span className='text-orange-400'>/ Creative Marketing /</span>
                <span className='text-yellow-400'>/ Collaboration /</span>
                <span className='text-orange-400'>/ innovation /</span>
                <span className='text-yellow-400'>/ innovation /</span>
                <span className='text-purple-400'>/ Collaboration /</span>
                <span className='text-orange-400'>/ Collaboration /</span>
                <span className='text-blue-400'>/ Creative Marketing</span>
                <span className='text-red-400'>/ Creative Marketing /</span>
              </h2>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Intro;
