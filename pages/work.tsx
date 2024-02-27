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
            <div className='w-full'>
              <SuggestedCarousel />
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default Work;
