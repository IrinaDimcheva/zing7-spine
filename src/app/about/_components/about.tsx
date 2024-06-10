import Button from '@/components/ui/button';
import Image from 'next/image';
import { about } from '@/data/data';

export default function AboutSection() {
  return (
    <section className="bg-[url('/images/services-bg.svg')]">
      <div className="max-w-screen-fit mx-auto py-[60px] md:py-[80px] flex flex-col lg:flex-row items-center max-lg:gap-[33px] px-8 xl:px-0">
        <div className="flex flex-col gap-10">
          <div className="relative max-md:text-center">
            <h2 className="headline-h5 md:headline-h2 max-md:font-semibold">
              Why Choose Us?
            </h2>
            <span className="absolute max-md:w-[90px] max-md:top-[20px] left-[136px] md:bottom-4 md:left-48 w-[120px] md:w-full">
              <Image src="./images/Group.svg" alt="" width={170} height={30} />
            </span>
          </div>
          <p className="text-natural-3 text-sm md:text-base leading-[140%] max-md:text-center">
            At DigitalBoostPro, we&apos;re on a mission to empower businesses
            with the digital tools and expertise they need to thrive in the
            ever-evolving online landscape.
          </p>
          <ul className="flex flex-col gap-4 max-w-[670px]">
            {about.map(({ heading, text }) => (
              <li key={heading} className="flex gap-2">
                <Image src="./icons/point.svg" alt="-" width={22} height={22} />
                <p className="text-sm md:text-base leading-[140%]">
                  <span className="text-natural-black font-medium md:font-semibold">
                    {heading}
                  </span>
                  <span className="text-natural-4 font-regular">{text}</span>
                </p>
              </li>
            ))}
          </ul>
          <div className="shrink-0 max-md:self-center">
            <Button label="About Us" />
          </div>
        </div>
        <div className="lg:shrink-0 overflow-hidden pb-[20px]">
          <Image
            src="./images/Frame 1000010025.svg"
            alt="education"
            width={485}
            height={485}
          />
        </div>
      </div>
    </section>
  );
}
