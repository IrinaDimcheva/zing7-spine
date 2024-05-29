'use client';

import { navLinks } from '@/data/data';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../ui/button';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <div className="hidden md:flex justify-between items-center font-bold py-8">
        <Link href="#" onClick={handleClose}>
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
      <div>
        <div className="md:hidden flex justify-between items-center font-bold py-8 pb-24">
          <Link href="#" onClick={handleClose}>
            <Image
              src="./images/logo.svg"
              alt="Spine"
              width={143}
              height={28}
            />
          </Link>
          <button onClick={() => setOpen(!open)}>
            {!open ? (
              <Image
                src="./icons/Frame.svg"
                alt="menu"
                width={36}
                height={36}
              />
            ) : (
              <Image
                src="./icons/close.svg"
                alt="close"
                width={36}
                height={36}
              />
            )}
          </button>
        </div>
        {open && (
          <div className="flex flex-col gap-16 justify-start items-center w-full h-screen overflow-y-none pb-24">
            <ul className="flex flex-col justify-between gap-16">
              {navLinks.map(({ href, name }) => (
                <li key={href}>
                  <Link onClick={handleClose} href={href}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
            <Button type="outline" label="Sign Up" onClick={handleClose} />
          </div>
        )}
      </div>
    </div>
  );
}
