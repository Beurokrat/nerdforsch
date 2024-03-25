import React from 'react';
import Layout from '../components/layout';
import Container from '../components/container';
import Contact from '../components/contact';

function About() {
  return (
    <Layout>
      <Container>
        <div className='flex justify-center flex-row'>
          <div className='sm:w-[85%] md:w-3/4'>
            <div className='sm:text-lg md:text-2xl pixel-font mt-20 pt-20'>
              About Nerdforsh Labs
            </div>
            <div className='mt-[50px] gap-5 flex flex-col md:flex-row pb-[50px] border-b border-black'>
              <img
                className='rounded-xl'
                src='/assets/img/about-image.png'
                alt='about'
              />
              <p className='md:p-10 text-2xl pt-10 mb-8'>
                Welcome to Nerdforsch Labs, a trailblazing innovative startup
                company that is revolutionizing the digital content landscape.
                Our mission is to transform the way digital content is consumed,
                making it more accessible, engaging, and immersive than ever
                before.
              </p>
            </div>
            <div className='mt-[50px] gap-10 flex flex-col md:flex-row pb-[50px]'>
              <div className='bg-black/30 p-8 rounded-lg shadow-xl'>
                <h2 className=' text-2xl pixel-font font-bold mb-4'>VISION</h2>
                <p className='text-lg'>
                  At Nerdforsch Labs, we envision a future where digital content
                  is not just a passive experience, but an interactive and
                  immersive journey that transcends traditional boundaries.
                </p>
              </div>
              <div className='bg-black/30 p-8 rounded-lg shadow-lg'>
                <h2 className=' text-2xl pixel-font font-bold mb-4'>MISSION</h2>
                <p className='text-lg'>
                  Our mission is to create compelling narratives that resonate
                  with consumers, leveraging the power of creativity and
                  technology to elevate our clients' visibility and reach.
                </p>
              </div>
            </div>
            <div className='py-[50px] border-black border-b'>
              <h2 className='py-10 text-2xl  mb-4'>
                Why Choose Nerdforsch Labs
              </h2>
              <p className='text-lg text-center'>
                Innovation: We are at the forefront of digital content
                technology, constantly exploring new ways to enhance the user
                experience. Scalability: Our platform is designed to grow with
                you, ensuring that you can scale your content delivery efforts
                as your audience grows. Flexibility: We offer a range of
                services and solutions tailored to your needs, allowing you to
                choose the best approach for your digital content strategy.
                Expertise: Our team of experts is dedicated to helping you
                navigate the digital content landscape, providing guidance and
                support every step of the way.
              </p>
              <p className='my-8 text-center text-lg '>
                At Nerdforsch Labs, we are not just a company; we are a
                community of innovators, creators, and visionaries. We invite
                you to join us on our journey to redefine the digital content
                landscape. Together, we can create a future where digital
                content is not just a medium, but an experience.
              </p>
            </div>
          </div>
        </div>
        <Contact />
      </Container>
    </Layout>
  );
}

export default About;
