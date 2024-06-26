'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import QuestionItem from './question-item';
import { homeFAQ, servicesFAQ } from '@/data/data';

// export type FAQ = {
//   id: number;
//   question: string;
//   answer: string;
// }[];

export default function Questions() {
  const [active, setActive] = useState(-1);
  const pathname = usePathname();

  const faq = pathname === '/' ? homeFAQ : servicesFAQ;

  function handleToggle(index: number) {
    setActive((prevIndex) => (prevIndex === index ? -1 : index));
  }

  return (
    <section className="max-w-[970px] mx-auto pt-[60px] md:pt-[160px] pb-10 md:pb-20 px-6 lg:px-0">
      <div className="pb-5">
        <div className="relative">
          <h2 className="headline-h5 md:headline-h2">
            Got Questions? We&apos;ve Got Answers!
          </h2>
          <span className="absolute max-md:top-[16px] left-24 md:bottom-3 md:left-12 w-[120px] md:w-full">
            <Image src="./images/Group.svg" alt="" width={210} height={30} />
          </span>
        </div>
        <p className="flex items-center gap-2 py-6">
          <span>
            <Image
              src="./icons/fi-rr-billiard.svg"
              alt=""
              width={16}
              height={16}
            />
          </span>
          Check out the services
        </p>
      </div>
      <div>
        <ul className="flex flex-col gap-5">
          {faq.map(({ id, question, answer }, i) => (
            <QuestionItem
              key={id}
              question={question}
              answer={answer}
              isOpen={active === i}
              onClick={() => handleToggle(i)}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
