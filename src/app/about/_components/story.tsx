import Button from '@/components/ui/button';
import Image from 'next/image';

export default function Story() {
  return (
    <section className="flex flex-col md:flex-row gap-[60px] lg:gap-[100px] max-w-[970px] mx-auto max-md:text-center pt-[40px] md:pt-[80px] pb-[60px] md:pb-[160px] max-md:px-6">
      <div className="max-w-[470px]">
        <h2 className="headline-h5 font-semibold md:headline-h2 md:font-bold pb-5">
          Our Story
        </h2>
        <p className="text-[14px] md:text-base leading-[140%] pb-10">
          Our journey began with a vision to Problem finding and solution. Since
          then, we&apos;ve grown steadily, earning a reputation for excellence
          in the DigitalBoostPro sector. Over the years, we&apos;ve worked with
          numerous clients, helping them achieve has been to help people solve
          their problems.
        </p>
        <Button type="primary" label="Learn More →" />
      </div>
      <div className="max-w-[400px] bg-accent rounded-xl px-10 py-4">
        <Image
          src="./images/24070848_bwink_edu_07_single_2 1.svg"
          alt=""
          width={321}
          height={321}
        />
      </div>
    </section>
  );
}
