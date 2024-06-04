import Image from 'next/image';
import { footerLinks, socials } from '@/data/data';
import Link from 'next/link';
import FooterForm from './footer-form';

export default function Footer() {
  return (
    <footer className="bg-natural-black text-natural-white">
      <div className="max-w-screen-fit mx-auto pt-20 px-6 xl:px-0">
        <div className="flex flex-wrap gap-[80px] pb-[60px] justify-between max-md:justify-center max-md:items-center">
          <div className="max-w-[369px] flex flex-col gap-[30px] max-md:items-center">
            <Link href="/">
              <Image
                src="./images/logo-footer.svg"
                alt="Spine"
                width={200}
                height={40}
              />
            </Link>
            <p className="text-natural-6 text-[14px] leading-[140%] max-md:text-center">
              Spine is the ultimate boost for your online presence. We&apos;re
              here to supercharge your digital agency&apos;s journey.
            </p>
            <ul className="flex gap-4">
              {socials.map((item) => (
                <li key={item.name}>
                  <Link href={item.href}>
                    <Image
                      src={item.iconUrl}
                      alt={item.name}
                      width={20}
                      height={20}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col max-md:items-center md:flex-row flex-wrap gap-[60px] justify-between">
            {footerLinks.map((item) => (
              <ul key={item.title} className="flex flex-col gap-4 w-[146px]">
                <h6 className="text-[20px] leading-[140%]">{item.title}</h6>
                {item.links.map((link) => (
                  <li key={link.name} className="text-natural-6 leading-[140%]">
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            ))}
            <div className="flex flex-col items-center">
              <h6>Join our newsletter</h6>
              <FooterForm />
            </div>
          </div>
        </div>
        <div>
          <div className="h-[1px] w-full bg-natural-white"></div>
          <p className="py-10 w-full text-center">
            @2024 Spine ALL RIGHTS REVERSED
          </p>
        </div>
      </div>
    </footer>
  );
}
