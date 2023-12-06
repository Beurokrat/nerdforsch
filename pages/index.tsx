'use client';
import Container from '../components/container';
import MoreStories from '../components/more-stories';
import Intro from '../components/intro';
import Layout from '../components/layout';
import { getAllPosts } from '../lib/api';
import Head from 'next/head';
import Post from '../interfaces/post';
import Header from '../components/header';
import ShowReel from '../components/showreel';
import Slider from '../components/slider';
import Lenis from '@studio-freight/lenis'
import {useEffect} from 'react';

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  const heroPost = allPosts[0];
  let morePosts = allPosts;
  morePosts[0].coverImage = '/assets/img/blog-1.png';  
  useEffect(()=>{
    const lenis = new Lenis({
      duration:1.3
    })
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  },[])
  return (
    <>
      <Layout>
        <Head>
          <title>{`Nerdforsch Labs - Next Gen marketing platform`}</title>
        </Head>
        <Container>
          <ShowReel />
        </Container>
        <Slider />
        <Intro />
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
