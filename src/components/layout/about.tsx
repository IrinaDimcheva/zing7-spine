import Image from 'next/image';
import { sfPro } from '@/app/layout';
import { about } from '@/data/data';
import Button from '../ui/button';

export default function About() {
  return (
    <section className="max-w-screen-fit mx-auto my-24 flex flex-col lg:flex-row gap-12 px-4 lg:px-0">
      <div className="flex flex-col gap-8">
        <h2
          className={`${sfPro.className} text-[36px] md:text-[72px] leading-[110%]`}
        >
          Unlocking Digital Excellence
        </h2>
        <p className="text-natural-3 text-sm md:text-base">
          At Spine, we&apos;re on a mission to empower businesses with the
          digital tools and expertise they need to thrive in the ever-evolving
          online landscape.
        </p>
        <ul className="flex flex-col gap-4">
          {about.map(({ heading, text }) => (
            <li key={heading} className="flex gap-2">
              <Image src="./icons/point.svg" alt="-" width={22} height={22} />
              <p className="text-sm md:text-base">
                {heading}
                <span className="text-natural-3">{text}</span>
              </p>
            </li>
          ))}
        </ul>
        <div className="shrink-0">
          <Button label="About Us" />
        </div>
      </div>
      <div className="lg:shrink-0 overflow-hidden">
        <Image src="./images/bwink_edu.svg" alt="" width={467} height={467} />
      </div>
    </section>
  );
}
