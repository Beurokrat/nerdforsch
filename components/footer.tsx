'use client';
import Container from './container';
import { EXAMPLE_PATH } from '../lib/constants';
import { Input } from './ui/input';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';

import * as z from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { ContactForm } from './contactform';

const Footer = () => {
  const formSchema = z.object({
    username: z.string().min(2).max(50),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  });

  return (
    <footer className='footer border-t border-neutral-200 bg-black text-gray-200'>
      <Container>
        <div className='pt-10 flex sm:flex-col md:flex-row  items-center'>
            <img src='/assets/img/logo-astro.png' className='md:w-1/4 sm:w-1/2' alt='' />
          <div className='flex float-right sm:p5 sm:mb-10 md:p-10 sm:w-full bg-black shadow-xl rounded-3xl bg-opacity-30 backdrop-blur-lg backdrop-filter'>
            <div className='m-5 mr-auto w-full'>
              <h1 className='sm:text-xl md:text-3xl pb-4 font-semi-bold tracking-tighter leading-tight lg:text-left'>
                Nerdforsch Labs pvt. ltd.
              </h1>
              <p className='sm:text-xs md:text-xl'>Ten Square Building,</p>
              <p className='sm:text-xs md:text-xl'>NH-47 ,Ernakulam</p>
              <p className='sm:text-xs md:text-xl'>Kerala, India</p>
            </div>
          </div>
          {/* <div className='hidden md:flex flex-col w-1/2'>
            <h1 className='md:text-5xl pb-4 font-semi-bold tracking-tighter leading-tight lg:text-left'>
              Let's talk ..{' '}
            </h1>
            <div className=' w-full h-full m-5 rounded-2xl shadow-md top-0 bg-gray-400 bg-opacity-10 z-30 backdrop-blur-lg backdrop-filter'>
            </div>
          </div> */}
        </div>
        <div className='flex flex-row w-full justify-between pb-5'>
          <p className='sm:text-xs md:text-base'>Privacy Policy</p>
          <p className='sm:text-xs md:text-base'>Terms & Conditions</p>
          <p className='sm:text-xs md:text-base'>Cookie Policy</p>
        </div>
        <div className='md:col-span-6 md:row-start-3 border-t-2 border-gray-300 text-gray-200 text-sm py-4 sm:col-span-3'>
          &copy; 2023 Nerdforsch Labs pvt. ltd. All rights reserved. Powered by
          Beurokrat
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
