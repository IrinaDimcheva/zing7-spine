import Image from 'next/image';

export default function HeaderAbout() {
  return (
    <section className="py-[40px] md:py-[80px]">
      <div className="w-[672px] max-w-[90vw] mx-auto text-center px-4">
        <div className="relative">
          <h1 className="headline-h4 md:headline-h1">About Us</h1>
          <span className="absolute bottom-3 w-[149px] right-[35%] md:w-[240px] md:right-[32%]">
            <Image src="./images/Group.svg" alt="" width={240} height={28} />
          </span>
        </div>
        <p className="text-natural-3 text-sm md:text-base leading-[140%] pt-8">
          At DigitalBoostPro, we&apos;re not just a digital marketing agency;
          we&apos;re your strategic partner in navigating the dynamic landscape
          of online success.
        </p>
      </div>
    </section>
  );
}
