import Container from './container';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const Contact = () => {
  return (
    // <section ref={el} className='bg-black text-gray-200 overflow-hidden'>
    <section>
      <Container>
        <div className='md:p-10 flex sm:flex-col md:flex-row w-full'>
          <h2 className='sm:hidden md:block sm:text-3xl font-bold text-left m-10 ml-0 p-5 pl-10 pr-10'>
            Got more questions ?
          </h2>
          <div className='cursor-pointer sm:text-3xl font-bold text-center sm:m-5 md:m-10 md:ml-auto p-5 md:pl-10 pr-10 border-2 border-black'>
            Contact us
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
