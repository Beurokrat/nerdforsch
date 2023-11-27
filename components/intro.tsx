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
      <div className='mt-5 md:pl-16 tracking-wider'>
        <p className='md:text-left text-2xl'>
          "Boost your brand's visibility with our dynamic mobile billboard
          advertising solutions. Reach your audience on the go and make a
          lasting impact with our innovative, targeted campaigns. Drive
          engagement and elevate your message with our cutting-edge mobile
          billboard services."
        </p>
        <div className='flex flex-row'>
        </div>
      </div>
    </section>
  );
};

export default Intro;
