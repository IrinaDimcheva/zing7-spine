import Image from 'next/image';
import MessageForm from './message-form';
import { ContactType } from '@/types/types';

export default function Contact({
  name,
  address,
  phone,
  email,
  placeholders,
}: ContactType) {
  return (
    <section className="max-w-screen-fit mx-auto py-[60px] lg:pt-20 lg:pb-[160px] px-6 lg:px-0 flex max-lg:flex-col gap-20">
      <div className="text-center lg:text-left max-w-[530px]">
        <div>
          <h3 className="headline-h5 lg:headline-h3 pb-5 lg:pb-8">
            Get in Touch with {name}
          </h3>
          <p className="text-natural-3 leading-[140%] pb-10 lg:pb-[60px]">
            Whether you have questions about our services, want to discuss a
            potential collaboration, or just feel like saying hello, we&apos;d
            love to hear from you.
          </p>
        </div>
        <div className="flex flex-col max-lg:items-center gap-4 lg:gap-5">
          <div className="flex gap-4">
            <div className="w-6 lg:w-8">
              <Image src="./icons/location.svg" alt="" width={32} height={32} />
            </div>
            <p className="lg:text-[20px]">{address}</p>
          </div>
          <div className="flex gap-4">
            <div className="w-6 lg:w-8">
              <Image src="./icons/tel.svg" alt="" width={32} height={32} />
            </div>
            <p className="lg:text-[20px]">{phone}</p>
          </div>
          <div className="flex gap-4">
            <div className="w-6 lg:w-8">
              <Image src="./icons/envelope.svg" alt="" width={32} height={32} />
            </div>
            <p className="lg:text-[20px]">{email}</p>
          </div>
        </div>
      </div>
      <div className="max-w-[530px]">
        <MessageForm {...placeholders} />
      </div>
    </section>
  );
}
