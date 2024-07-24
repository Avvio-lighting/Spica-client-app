'use server';
import { cookies } from 'next/headers';
import { subscribe } from '@/lib/api/users';
import subscribeSchema from '@/util/validation/subscribeSchema';

export default async function subscribeAction(prevState, formData) {
  const cookieOptions = {
    expires: new Date(Date.now() + 5000),
    path: '/',
    httpOnly: false,
  };
  const validatedFields = subscribeSchema.safeParse({
    enteredOTP: formData.get('enteredOTP'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  const token = cookies().get('token').value;
  try {
    await subscribe({ ...validatedFields.data, token });
    cookies().set('alert', 'You are subscribed successfully', cookieOptions);
    cookies().delete('name');
    cookies().delete('email');
    cookies().delete('token');
    return { success: true };
  } catch (error) {
    return {
      errors: {
        api: error.message,
      },
    };
  }
}
