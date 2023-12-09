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
          <div className='md:p-10 flex sm:flex-col md:flex-row w-full'>
            <div className='m-10 mb-0 ml-0 md:p-8 w-[75%] sm:p-8 border-r-2 border-black'>
              <Reveal>
                <Accordion type='single' collapsible>
                  <AccordionItem value='item-1'>
                    <AccordionTrigger>
                      <h3 className='sm:text-3xl font-semi-bold text-left'>
                        <span className='text-xl'>1</span> What's mobile digital
                        billboard advertising?
                      </h3>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className='sm:text-2xl '>
                        It's like traditional billboards, but our ads move! We put
                        high-res LED screens on trucks or trailers that showcase
                        eye-catching ads on the go.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value='item-2'>
                    <AccordionTrigger>
                      <h3 className='sm:text-3xl font-semi-bold text-left'>
                        <span className='text-xl'>2</span> Where can I find your
                        mobile digital billboards?
                      </h3>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className='sm:text-2xl'>
                        Right now, you can spot our Pixel Wheels in and around
                        Ernakulam district in Kerala. For special events, we're in
                        Thiruvananthapuram and Kozhikode too.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value='item-3'>
                    <AccordionTrigger>
                      <h3 className='sm:text-3xl font-semi-bold text-left'>
                        <span className='text-xl'>3</span> What are the perks of
                        mobile digital billboard advertising?
                      </h3>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className='sm:text-2xl'>
                        We offer top-notch visibility, dynamic content,
                        cost-effectiveness, brand exposure, geo-targeting,
                        multi-location campaigns, and even exclusivity. It's a
                        smart way to stand out!
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value='item-4'>
                    <AccordionTrigger>
                      <h3 className='sm:text-3xl font-semi-bold text-left'>
                        <span className='text-xl'>4</span> How long can my ad run
                        on your billboards?
                      </h3>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className='sm:text-2xl'>
                        You can pick 10, 15, or 20-second slots, running 420 times
                        a day. Campaigns start at a week and can extend up to 3
                        months.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </Reveal>
            </div>
            <h2 className='sm:text-3xl font-bold text-left m-10 ml-0'>
              (FAQ)
              <div className=" clipped-corners-sm overflow-hidden h-3/4 mt-10 overflow-hidden">
              <img src="/assets/img/holder.jpg" alt="crowd" className='w-full h-[250px] opacity-90 object-cover' />
              </div>
            </h2>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
