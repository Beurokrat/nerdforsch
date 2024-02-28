import React from 'react';
import Layout from '../components/layout';
import Container from '../components/container';
import { ImageGrid } from '../components/image-gallery';
import SuggestedCarousel from '../components/image-carousal';

const Work = () => {
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
            <SuggestedCarousel />
          </Container>
        </div>
      </section>
    </Layout>
  );
};

export default Work;
