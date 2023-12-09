'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import Reveal from './anim/reveal';

export default function ShowReel() {
  const el = useRef<HTMLDivElement>(null);
  return (
    <section ref={el}>
      <div className='h-screen grid md:grid-cols-3 md:grid-rows-4 gap-0 sm:grid-cols-1 sm:grid-rows-6 sm:pt-20'>
        <div className='h-full md:col-span-3 md:row-span-3 md:pt-10 md:pb-10 sm:row-span-4'>
          <div className='h-full w-full bg-black m-auto clipped-corners md:aspect-video relative'>
            <iframe
              src='https://player.vimeo.com/video/829920535?controls=0&autoplay=1&loop=1&muted=1&title=0&autopause=0&background=1'
              className='pointer-events-none absolute inset-0 h-full w-full object-cover'
            />
          </div>
        </div>
        <div className='md:col-span-2 md:row-start-4 sm:row-start-5 sm:pt-5 sm:pb-0 items-center'>
          <h4 className='mt-5 md:text-left sm:text-lg md:text-2xl'>
            INTRODUCING
          </h4>
          <Reveal>
            <h1 className='pt-2 sm:text-4xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8'>
              {/* Your <span className='text-red-600'>advertisement</span> is now in motion. */}
              {/* 👋 .. hello !<br></br> */}
              PIXEL-WHEEL
            </h1>
          </Reveal>
        </div>
        <div className='md:col-start-3 md:row-start-4 sm:row-start-6 h-full items-center'>
          <h3 className='md:text-left sm:text-xl md:text-3xl'>
            <b>Advertisement</b> is now in motion_
          </h3>
          {/* <h4 className=' md:text-left sm:pt-4 sm:text-xl md:text-2xl md:mt-5 md:pl-4 md:pt-12'>
            <b>Advertisement</b> is now in motion_
          </h4> */}
        </div>
      </div>
    </section>
  );
}
