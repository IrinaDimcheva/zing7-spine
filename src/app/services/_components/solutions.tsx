import { solutions } from '@/data/data';
import SolutionsCard from './solutions-card';

export default function Solutions() {
  return (
    <section className="bg-[url('/images/services-bg.svg')] py-[60px] md:py-[120px]">
      <div className="max-w-screen-fit mx-auto px-6 xl:px-0">
        <h2 className="max-w-[970px] mx-auto headline-h5 font-semibold md:headline-h2 md:font-bold text-center pb-[60px]">
          We are creating a Crafting Optimal Solutions
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
          {solutions.map((item) => (
            <SolutionsCard key={item.title} {...item} />
          ))}
        </ul>
      </div>
    </section>
  );
}
