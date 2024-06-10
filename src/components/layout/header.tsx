'use client';

import { usePathname } from 'next/navigation';
import Navbar from './navbar';
import HeaderHome from '../../app/home/_components/header-home';
import HeaderAbout from '@/app/about/_components/header-about';
import HeaderServices from '@/app/services/_components/header-services';

export default function Header() {
  const pathname = usePathname();

  return (
    <header
      className={`${
        pathname.endsWith('/')
          ? 'bg-gradient-to-b from-primary/60 from-0%  via-primary/40 via-30% to-transparent to-70% overflow-hidden'
          : 'bg-white'
      }`}
    >
      <div className="max-w-screen-fit mx-auto px-6 xl:px-0">
        <Navbar />
        {pathname === '/' && <HeaderHome />}
        {pathname === '/about' && <HeaderAbout />}
        {pathname === '/services' && <HeaderServices />}
      </div>
    </header>
  );
}
