import Container from './container';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const ScrollText = () => {
  const el = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (el.current) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to('.aboutTitle', {
        xPercent: -10,
        scrollTrigger: {
          trigger: el.current,
          start: 'top 70%',
          end: 'bottom top',
          scrub: 1.5,
        },
      });
    }
  }, []); // Run the animation on initial mount
  return (
    // <section ref={el} className='bg-black text-gray-200 overflow-hidden'>
    <section ref={el} className='overflow-hidden'>
      <div className='sm:pt-0'>
        <div className='w-full px-4'>
          <h2 className='aboutTitle sm:text-7xl md:text-8xl font-bold text-gray-400 tracking-tighter whitespace-nowrap font-archia '>
            <span>#innovation </span>
            <span>#CreativeMarketing </span>
            <span>#Collaboration </span>
            <span>#Trending </span>
            <span>#CreativeMarketing </span>
            <span>#Collaboration </span>
            <span>#innovation </span>
            <span>#CreativeMarketing </span>
            <span>#Collaboration </span>
            <span>#innovation </span>
            <span>#CreativeMarketing </span>
            <span>#Collaboration </span>
            <span>#Trending </span>
            <span>#CreativeMarketing </span>
            <span>#Collaboration </span>
            <span>#innovation </span>
            <span>#CreativeMarketing </span>
            <span>#Collaboration </span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default ScrollText;
