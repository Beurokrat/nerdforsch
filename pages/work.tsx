import React from 'react';
import Layout from '../components/layout';
import Container from '../components/container';
import { ImageGrid } from '../components/image-gallery';
import MasonryGrid from '../components/masonry-grid';


const Work = () => {
  const images = [
    "/assets/img/pw_img_1.webp",
    "/assets/img/pw_img_2.jpg",
    "/assets/img/pw_img_3.webp",
    "/assets/img/pw_img_4.webp",
    "/assets/img/pw_img_6.webp",
    "/assets/img/pw_img_5.webp",
    "/assets/img/pw_img_2.jpg",
  ];
  return (
    <Layout>
      {/* <section className='bg-black text-white mt-20 pt-10'>
        <Container>
          <div className='flex justify-center flex-col'>
            <div className='w-full'>
              <ImageGrid />
            </div>
          </div>
        </Container>
      </section> */}
      <section className='sm:my-[100px] md:my-[200px] pt-5'>
        <div className='w-full'>
          <Container>
            <div className="flex sm:flex-col md:flex-row p-4 pb-8">
              <div className="md:w-1/2">
                Unveiling Our Latest Creations in Design and Innovation.
              </div>
              <div className="sm:mt-10 sm:text-2xl md:text-4xl md:w-1/2">
              As a leading Digital-Out-Of-Home (DOOH) advertising platform, we offer dynamic canvas for anyone to share their stories. Empowering everyone to curate and amplify their reach. 
              </div>
            </div>
            <MasonryGrid />
          </Container>
        </div>
      </section>
    </Layout>
  );
};

export default Work;
