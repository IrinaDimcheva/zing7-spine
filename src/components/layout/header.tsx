import { sfPro } from '@/app/layout';
import Navbar from './navbar';
import Button from '../ui/button';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-gradient-to-b from-primary from-0%  via-primary/30 via-40% to-transparent to-90%">
      <div className="px-8">
        <div className="max-w-screen-fit mx-auto">
          <Navbar />
          <section className="py-24">
            <div className="w-[672px] mx-auto text-center">
              <div className="relative">
                <h1
                  className={`${sfPro.className} text-[88px] font-bold leading-[110%]`}
                >
                  We love to find solutions
                </h1>
                <span className="absolute bottom-5 right-[37%]">
                  <Image
                    src="./images/Group.svg"
                    alt=""
                    width={267}
                    height={37}
                  />
                </span>
              </div>
              <p className="text-natural-3 font-bold py-8">
                Elevate your online presence with Spine cutting-edge solutions.
                Discover limitless possibilities for your digital agency&apos;s
                success.
              </p>
              <Button label="Start for free" />
            </div>
            <div className="flex lg:items-center gap-1 -mt-24">
              <div className="max-width-[374px] p-4">
                <Image
                  src="./images/Digital_Marketing.svg"
                  alt="Digital marketing"
                  width={374}
                  height={374}
                />
              </div>
              <div className="w-[200px] lg:w-[463px] lg:h-[93px] max-lg:-rotate-45">
                <Image
                  src="./images/Vector21.svg"
                  alt="twisted arrow"
                  width={463}
                  height={93}
                />
              </div>
              <div className="max-width-[374px]">
                <Image
                  src="./images/g10.svg"
                  alt="blink signal"
                  width={374}
                  height={374}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </header>
  );
}
