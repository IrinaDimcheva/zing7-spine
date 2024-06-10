import Header from '@/components/layout/header';
import TrustedBrands from '@/components/layout/trusted-brands';
import Story from './_components/story';
import AboutSection from './_components/about';
import AboutContact from './_components/about-contact';

export default function About() {
  return (
    <>
      <Header />
      <main>
        <TrustedBrands />
        <Story />
        <AboutSection />
        <AboutContact />
      </main>
    </>
  );
}
