import Header from '@/components/layout/header';
import TrustedBrands from '@/components/layout/trusted-brands';
import Solutions from './_components/solutions';
import Questions from '@/components/layout/questions';

export default function Services() {
  return (
    <>
      <Header />
      <main>
        <TrustedBrands />
        <Solutions />
        <Questions />
      </main>
    </>
  );
}
