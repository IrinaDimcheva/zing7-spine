import Navbar from './navbar';
import Button from '../ui/button';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-gradient-to-b from-primary/60 from-0%  via-primary/40 via-30% to-transparent to-70%">
      <div className="max-w-screen-fit mx-auto px-6 xl:px-0">
        <Navbar />
        {/* <section className="md:mt-8 mb-24"> */}
        <section className="pt-[60px] md:py-[60px]">
          <div className="w-[672px] max-w-[90vw] mx-auto text-center px-4">
            <div className="relative">
              <h1 className={`headline-h4 md:headline-h1`}>
                We love to find solutions
              </h1>
              <span className="absolute bottom-3 md:bottom-5 w-[149px] right-[10%] md:w-[240px] md:right-[41%]">
                <Image
                  src="./images/Group.svg"
                  alt=""
                  width={240}
                  height={28}
                />
              </span>
            </div>
            <p className="text-natural-3 text-sm md:text-base leading-[140%] py-8">
              Elevate your online presence with Spine cutting-edge solutions.
              Discover limitless possibilities for your digital agency&apos;s
              success.
            </p>
            <Button label="Start for free" />
          </div>
          <div className="flex justify-center lg:items-center -mt-24 max-md:-rotate-[45deg] max-md:mx-4 max-md:mt-[100px] px-4">
            <div className="min-w-[176px] max-w-[374px] max-md:rotate-[45deg] max-md:ml-8 max-md:-mr-8 max-md:mt-[-60px]">
              <Image
                src="./images/Digital_Marketing.svg"
                alt="Digital marketing"
                width={374}
                height={374}
              />
            </div>
            <div className="min-w-[125px] min-h-[25px] lg:w-[463px] lg:h-[93px] max-md:rotate-[5deg] max-md:mt-24 mt-32 lg:mt-24">
              <Image
                src="./images/Vector21.svg"
                alt="twisted arrow"
                width={463}
                height={93}
              />
            </div>
            <div className="min-w-[176px] max-w-[374px] max-md:rotate-[45deg]">
              <Image
                src="./images/bwink_edu.svg"
                alt="blink signal"
                width={374}
                height={374}
              />
            </div>
          </div>
        </section>
      </div>
    </header>
  );
}
