import Image from 'next/image';
import { about } from '@/data/data';
import Button from '../ui/button';

export default function About() {
  return (
    <section className="max-w-screen-fit mx-auto my-16 md:my-24 flex flex-col lg:flex-row items-center gap-12 px-8 xl:px-0">
      <div className="flex flex-col gap-8">
        <h2 className={`headline-h5 md:headline-h2`}>
          Unlocking Digital Excellence
        </h2>
        <p className="text-natural-3 text-sm md:text-base leading-[140%]">
          At Spine, we&apos;re on a mission to empower businesses with the
          digital tools and expertise they need to thrive in the ever-evolving
          online landscape.
        </p>
        <ul className="flex flex-col gap-4">
          {about.map(({ heading, text }) => (
            <li key={heading} className="flex gap-2">
              <Image src="./icons/point.svg" alt="-" width={22} height={22} />
              <p className="text-natural-black font-extrabold text-sm md:text-base leading-[140%]">
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
        <Image
          src="./images/24070840_bwink_edu_05_single_11 1.svg"
          alt="education"
          width={467}
          height={467}
        />
      </div>
      {/* <div className="lg:shrink-0 overflow-hidden relative pt-4">
        <Image src="./images/bwink_edu.svg" alt="" width={467} height={467} />
        <div className="absolute bottom-12 left-10 -z-10">
          <Image src="./images/path22.svg" alt="" width={380} height={400} />
        </div>
      </div> */}
    </section>
  );
}
