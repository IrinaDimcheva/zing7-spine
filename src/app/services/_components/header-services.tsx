import Image from 'next/image';

export default function HeaderServices() {
  return (
    <section className="py-[40px] md:py-[80px]">
      <div className="w-[918px] max-w-[90vw] mx-auto text-center px-4">
        <div className="relative">
          <h1 className="headline-h4 md:headline-h1">
            Our services make your Business easier
          </h1>
          <span className="absolute bottom-16 md:bottom-4 w-[149px] right-[32%] md:w-[240px] md:right-[40%]">
            <Image src="./images/Group.svg" alt="" width={240} height={28} />
          </span>
        </div>
        <p className="max-w-[738px] mx-auto text-natural-3 text-sm md:text-base leading-[140%] pt-8">
          At DigitalBoostPro, we&apos;re committed to delivering exceptional
          Digital Product solutions tailored to meet your unique needs. Our
          diverse range of services is designed to problems solve, optimize
          processes, etc.
        </p>
      </div>
    </section>
  );
}
