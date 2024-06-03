'use client';

import Image from 'next/image';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import Button from '../ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';

const schema = z.object({
  firstName: z.string().min(1, 'First Name is required'),
  lastName: z.string().min(1, 'Last Name is required'),
  email: z.string().email(),
  phone: z.string().min(1, 'Enter your phone').startsWith('+359'),
  message: z.string().min(1, 'Message cannot be empty').max(1000),
});

type FormFields = z.infer<typeof schema>;

export default function MessageForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    // console.log(data);
    reset();
    toast.success('Message sent!');
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name" className="flex gap-2 pb-3">
          Name{' '}
          <sup>
            <Image src="./icons/⁕.svg" alt="*" width={13} height={13} />
          </sup>
        </label>
        <div className="grid grid-cols-2 gap-5">
          <div>
            <input
              {...register('firstName')}
              type="text"
              placeholder="First Name"
              className="bg-accent rounded-xl px-[18px] py-[14px]"
            />
            {errors.firstName && (
              <div className="text-red-500 text-xs">
                {errors.firstName.message}
              </div>
            )}
          </div>
          <div>
            <input
              {...register('lastName')}
              type="text"
              placeholder="Last Name"
              className="bg-accent rounded-xl px-[18px] py-[14px]"
            />
            {errors.lastName && (
              <div className="text-red-500 text-xs">
                {errors.lastName.message}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div className="flex flex-col">
          <label htmlFor="email" className="flex gap-2 pb-3">
            Email{' '}
            <sup>
              <Image src="./icons/⁕.svg" alt="*" width={13} height={13} />
            </sup>
          </label>
          <input
            {...register('email')}
            type="email"
            placeholder="company@gmail.com"
            className="bg-accent rounded-xl px-[18px] py-[14px]"
          />
          {errors.email && (
            <div className="text-red-500 text-xs">{errors.email.message}</div>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="phone" className="flex gap-2 pb-3">
            Phone{' '}
            <sup>
              <Image src="./icons/⁕.svg" alt="*" width={13} height={13} />
            </sup>
          </label>
          <input
            {...register('phone')}
            type="text"
            placeholder="+359 000 000 000"
            className="bg-accent rounded-xl px-[18px] py-[14px]"
          />
          {errors.phone && (
            <div className="text-red-500 text-xs">{errors.phone.message}</div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="message">Comment or Message</label>
        <textarea
          {...register('message')}
          name="message"
          className="bg-accent resize-none h-[190px] px-[24px] py-[14px] rounded-xl"
        ></textarea>
        {errors.message && (
          <div className="text-red-500 text-xs">{errors.message.message}</div>
        )}
      </div>
      <Button disabled={isSubmitting} label="Send Message" />
    </form>
  );
}
