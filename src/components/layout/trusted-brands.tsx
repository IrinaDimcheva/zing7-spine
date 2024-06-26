'use client';

import React from 'react';
import Slider from 'react-slick';
import { logos } from '@/data/data';
import Divider from '../ui/divider';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function TrustedBrands() {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 4.78,
    slidesToScroll: 0,
    autoplay: true,
    speed: 2000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <section className="max-w-screen-fit mx-auto py-6 md:py-[80px] overflow-hidden">
      <Divider />
      <div>
        <Slider {...settings}>
          {logos.map(({ name, src }) => (
            <div key={name} className="w-[76px] lg:w-[180px] overflow-hidden">
              <Image src={src} alt={name} height={40} width={180} />
            </div>
          ))}
        </Slider>
      </div>
      <Divider />
    </section>
  );
}
