// components/ImageGrid.js

import { motion } from 'framer-motion';
import Image from 'next/image';
import Container from './container';
import ShowReel from './showreel';

const images = [
  { id: 1, src: '/assets/img/pw_img_1.png', alt: 'Image 1', text: 'Description for Image 1' },
  { id: 2, src: '/assets/img/pw_img_1.png', alt: 'Image 2', text: 'Description for Image 2' },
  // Add more images as needed
];

export const ImageGrid = () => {
  return (
    <div className='flex sm:flex-col md:flex-row'>
    <div className='sm:w-full md:w-[60%] bg-black'>
        <ShowReel videoLink='https://player.vimeo.com/video/917046197?controls=0&autoplay=1&loop=1&muted=1&title=0&autopause=0&background=1'/>
    </div>
    <div className='sm:w-full md:w-[40%] mt-20 p-10'>
        <div className='bg-gray-600 p-10'>
            <h1 className='text-4xl text-white'>Unveiling Our Latest Creations in Design and Innovation.</h1>
        </div>
    </div>
    </div>
  );
};
