import Image from 'next/image';

type Question = {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
};

export default function QuestionItem({
  question,
  answer,
  isOpen,
  onClick,
}: Question) {
  return (
    <li className="flex flex-col gap-6">
      <div
        onClick={onClick}
        className={`flex justify-between items-center p-4 md:p-6 ${
          isOpen ? 'bg-primary' : 'bg-accent'
        } rounded-xl cursor-pointer`}
      >
        <p className="text-[14px] md:text-[24px] leading-[110%]">{question}</p>
        <span className={`shrink-0 ${!isOpen && 'rotate-180'}`}>
          <Image
            src="./icons/fi-rr-caret-up.svg"
            alt=""
            width={24}
            height={24}
          />
        </span>
      </div>
      {isOpen && (
        <p className="text-[12px] md:text-[20px] leading-[140%] text-natural-3 bg-accent p-4 md:p-6 rounded-xl">
          {answer}
        </p>
      )}
    </li>
  );
}
