import React from 'react';
import Layout from '../components/layout';
import Container from '../components/container';

function Contact() {
  return (
    <Layout>
      <Container>
        <div className='flex justify-center flex-row'>
          <div className='w-3/4'>
            <div className='text-4xl mt-20 pt-20'>Contact Nerdforsh Labs</div>
            <p className='text-lg pt-10 mb-8'>
              Welcome to Nerdforsch Labs, a trailblazing innovative startup
              company that is revolutionizing the digital content landscape. Our
              mission is to transform the way digital content is consumed,
              making it more accessible, engaging, and immersive than ever
              before.
            </p>
          </div>
        </div>
      </Container>
    </Layout>
  );
}

export default Contact;
