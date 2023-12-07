import Container from './container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

const About = () => {
  return (
    <section className='mt-12'>
      <Container>
        <div className='w-full flex flex-col'>
            {/* About */}
          <div className='flex flex-row pb-5 border-b-2 border-black'>
            <div className='w-[60%]'>
              <h2 className='sm:text-6xl font-semi-bold text-left pr-5 border-r-2 border-black mt-10 mb-10'>
                What's mobile digital billboard advertising? Lorem ipsum dolor
                sit amet consectetur adipisicing elit.
              </h2>
            </div>
            <div className='w-[40%] flex flex-col'>
              <h2 className='sm:text-3xl font-bold text-left m-10'>
                (We are social)
              </h2>
              <div className='flex items-end h-full w-full'>
                <a
                  href='https://www.instagram.com/yourusername'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='m-5 ml-10 flex items-center justify-center bg-black rounded-full p-2 w-12 h-12'
                >
                  <FontAwesomeIcon icon={faInstagram} className='text-white' />
                </a>

                <a
                  href='https://www.linkedin.com/in/yourusername'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='m-5 flex items-center justify-center bg-black rounded-full p-2 w-12 h-12'
                >
                  <FontAwesomeIcon icon={faLinkedinIn} className='text-white' />
                </a>

                <a
                  href='https://wa.me/yourphonenumber'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='m-5 flex items-center justify-center bg-black rounded-full p-2 w-12 h-12'
                >
                  <FontAwesomeIcon icon={faWhatsapp} className='text-white' />
                </a>
              </div>
            </div>
          </div>
          {/* services */}
          <div className='w-full flex flex-row mb-10 mt-10 border-b-2 border-black'>
            <div className='w-1/3 mr-5 border-r-2 border-black mb-10'>
              <h2 className='sm:text-3xl font-bold text-left m-10 ml-0'>
                (Services)
              </h2>
            </div>
            <div className='w-2/3 flex flex-col'>
              <div className='flex border-b-2 border-black flex-row m-10 '>
                <div className='w-1/2 pr-5 border-r-2 border-black mb-12'>
                  <h2 className='sm:text-5xl font-bold text-left mb-10'>
                    Marketing
                  </h2>
                  <p className='text-xl'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sed omnis, corporis error laborum sit, unde perferendis a
                    veritati sperferendis a veritatis
                  </p>
                </div>
                <div className='w-1/2 pl-10'>
                  <h2 className='sm:text-5xl font-bold text-left mb-10'>
                    Advertisement
                  </h2>
                  <p className='text-xl'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sed omnis, corporis error laborum sit, unde perferendis a
                    veritati sperferendis a veritatis
                  </p>
                </div>
              </div>
              <div className='mt-0 m-10'>
                <h2 className='sm:text-5xl font-bold text-left mb-10'>
                  Interaction Design
                </h2>
                <p className='text-xl'>
                  involves crafting how users interact with a product or system.
                  It focuses on creating intuitive, meaningful, and efficient
                  interactions between users and digital interfaces, ensuring a
                  seamless and satisfying user experience.
                </p>
              </div>
            </div>
          </div>
          {/* FAQ */}
        </div>
      </Container>
    </section>
  );
};

export default About;
