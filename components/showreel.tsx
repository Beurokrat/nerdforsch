'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';

export default function ShowReel() {
  const el = useRef<HTMLDivElement>(null);
  return (
    <section ref={el} className=''>  
      <div className='h-screen  pt-20 grid grid-cols-3 grid-rows-4 gap-0'>
        <div className='h-full w-full col-span-3 row-span-3 pt-10 pb-10'>
          <div className='h-full m-auto clipped-corners md:aspect-16/9 md:aspect-video'>
          <iframe
            src='https://player.vimeo.com/video/829920535?controls=0&autoplay=1&loop=1&muted=1&title=0&autopause=0&background=1'
            className='pointer-events-none h-full w-full'
          />
          </div>
        </div>
        <div className='col-span-2 row-start-4'>
          <h4 className='md:text-left text-2xl mt-5 md:pl-16'>Introducing</h4>
          <h1 className='text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8'>
            {/* Your <span className='text-red-600'>advertisement</span> is now in motion. */}
            {/* 👋 .. hello !<br></br> */}
            PIXEL WHEELS
          </h1>
        </div>
        <div className="col-start-3 row-start-4">
        <h4 className='md:text-left text-4xl mt-5 md:pl-16'>
            <b>Advertisement</b> is now in motion.
          </h4>
        </div>
      </div>
    </section>
  );
}
