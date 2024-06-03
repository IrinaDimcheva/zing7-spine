'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ServicesData } from '@/types/types';
import { totalSlides } from '@/lib/utils';
import Button from '../ui/button';

export default function Slider({ services }: ServicesData) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = totalSlides(services.length);

  function handleNext() {
    currentIndex < services.length - 1
      ? setCurrentIndex((currentIndex) => currentIndex + 1)
      : currentIndex;
  }

  function handlePrevious() {
    currentIndex > 0 ? setCurrentIndex((currentIndex) => currentIndex - 1) : 0;
  }

  return (
    <section className="overflow-hidden">
      <ul
        className={`flex transition-transform ease-in-out duration-500 translate-x-${
          currentIndex * 100
        }% pb-10`}
      >
        {services.map((item, index) => (
          <li
            key={item.id}
            className={`${
              currentIndex === index
                ? 'block w-full transition-all duration-500 ease-in-out'
                : 'hidden'
            }`}
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-[60px]">
              <div className="shrink-0 bg-natural-white rounded-2xl p-[23px]">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={361}
                  height={361}
                />
              </div>
              <div className="max-w-[703px]">
                <h3 className={`headline-h5 md:headline-h3 pb-6`}>
                  {item.title}
                </h3>
                <div>
                  <p className="text-natural-3 text-[12px] md:text-base leading-[140%] mb-8">
                    {item.description}
                  </p>
                  <div className="bg-natural-black/10 w-full h-[1px] flex justify-between items-center my-8"></div>
                  <Button type="fill" label="See All →" />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex gap-8 items-center justify-between">
        <div className="flex gap-2 md:gap-4">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`${
                i === currentIndex
                  ? 'w-[34px] bg-natural-black'
                  : 'w-[10px] bg-natural-5'
              } h-[10px] rounded-full`}
            />
          ))}
        </div>
        <div className="bg-natural-black/10 min-w-8 lg:w-[70%] h-[1px] flex justify-between items-center my-8"></div>
        <div className="flex gap-4 overflow-visible">
          <button
            onClick={handlePrevious}
            className={`${
              currentIndex === 0 && 'pointer-events-none'
            } shrink-0`}
          >
            {currentIndex === 0 ? (
              <Image src="./icons/left.svg" alt="prev" width={44} height={44} />
            ) : (
              <Image
                src="./icons/right.svg"
                alt="prev"
                width={44}
                height={44}
                className="rotate-180"
              />
            )}
          </button>
          <button
            onClick={handleNext}
            className={`${
              currentIndex === slides.length - 1 && 'pointer-events-none'
            } shrink-0`}
          >
            {currentIndex < slides.length - 1 ? (
              <Image
                src="./icons/right.svg"
                alt="prev"
                width={44}
                height={44}
              />
            ) : (
              <Image
                src="./icons/left.svg"
                alt="prev"
                width={44}
                height={44}
                className="rotate-180"
              />
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
