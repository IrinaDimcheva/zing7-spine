'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import { z } from 'zod';
import Button from '../ui/button';

const schema = z.object({
  email: z.string().email(),
});

type FormFields = z.infer<typeof schema>;

export default function FooterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
    defaultValues: { email: '' },
  });

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
    reset();
    toast.success('Subscription sent!');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('email')}
        type="text"
        placeholder="Enter email address"
        className="border border-natural-8 outline-none text-natural-5 block p-3 my-5 bg-transparent"
      />
      {errors.email && (
        <div className="text-red-500 text-xs">{errors.email.message}</div>
      )}
      <div className="text-natural-black max-md:flex max-md:justify-center">
        <Button label="Get Start" />
      </div>
    </form>
  );
}
