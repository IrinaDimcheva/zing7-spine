import About from '@/components/layout/about';
import Header from '@/components/layout/header';
import TrustedBrands from '@/components/layout/trusted-brands';

export default function Home() {
  return (
    <main>
      <Header />
      <TrustedBrands />
      <About />
    </main>
  );
}
