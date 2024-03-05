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
      <section className='bg-black text-white mt-20 pt-10'>
        <Container>
          <div className='flex justify-center flex-col'>
            <div className='w-full'>
              <ImageGrid />
            </div>
          </div>
        </Container>
      </section>
      <section className='my-[200px] pt-5'>
        <div className='w-full'>
          <Container>
            <div className="flex flex-row p-4 pb-8">
              <div className="w-1/2">
                VAŠE UTOČIŠTE, VAŠA PRIČA
              </div>
              <div className="text-4xl w-1/2">
              Zakoračite u svoj jedinstveni dom, gdje se udobnost, luksuz i elegancija stapaju, stvarajući prostor gdje svaki trenutak postaje nezaboravan.
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
