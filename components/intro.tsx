import Container from './container';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const Intro = () => {
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
          scrub: 2,
        },
      });
    }
  }, []); // Run the animation on initial mount
  return (
    // <section ref={el} className='bg-black text-gray-200 overflow-hidden'>
    <section ref={el} className='overflow-hidden relative'>
      <Container>
        <div
          className='sm:pt-0 absolute'
          style={{ marginTop: '250px', zIndex: '-5' }}
        >
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
        <div className='h-fit flex flex-row w-full'>
          <h4 className='mt-5 md:text-left sm:text-sm md:text-2xl'>SERVICES</h4>
        </div>
        <div className='md:p-10 flex sm:flex-col md:flex-row w-full'>
          <div className='m-10 ml-0 md:w-1/2 sm:w-full sm:p-5 rounded-xl shadow-xl bg-grey-800 bg-opacity-70 backdrop-blur-lg backdrop-filter'>
            <h3 className='md:m-10 sm:m-3 sm:text-3xl mt-5 font-semi-bold'>
              Featuring new era of{' '}
              <span className='pixel-font font-normal'>
                offline advertising ?
              </span>
            </h3>
            <p className='md:m-10 sm:m-3 pr-8 sm:text-base md:text-lg '>
              It's like traditional billboards, but our ads move! We put
              high-res LED screens on trucks or trailers that showcase
              eye-catching ads on the go. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit.
            </p>
          </div>

          <div className='m-10 ml-0 md:p-8 md:w-1/2 sm:w-full sm:p-8 rounded-xl shadow-xl bg-grey-800 bg-opacity-70 backdrop-blur-lg backdrop-filter'>
            <Accordion type='single' collapsible>
              <AccordionItem value='item-1'>
                <AccordionTrigger>
                  <h3 className='sm:text-xl font-semi-bold text-left'>
                    What's mobile digital billboard advertising?
                  </h3>
                </AccordionTrigger>
                <AccordionContent>
                  <p className='sm:text-base md:text-lg'>
                    It's like traditional billboards, but our ads move! We put
                    high-res LED screens on trucks or trailers that showcase
                    eye-catching ads on the go.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-2'>
                <AccordionTrigger>
                  <h3 className='sm:text-xl font-semi-bold text-left'>
                    Where can I find your mobile digital billboards?
                  </h3>
                </AccordionTrigger>
                <AccordionContent>
                  <p className='sm:text-base md:text-lg'>
                    Right now, you can spot our Pixel Wheels in and around
                    Ernakulam district in Kerala. For special events, we're in
                    Thiruvananthapuram and Kozhikode too.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-3'>
                <AccordionTrigger>
                  <h3 className='sm:text-xl font-semi-bold text-left'>
                    What are the perks of mobile digital billboard advertising?
                  </h3>
                </AccordionTrigger>
                <AccordionContent>
                  <p className='sm:text-base md:text-lg'>
                    We offer top-notch visibility, dynamic content,
                    cost-effectiveness, brand exposure, geo-targeting,
                    multi-location campaigns, and even exclusivity. It's a smart
                    way to stand out!
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-4'>
                <AccordionTrigger>
                  <h3 className='sm:text-xl font-semi-bold text-left'>
                    How long can my ad run on your billboards?
                  </h3>
                </AccordionTrigger>
                <AccordionContent>
                  <p className='sm:text-base md:text-lg'>
                    You can pick 10, 15, or 20-second slots, running 420 times a
                    day. Campaigns start at a week and can extend up to 3
                    months.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div className='h-fit flex flex-row w-full'>
          <h4 className='mt-5 md:text-left sm:text-sm md:text-2xl'>BLOG</h4>
        </div>
      </Container>
    </section>
  );
};

export default Intro;
