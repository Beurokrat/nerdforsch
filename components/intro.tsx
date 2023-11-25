import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const Intro = () => {
  return (
    <section className='h-screen flex-col sm:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12'>
      <div>
        <h4 className='md:text-left text-2xl mt-5 md:pl-16'>Introducing</h4>
        <h1 className='text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8'>
          {/* Your <span className='text-red-600'>advertisement</span> is now in motion. */}
          {/* 👋 .. hello !<br></br> */}
          PIXEL WHEELS
        </h1>

        <h4 className='md:text-left text-4xl mt-5 md:pl-16'>
          <b>Advertisement</b> is now in motion.
        </h4>
      </div>
      <div className='mt-5 md:pl-16 tracking-wider'>
        <p className='md:text-left text-2xl'>
          "Boost your brand's visibility with our dynamic mobile billboard
          advertising solutions. Reach your audience on the go and make a
          lasting impact with our innovative, targeted campaigns. Drive
          engagement and elevate your message with our cutting-edge mobile
          billboard services."
        </p>
        <div className='flex flex-row'>

        {/* <Card className='mt-10'>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card> */}
        </div>
      </div>
    </section>
  );
};

export default Intro;
