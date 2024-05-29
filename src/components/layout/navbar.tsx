import { navLinks } from '@/data/data';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../ui/button';

export default function Navbar() {
  return (
    <div className="flex justify-between items-center font-bold py-8">
      <Link href="#">
        <Image src="./images/logo.svg" alt="Spine" width={143} height={28} />
      </Link>
      <nav>
        <ul className="flex justify-between gap-16">
          {navLinks.map(({ href, name }) => (
            <li key={href}>
              <Link href={href}>{name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Button type="outline" label="Sign Up" />
    </div>
  );
}
