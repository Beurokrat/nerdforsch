'use client';

import { useRef } from 'react';

export default function ShowReel({ videoLink }) {
  const el = useRef<HTMLDivElement>(null);
  return (
    <section ref={el}>
      <div className='flex w-full sm:pt-20'>
        <div className='md:pt-10 md:pb-10'>
          {/* <div className='w-full bg-black m-auto clipped-corners sm:aspect-video relative'> */}
          <div className='w-full bg-black m-auto sm:aspect-video relative'>
            <video width='100%' autoPlay loop muted>
              <source src='/assets/hero_video.mp4' type='video/mp4' />
              Your browser does not support the video tag.
            </video>
            {/* <iframe
              src= {videoLink}
              // src='https://player.vimeo.com/video/829920535?controls=0&autoplay=1&loop=1&muted=1&title=0&autopause=0&background=1'
              className='pointer-events-none absolute inset-0 h-full w-full object-cover'
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
