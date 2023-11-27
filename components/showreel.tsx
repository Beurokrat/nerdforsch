'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';

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
          <h4 className='md:text-left md:text-3xl mt-5'>
            Introducing
          </h4>
          <h1 className='pt-4 sm:text-4xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8'>
            {/* Your <span className='text-red-600'>advertisement</span> is now in motion. */}
            {/* 👋 .. hello !<br></br> */}
            PIXEL-WHEEL
          </h1>
        </div>
        <div className='md:col-start-3 md:row-start-4 sm:row-start-6 h-full items-center'>
          <h4 className=' md:text-left sm:text-2xl md:text-4xl md:mt-5 md:pl-4 md:pt-12'>
            <b className='text-red-600'>Advertisement</b> is now in motion.
            {/* <b className='text-red-800'> a</b>.
            <b className='text-green-800'>k</b>.
            <b className='text-blue-800'>a</b> */}
             {/* eMotion. */}
          </h4>
        </div>
      </div>
    </section>
  );
}
