import About from '@/components/layout/about';
import Questions from '@/components/layout/questions';
import Header from '@/components/layout/header';
import Services from '@/components/layout/services';
import TrustedBrands from '@/components/layout/trusted-brands';

export default function Home() {
  return (
    <main>
      <Header />
      <TrustedBrands />
      <About />
      <Services />
      <Questions />
    </main>
  );
}
