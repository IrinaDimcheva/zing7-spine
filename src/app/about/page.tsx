import Header from '@/components/layout/header';
import TrustedBrands from '@/components/layout/trusted-brands';
import Story from './_components/story';

export default function About() {
  return (
    <>
      <Header />
      <main>
        <TrustedBrands />
        <Story />
      </main>
    </>
  );
}
