import Image from 'next/image';
import Button from '../ui/button';

export default function CallToAction() {
  return (
    <section className="max-w-screen-fit mx-auto py-[60px] md:pt-20 md:pb-[160px] px-6 md:px-0 flex max-md:flex-col gap-20">
      <div className="text-center md:text-left">
        <div>
          <h3 className="headline-h5 md:headline-h3 pb-5 md:pb-8">
            Get in Touch with Spine
          </h3>
          <p className="text-natural-3 leading-[140%] pb-10 md:pb-[60px]">
            Whether you have questions about our services, want to discuss a
            potential collaboration, or just feel like saying hello, we&apos;d
            love to hear from you.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 md:gap-5">
          <div className="flex gap-4">
            <div className="w-6 md:w-8">
              <Image src="./icons/location.svg" alt="" width={32} height={32} />
            </div>
            <p className="md:text-[20px]">Plovdiv, K. Riacho 95, Bulgaria</p>
          </div>
          <div className="flex gap-4">
            <div className="w-6 md:w-8">
              <Image src="./icons/tel.svg" alt="" width={32} height={32} />
            </div>
            <p className="md:text-[20px]">+359 884 77 77 777</p>
          </div>
          <div className="flex gap-4">
            <div className="w-6 md:w-8">
              <Image src="./icons/envelope.svg" alt="" width={32} height={32} />
            </div>
            <p className="md:text-[20px]">j.borisov@spine.com</p>
          </div>
        </div>
      </div>
      <div>
        <form className="flex flex-col gap-5">
          <div>
            <label htmlFor="name" className="flex gap-2 pb-3">
              Name{' '}
              <sup>
                <Image src="./icons/⁕.svg" alt="*" width={13} height={13} />
              </sup>
            </label>
            <div className="grid grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="First Name"
                className="bg-accent rounded-xl px-[18px] py-[14px]"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="bg-accent rounded-xl px-[18px] py-[14px]"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col">
              <label htmlFor="email" className="flex gap-2 pb-3">
                Email{' '}
                <sup>
                  <Image src="./icons/⁕.svg" alt="*" width={13} height={13} />
                </sup>
              </label>
              <input
                type="email"
                placeholder="company@gmail.com"
                className="bg-accent rounded-xl px-[18px] py-[14px]"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone" className="flex gap-2 pb-3">
                Phone{' '}
                <sup>
                  <Image src="./icons/⁕.svg" alt="*" width={13} height={13} />
                </sup>
              </label>
              <input
                type="text"
                placeholder="+359 000 000 000"
                className="bg-accent rounded-xl px-[18px] py-[14px]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="message">Comment or Message</label>
            <textarea
              name="message"
              className="bg-accent resize-none h-[190px] px-[24px] py-[14px] rounded-xl"
            ></textarea>
          </div>
          <Button label="Send Message" />
        </form>
      </div>
    </section>
  );
}
