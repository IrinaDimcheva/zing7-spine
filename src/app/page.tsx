import About from '@/app/home/_components/about';
import Questions from '@/components/layout/questions';
import Services from '@/components/layout/services';
import TrustedBrands from '@/components/layout/trusted-brands';
import Header from '@/components/layout/header';
import HomeContact from './home/_components/home-contact';

export default function Home() {
  return (
    <>
      <Header />
      <main className="font-bold">
        <TrustedBrands />
        <About />
        <Services />
        <Questions />
        <HomeContact />
      </main>
    </>
  );
}
