import { logos } from '@/data/data';
import Divider from '../ui/divider';
import Image from 'next/image';

export default function TrustedBrands() {
  return (
    <section className="max-w-screen-fit mx-auto py-8">
      <Divider />
      <ul className="flex gap-12 justify-between overflow-x-auto w-full">
        {logos.map(({ name, src }) => (
          <li key={name} className="min-w-[76px] overflow-x-auto">
            <Image src={src} alt={name} height={40} width={160} />
          </li>
        ))}
      </ul>
      <Divider />
    </section>
  );
}
