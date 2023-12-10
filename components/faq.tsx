import Reveal from './anim/reveal';
import Container from './container';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const FAQ = () => {
  return (
    // <section ref={el} className='bg-black text-gray-200 overflow-hidden'>
    <section>
      <Container>
        <div className='sm:pt-0 border-b-2 border-black'>
          <div className='md:pr-10 sm:mb-10 flex sm:flex-col-reverse md:flex-row w-full'>
            <div className='sm:mt-10 mb-0 ml-0 md:p-8 md:w-[60%] md:p-8 md:pl-0 md:border-r-2 border-black'>
              <Reveal>
                <Accordion type='single' collapsible>
                  <AccordionItem value='item-1'>
                    <AccordionTrigger>
                      <div className='flex flex-row'>
                        <span className='text-xl mr-5 '>1</span>
                        <h3 className='sm:text-2xl md:text-3xl font-semi-bold text-left pr-5'>
                          What's mobile digital billboard advertising?
                        </h3>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className='sm:text-xl md:text-2xl sm:pl-6 md:text-2xl pr-5'>
                        It's like traditional billboards, but our ads move! We
                        put high-res LED screens on trucks or trailers that
                        showcase eye-catching ads on the go.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value='item-2'>
                    <AccordionTrigger>
                      <div className='flex flex-row'>
                        <span className='text-xl mr-5 '>2</span>
                        <h3 className='sm:text-2xl md:text-3xl font-semi-bold text-left pr-5'>
                          Where can I find your mobile digital billboards?
                        </h3>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className='sm:text-xl md:text-2xl sm:pl-6 md:text-2xl pr-5'>
                        Right now, you can spot our Pixel Wheels in and around
                        Ernakulam district in Kerala. For special events, we're
                        in Thiruvananthapuram and Kozhikode too.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value='item-3'>
                    <AccordionTrigger>
                      <div className='flex flex-row'>
                        <span className='text-xl mr-5 '>3</span>
                        <h3 className='sm:text-2xl md:text-3xl font-semi-bold text-left pr-5'>
                          What are the perks of mobile digital billboard
                          advertising?
                        </h3>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className='sm:text-xl md:text-2xl sm:pl-6 md:text-2xl pr-5'>
                        We offer top-notch visibility, dynamic content,
                        cost-effectiveness, brand exposure, geo-targeting,
                        multi-location campaigns, and even exclusivity. It's a
                        smart way to stand out!
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value='item-4'>
                    <AccordionTrigger>
                      <div className='flex flex-row'>
                        <span className='text-xl mr-5 '>4</span>
                        <h3 className='sm:text-2xl md:text-3xl font-semi-bold text-left pr-5'>
                          How long can my ad run on your billboards?
                        </h3>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className='sm:text-xl md:text-2xl sm:pl-6 md:text-2xl pr-5'>
                        You can pick 10, 15, or 20-second slots, running 420
                        times a day. Campaigns start at a week and can extend up
                        to 3 months.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value='item-4'>
                    <AccordionTrigger>
                      <div className='flex flex-row'>
                        <span className='text-xl mr-5 '>5</span>
                        <h3 className='sm:text-2xl md:text-3xl font-semi-bold text-left pr-5'>
                          What types of content can I display on your digital
                          billboards?
                        </h3>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className='sm:text-xl md:text-2xl sm:pl-6 md:text-2xl pr-5'>
                        From static images and videos to animations, slideshows,
                        countdowns, and QR codes, we've got plenty of creative
                        options to engage your audience.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </Reveal>
            </div>
            <div className="md:p-10 flex flex-col md:w-[40%]">
              <h2 className='sm:text-3xl font-bold text-left m-10 ml-0'>
                (FAQ)
              </h2>
              <div className='md:m-10 clipped-corners-sm overflow-hidden mt-10 overflow-hidden'>
                <img
                  src='/assets/img/holder.webp'
                  alt='crowd'
                  className='w-full h-full opacity-90 object-cover'
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
