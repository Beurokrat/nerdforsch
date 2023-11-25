import Container from '../components/container'
import MoreStories from '../components/more-stories'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Post from '../interfaces/post'
import Header from '../components/header'
import ShowReel from '../components/showreel'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  const heroPost = allPosts[0]
  let morePosts = allPosts.slice(2)
  morePosts[0].coverImage = '/assets/img/blog-1.png'
  return (
    <>
      <Layout>
        <Head>
          <title>{`Nerdforsch Labs - Next Gen marketing platform`}</title>
        </Head>
        <Container>
          <Header />
          <ShowReel/>
          <Intro />
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
