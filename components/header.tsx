import Link from 'next/link';
import Container from './container';

const Header = () => {
  return (
    <header className='fixed shadow-md top-0 bg-grey-800 bg-opacity-70 z-30 backdrop-blur-lg backdrop-filter w-full'>
      <Container>
        <h2 className='text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-5 mt-5'>
          <Link href='/' className='hover:underline'>
            Nerdforsch.
          </Link>
        </h2>
      </Container>
    </header>
  );
};

export default Header;
