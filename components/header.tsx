import Link from 'next/link';
import Container from './container';
import { motion, useScroll } from "framer-motion";

const Header = () => {
  const { scrollYProgress } = useScroll();
  return (
    <header className='fixed shadow-md top-0 bg-black bg-opacity-70 z-30 backdrop-blur-lg backdrop-filter w-full'>
      <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
      <Container>
        <div className="flex flex-row items-end justify-between">
        <h2 className='text-2xl text-white md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-5 mt-5'>
          <Link href='/' className='hover:underline'>
            Nerdforsch.
          </Link>
        </h2>
        <div className="sm:hidden md:flex flex-row text-white">
          <span className='p-5 text-lg'>Home</span>
          <span className='p-5 text-lg'>About</span>
          <span className='p-5 text-lg'>Services</span>
          <span className='p-5 text-lg'>Contact</span>
        </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
