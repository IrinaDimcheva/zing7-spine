import Image from 'next/image';

type Solution = {
  icon: string;
  title: string;
  description: string;
};

export default function SolutionsCard({ icon, title, description }: Solution) {
  return (
    <li className="bg-natural-white px-[40px] py-[50px] rounded-2xl">
      <div className="pb-10">
        <Image src={icon} alt="" width={70} height={70} />
      </div>
      <h6 className="headline-h6 pb-4">{title}</h6>
      <p className="text-natural-3">{description}</p>
    </li>
  );
}
