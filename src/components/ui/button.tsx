'use client';

export default function Button({
  type = 'primary',
  label = '',
  onClick = () => {},
}) {
  return (
    <button
      onClick={onClick}
      className={`${
        type === 'primary'
          ? 'bg-primary border-primary'
          : `${type === 'outline'}`
          ? 'bg-transparent border-current'
          : 'bg-natural-black text-natural-white border-current'
      } font-bold border rounded-xl px-6 py-3`}
    >
      {label}
    </button>
  );
}
