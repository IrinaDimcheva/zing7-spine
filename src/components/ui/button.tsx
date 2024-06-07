'use client';

export default function Button({
  type = 'primary',
  label = '',
  disabled = false,
  onClick = () => {},
}) {
  return (
    <button
      onClick={onClick}
      className={`${
        (type === 'primary' &&
          'bg-primary border-primary hover:bg-natural-white hover:border-natural-black') ||
        (type === 'outline' &&
          'bg-transparent border-current hover:border-primary hover:bg-primary') ||
        (type === 'fill' &&
          'bg-natural-black text-natural-white border-current hover:bg-natural-white hover:text-natural-black')
      } font-bold border rounded-xl px-6 py-3`}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
