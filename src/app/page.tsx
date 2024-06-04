import About from '@/components/layout/about';
import Questions from '@/components/layout/questions';
import Services from '@/components/layout/services';
import TrustedBrands from '@/components/layout/trusted-brands';
import Contact from '@/components/layout/contact';

export default function Home() {
  return (
    <main>
      <TrustedBrands />
      <About />
      <Services />
      <Questions />
      <Contact />
    </main>
  );
}
