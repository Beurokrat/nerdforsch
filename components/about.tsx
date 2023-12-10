import Container from './container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import Reveal from './anim/reveal';

const About = () => {
  return (
    <section className='mt-12'>
      <Container>
        <div className='w-full flex flex-col'>
          {/* About */}
          <div className='flex sm:flex-col md:flex-row pb-5 border-b-2 border-black'>
            <div className='md:w-[60%]'>
              <Reveal>
                <h2 className='sm:text-3xl md:text-6xl font-semi-bold text-left pr-5 border-r-2 border-black mt-10 mb-10'>
                  Elevate brand visibility affordably with Pixel Wheels'
                  impactful outdoor digital advertisements.
                </h2>
              </Reveal>
            </div>
            <div className='md:w-[40%] flex flex-col'>
              <h2 className='sm:text-xl md:text-3xl font-bold text-left sm:mb-10 md:m-10'>
                (We are social)
              </h2>
              <div className='sm:block md:hidden sm:mb-10 clipped-corners overflow-hidden h-3/4 overflow-hidden'>
                <img
                  src='/assets/img/crowd.jpg'
                  alt='crowd'
                  className=' w-full h-[450px] opacity-90 object-cover'
                />
              </div>
              <div className='flex items-end justify-center h-full w-full'>
                <a
                  href='https://www.linkedin.com/company/nerdforsch-labs'
                  target='_blank'
                  className='md:ml-10 flex items-center justify-center md:p-2 w-12 h-12'
                >
                  <img src='\assets\img\icons\linkdin.svg' alt='linkdIn' />
                </a>
                <a
                  href='https://www.instagram.com/pixelwheel_nfl/'
                  target='_blank'
                  className='md:ml-10 flex items-center justify-center md:p-2 w-12 h-12'
                >
                  <img src='\assets\img\icons\instagram.svg' alt='instagram' />
                </a>
                <a
                  href='https://www.facebook.com/profile.php?id=61553184518919&sk=about'
                  target='_blank'
                  className='md:ml-10 flex items-center justify-center md:p-2 w-12 h-12'
                >
                  <img src='\assets\img\icons\facebook.svg' alt='facebook' />
                </a>
              </div>
            </div>
          </div>
          {/* services */}
          <div className='w-full flex sm:flex-col md:flex-row mb-10 md:mt-10 border-b-2 border-black'>
            <div className='md:w-1/3 md:mr-5 md:border-r-2 border-black mb-10'>
              <h2 className='sm:text-3xl font-bold text-left m-10 ml-0'>
                (Services)
              </h2>
              <div className='sm:hidden md:block clipped-corners overflow-hidden h-3/4 pr-10 overflow-hidden'>
                <img
                  src='/assets/img/crowd.jpg'
                  alt='crowd'
                  className=' w-full h-[450px] opacity-90 object-cover'
                />
              </div>
            </div>
            <div className='md:w-2/3 flex flex-col'>
              <div className='flex md:border-b-2 border-black sm:flex-col md:flex-row md:m-10 '>
                <div className='md:w-1/2 md:pr-5 md:border-r-2 border-black mb-12'>
                  <Reveal>
                    <h2 className='md:text-5xl sm:text-4xl font-bold text-left mb-10'>
                      Marketing
                    </h2>
                  </Reveal>
                  <Reveal>
                    <p className='text-xl'>
                      Drive brand impact with strategic mobile billboard
                      campaigns. Tailored strategies for maximum exposure and
                      engagement.
                    </p>
                  </Reveal>
                </div>
                <div className='md:w-1/2 md:mb-10 md:pl-10'>
                  <Reveal>
                    <h2 className='md:text-5xl sm:text-4xl font-bold text-left mb-10'>
                      Advertisement
                    </h2>
                  </Reveal>
                  <Reveal>
                    <p className='text-xl'>
                      Dynamic LED screens on mobile billboards. Captivate
                      audiences with immersive, high-resolution displays. Stand
                      out and make an impression.
                    </p>
                  </Reveal>
                </div>
              </div>
              <div className='sm:mt-10 sm:mb-10 md:mt-0 md:m-10'>
                <Reveal>
                  <h2 className='md:text-5xl sm:text-4xl font-bold text-left mb-10'>
                    Interaction Design
                  </h2>
                </Reveal>
                <Reveal>
                  <p className='text-xl'>
                    At Pixel Wheels, we craft seamless and engaging interactions
                    between your audience and our mobile billboard interfaces.
                    Our focus is on creating intuitive, high-impact experiences
                    that effortlessly connect viewers with your brand message.
                  </p>
                </Reveal>
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
