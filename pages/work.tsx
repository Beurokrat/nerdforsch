import React from 'react';
import Layout from '../components/layout';
import Container from '../components/container';
import { ImageGrid } from '../components/image-gallery';
import MasonryGrid from '../components/image-carousal';

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
      <section className='bg-black text-white mt-20 pt-10'>
        <Container>
          <div className='flex justify-center flex-col'>
            <div className='w-full'>
              <ImageGrid />
            </div>
          </div>
        </Container>
      </section>
      <section className='mt-20 mb-20 pt-5'>
        <div className='w-full'>
          <Container>
            <MasonryGrid images={images} />
          </Container>
        </div>
      </section>
    </Layout>
  );
};

export default Work;
