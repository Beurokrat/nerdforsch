import Container from '../components/container';
import MoreStories from '../components/more-stories';
import Intro from '../components/intro';
import Layout from '../components/layout';
import { getAllPosts } from '../lib/api';
import Head from 'next/head';
import Post from '../interfaces/post';
import ShowReel from '../components/showreel';
import Slider from '../components/slider';
import About from '../components/about';
import ScrollText from '../components/scrolltext';
import FAQ from '../components/faq';
import Contact from '../components/contact';
import Reveal from '../components/anim/reveal';

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  let morePosts = allPosts;
  morePosts[0].coverImage = '/assets/img/blog-1.png';
  return (
    <>
      <Layout>
        <Head>
          <title>{`Nerdforsch Labs - Next Gen marketing platform`}</title>
        </Head>
        <Container>
          <div className='sm:h-screen md:h-auto'>
            <ShowReel videoLink='https://player.vimeo.com/video/829920535?controls=0&autoplay=1&loop=1&muted=1&title=0&autopause=0&background=1' />
            <div className='sm:h-full sm:pt-5 sm:pb-0 items-center'>
              <div className='flex flex-col items-center h-full'>
                <Reveal>
                  <div>
                    <h4 className=' mt-5 md:text-left sm:text-lg md:text-2xl'>
                      INTRODUCING
                    </h4>
                    <h1 className='pt-2 sm:text-8xl font-bold tracking-tighter leading-tight md:pr-8'>
                      {/* Your <span className='text-red-600'>advertisement</span> is now in motion. */}
                      {/* 👋 .. hello !<br></br> */}
                      PIXEL WHEEL
                    </h1>
                    <h3 className='mt-10 md:text-left sm:text-xl md:text-3xl'>
                      <b>Advertisement</b> is now in motion_
                    </h3>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </Container>
        <Slider />
        <About />
        <ScrollText />
        <FAQ />
        <Contact />
        {/* <Intro /> */}
        <Container>
          {/* {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ]);

  return {
    props: { allPosts },
  };
};
