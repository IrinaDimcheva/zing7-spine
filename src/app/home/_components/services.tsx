import Image from 'next/image';
import Button from '../../../components/ui/button';
import Slider from './slider';
import { services } from '@/data/data';
import SliderList from './slider';

export default function Services() {
  return (
    <section id="services" className="bg-[url('/images/services-bg.svg')]">
      <div className="max-w-screen-fit mx-auto px-6 xl:px-0 py-[60px] md:pt-[120px] md:pb-[80px]">
        <div className="flex flex-col lg:flex-row justify-between gap-4 pb-[60px] md:pb-[80px]">
          <div className="relative">
            <h2 className={`headline-h5 md:headline-h2 max-w-[652px]`}>
              Elevate Your Digital Presence
            </h2>
            <span className="absolute bottom-2 md:bottom-8 w-[110px]  md:w-[240px] ">
              <Image src="./images/Group.svg" alt="" width={240} height={28} />
            </span>
          </div>
          <div className="max-w-[458px]">
            <p className="text-natural-3 leading-[140%] text-[12px] md:text-base mb-8">
              Crafting digital masterpieces tailored to your brand, we turn
              concepts into visually stunning, user-friendly websites. Elevate
              your online identity with our cutting-edge web design and
              development services.
            </p>
            <Button type="outline" label="See All" />
          </div>
        </div>

        <SliderList services={services} />
      </div>
    </section>
  );
}
