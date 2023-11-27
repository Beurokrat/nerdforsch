import Container from './container';
import { EXAMPLE_PATH } from '../lib/constants';

const Footer = () => {
  return (
    <footer className='bg-neutral-50 border-t border-neutral-200'>

      <Container>
      <div className='grid grid-cols-6 grid-rows-3 gap-4 pt-10'>
        <div className='col-span-3 row-span-2'>
          <h3 className='text-2xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2'>
            Nerdforsch Labs pvt. ltd.
          </h3>
          <p>Ten Square Building,</p>
          <p>NH-47 ,Ernakulam</p>
          <p>Kerala, India</p>
        </div>
        <div className='row-span-2 col-start-4'>
          <p className='text-lg'><b>Help</b></p>
          <p>Contact Us</p>
          <p>Help & FAQs</p>
        </div>
        <div className='row-span-2 col-start-5'>
        <p className='text-lg'><b>Legal Info</b></p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Cookie Policy</p>
        </div>
        <div className='row-span-2 col-start-6'>
        <p className='text-lg'><b>Follow Us</b></p>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>LinkdIn</p>
        </div>
        <div className='col-span-6 row-start-3 border-t-2 border-gray-300 text-gray-500 text-sm py-4'>
          &copy; 2023 Nerdforsch Labs pvt. ltd. All rights reserved. Powered by Beurokrat
        </div>
      </div>
        {/* <div className='py-28 flex flex-col lg:flex-row items-center'>
          <div className='flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2'>
            <a
              href='https://nextjs.org/docs/basic-features/pages'
              className='mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0'
            >
              Read Documentation
            </a> */}
            {/* <a
              href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              className="mx-3 font-bold hover:underline"
            >
              View on GitHub
            </a> */}
          {/* </div> */}
        {/* </div> */}
      </Container>
    </footer>
  );
};

export default Footer;
